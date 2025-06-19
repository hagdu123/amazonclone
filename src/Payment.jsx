import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';
import { doc, setDoc, collection } from 'firebase/firestore';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(""); // empty string, not true

  const navigate = useNavigate();

  useEffect(() => {
    const getClientSecret = async () => {
      const total = getBasketTotal(basket);

      if (total === 0) {
        setClientSecret("");
        return;
      }

      try {
        const response = await axios({
          method: 'post',
          url: `/payments/create?total=${total * 100}`,
        });
        setClientSecret(response.data.clientSecret);
      } catch (err) {
        console.error("Error getting client secret:", err);
      }
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
  .confirmCardPayment(clientSecret, {
    payment_method: {
      card: elements.getElement(CardElement),
    },
  })
  .catch((err) => {
    console.error("Stripe error:", err);
    setError("Stripe payment failed");
    setProcessing(false);
    return;
  });

if (!payload || !payload.paymentIntent) return;


    const paymentIntent = payload.paymentIntent;

    if (!paymentIntent) {
      setError("Payment failed. Please try again.");
      setProcessing(false);
      return;
    }

    if (!user?.uid) {
      setError("User not authenticated. Please log in again.");
      setProcessing(false);
      return;
    }

    // Optional: sanitize basket before saving
    const cleanBasket = basket.map(item => ({
      id: item.id || '',
      title: item.title || '',
      image: item.image || '',
      price: item.price || 0,
      rating: item.rating || 0
    }));

    await setDoc(
      doc(collection(db, "users", user.uid, "orders"), paymentIntent.id),
      {
        basket: cleanBasket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      }
    );

    setSucceeded(true);
    setError(null);
    setProcessing(false);

    dispatch({
      type: 'EMPTY_BASKET',
    });

    navigate('/orders');
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h1>Delivery Address</h1>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>gtyffycvjg</p>
            <p>ytyctyjt</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item, index) => (
              <CheckoutProduct
                key={`${item.id}-${index}`}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit} autoComplete="off">
              <CardElement
                onChange={handleChange}
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#424770',
                      '::placeholder': {
                        color: '#aab7c4',
                      },
                    },
                    invalid: {
                      color: '#9e2146',
                    },
                  },
                }}
              />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? "Processing" : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

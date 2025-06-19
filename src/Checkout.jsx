import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/I/61AnASun+qL._SX3000_.jpg"
          alt="checkout ad"
        />

        <div>
          <h2 className="checkout__title">Shopping Basket</h2>

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

      <div className="checkout__right">
        <Subtotal />
        <h2>Subtotal</h2>
      </div>
    </div>
  );
}

export default Checkout;

import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';

function Order({ order }) {
  return (
    <div className='order'>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <p className='order__id'>
        <small>{order.id}</small>
      </p>

      {order.data.basket?.map((item, index) => (
        <CheckoutProduct
          key={`${item.id}-${index}`}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton={true} // ✅ Set explicitly
        />
      ))}
    </div>
  );
}

export default Order;

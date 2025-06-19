import React, { useEffect, useState } from 'react';
import './Orders.css';
import { useStateValue } from './StateProvider';
import { db } from './firebase';
import { collection, doc, onSnapshot, query, orderBy } from 'firebase/firestore'; // Import Firestore functions
import Order from './Order';

function Orders() {
  const [orders, setOrders] = useState([]); // Fixed state hook
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      // Firestore query to fetch orders
      const ordersRef = collection(doc(db, 'users', user?.uid), 'orders'); 
      const q = query(ordersRef, orderBy('created', 'desc'));

      // Listen to real-time updates from Firestore
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

      return () => unsubscribe(); // Cleanup the listener when component unmounts
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h2>Orders</h2>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;

import React from 'react';
// import { useCart } from './context/CartContext';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Checkout = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price);
      const itemQuantity = parseInt(item.quantity, 10);
  
      console.log('Item:', item);
      console.log('Item Price:', itemPrice);
      console.log('Item Quantity:', itemQuantity);
  
      if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
        total += itemPrice * itemQuantity;
      }
  
      return total;
    }, 0).toFixed(2);
  };
  
  

  return (
    <>
      <Navbar />
      <div className="checkout-container">
        <h2>Checkout</h2>
        {cartItems.length === 0 ? (
          <p className="empty">Your Cart is Empty</p>
        ) : (
          <div>
            <table className="checkout-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.product}</td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="total-cost">Total Cost: ${calculateTotalCost()}</div>
            <button className="place-order-btn" onClick={() => navigate('/placeorder')}>
              Place Order
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;

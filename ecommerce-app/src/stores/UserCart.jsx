import React from 'react';
import { useState } from 'react';
import { useCart } from './context/CartContext';
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UserCart.css';

const UserCart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
 
 
  const navigate = useNavigate();

  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price);
      return isNaN(itemPrice) ? total : total + itemPrice;
    }, 0).toFixed(2);
  };

  const handlePlaceOrder = () => {
    // Here you can implement the logic to place the order
    // It could involve sending the order details to a server or any other appropriate action
    // For this example, we'll simply clear the cart
    setCart([]);
    setTotalCost(0);
    localStorage.removeItem('cart');
    toast.success("Order Placed Successfully", { position: toast.POSITION.TOP_CENTER, theme: "colored", autoClose: 3000 })
  
    
    
  };


  return (
    <>
      <Navbar />
      <div className="user-cart-container">
        <h2 className="y-cart">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty">Your Cart is Empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-section">
                <div className="cart-img">
                  <img src={item.image} alt="" />
                </div>
                <div className="cart-details">
                  <h3>{item.product}</h3>
                  <h2>{item.price}</h2>
                  <h3>{item.model}</h3>
                </div>
                <button className="removeBtn" onClick={() => removeFromCart(item)}>
                  Remove
                </button>
              </div>
            ))}
            <div className="order-summary">
              <h2>Order Summary</h2>
              <table className="order-summary-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className='order-data'>{item.product}</td>
                      <td className='order-data'>${item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="total-cost">Total Cost: ${calculateTotalCost()}</div>
              <button className="checkoutBtn" onClick={(handlePlaceOrder)}>
                Checkout
              </button>
            </div>
          </div>
        )}
          <ToastContainer />
      </div>
    </>
  );
};

export default UserCart;

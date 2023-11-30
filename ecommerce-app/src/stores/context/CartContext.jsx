import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    toast.success("Product added  Successfully", { position: toast.POSITION.TOP_CENTER, theme: "colored", autoClose: 3000 })
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((apple) => apple !== item));
    toast.error("Product Removed Successfully", { position: toast.POSITION.TOP_CENTER, theme: "colored", autoClose: 3000 })
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
      <ToastContainer />
    </CartContext.Provider>
    
  );
};

export const useCart = () => {
 
  return useContext(CartContext);
 

};
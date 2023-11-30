import React from "react";
import { Link } from "react-router-dom";


import { useCart } from "../context/CartContext";

const Navbar = () => {

  const {cartItems }= useCart()

  return (
    <div className="navbar-section">

      <div className="navSection">
      <Link to='/' className="custom-link">
  <div className="title">
    <h2>E-Commerce</h2>
   
  </div>
</Link>

       
      
          <Link to= '/cart'>
          <div className="cart">
         
          <i class="fa-solid fa-cart-plus"></i>
          <span style={{margin_right:"8px"}}>
            {cartItems.length}
          </span>
          </div>
          </Link>
      </div>
      <div className="subMenu d-flex justify-content-center">
        <ul>
          <Link to="/mobiles" className="custom-link ">
            <li>Mobiles</li>
          </Link>

          <Link to="/computers" className="custom-link">
            <li>Computers</li>
          </Link>

          <Link to="/watch" className="custom-link">
            <li>Watches</li>
          </Link>

          <Link to="/men" className="custom-link">
            <li>Mens Wear</li>
          </Link>

          <Link to="/woman" className="custom-link">
            <li>Woman Wear</li>
          </Link>

          <Link to="/furniture" className="custom-link">
            <li>Furniture</li>
          </Link>

          <Link to="/kitchen" className="custom-link">
            <li>Kitchen</li>
          </Link>

          <Link to="/fridge" className="custom-link">
            <li>Fridge</li>
          </Link>

          <Link to="/ac" className="custom-link">
            <li>AC</li>
          </Link>
        </ul>
      </div>
    </div >
  );
};

export default Navbar;
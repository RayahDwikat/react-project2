import React, { useContext } from 'react';
import { CartContext } from '../../hooks/CartContext'; 
import { useEffect } from 'react';
import cart from "../../styles/Cart.css";
import OrderSummary from './OrderSummary';
import {useState} from 'react';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); 
 
  useEffect(() => {
    console.log('Cart Updated:', cartItems); 
  }, [cartItems]);
  
  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <ul className='cart-menu'>
          <div className="cart-details-page">
          {cartItems.map((item) => (
            <lu key={item.id}>
              <div className="cart-container">
              <div className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
              
                <div className="cart-item-details">
                  <p>{item.title}</p>
                  <p>Quantity: {item.amount}</p>
            
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </div>
              <div className="cart-price">
              <p>Price: ${item.price * item.amount}</p>
              </div>
              </div>
            </lu>
          ))}
          </div>
        </ul>
      )}
      
      {/* <OrderSummary 
        totalPrice={totalPrice} 
        discount={discount}
        shippingCost={shippingCost}
        couponApplied={couponApplied}
        handleDiscount={handleDiscount}
        handleCoupon={handleCoupon}
        handleShipping={handleShipping}
        estimatedDelivery={estimatedDelivery}
      />    */}
    
       </div>
  );
};

export default Cart;
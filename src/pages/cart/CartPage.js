import React, { useState, useContext } from 'react';
import { CartContext } from '../../hooks/CartContext';
import Cart from "../cart/Cart";
import OrderSummary from "./OrderSummary";
import { useEffect } from 'react';
import cart from "../../styles/Cart.css";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [estimatedDelivery, setEstimatedDelivery] = useState(new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }));

  useEffect(() => {
    const totalprice = cartItems.reduce((acc, item) => acc + (item.price * item.amount), 0);
    setTotalPrice(totalprice);
  }, [cartItems]);

  const handleDiscount = () => {
    setDiscount(totalPrice * 0.1);
  };

  const handleCoupon = () => {
    setCouponApplied(true);
  };

  const handleShipping = (cost) => {
    setShippingCost(cost);
  };

  return (
    <>
      <div className="cart-main-page" style={{display:"flex"}}>
        <Cart 
          cartItems={cartItems} 
          removeFromCart={removeFromCart} 
        /> 
        <OrderSummary 
          totalPrice={totalPrice}
          discount={discount}
          shippingCost={shippingCost}
          couponApplied={couponApplied}
          handleDiscount={handleDiscount}
          handleCoupon={handleCoupon}
          handleShipping={handleShipping}
          estimatedDelivery={estimatedDelivery}
        />
      
      </div>
      <div className="discount">
        <div className="percent">%</div>
        10% Instant Discount with Federal Bank Debit Cards on a min spend of $150. TCA
      </div>
    </>
  );
};

export default CartPage;
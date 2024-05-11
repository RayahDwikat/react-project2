import React, { useContext } from 'react';
import { CartContext } from '../../hooks/CartContext';
import orderSummary from "../../styles/OrderSummary.css";
import { Link } from 'react-router-dom';

const OrderSummary = ({ 
  totalPrice, 
  discount, 
  shippingCost, 
  couponApplied, 
  handleDiscount, 
  handleCoupon, 
  handleShipping, 
  estimatedDelivery ,
  couponValue

}) => {
    const formattedTotalPrice = typeof totalPrice === 'number' ? totalPrice.toFixed(2) : '';
    const formattedDiscount = typeof discount === 'number' ? discount.toFixed(2) : '';
    const formattedShippingCost = typeof shippingCost === 'number' ? shippingCost.toFixed(2) : '';
  return (
    <div className="order-summary">
        <h2>Order Summary</h2>
      <p>Subtotal: ${formattedTotalPrice}</p>
      <p>Discount (10%): {formattedDiscount} {couponApplied ? '(Coupon Applied)' : ''}</p>
      <p>Shipping: ${formattedShippingCost}</p>
      <p>Coupon: ${couponApplied ? '0.00' : couponValue}</p>
      <p><b>Total: ${(totalPrice - discount + shippingCost).toFixed(2)}</b></p>
      <p>Estimated Delivery: {estimatedDelivery}</p>
      
    </div>
  );
};

export default OrderSummary;
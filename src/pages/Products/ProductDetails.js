import React from 'react';
import Details from "../../styles/Details.css";
import { NavLink } from 'react-router-dom';
import { IconButton } from '../../components/IconButton';
import RatingStar from '../../components/RatingStar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const ProductDetails = ({ product }) => {
  const [amount, setAmount] = useState(1);

  const add = () => {
    const newItem = { title: product.title, price: product.price };
    console.log('Product added to cart:', newItem);
  };
  const increaseAmount = (amount) => {
    setAmount(amount + 1);

  };
  const decreaseAmount = (amount) => {
    setAmount(amount - 1);
    if (amount <= 0) {
      setAmount(0);
    }
  };
  const addToCart = () => {
    const newItem = {
      title: product.title,
      price: product.price,
      amount,

    };
    console.log('Product added to cart:', newItem);

  };

  return (
    <div className="product-container">

      <div className="product-details">
        <h1 className="product-title">{product.title}</h1>
        <div className='price-rate'>
          <p className="product-price">$ {product.price}</p>
          <p className="product-rating">
            <RatingStar rating={product.rating && product.rating.rate} count={product.rating.count} color="#FFC41F" />
          </p>
        </div>
          <p className="product-description">{product.description}</p>
        <div className="add-to-cart-container">

          <button className='quantity-btn'>
            <span
              className='minus-icon'
              onClick={() => decreaseAmount(amount)}
            >
              -
            </span>
            <span className='quantity-number'>{amount}</span>
            <span
              className='plus-icon'
              onClick={() => increaseAmount(amount)}
            >
              +
            </span>
          </button>
          <NavLink to="/cart" className="addToCard" onClick={addToCart}>
            <div className="styledText">Add to Cart</div>
          </NavLink>

        </div>
        <div className='content'>Free 3-5 day shipping • Tool-free assembly • 30-day trial
      </div>
      <div className='product-icons'>
      <div className='wishlist'>
      <IconButton iconName="heart" className="heart-icon"/>
        <Link to="/wishlist" className="add-to-wishlist">
          Add to Wishlist
        </Link>
      </div>
      <div className='social-icons'>
        <IconButton iconName="logo-facebook"/>
        <IconButton iconName="logo-twitter"/>
        <IconButton iconName="logo-pinterest"/>
        <IconButton iconName="logo-instagram"/>
      </div>
      </div>
      </div>
      
    </div>
  );
};

export default ProductDetails;

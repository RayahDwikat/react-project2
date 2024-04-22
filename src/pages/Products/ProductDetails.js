import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;

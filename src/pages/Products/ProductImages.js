import React, { useState } from 'react';
import DetailsThumb from './DetailsThumb';

const ProductImages = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleTab = (index) => {
    setIndex(index);
  };

  return (
    <div className="product-images">
      <div className="big-img">
        <img src={images[index]} alt={`Product ${index + 1}`} />
      </div>
      <DetailsThumb images={images} tab={handleTab} selectedIndex={index} />
    </div>
  );
};

export default ProductImages;

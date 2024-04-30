import React from 'react';
import { IconButton } from "./IconButton";

const RatingStar = ({ rating, color, count }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<IconButton iconName="star" key={i} style={{ color: color }} />);
    } else {
      stars.push(<IconButton iconName="star-outline" key={i} style={{ color: color }} />);
    }
  }

  return <div className='full-rate'>
    <div className='start'>{stars} </div><div className='rating'>{rating}/5.0 </div> <div className='count'>({count})
    </div>
  </div>
};

export default RatingStar;

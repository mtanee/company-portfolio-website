// StarRating.js
import React, { useState } from 'react';

const StarRating = ({ initialRating, onRatingChange ,value}) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    onRatingChange(selectedRating);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
        //   onClick={() => handleStarClick(star)}
          className={`cursor-pointer text-2xl ${
            star <= value ? 'text-yellow-500' : 'text-gray-300'
          }`}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;

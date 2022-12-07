import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, sethover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              required
              value={ratingValue}
              style={{ display: "none" }}
              onClick={() => setRating(ratingValue)}
              className="form-radio"
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "e4e5e9"}
              size={60}
              onMouseEnter={() => sethover(ratingValue)}
              onMouseOut={() => sethover(null)}
            />
            ;
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;

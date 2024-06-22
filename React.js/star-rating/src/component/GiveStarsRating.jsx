/* eslint-disable no-unused-vars */
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { useState } from "react";

const GiveStarsRating = () => {
  const [starCount, setStarCount] = useState(0);
  const [hoverStarCount, setHoverStarCount] = useState(0);

  return (
    <div>
      {[...Array(5)].map((elem, index) => {
        return (
          <span
            key={index}
            onMouseOver={() => {
              setHoverStarCount(index + 1);
            }}
            onMouseOut={() => {
              setHoverStarCount(0);
            }}
            onClick={() => {
              setStarCount(index + 1);
            }}
          >
            {index + 1 <= starCount || index + 1 <= hoverStarCount ? (
              <FaStar />
            ) : (
              <AiOutlineStar />
            )}
          </span>
        );
      })}
      <p>Stars count: {starCount}</p>
    </div>
  );
};

export default GiveStarsRating;

/* eslint-disable no-unused-vars */
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { useState } from "react";

const GiveStarsRating = () => {
  const [starCount, setStarCount] = useState(0);
  return (
    <div>
      {[...Array(5)].map((elem, index) => {
        return (
          <span
            key={index}
            onClick={() => {
              setStarCount(index + 1);
            }}
            onMouseOver={() => {
              setStarCount(index + 1);
            }}
            onMouseOut={() => {
              setStarCount(0);
            }}
          >
            {index + 1 <= starCount ? <FaStar /> : <AiOutlineStar />}
          </span>
        );
      })}
      <p>Stars count: {starCount}</p>
    </div>
  );
};

export default GiveStarsRating;

/* eslint-disable react/prop-types */

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const StarsRating = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let num = index + 0.5; //for showing the half star

    // index=0, index=1, index=2, index=3; index=4;

    return (
      <span key={index}>
        {stars >= index + 1 ? ( //4 >=0,1,2,3 => **** stars
          <FaStar />
        ) : stars >= num ? (
          <FaStarHalfAlt /> // 3.4 >= 0,1,2,3 but 3.4 < 3.5 => *** stars
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <div>
      {ratingStar}
      <p>Reviews: {reviews}</p>
    </div>
  );
};

export default StarsRating;

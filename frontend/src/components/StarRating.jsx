import React from "react";
import ReactStars from "react-stars";


const StarRating = ({ initialRating }) => {
  return (
    <div className="-mt-2">
      <ReactStars
        count={5}
        value={initialRating}
        size={24}
        color2={"#ffd700"}
        edit={false}
      />
    </div>
  );
};

export default StarRating;

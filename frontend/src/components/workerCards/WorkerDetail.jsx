import React from 'react';
import StarRating from "../StarRating";
import Button from '../buttons/Button';

const WorkerDetail = ({ worker }) => {
  return (
    <div className="flex flex-col items-center mb-4">
      {/* Image Section */}
      <div className="w-24 h-24 mb-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s"
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Name Section */}
      <span className="text-lg font-semibold text-gray-800 mb-1">
        {worker.first_name} {worker.last_name}
      </span>

      {/* Buttons and Rating Section */}
      <div className="flex flex-col items-center gap-2">
        <Button text={"Send request"} color={"indigo"} />
        <StarRating initialRating={worker.avg_stars} />
        <Button text={"Call"} color={"green"} />
      </div>
    </div>
  );
};

export default WorkerDetail;

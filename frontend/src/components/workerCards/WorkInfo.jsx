import React from "react";

const WorkInfo = ({ idx, work }) => {
  return (
    <div
      key={idx}
      className={`one mb-2 p-2 border border-gray-200 rounded-md ${
        idx % 2 === 0 ? "bg-gray-100" : "bg-white"
      }`}
    >
      <div className="flex justify-between">
        <h3 className="text-sm font-semibold text-gray-700 whitespace-nowrap">
          {work.name} - {work.rate_type.split("_").join(" ")}
        </h3>

        <p className="text-gray-600 whitespace-nowrap">Rate: ₹{work.rate}</p>
      </div>
      <div>
        <p className="text-gray-500 text-sm">
          {work.description.length > 50 ? work.description.slice(0, 50) + "..." : work.description}
        </p>
      </div>
    </div>
  );
};

export default WorkInfo;

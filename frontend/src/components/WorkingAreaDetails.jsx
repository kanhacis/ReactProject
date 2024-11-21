import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const WorkingAreaDetails = ({ workDetails, onEdit, onDelete }) => {
  return (
    <div className="max-w-4xl mx-auto mb-5">
      <h2 className="text-xl font-bold text-gray-700 mb-6"></h2>
      <div className="space-y-4">
        {workDetails.map((item) => (
          <div
            key={item.name + item.rate}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row md:justify-between md:items-center"
          >
            {/* Left Section */}
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                Rate Type: {item.rate_type}
              </p>
              <p className="text-sm text-gray-600 mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                Rate: Rs.{item.rate}
              </p>
            </div>

            {/* Right Section */}
            <div className="flex justify-between items-center w-full md:w-auto bg-gray-100 p-4 rounded-lg md:ml-2">
              <p className="text-sm text-gray-600 flex-grow">
                {item.description}
              </p>

              {/* Action Buttons */}
              <div className="ml-4 flex space-x-2">
                {/* Edit Button */}
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => onEdit(item)}
                >
                  <FaEdit size={20} className="text-green-600" />
                </button>

                {/* Delete Button */}
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => onDelete(item.id)}
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingAreaDetails;

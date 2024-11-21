import React from "react";

const Label = ({ labelName, errors }) => {
  return (
    <label
      htmlFor="description"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white flex justify-between"
    >
      <span>{labelName}</span>
      <span>
        {errors && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
      </span>
    </label>
  );
};

export default Label;

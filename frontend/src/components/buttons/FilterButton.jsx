import React from "react";

const FilterButton = ({ text, onClick, color }) => {
  const activeClass =
    color === "active"
      ? "bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700"
      : "bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-300";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center text-white ${activeClass} hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-5 py-2`}
    >
      {text}
    </button>
  );
};

export default FilterButton;


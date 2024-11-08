import React from "react";
import { MdAddIcCall } from "react-icons/md";

const Button = ({ text, onClick, color }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center text-white ${
        color === "indigo"
          ? "bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800"
          : "bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 -mt-2"
      } font-medium rounded-lg text-xs px-5 py-1`}
    >
      {text === "Call" ? <MdAddIcCall size={16} /> : text}
    </button>
  );
};

export default Button;

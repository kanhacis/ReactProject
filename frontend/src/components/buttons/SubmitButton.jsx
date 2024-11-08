import React from "react";
import Spinner from "../Spinner";

const SubmitButton = ({ isSubmitting, text }) => {
  return (
    <button
      type="submit"
      className="w-full flex items-center justify-center bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
      disabled={isSubmitting}
    >
      {isSubmitting ? <Spinner /> : text}
    </button>
  );
};

export default SubmitButton;

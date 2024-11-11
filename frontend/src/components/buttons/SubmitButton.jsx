import React from "react";
import Spinner from "../Spinner";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../services/roles/roleSelector";

const SubmitButton = ({ isSubmitting, text }) => {
  const role = useSelector(selectUserRole);

  return (
    <button
      type="submit"
      className={`w-full flex items-center justify-center ${
        role === "User"
          ? "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          : "bg-green-600 hover:bg-green-700 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      } text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
      disabled={isSubmitting}
    >
      {isSubmitting ? <Spinner /> : text}
    </button>
  );
};

export default SubmitButton;



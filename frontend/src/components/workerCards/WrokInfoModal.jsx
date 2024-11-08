import React from "react";
import ReactDOM from "react-dom";

const WrokInfoModal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-4 mx-4">
        <div className="mt-2">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default WrokInfoModal;

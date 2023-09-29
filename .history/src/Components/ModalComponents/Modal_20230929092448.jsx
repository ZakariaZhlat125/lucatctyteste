import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="fixed inset-0 bg-gray-800 opacity-75"></div>
      <div className="bg-white rounded-lg p-8 z-50 relative flex flex-col items-center">
        {/* Modal content goes here */}
        
        {/* <button
          onClick={onClose}
          className="absolute mx-auto bottom-2   text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          Close
        </button> */}


        
      </div>
    </div>
  );
};

export default Modal;

import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="fixed inset-0 bg-gray-800 opacity-75"></div>
      <div className="bg-white rounded-lg p-8 z-50 relative">
        {/* Modal content goes here */}
        <h2 className="text-2xl font-semibold mb-4">Modal Content</h2>
        <p>This is the modal content.</p>
        <button
          onClick={onClose}
          className="absolute bottom-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

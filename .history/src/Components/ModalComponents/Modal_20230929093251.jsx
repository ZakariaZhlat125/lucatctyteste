import React, { useState } from "react";
import Welcom from "./Welcom";
import PickLang from "./PickLang";
import SelectImage from "./SelectImage";
const Modal = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  if (!isOpen) return null;

  const nextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
        {currentPage ===1 (<Welcom />)}
        {currentPage ===1 (<PickLang />)}
        {currentPage ===1 (<SelectImage />)}
        <button onClick={nextPage} className="bg-orange-500 text-white px-4 py-2 rounded">
              Next
            </button>
      </div>
    </div>
  );
};

export default Modal;

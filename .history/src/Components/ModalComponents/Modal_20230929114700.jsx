import React, { useState } from "react";
import Welcom from "./Welcom";
import PickLang from "./PickLang";
import SelectImage from "./SelectImage";
const Modal = ({ isOpen, onClose }) => {

  const [currentPage, setCurrentPage] = useState(1);
  if (!isOpen) return null;
  const totalPages = 3;
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

  const getOrangeCount = () => {
    // Return the number of orange circles to display based on the current page
    switch (currentPage) {
      case 2:
        return 1;
      case 3:
        return 2;
      default:
        return 0;
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="fixed inset-0 bg-gray-800 opacity-75"></div>
      <div className="bg-white w-[35rem] h-[50rem]  rounded-lg p-8 z-50 relative flex flex-col items-center">
        {/* Modal content goes here */}

        {/* <button
          onClick={onClose}
          className="absolute mx-auto bottom-2   text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          Close
        </button> */}
        {currentPage === 1 && <Welcom />}
        {currentPage === 2 && <PickLang />}
        {currentPage === 3 && <SelectImage />}
        <div className="my-3 flex flex-col">
        <button
          onClick={nextPage}
          className="w-72 bg-orange-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
        <button
          onClick={prevPage}
          className="mr-4   text-black px-4 py-2 rounded"
        >
          Back
        </button>
        </div>
        <div className="flex mt-4">
          {[...Array(totalPages)].map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 mx-1 rounded-full ${
                index < getOrangeCount() ? "bg-orange-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;

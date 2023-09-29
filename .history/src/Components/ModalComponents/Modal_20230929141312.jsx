import React, { useState } from "react";
import Welcom from "./Welcom";
import PickLang from "./PickLang";
import SelectImage from "./SelectImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Modal = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [inputValueName, setInputValueName] = useState("");
  const [inputValueLang, setInputValueLang] = useState("");
  const [inputValueCountry, setInputValueCountry] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  if (!isOpen) return null;
  const totalPages = 3;

  const nextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };
  const nextPageText = currentPage === 3 ? "Pick 3 more" : "Next";
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const isNextButtonDisabled =
    (currentPage === 1 && inputValueName.trim() === "") ||
    (currentPage === 2 &&
      (inputValueLang.trim() === "" || inputValueCountry.trim() === "")) ||
    (currentPage === 3 && selectedItems.length < 3);

  const nextButtonStyle = isNextButtonDisabled
    ? "bg-gray-300 text-gray-500"
    : "bg-orange-500 text-white";

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
      <div className="bg-white sm:w-[40rem] w-[90vw] sm:h-[36rem] h-auto mx-1 max-h-max rounded-lg p-8 z-50 relative flex flex-col justify-between items-center overflow-y-auto">
        <FontAwesomeIcon
          icon={faTimes}
          onClick={onClose}
          className="w-8 h-6 self-end cursor-pointer"
        />
        {currentPage === 1 && (
          <Welcom
            inputValueName={inputValueName}
            setInputValueName={setInputValueName}
          />
        )}
        {currentPage === 2 && (
          <PickLang
            inputValueLang={inputValueLang}
            setInputValueLang={setInputValueLang}
            inputValueCountry={inputValueCountry}
            setInputValueCountry={setInputValueCountry}
          />
        )}
        {currentPage === 3 && (
          <SelectImage
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        )}
        <div className="my-3 flex flex-col">
          <button
            onClick={nextPage}
            className={`w-72 px-4 py-2 rounded ${nextButtonStyle}`}
            disabled={isNextButtonDisabled}
          >
            {nextPageText}
          </button>
          {currentPage > 1 && (
            <button
              onClick={prevPage}
              className="mr-4   text-black px-4 py-2 rounded"
            >
              Back
            </button>
          )}
          <div className="flex mt-4 self-center">
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
    </div>
  );
};

export default Modal;

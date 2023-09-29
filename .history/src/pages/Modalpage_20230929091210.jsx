import React, { useState } from "react";
import logo from "../assets/Images/Logo.png";
import Modal from "../Components/ModalComponents/Modal";
const Modalpage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

   

  return (
    <div className="h-screen w-secreen bg-gray-600 flex flex-col justify-center items-center  ">
      <img
        src={logo}
        alt="logo"
        className="w-[415px] h-[413px] mx-2 "
      />
      <button
        onClick={() => setIsModalOpen(true)}
        className="mr-auto w-[309px] h-[41px] sm:w-[409px]  shadow-sm bg-orange-500  hover:bg-orange-600 rounded-lg  text-white text-sm font-semibold font-['Montserrat']"
      >
        Open Modal
      </button>


      <Modal isOpen={isModalOpen}  onClose={() => setIsModalOpen(false)} />

    </div>
  );
};

export default Modalpage;

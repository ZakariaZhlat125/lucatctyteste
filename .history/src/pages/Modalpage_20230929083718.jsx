import React, { useState } from "react";
import logo from "../assets/Images/Logo.png";
const Modalpage = () => {
  const [isModalOpen, setISModalOpen] = useState(false);

  return (
    <div className="h-screen w-secreen bg-gray-600 flex flex-col justify-center items-center  ">
      <img
        src={logo}
        alt="logo"
        className="w-[415px] h-[413px] "
      />
      <button
        onClick={() => setISModalOpen(true)}
        className="mt-36 w-[409px] h-[41px] md:w-[309px]  shadow-sm bg-orange-500  hover:bg-orange-600 rounded-lg  text-white text-sm font-semibold font-['Montserrat']"
      >
        Open Modal
      </button>
    </div>
  );
};

export default Modalpage;

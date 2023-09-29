import React from "react";
import logo from "../assets/Images/Logo.png";
const Modalpage = () => {
  return (
    <div className="h-screen w-secreen bg-gray-600 flex justify-center items-center  ">
      <div className="">
        <img src={logo} alt="logo" />
        <button className="w-[409px] h-[41.14px] shadow-sm bg-orange-500  hover:bg-orange-800 rounded-lg left-[154px] top-[12.07px]  text-white text-sm font-semibold font-['Montserrat']">Open Modal</button>
      </div>
    </div>
  );
};

export default Modalpage;

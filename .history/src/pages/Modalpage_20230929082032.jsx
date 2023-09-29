import React from "react";
import logo from "../assets/Images/Logo.png";
const Modalpage = () => {
  return (
    <div className="h-screen w-secreen bg-gray-600 flex justify-center items-center  ">
      <div className="">
        <img src={logo} alt="logo" />
        <button className="w-[409px] h-[41.14px] bg-orange-500 rounded-lg"></button>
      </div>
    </div>
  );
};

export default Modalpage;

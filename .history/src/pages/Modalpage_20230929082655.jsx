import React from "react";
import logo from "../assets/Images/Logo.png";
const Modalpage = () => {
  return (
    <div className="container h-screen w-secreen bg-gray-600 flex flex-col justify-center items-center  ">
      {/* <div className="flex m-auto"> */}
        <img src={logo} alt="logo" className="" />
        <button className="mt-36 w-[409px] h-[41.14px] shadow-sm bg-orange-500  hover:bg-orange-600 rounded-lg  text-white text-sm font-semibold font-['Montserrat']">Open Modal</button>
      {/* </div> */}
    </div>
  );
};

export default Modalpage;

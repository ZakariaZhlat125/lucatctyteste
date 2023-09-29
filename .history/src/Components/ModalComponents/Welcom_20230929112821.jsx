import React from "react";
import {FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Welcom = () => {
  return (
    <div className="flex flex-col justify-center items-center px-32">
      <div className="bg-gray-600 w-32 h-32 flex justify-center items-center my-2">
        <p className="text-white text-[50px] font-bold font-['Montserrat']">
          A
        </p>
      </div>

      <p className="my-2 text-zinc-400 text-sm font-medium font-['Poppins'] ">
        alice@wonderland.space
      </p>
      <h3 className="text-gray-600 text-[28px] font-bold font-['Poppins']">
        Welcome to Giki
      </h3>
      <div className="relative mt-4">
        <input
          type="text"
          placeholder="Edit text"
          className="py-2 px-8 pr-12 border text-orange-500 rounded focus:outline-none focus:border-orange-500"
        />
        <FontAwesomeIcon
          icon={faPencilAlt}
          className="absolute right-2 top-2 text-slate-400 w-6 h-6 cursor-pointer"
        />
      </div>
      <p className="w-[314px]  text-center text-neutral-800 text-[13px] font-medium font-['Poppins'] leading-[19px]">
        Your answers to the next few questions will help us find the right
        communities for you
      </p>
    </div>
  );
};

export default Welcom;

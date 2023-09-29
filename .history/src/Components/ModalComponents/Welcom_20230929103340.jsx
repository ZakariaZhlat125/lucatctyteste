import React from "react";

const Welcom = () => {
  return (
    <div className="flex flex-col justify-center items-center px-32">
      {/* <div className='justify-center items-center'> */}
      <div className="bg-gray-600 w-32 h-32 flex justify-center items-center my-2">
       
        <p className="text-white text-[50px] font-bold font-['Montserrat']">A</p>
      </div>

      <p className="my-2 text-zinc-400 text-sm font-medium font-['Poppins'] ">alice@wonderland.space</p>
      <p className="text-gray-600 text-[28px] font-bold font-['Poppins']">Welcome to Giki</p>
      {/* </div> */}
    </div>
  );
};

export default Welcom;

import React from "react";

const Welcom = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <div className='justify-center items-center'> */}
      <div className="bg-gray-600 w-32 h-32 flex justify-center items-center">
       
        <p className="text-white text-[50px] font-bold font-['Montserrat']">A</p>
      </div>

      <p className=" h-5 text-zinc-400 text-sm font-medium font-['Poppins'] ">alice@wonderland.space</p>
      {/* </div> */}
    </div>
  );
};

export default Welcom;

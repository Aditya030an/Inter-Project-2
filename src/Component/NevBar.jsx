import React from "react";
// import logo from "../images/logo.png"
import nevImg from "../images/nevImg.png";
const NevBar = () => {
  return (
    <div className=" flex align-middle ">
      <div className=" flex flex-row justify-between align-middle w-[1300px] h-[62px] mt-10">
        <div className="  flex items-center justify-center">
          <img src={nevImg} alt="nev" className=" w-[535px] h-[34.41px]" />
        </div>

        {/* <div className=" cursor-pointer shadow-md shadow-gray-400 rounded-md border-solid border-2 border-red-900">
          <button className="w-[180px] h-[60px] bg-black text-white rounded-md cursor-wait ">
            <p className="text-xl">Download</p>
          </button>
        </div> */}

        <div className=" w-[180px] h-[60px] flex items-center justify-center cursor-pointer hover:shadow-md hover:shadow-gray-400 bg-black rounded-md text-white text-xl z-50">
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default NevBar;

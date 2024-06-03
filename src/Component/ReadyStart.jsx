import React from "react";
import phoneGroup from "../images/phoneIgroup.png";
import star6 from "../images/Star 6.png";
import star7 from "../images/Star 7.png";
import star1 from "../images/Star 1.png";
import appleLogo from "../images/appleLogo.png";
import blurImg from "../images/Group 35932.png";
const ReadyStart = () => {
  return (
    <div className=" px-14 py-7 mt-14 relative">
      <div className=" bg-black flex  relative overflow-hidden z-50">
        <div className="text-white w-7/12 px-20 flex flex-col items-start justify-center my-48">
          <div className="font-extrabold text-5xl ">Ready To get Started?</div>
          <div className="mt-7 text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quod
            veritatis necessitatibus.
          </div>
          <div className="p-4 mt-7 bg-white text-black font-medium text-2xl flex gap-3 items-center justify-center rounded-md cursor-pointer hover:shadow-md hover:shadow-red-500">
            <p>Download App</p>
            <img src={appleLogo} />
          </div>
        </div>
        <div className="w-5/12 py-6 relative">
          <img
            src={phoneGroup}
            className=" w-full absolute z-50"
          />
          <img
            src={blurImg}
            className="right-1 absolute z-10"
          />
           <div className="absolute -top-64 -right-56 w-full h-full  ">
          <div className="border-2 border-slate-400 flex items-center p-10 justify-center rounded-full  w-full h-full">
            <div className="border-2 border-slate-400  w-full h-full p-14 flex items-center justify-center rounded-full  mr-16">
              <div className="border-2 border-slate-400  w-full h-full  mb-8 rounded-full"></div>
            </div>
          </div>
        </div>
        </div>

        <div className="absolute   w-6/12 h-full top-[420px] -left-80 ">
          <div className="border-2 border-slate-400 flex items-center p-10 justify-center rounded-full  w-full h-full">
            <div className="border-2 border-slate-400  w-full h-full p-14 flex items-center justify-center rounded-full  mr-16">
              <div className="border-2 border-slate-400  w-full h-full  mb-8 rounded-full"></div>
            </div>
          </div>
        </div>

        <img src={star6} className="absolute bottom-44 left-96"/>
        <img src={star7} className="absolute top-24 left-1/2"/>
      </div>
      <div className="absolute -top-24 -left-32 rotate-[270deg]  w-80 z-10">
      <img
            src={blurImg}
            className=""
          />
        </div>
        <div className=" absolute top-80 -left-24">
          <img src={star1}/>
        </div>
        <div className="absolute right-12 -top-24">
          <img src={star1}/>
        </div>
    </div>
  );
};

export default ReadyStart;

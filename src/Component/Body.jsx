import React from "react";
import star1 from "../images/Star 1.png";
import backBlur from "../images/background.png";
import bottomImg from "../images/Group 35923.png";
import phone1 from "../images/phone1.png";
import phone2 from "../images/phone2.png";
import phone3 from "../images/phone3.png";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { BiSolidRightArrow } from "react-icons/bi";
const Body = () => {
  return (
    <div className=" flex ">
      <div className=" w-1/2">
        <div className=" relative p-7">
          <div className=" absolute w-96 top-3 left-60 opacity-80 ">
            <img src={backBlur} className="" />
          </div>
          <div className="  mt-20">
            <p
              className="font-black text-black text-[64px] leading-[60px]  w-full "
            >
              {/* <p className="border-2 border-pink-400 border-solid w-full"> Make The best</p>
                <p className="border-2 border-purple-400 border-solid w-full">Financial Decisions</p> */}
              Make The Best <br /> Financial Decisions
            </p>
          </div>
          <div className=" border-solid mt-7">
            <p className="opacity-50 font-medium text-[18px] leading-7  border-solid">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              natus repellat eveniet ratione velit voluptates ipsa quis
              perferendis non, doloribus consequuntur molestias fugit quos
            </p>
          </div>
          <div className=" mt-7 flex w-7/12 h-16">
            <div className="w-1/2 bg-black text-white flex items-center justify-center gap-3 rounded-md cursor-pointer hover:shadow-md hover:shadow-red-400">
              <p>Get Started</p>
              <div className="text-xl ">
                <HiOutlineArrowLongRight />
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-center gap-3 cursor-pointer hover:shadow-sm hover:shadow-black rounded-md">
              <BiSolidRightArrow className=" rounded-full w-7 h-7 p-1 border-2 border-solid border-black" />
              <p className="text-xl font-medium">Watch Video</p>
            </div>
          </div>
        </div>

        {/* down */}
        <div className="  relative">
          <img src={star1} className="absolute left-20" />
          <img src={bottomImg} className=" " />
        </div>
      </div>

      {/* right */}
      <div className=" w-1/2 relative">
        <img src={phone1} className="absolute -top-16 -left-8 z-30" />
        <img src={phone2} className="absolute top-8 left-28  z-20" />
        <img src={phone3} className="absolute -top-4 left-28 " />
        <img src={backBlur} className="absolute bottom-28 w-80 left-36 " />
      </div>
    </div>
  );
};

export default Body;

import React from "react";
import ellips from "../images/ellips.png";
import phone1 from "../images/phone1.png";
import cube from "../images/cube.png";
import wheel from "../images/wheel.png";
import star from "../images/star.png";
import Star from "../images/Star 8.png";
import backBlur from "../images/background.png";
import Box from "./stylebox/Box";
const Feature = () => {
  return (
    <div className=" flex justify-center align-middle mt-2 py-5 overflow-hidden">
      <div className=" relative w-1/2 ">
        <img src={phone1} className="absolute w-3/4 z-50 rotate-[15deg] left-36" />
        <img src={ellips} className="absolute  w-10/12 z-40  -top-12 left-16" />
        <img src={backBlur} className="absolute w-10/12 z-30  left-16 rotate-[80deg] " />

        {/* <div className="absolute w-3/12 z-30  left-16 rotate-[80deg] border-2 border-solid border-bl">
        <Box/>
        </div> */}
        <img src={Star} className="absolute top-20 "/>
      </div>
      <div className="w-1/2 p-2 relative">
        <div className="flex flex-col">
          <h1 className="text-[#FF5555] text-2xl font-medium">FEATURE</h1>
          <h1 className="text-[48px] leading-10 font-bold text-black">
            Uifry Premium
          </h1>
        </div>

        <div className=" mt-7 flex flex-col gap-7">
          <div className=" mt-4 p-2 flex flex-col gap-4">
            <div className="flex gap-3">
              <img src={star} />
              <p className="font-semibold text-xl">Budgeting Intervals</p>
            </div>
            <div className="opacity-80 font-medium text-[18px] leading-7 text-black">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae vel illum, maxime ducimus dicta debitis ipsam earum
              natus asperiores accusamus animi facilis molestia
            </div>
          </div>
          <div className=" mt-4 p-2 flex flex-col gap-4">
            <div className="flex gap-3">
              <img src={wheel} />
              <p className="font-semibold text-xl">Budgeting Intervals</p>
            </div>
            <div className="opacity-80 font-medium text-[18px] leading-7 text-black">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae vel illum, maxime ducimus dicta debitis ipsam earum
              natus asperiores accusamus animi facilis molestia
            </div>
          </div>
          <div className=" mt-4 p-2 flex flex-col gap-4">
            <div className="flex gap-3">
              <img src={cube} />
              <p className="font-semibold text-xl">Budgeting Intervals</p>
            </div>
            <div className="opacity-80 font-medium text-[18px] leading-7 text-black">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae vel illum, maxime ducimus dicta debitis ipsam earum
              natus asperiores accusamus animi facilis molestia
            </div>
          </div>
        </div>
        <div className=" absolute top-0 -right-48 w-80">
        <img src={backBlur} className="" />
        </div>
      </div>
    </div>
  );
};

export default Feature;

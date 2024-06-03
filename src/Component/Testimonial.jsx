import React from "react";
import people from "../images/peopleGroup.png";
import circleGroup from "../images/circleGroup.png";
import ellips from "../images/ellips.png";
import backBlur from "../images/background.png";
import Star from "../images/Star 8.png";
const Testimonial = () => {
  return (
    <div className=" mt-10 relative" >
        <img src={Star} className="absolute right-7 -top-8"/>
      <div className="">
        <p className="text-center text-black text-xl ">TESTIMONIAL</p>
        <h1 className="text-center text-4xl text-black font-black leading-10 mt-3">What Our Users <br/> Say About Us?</h1>
      </div>

      <div className=" flex -mt-7">
        <div className="w-1/2 relative ">
            <img src={circleGroup} className="absolute top-20 left-36  w-3/4 z-50"/>
            <img src={ellips} className=" absolute top-6 left-16 w-9/12 z-40"/>
            <img src={backBlur} className=" absolute top-28 left-32"/>
            <img src={Star} className="absolute bottom-4"/>
        </div>
        <div className="w-1/2  flex flex-col gap-8 my-44">
            <h1 className="text-2xl font-semibold text-black">
                The Best Financial Accounting App Ever!
            </h1 >
            <p className="opacity-80 font-medium text-[18px] leading-7 text-black w-11/12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, obcaecati vitae? Dolor omnis temporibus quisquam exercitationem delectus numquam. Eaque omnis at perspiciatis. Ipsam illo velit tempora temporibus, nulla ratione eveniet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores at error ut necessitatibus! Soluta, ut voluptate modi placeat veniam reiciendis, doloribus nobis ducimus id repudiandae aliquid ipsum dolore beatae.</p>
            <img src={people} className="w-44"/>
            <p className="text-xl font-semibold text-black">Nick Jonas</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

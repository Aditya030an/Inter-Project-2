import React from "react";
import star from "../images/star.png";
import bell from "../images/bell.png";
import phone2 from "../images/phone2.png";
import ellips from "../images/ellips.png";
import onHold from "../images/onHold.png";
import backBlur from "../images/background.png";
import Star from "../images/Star 8.png";
import phone4 from "../images/Group 35933.png";
import visacard from '../images/visaCard.png';

const Advantages = () => {
  return (
    <div className="">
      {/* first */}
      <div className=" flex ">
        {/* left */}
        <div className="w-1/2 p-2 my-40">
          <div className="flex flex-col">
            <h1 className="text-[#FF5555] text-2xl font-medium">ADVANTAGES</h1>
            <h1 className="text-[48px] leading-10 font-bold text-black">
              Why Choose Uifry!
            </h1>
          </div>

          <div className=" mt-7 flex flex-col gap-7 ">
            <div className="flex gap-3 ">
              <img src={bell} className="w-10" />
              <p className="font-semibold text-3xl  flex items-center justify-center">
                Clever Notifications
              </p>
            </div>
            <div className="opacity-80 font-medium text-[18px] leading-7 text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              quam libero aut nesciunt nam, laboriosam sunt tenetur? Tenetur
              totam reprehenderit atque, fugit nobis hic tempore placeat iusto?
              Veritatis, eos voluptas! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Earum sequi ipsum unde eligendi fuga reiciendis
              qui eveniet natus animi possimus culpa aliquid error fugiat, esse,
              perferendis dolor ea, quia corporis?
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-1/2  flex relative overflow-hidden">
          <img
            src={onHold}
            className="absolute  z-50 top-72 left-[390px]"
          />
          <img
            src={phone2}
            className="absolute left-52 top-10 z-40 rotate-[15deg] w-8/12"
          />
          <img
            src={ellips}
            className="absolute  left-36 w-3/4 z-30"
          />
          <img src={backBlur} className=" absolute w-80 h-80 bottom-6 left-40 "/>
          <img src={Star} className="absolute top-4 right-8"/>
        </div>
      </div>

      {/* secnod */}
      <div className=" flex">
       
       <div className="w-1/2 overflow-hidden">

        <div className="relative w-10/12">
            <img src={phone4} className="absolute  w-full left-16 z-40"/>
            <img src={visacard} className="absolute w-64 top-48 left-72 z-50"/>
            <img src={backBlur} className="absolute top-72 left-6 z-30"/>
            <img src={Star} className=" absolute right-0"/>
        </div>

        </div>
        <div className=" my-44 flex flex-col gap-7  w-1/2 " >
            <div className="flex gap-3 ">
                <img src={star} className="w-10"/>
                <p className="font-semibold text-3xl  flex items-center justify-center">Fully Customizable</p>
            </div>
            <div className="opacity-80 font-medium text-[18px] leading-7 text-black w-11/12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vitae aut eaque dolorem esse asperiores quasi iure eius! Officia eos quaerat laboriosam iure illo iste neque voluptatibus qui, velit natus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas neque, velit rem magnam nostrum voluptatem obcaecati non, incidunt nisi libero molestiae id temporibus, accusantium earum maiores nihil hic. Voluptatem?
            </div>
        </div>

    </div>
    </div>
  );
};

export default Advantages;

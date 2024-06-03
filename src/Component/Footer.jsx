import React, { useState } from "react";
import companyLogo from "../images/companyLogo.png";
import mailLogo from "../images/mailLogo.png";
import callLogo from "../images/callLogo.png";
const Footer = () => {
  const [text, setText] = useState("");
  const handleClick = () => {
    if(text.length >0){
        alert("Submition Completed store with " + text );
    }
    else{
        alert("Please Fill Valid Input" );
    }
    setText("");
  };
  return (
    <div>
      {/* list */}
      <div className=" flex">
        <div className=" w-1/4 p-7">
          <div className="flex gap-2">
            <img src={companyLogo} />
            <h1 className="text-3xl font-bold text-black ">Uifry</h1>
          </div>
          <ul className="mt-4 flex flex-col gap-3 text-xl">
            <li className="flex gap-2">
              <img src={mailLogo} />
              <p>Help@Fryblx.Com</p>
            </li>
            <li className="flex gap-2">
              <img src={callLogo} />
              <p>+123445667889</p>
            </li>
          </ul>
        </div>
        <div className=" flex align-middle justify-around p-2 w-3/4">
          <div className=" p-2">
            <div className="text-3xl font-medium text-black">Link</div>
            <div className="text-xl mt-3">
              <ul>
                <li className="p-2">Home</li>
                <li className="p-2">About Us</li>
                <li className="p-2">Booking</li>
                <li className="p-2">Blog</li>
              </ul>
            </div>
          </div>
          <div className="p-2">
            <div className="text-3xl font-medium text-black">Legal</div>
            <div className="text-xl mt-3">
              <ul>
                <li className="p-2">Teems Of Use</li>
                <li className="p-2">Privacy Policy</li>
                <li className="p-2">Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className=" p-2">
            <div className="text-3xl font-medium text-black">Product</div>
            <div className="text-xl mt-3">
              <ul>
                <li className="p-2">Take Tour</li>
                <li className="p-2">Live Chat</li>
                <li className="p-2">Reviews</li>
              </ul>
            </div>
          </div>
          <div className=" p-2">
            <div className="text-3xl font-medium text-black">Newsletter</div>
            <div className="mt-2 ">Stay Up To Date</div>
            <div className="text-xl mt-3 flex items-center w-full">
              <input
                placeholder="Your email"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border-2 border-black outline-none w-1/2 p-3"
              />
              <div
                className="text-white bg-black text-2xl p-3 cursor-pointer hover:shadow-md hover:shadow-red-500"
                onClick={handleClick}
              >
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copy right */}
      <div className="my-3">
        <div className="w-full h-1 bg-gradient-to-l from-white via-slate-600 to-white "></div>
        <div className=" p-7 text-2xl text-gray-600 text-center ">
          <h1>Copyright2022Uifry.ComAllRightReserved</h1>
        </div>
        <div className="w-full h-1 bg-gradient-to-l from-white via-slate-600 to-white "></div>
      </div>
    </div>
  );
};

export default Footer;

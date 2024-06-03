import React from "react";
import Star from "../images/Star 1.png"
const Faq = () => {
  return (
    <div className="px-10 relative">
        <img src={Star} className="absolute top-20 right-96"/>    
      <div className="">
        <p className="text-[#FF5555] text-2xl font-medium">FAQ</p>
        <h1 className="text-5xl font-bold text-black mt-4">
          Frequent Asked <br /> Question
        </h1>
      </div>
      <div className="mt-7 w-11/12">
        <div className="flex gap-12">
            <div className="bg-rose-500 text-white p-4 rounded-md w-1/2">
                <h1 className="text-2xl font-semibold">The Best Financial Accounting App Ever!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animi architecto placeat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolorum nesciunt quibusdam nemo numquam incidunt illum aperiam ipsum, similique voluptates exercitationem repellendus iure ducimus neque facilis. Possimus animi dolorum quibusdam. </p>
            </div>
            <div className="w-1/2">
            <h1 className="text-2xl font-semibold">The Best Financial Accounting App Ever!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animi architecto placeat Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nihil omnis eius dolorem rerum deserunt natus ea ratione quas tempore blanditiis veniam labore temporibus doloremque obcaecati vero autem, ducimus eaque.</p>
            </div>
        </div>
        <div className="flex gap-12 mt-7">
            <div className="w-1/2">
            <h1 className="text-2xl font-semibold">The Best Financial Accounting App Ever!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animi architecto placeat Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nihil omnis eius dolorem rerum deserunt natus ea ratione quas tempore blanditiis veniam labore temporibus doloremque obcaecati vero autem, ducimus eaque.</p>
            </div>
            <div className="bg-rose-500 text-white p-4 rounded-md w-1/2">
                <h1 className="text-2xl font-semibold">The Best Financial Accounting App Ever!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animi architecto placeat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolorum nesciunt quibusdam nemo numquam incidunt illum aperiam ipsum, similique voluptates exercitationem repellendus iure ducimus neque facilis. Possimus animi dolorum quibusdam. </p>
            </div>
        </div>
        <div className="flex gap-12 mt-7">
            <div className="bg-rose-500 text-white p-4 rounded-md w-1/2">
                <h1 className="text-2xl font-semibold">The Best Financial Accounting App Ever!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animi architecto placeat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum dolorum nesciunt quibusdam nemo numquam incidunt illum aperiam ipsum, similique voluptates exercitationem repellendus iure ducimus neque facilis. Possimus animi dolorum quibusdam. </p>
            </div>
            <div className="w-1/2">
            <h1 className="text-2xl font-semibold">The Best Financial Accounting App Ever!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animi architecto placeat Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nihil omnis eius dolorem rerum deserunt natus ea ratione quas tempore blanditiis veniam labore temporibus doloremque obcaecati vero autem, ducimus eaque.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

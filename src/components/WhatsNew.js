import React from "react";

import WhatsNewCard from "../cards/WhatsNewCard";
import WhatsNewSelectorCard from "../cards/WhatsNewSelectorCard";

import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GrLinkNext } from "react-icons/gr";

const WhatsNew = () => {
  return (
    <div className=" relative bg-gray-100 p-20">
      <div className="flex justify-between items-center">
        <h1 className="  text-4xl font-semibold">What's New</h1>

        <div className="flex justify-between items-center gap-2">
          <FaLessThan />
          <p className="heading  text-2xl font-medium text-gray-800">
            March 2021
          </p>
          <FaGreaterThan />
        </div>
      </div>
      {/* <div className=''>
        <div className='w-96 h-28 bg-white  p-8 flex justify-between items-center flex-wrap rounded-2xl'>
          <div className='w-32 h-14 bg-white flex justify-center items-center'>
              <p className='text-sm font-medium capitalize '>Fall ShakeOut EarthQuake Drill</p>
          </div>
          <div className='w-32 h-14 bg-emerald-500 rounded-full  flex justify-center items-center'>
              <div className='heading text-white text-base  flex justify-center items-center gap-1 '> 
                <AiOutlineClockCircle/> 
                <p>10-10-2021</p>
              </div>
          </div>
        </div>
      </div> */}
      <div className="flex justify-between items-start mt-20">
        <div className=" flex flex-col justify-items-end">
          <div className=" flex flex-col justify-center items-center gap-5">
            <WhatsNewSelectorCard />
            <WhatsNewSelectorCard />
            <WhatsNewSelectorCard />
          </div>
          <div className=" w-48 h-20 bg-emerald-500 rounded-xl shadow flex justify-center items-center text-emerald-white gap-2  ">
            <div className="Heading text-center text-white text-base font-medium capitalize">
              View More
            </div>
            <div>
              <GrLinkNext className="text-white " />
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap justify-evenly items-start gap-y-5">
          <WhatsNewCard />
          <WhatsNewCard />
          <WhatsNewCard />
          <WhatsNewCard />
          <WhatsNewCard />
          <WhatsNewCard />
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;

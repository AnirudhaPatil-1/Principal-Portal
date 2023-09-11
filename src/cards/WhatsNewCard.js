import React from "react";
import { AiOutlineCalendar   } from "react-icons/ai";

const WhatsNewCard = () => {
  return (
    <div className="">
      <div className=" w-96 h-44 bg-white rounded-2xl border border-gray-500 border-opacity-20  flex flex-col justify-between items-start  gap-1  shadow-lg p-6 - ">
        <h1 className=" text-gray-900 text-lg font-semibold ">Data and Accountability</h1>
        <p className="text-sm  capitalize ">
          Fall 2021 School Experience Survey
        </p>
        <div className="w-32 h-12  rounded-full  flex justify-center items-center  border-emerald-500 border-2">
          <div className=" heading text-emerald-500 text-base  flex justify-center items-center gap-2  ">
            <AiOutlineCalendar className="text-lg" />
            <p className="text-center">10-10-2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsNewCard;

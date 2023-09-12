import React from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineCalendar } from "react-icons/ai";
import ViewMore from "../assets/ViewMore.svg";
import { LuFileSpreadsheet } from "react-icons/lu";
import { BsBook } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { BiRun } from "react-icons/bi";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

import BgImage from "../assets/BackgroundForestImage.jpeg";

const Actions = () => {
  return (
    <div className="bg-white p-20 relative ">
      <img
        className="absolute w-[1440px] h-[340px] top-0 left-0 object-cover opacity-50"
        src={BgImage}
        alt="Background"
      />
      <div className=" flex justify-between items-center py-20 z-10">
        <div className=" text-center text-gray-900 text-4xl font-semibold capitalize">
          Actions
        </div>

        

        <div className=" z-1 w-72 h-20 rounded-full shadow border border-white border-opacity-20 flex justify-start items-center ">
          <CiSearch className="text-lg text-white w-10 h-10 mx-4" />
          <input
            className="pl-10 pr-4 py-2 w-full text-zinc-800 outline-none bg-transparent text-left text-opacity-75 text-lg font-normal"
            placeholder="Search "
          />
        </div>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-5 p-10 bg-white rounded-lg shadow z-20">
        <div className=" w-80 h-32 bg-white rounded-xl shadow flex justify-around items-center gap-1">
          <div className=" w-16 h-16 bg-orange-600 rounded-full flex justify-center items-center">
            <LuFileSpreadsheet className="w-10 h-10 text-white" />
          </div>
          <div className=" w-56 text-black text-base font-medium capitalize">
            Active Shooter - LAUSD Online TrainingHelp icon
          </div>
        </div>
        <div className=" w-80 h-32 bg-white rounded-xl shadow flex justify-around items-center gap-1">
          <div className=" w-16 h-16 bg-orange-600 rounded-full flex justify-center items-center">
            <AiOutlineClockCircle className="w-10 h-10 text-white" />
          </div>
          <div className=" w-56 text-black text-base font-medium capitalize">
            Business Continuity Plan UploadHelp icon
          </div>
        </div>
        <div className=" w-80 h-32 bg-white rounded-xl shadow flex justify-around items-center gap-1">
          <div className=" w-16 h-16 bg-orange-600 rounded-full flex justify-center items-center">
            <AiOutlineClockCircle className="w-10 h-10 text-white" />
          </div>
          <div className=" w-56 text-black text-base font-medium capitalize">
            School Closure Toolkit #1Help icon
          </div>
        </div>
        <div className=" w-80 h-32 bg-white rounded-xl shadow flex justify-around items-center gap-1">
          <div className=" w-16 h-16 bg-orange-600 rounded-full flex justify-center items-center">
            <LuFileSpreadsheet className="w-10 h-10 text-white" />
          </div>
          <div className=" w-56 text-black text-base font-medium capitalize">
            Active Shooter - LAUSD Online TrainingHelp icon
          </div>
        </div>
        <div className=" w-80 h-32 bg-white rounded-xl shadow flex justify-around items-center gap-1">
          <div className=" w-16 h-16 bg-orange-600 rounded-full flex justify-center items-center">
            <BiRun className="w-10 h-10 text-white" />
          </div>
          <div className=" w-56 text-black text-base font-medium capitalize">
            Business Continuity Plan UploadHelp icon
          </div>
        </div>
        <div className=" w-80 h-32 bg-white rounded-xl shadow flex justify-around items-center gap-1">
          <div className=" w-16 h-16 bg-orange-600 rounded-full flex justify-center items-center">
            <LuFileSpreadsheet className="w-10 h-10 text-white" />
          </div>
          <div className=" w-56 text-black text-base font-medium capitalize">
            School Closure Toolkit #1Help icon
          </div>
        </div>
        <div className=" w-80 h-32 bg-white rounded-xl shadow flex justify-around items-center gap-1">
          <div className=" w-16 h-16 bg-orange-600 rounded-full flex justify-center items-center">
            <BsFillRocketTakeoffFill className="w-10 h-10 text-white" />
          </div>
          <div className=" w-56 text-black text-base font-medium capitalize">
            Active Shooter - LAUSD Online TrainingHelp icon
          </div>
        </div>
        <div className=" w-80 h-32 bg-white rounded-xl shadow flex justify-around items-center gap-1">
          <div className=" w-16 h-16 bg-orange-600 rounded-full flex justify-center items-center">
            <RiTeamLine className="w-10 h-10 text-white" />
          </div>
          <div className=" w-56 text-black text-base font-medium capitalize">
            Business Continuity Plan UploadHelp icon
          </div>
        </div>
        <div className=" w-80 h-32 bg-white rounded-xl shadow flex justify-around items-center gap-1">
          <div className=" w-16 h-16 bg-orange-600 rounded-full flex justify-center items-center">
            <LuFileSpreadsheet className="w-10 h-10 text-white" />
          </div>
          <div className=" w-56 text-black text-base font-medium capitalize">
            School Closure Toolkit #1Help icon
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actions;

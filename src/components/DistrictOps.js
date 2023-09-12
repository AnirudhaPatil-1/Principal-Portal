import React from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineCalendar } from "react-icons/ai";
import ViewMore from "../assets/ViewMore.svg";
import { LuFileSpreadsheet } from "react-icons/lu";
import { BsBook } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

const DistrictOps = () => {
  return (
    <div className="bg-white p-20 ">
      <div className=" flex justify-between items-center py-20">
        <div className=" text-center text-gray-900 text-4xl font-semibold capitalize">
          District Ops
        </div>
        <div className=" w-72 h-20 rounded-full shadow border border-gray-500 border-opacity-20 flex justify-start items-center">
          <div className=" ">
            <CiSearch className=" border-gray-500 w-6 h-6 mx-4" />
          </div>
          <div className="Search  text-opacity-75 text-lg font-normal">
            Search
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-5">
        <div className=" w-96 h-28 bg-white rounded-2xl border border-gray-950 border-opacity-10 flex justify-around items-center gap-1">
          <div className=" w-16 h-16 bg-blue-600 rounded-2xl flex justify-center items-center">
            <FaLocationDot className="w-10 h-10 text-white" />
          </div>
          <div className=" w-56 text-black text-base font-medium capitalize">
            Active Shooter - LAUSD Online TrainingHelp icon
          </div>
        </div>
        <div className=" w-96 h-28 bg-white rounded-2xl border border-gray-950 border-opacity-10 flex justify-around items-center gap-1">
          <div className=" w-16 h-16 bg-blue-600 rounded-2xl flex justify-center items-center">
            <FaLocationDot className="w-10 h-10 text-white" />
          </div>
          <div className=" w-56 text-black text-base font-medium capitalize">
          Business Continuity Plan UploadHelp icon  
          </div>
        </div>
        <div className=" w-96 h-28 bg-white rounded-2xl border border-gray-950 border-opacity-10 flex justify-around items-center gap-1">
          <div className=" w-16 h-16 bg-blue-600 rounded-2xl flex justify-center items-center">
            <FaLocationDot className="w-10 h-10 text-white" />
          </div>
          <div className=" w-56 text-black text-base font-medium capitalize">
          School Closure Toolkit #1Help icon  
          </div>
        </div>
        <div className=" w-96 h-28 bg-white rounded-2xl border border-gray-950 border-opacity-10 flex justify-around items-center gap-1">
          <div className=" w-16 h-16 bg-blue-600 rounded-2xl flex justify-center items-center">
            <FaLocationDot className="w-10 h-10 text-white" />
          </div>
          <div className=" w-56 text-black text-base font-medium capitalize">
            Active Shooter - LAUSD Online TrainingHelp icon
          </div>
        </div>
        <div className=" w-96 h-28 bg-white rounded-2xl border border-gray-950 border-opacity-10 flex justify-around items-center gap-1">
          <div className=" w-16 h-16 bg-blue-600 rounded-2xl flex justify-center items-center">
            <FaLocationDot className="w-10 h-10 text-white" />
          </div>
          <div className=" w-56 text-black text-base font-medium capitalize">
          Business Continuity Plan UploadHelp icon  
          </div>
        </div>
        <div className=" w-96 h-28 bg-white rounded-2xl border border-gray-950 border-opacity-10 flex justify-around items-center gap-1">
          <div className=" w-16 h-16 bg-blue-600 rounded-2xl flex justify-center items-center">
            <FaLocationDot className="w-10 h-10 text-white" />
          </div>
          <div className=" w-56 text-black text-base font-medium capitalize">
          School Closure Toolkit #1Help icon  
          </div>
        </div>
        <div className=" w-96 h-28 bg-white rounded-2xl border border-gray-950 border-opacity-10 flex justify-around items-center gap-1">
          <div className=" w-16 h-16 bg-blue-600 rounded-2xl flex justify-center items-center">
            <FaLocationDot className="w-10 h-10 text-white" />
          </div>
          <div className=" w-56 text-black text-base font-medium capitalize">
            Active Shooter - LAUSD Online TrainingHelp icon
          </div>
        </div>
        <div className=" w-96 h-28 bg-white rounded-2xl border border-gray-950 border-opacity-10 flex justify-around items-center gap-1">
          <div className=" w-16 h-16 bg-blue-600 rounded-2xl flex justify-center items-center">
            <FaLocationDot className="w-10 h-10 text-white" />
          </div>
          <div className=" w-56 text-black text-base font-medium capitalize">
          Business Continuity Plan UploadHelp icon  
          </div>
        </div>
        <div className=" w-96 h-28 bg-white rounded-2xl border border-gray-950 border-opacity-10 flex justify-around items-center gap-1">
          <div className=" w-16 h-16 bg-blue-600 rounded-2xl flex justify-center items-center">
            <FaLocationDot className="w-10 h-10 text-white" />
          </div>
          <div className=" w-56 text-black text-base font-medium capitalize">
          School Closure Toolkit #1Help icon  
          </div>
        </div>
      </div>


      <div className="text-center mt-20">
      <button
              className="  w-48 h-20 bg-blue-500 rounded-xl shadow transition hover:bg-blue-600 cursor-pointer "
              type="button"
            >
              <div className=" flex justify-center items-center text-emerald-white gap-2 mx-auto">
                <div className="Heading text-center text-white text-base font-medium capitalize">
                  View More
                </div>
                <div>
                  <img src={ViewMore} alt="view more" />
                </div>
              </div>
            </button>
      </div>
    </div>
  );
};

export default DistrictOps;

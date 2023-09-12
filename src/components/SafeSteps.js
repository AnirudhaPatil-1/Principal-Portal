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

import WomenReading from "../assets/beautiful-woman-sitting-reading-book-home.png";
import GratuatingStudent from "../assets/high-angle-students-taking-selfie.png";
import MultiEthnicGroup from "../assets/multiethnic-group-young-cheerful-students-walking.png";
import GratuatingStudentEnjoy from "../assets/graduation-concept-with-portrait-happy-man 1.png";

const SafeSteps = () => {
  return (
    <div className="bg-white p-20 ">
      <div className=" flex justify-between items-center py-20">
        <div className=" text-center text-gray-900 text-4xl font-semibold capitalize">
          Safe Steps To Safe Schools
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

      <div className="flex justify-center items-center ">
        <div className="w-72 h-80 bg-white rounded-xl shadow p-1 relative flex flex-col justify-evenly items-center">
          <img
            className="w-72 h-48 rounded-md"
            src={WomenReading}
            alt="women reading"
          />
          <button className=" absolute w-32 h-11 bg-emerald-500 hover:bg-emerald-600 hover:cursor-pointer rounded-3xl shadow bottom-1/4 left-1/4">
            <div className="  flex justify-center items-center ">
              <div className="text-white text-sm font-medium">New</div>
            </div>
          </button>

          <div className="w-48 text-center text-gray-900 text-base font-semibold capitalize ">
            Back To School Family GuideHelp icon
          </div>
        </div>
        <div className="w-72 h-80 bg-white rounded-xl shadow p-3 relative flex flex-col justify-evenly items-center">
          <img
            className="w-72 h-48 rounded-md"
            src={GratuatingStudent}
            alt="women reading"
          />
          <button className=" absolute w-32 h-11 bg-emerald-500 hover:bg-emerald-600 hover:cursor-pointer rounded-3xl shadow bottom-1/4 left-1/4">
            <div className="  flex justify-center items-center ">
              <div className="text-white text-sm font-medium">New</div>
            </div>
          </button>
          <div className="w-48 text-center text-gray-900 text-base font-semibold capitalize">
            COVID Emergency PreparednessHelp icon
          </div>
        </div>
        <div className="w-72 h-80 bg-white rounded-xl shadow p-3 relative flex flex-col justify-evenly items-center">
          <img
            className="w-72 h-48 rounded-md"
            src={MultiEthnicGroup}
            alt="women reading"
          />
          <button className=" absolute w-32 h-11 bg-emerald-500 hover:bg-emerald-600 hover:cursor-pointer rounded-3xl shadow bottom-1/4 left-1/4">
            <div className="  flex justify-center items-center ">
              <div className="text-white text-sm font-medium">New</div>
            </div>
          </button>
          <div className="w-48 text-center text-gray-900 text-base font-semibold capitalize">
            COVID-19 ResourcesHelp icon
          </div>
        </div>
        <div className="w-72 h-80 bg-white rounded-xl shadow p-3 relative flex flex-col justify-evenly items-center">
          <img
            className="w-72 h-48 rounded-md"
            src={GratuatingStudentEnjoy}
            alt="women reading"
          />
          <button className=" absolute w-32 h-11 bg-emerald-500 hover:bg-emerald-600 hover:cursor-pointer rounded-3xl shadow bottom-1/4 left-1/4">
            <div className="  flex justify-center items-center ">
              <div className="text-white text-sm font-medium">New</div>
            </div>
          </button>
          <div className="w-48 text-center text-gray-900 text-base font-semibold capitalize">
            Early Education ProgramsHelp icon
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeSteps;

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
import { GrCircleInformation } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";

import WomenImage from "../assets/youngWomen.png";
import Pentagon from "../assets/Rectangle 2721.svg";

const StudentInfo = () => {
  return (
    <div className="bg-gray-100 p-20 relative ">
      <div className=" flex justify-between items-center py-20 z-10">
        <div className=" text-center text-gray-900 text-4xl font-semibold capitalize">
          Student Info
        </div>
        <div className="w-72 h-20 rounded-full shadow border border-gray-500 border-opacity-20 flex justify-start items-center bg-white ">
          <CiSearch className="text-lg text-black -300 w-10 h-10 mx-4" />
          <input
            className="pl-10 pr-4 py-2 w-full  outline-none bg-transparent text-left text-opacity-75 text-lg font-normal"
            placeholder="Search "
          />
        </div>
      </div>

      <div className="flex justify-center items-center padding-10 gap-1  ">
        <div className="relative ml-10">
          <img
            className="w-[800px]  rounded-t-full rounded-b-full "
            src={WomenImage}
            alt="women"
          />
          <div className="-top-10 -left-10 absolute z-1">
            <img className=" " src={Pentagon} alt="pentagon" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
              <GrCircleInformation className=" w-14 h-14 text-white" />
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center flex-wrap gap-3">

          <div className=" w-80 h-20 bg-white rounded-2xl border border-gray-950 border-opacity-10 shadow-lg flex justify-start items-center gap-3 pl-3">
            <div className="w-12 h-12 bg-red-500 rounded-full flex justify-center items-center  ">
              <PiStudentBold className=" text-white w-8 h-8" />
            </div>
            <div className=" text-black text-base font-medium leading-tight">
              Amplify/DibelsHelp icon
            </div>
          </div>
          <div className=" w-80 h-20 bg-white rounded-2xl border border-gray-950 border-opacity-10 shadow-lg flex justify-start items-center gap-3 pl-3">
            <div className="w-12 h-12 bg-red-500 rounded-full flex justify-center items-center  ">
              <PiStudentBold className=" text-white w-8 h-8" />
            </div>
            <div className=" text-black text-base font-medium leading-tight">
              Amplify/DibelsHelp icon
            </div>
          </div>
          <div className=" w-80 h-20 bg-white rounded-2xl border border-gray-950 border-opacity-10 shadow-lg flex justify-start items-center gap-3 pl-3">
            <div className="w-12 h-12 bg-red-500 rounded-full flex justify-center items-center  ">
              <PiStudentBold className=" text-white w-8 h-8" />
            </div>
            <div className=" text-black text-base font-medium leading-tight">
              Amplify/DibelsHelp icon
            </div>
          </div>
          <div className=" w-80 h-20 bg-white rounded-2xl border border-gray-950 border-opacity-10 shadow-lg flex justify-start items-center gap-3 pl-3">
            <div className="w-12 h-12 bg-red-500 rounded-full flex justify-center items-center  ">
              <PiStudentBold className=" text-white w-8 h-8" />
            </div>
            <div className=" text-black text-base font-medium leading-tight">
              Amplify/DibelsHelp icon
            </div>
          </div>
          <div className=" w-80 h-20 bg-white rounded-2xl border border-gray-950 border-opacity-10 shadow-lg flex justify-start items-center gap-3 pl-3">
            <div className="w-12 h-12 bg-red-500 rounded-full flex justify-center items-center  ">
              <PiStudentBold className=" text-white w-8 h-8" />
            </div>
            <div className=" text-black text-base font-medium leading-tight">
              Amplify/DibelsHelp icon
            </div>
          </div>
          <div className=" w-80 h-20 bg-white rounded-2xl border border-gray-950 border-opacity-10 shadow-lg flex justify-start items-center gap-3 pl-3">
            <div className="w-12 h-12 bg-red-500 rounded-full flex justify-center items-center  ">
              <PiStudentBold className=" text-white w-8 h-8" />
            </div>
            <div className=" text-black text-base font-medium leading-tight">
              Amplify/DibelsHelp icon
            </div>
          </div>
          <div className=" w-80 h-20 bg-white rounded-2xl border border-gray-950 border-opacity-10 shadow-lg flex justify-start items-center gap-3 pl-3">
            <div className="w-12 h-12 bg-red-500 rounded-full flex justify-center items-center  ">
              <PiStudentBold className=" text-white w-8 h-8" />
            </div>
            <div className=" text-black text-base font-medium leading-tight">
              Amplify/DibelsHelp icon
            </div>
          </div>
          <div className=" w-80 h-20 bg-white rounded-2xl border border-gray-950 border-opacity-10 shadow-lg flex justify-start items-center gap-3 pl-3">
            <div className="w-12 h-12 bg-red-500 rounded-full flex justify-center items-center  ">
              <PiStudentBold className=" text-white w-8 h-8" />
            </div>
            <div className=" text-black text-base font-medium leading-tight">
              Amplify/DibelsHelp icon
            </div>
          </div>
        </div>
      </div>

      <div className="text-left mt-20">
      <button
              className="  w-48 h-20 bg-red-500 rounded-xl shadow transition hover:bg-red-600 cursor-pointer  "
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

export default StudentInfo;

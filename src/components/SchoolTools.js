import React from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineCalendar } from "react-icons/ai";
import ViewMore from "../assets/ViewMore.svg";
import { LuFileSpreadsheet } from "react-icons/lu";
import { BsBook } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineThunderbolt } from "react-icons/ai";

import SchoolToolsCard from "../cards/SchoolToolsCard";

const SchoolTools = () => {
  return (
    <div className="bg-zinc-900 p-20 ">
      <div className=" flex justify-between items-center py-20">
        <div className=" text-center text-white text-4xl font-semibold capitalize">
          School Tools
        </div>
        <div className="w-72 h-20 rounded-full shadow border border-gray-100 border-opacity-20 flex justify-start items-center bg-opacity-75 bg-slate-500 ">
          <CiSearch className=" text-gray-300  mx-4 w-10 h-10 text-lg" />
          <input
            className="pl-10 pr-4 py-2 w-full text-zinc-800 outline-none bg-transparent text-left text-opacity-75 text-lg font-normal  "
            placeholder="Search "
          />
        </div>
      </div>

      <div className="flex justify-center items-center flex-wrap">
        <SchoolToolsCard />
        <div className="border border-emerald-500 border-opacity-25 px-10 py-5">
          <div className=" w-48 h-20 flex justify-start items-center gap-3    ">
            <div className=" w-16 h-16 bg-emerald-500 bg-opacity-10 rounded-full border border-emerald-500 border-opacity-25 flex justify-center items-center ">
              <LuFileSpreadsheet className="w-6 h-6 text-emerald-500" />
            </div>
            <div className=" text-white text-base font-normal capitalize">
              Annual GATE Card
            </div>
          </div>
        </div>
        <SchoolToolsCard />
        <div className="border border-emerald-500 border-opacity-25 px-10 py-5">
          <div className=" w-48 h-20 flex justify-start items-center gap-3    ">
            <div className=" w-16 h-16 bg-emerald-500 bg-opacity-10 rounded-full border border-emerald-500 border-opacity-25 flex justify-center items-center ">
              <LuFileSpreadsheet className="w-6 h-6 text-emerald-500" />
            </div>
            <div className=" text-white text-base font-normal capitalize">
              Annual GATE Card
            </div>
          </div>
        </div>

        <div className="border border-emerald-500 border-opacity-25 px-10 py-5">
          <div className=" w-48 h-20 flex justify-start items-center gap-3    ">
            <div className=" w-16 h-16 bg-emerald-500 bg-opacity-10 rounded-full border border-emerald-500 border-opacity-25 flex justify-center items-center ">
              <BsBook className="w-6 h-6 text-emerald-500" />
            </div>
            <div className=" text-white text-base font-normal capitalize">
              E-Library Health Icon
            </div>
          </div>
        </div>
        <div className="border border-emerald-500 border-opacity-25 px-10 py-5">
          <div className=" w-48 h-20 flex justify-start items-center gap-3    ">
            <div className=" w-16 h-16 bg-emerald-500 bg-opacity-10 rounded-full border border-emerald-500 border-opacity-25 flex justify-center items-center ">
              <AiOutlineCar className="w-6 h-6 text-emerald-500" />
            </div>
            <div className=" text-white text-base font-normal capitalize">
              E-Car K-12 Help Icon
            </div>
          </div>
        </div>
        <div className="border border-emerald-500 border-opacity-25 px-10 py-5">
          <div className=" w-48 h-20 flex justify-start items-center gap-3    ">
            <div className=" w-16 h-16 bg-emerald-500 bg-opacity-10 rounded-full border border-emerald-500 border-opacity-25 flex justify-center items-center ">
              <BsBook className="w-6 h-6 text-emerald-500" />
            </div>
            <div className=" text-white text-base font-normal capitalize">
              E-Library Health Icon
            </div>
          </div>
        </div>
        <div className="border border-emerald-500 border-opacity-25 px-10 py-5">
          <div className=" w-48 h-20 flex justify-start items-center gap-3    ">
            <div className=" w-16 h-16 bg-emerald-500 bg-opacity-10 rounded-full border border-emerald-500 border-opacity-25 flex justify-center items-center ">
              <AiOutlineCar className="w-6 h-6 text-emerald-500" />
            </div>
            <div className=" text-white text-base font-normal capitalize">
              E-Car K-12 Help Icon
            </div>
          </div>
        </div>

        <div className="border border-emerald-500 border-opacity-25 px-10 py-5">
          <div className=" w-48 h-20 flex justify-start items-center gap-3    ">
            <div className=" w-16 h-16 bg-emerald-500 bg-opacity-10 rounded-full border border-emerald-500 border-opacity-25 flex justify-center items-center ">
              <RiTeamLine className="w-6 h-6 text-emerald-500" />
            </div>
            <div className=" text-white text-base font-normal capitalize">
              My Team Help Icon
            </div>
          </div>
        </div>
        <div className="border border-emerald-500 border-opacity-25 px-10 py-5">
          <div className=" w-48 h-20 flex justify-start items-center gap-3    ">
            <div className=" w-16 h-16 bg-emerald-500 bg-opacity-10 rounded-full border border-emerald-500 border-opacity-25 flex justify-center items-center ">
              <AiOutlineThunderbolt className="w-6 h-6 text-emerald-500" />
            </div>
            <div className=" text-white text-base font-normal capitalize">
              E-Car K-12 Help Icon
            </div>
          </div>
        </div>
        <div className="border border-emerald-500 border-opacity-25 px-10 py-5">
          <div className=" w-48 h-20 flex justify-start items-center gap-3    ">
            <div className=" w-16 h-16 bg-emerald-500 bg-opacity-10 rounded-full border border-emerald-500 border-opacity-25 flex justify-center items-center ">
              <RiTeamLine className="w-6 h-6 text-emerald-500" />
            </div>
            <div className=" text-white text-base font-normal capitalize">
              My Team Help Icon
            </div>
          </div>
        </div>
        <div className="border border-emerald-500 border-opacity-25 px-10 py-5">
          <div className=" w-48 h-20 flex justify-start items-center gap-3    ">
            <div className=" w-16 h-16 bg-emerald-500 bg-opacity-10 rounded-full border border-emerald-500 border-opacity-25 flex justify-center items-center ">
              <AiOutlineThunderbolt className="w-6 h-6 text-emerald-500" />
            </div>
            <div className=" text-white text-base font-normal capitalize">
              E-Car K-12 Help Icon
            </div>
          </div>
        </div>
      </div>

      <button
            className="w-48 h-20 bg-emerald-500 rounded-xl shadow transition hover:bg-emerald-600 justify-center items-center text-emerald-white gap-2 mx-auto mt-20 cursor-pointer"
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

      {/* <div className="text-center mt-5">
        <div className="w-48 h-20 bg-emerald-500 rounded-xl shadow flex justify-center items-center text-emerald-white gap-2 mx-auto">
          <div className="Heading text-center text-white text-base font-medium capitalize">
            View More
          </div>
          <div>
            <img src={ViewMore} alt="view more" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SchoolTools;

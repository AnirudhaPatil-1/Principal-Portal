import React from "react";

import ViewMore from "../assets/ViewMore.svg";

import WhatsNewCard from "../cards/WhatsNewCard";
import WhatsNewSelectorCard from "../cards/WhatsNewSelectorCard";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineDown } from "react-icons/ai";
import { FaSchoolFlag } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";

import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";

const WhatsNew = () => {
  return (
    <div className=" relative bg-gray-100 p-20 ">
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

      <div className="flex justify-between items-start mt-20 relative">
        <div className=" flex flex-col justify-items-end relative">
          <div className=" flex flex-col justify-center items-center gap-5 mb-10">
            <WhatsNewSelectorCard />
            {/* <WhatsNewSelectorCard />
            <WhatsNewSelectorCard /> */}
            <div className=" relative flex justify-around items-center w-96 h-24 bg-white rounded-xl shadow border border-zinc-100 gap-">
              <div className="w-14 h-14 bg-emerald-500 bg-opacity-20 rounded-full border border-emerald-500 border-opacity-40 flex justify-center items-center">
                <FaSchoolFlag className="w-8 h-8  text-emerald-500" />
              </div>
              <div className=" heading font-medium">Local District</div>
              <div>
                <AiOutlineDown />
              </div>
            </div>
            <div className=" relative flex justify-around items-center w-96 h-24 bg-white rounded-xl shadow border border-zinc-100 gap-">
              <div className="w-14 h-14 bg-emerald-500 bg-opacity-20 rounded-full border border-emerald-500 border-opacity-40 flex justify-center items-center">
                <BiSolidCategoryAlt className="w-8 h-8  text-emerald-500" />
              </div>
              <div className=" heading font-medium">Local District</div>
              <div>
                <AiOutlineDown />
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <button
              className="  w-48 h-20 bg-emerald-500 rounded-xl shadow transition hover:bg-emerald-600 cursor-pointer "
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

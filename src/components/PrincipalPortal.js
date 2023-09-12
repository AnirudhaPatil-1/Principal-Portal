import React from "react";

import PrincipalPortalCard from "../cards/PrincipalPortalCard";

import Logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaSchoolFlag } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { PiStudentBold } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";

const PrincipalPortal = () => {
  return (
    <div className=" flex justify-between  items-center  bg-stone-300 p-20 ">
      <div className="flex flex-col justify-between items-start mr-10  ">
        <img className="w-60 h-60" src={Logo} alt="logo" />
        <div>
          <h1 className="w-96 h-24 text-center text-neutral-800 text-6xl font-semibold capitalize">
            PrincipalPortal
          </h1>
        </div>
        <div className="w-96 h-20 flex justify-start items-center bg-white rounded-full shadow border border-stone-300">
          <CiSearch className="w-6 h-6 mx-4" />
          <input
            className="pl-10 pr-4 py-2 w-full text-zinc-800 outline-none bg-transparent text-left"
            placeholder="What are you looking for"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-5 ">
        {/* <div className="  flex flex-col justify-center items-center w-56 h-56 bg-purple-500 rounded-3xl ">
          <div className= "bg-white h-24 w-24 rounded-full flex justify-center items-center ">
            <FaSchoolFlag className= 'text-3xl'/>
          </div>
          
          <p className="font-xl font-medium text-white">School Tools</p>
        </div> */}

        {/* <div   className="w-56 h-56 bg-blue-500 rounded-3xl"></div>
        <div className="w-56 h-56 bg-yellow-500 rounded-3xl"></div>
        <div className="w-56 h-56 bg-orange-500 rounded-3xl"></div>
        <div className="w-56 h-56 bg-red-500 rounded-3xl"></div>
        <div className="w-56 h-56 bg-green-500 rounded-3xl"></div> */}
        <div className="  flex flex-col justify-center items-center w-56 h-56 bg-purple-500 rounded-3xl gap-y-4 ">
          <div className="bg-white h-24 w-24 rounded-full flex justify-center items-center ">
            <FaSchoolFlag className="w-16 h-16" />
          </div>
          <p className="font-xl font-medium text-white">School Tools</p>
        </div>
        <div className="  flex flex-col justify-center items-center w-56 h-56 bg-blue-500 rounded-3xl gap-y-4 ">
          <div className="bg-white h-24 w-24 rounded-full flex justify-center items-center ">
            <FaLocationDot className="w-16 h-16" />
          </div>
          <p className="font-xl font-medium text-white">District OPS</p>
        </div>
        <div className="  flex flex-col justify-center items-center w-56 h-56 bg-yellow-500 rounded-3xl gap-y-4 ">
          <div className="bg-white h-24 w-24 rounded-full flex justify-center items-center ">
            <LiaCertificateSolid className="w-16 h-16" />
          </div>
          <p className="font-xl font-medium text-white">Certifications</p>
        </div>
        <div className="  flex flex-col justify-center items-center w-56 h-56 bg-orange-500 rounded-3xl gap-y-4 ">
          <div className="bg-white h-24 w-24 rounded-full flex justify-center items-center ">
            <BsFillRocketTakeoffFill className="w-16 h-16" />
          </div>
          <p className="font-xl font-medium text-white">Actions</p>
        </div>
        <div className="  flex flex-col justify-center items-center w-56 h-56 bg-red-500 rounded-3xl gap-y-4 ">
          <div className="bg-white h-24 w-24 rounded-full flex justify-center items-center ">
            <PiStudentBold className="w-16 h-16" />
          </div>
          <p className="font-xl font-medium text-white">Student Info</p>
        </div>
        <div className="  flex flex-col justify-center items-center w-56 h-56 bg-green-500 rounded-3xl gap-y-4 ">
          <div className="bg-white h-24 w-24 rounded-full flex justify-center items-center ">
            <LuCalendarDays className="w-16 h-16" />
          </div>
          <p className="font-xl font-medium text-white">Whats New</p>
        </div>
      </div>
    </div>
  );
};

export default PrincipalPortal;

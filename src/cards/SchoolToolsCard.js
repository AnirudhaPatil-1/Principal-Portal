import React from "react";

import { AiOutlineCalendar } from "react-icons/ai";

const SchoolToolsCard = () => {
  return (
    <div className="border border-emerald-500 border-opacity-25 px-10 py-5">
      <div className=" w-48 h-20 flex justify-start items-center gap-3    ">
        <div className=" w-16 h-16 bg-emerald-500 bg-opacity-10 rounded-full border border-emerald-500 border-opacity-25 flex justify-center items-center ">
          <AiOutlineCalendar className="w-6 h-6 text-emerald-500" />
        </div>
        <div className=" text-white text-base font-normal capitalize">
          Bell Schedule
        </div>
      </div>
    </div>

    
  );
};

export default SchoolToolsCard;

import React from "react";

import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineDown } from "react-icons/ai";

const WhatsNewSelectorCard = () => {
  return (
    <div className=" relative flex justify-around items-center w-96 h-24 bg-white rounded-xl shadow border border-zinc-100 gap-">
      <div className="w-14 h-14 bg-emerald-500 bg-opacity-20 rounded-full border border-emerald-500 border-opacity-40 flex justify-center items-center">
        <FaLocationDot className="w-8 h-8  text-emerald-500" />
      </div>
      <div className=" heading font-medium">Local District</div>
      <div>
        <AiOutlineDown />
      </div>
    </div>
  );
};

export default WhatsNewSelectorCard;

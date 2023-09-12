import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 pt-20 px-20 pb-5 flex flex-col justify-end items-center">
      <div className=" text-white text-lg font-medium capitalize">
        Browsers and Operating Systems Compatibility
      </div>
      <div className=" text-center text-white text-opacity-60 text-base font-normal capitalize leading-relaxed">
        © 2021 - LOS ANGELES UNIFIED SCHOOL DISTRICT
        <br />
        333 S Beaudry Ave., Los Angeles, CA 90017
      </div>
      <div className=" border  b-5 opacity-50"></div>
      <div className=" text-center">
        <span className="text-white text-opacity-60 text-sm font-normal ">
          Design By{" "}
        </span>
        <span className="text-white text-sm font-normal underline capitalize ">
          Dixellart
        </span>
      </div>
    </div>
  );
};

export default Footer;

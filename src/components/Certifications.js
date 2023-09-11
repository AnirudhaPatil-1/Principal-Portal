import React from "react";
import StudentsImage from "../assets/studentsImage.png";
import { FaCertificate } from "react-icons/fa6";
import CertificationsCard from "../cards/CertificationsCard";

import { GrLinkNext } from "react-icons/gr";

const Certifications = () => {
  return (
    <div className=" relative flex justify-evenly items-center py-24 bg-gray-100 ">
      <div className="relative">
        <img
          className=" rounded-md"
          src={StudentsImage}
          alt="studentimage"
        />
        <div className=" absolute flex justify-center items-center w-40 h-40   bg-amber-400  rounded-xl -bottom-20 -left-20 border-white border-8">
            <FaCertificate className="text-white  h-20 w-20" />
      </div>
      </div>
      <div className="flex flex-col justify-start items-center gap-5 ">
        <div className=" text-left text-gray-900 text-4xl font-semibold capitalize">
          Certifications
        </div>
        <CertificationsCard/>
        <CertificationsCard/>
        <CertificationsCard/> 
        <div className=" w-48 h-20 bg-amber-400 rounded-xl shadow flex justify-center items-center text-emerald-white gap-2 ">
            <div className="  Heading text-center text-white text-base font-medium capitalize">View More</div>
            <div>
              <GrLinkNext className='w-38 h-38 text-white '/>
            </div>
      </div>
      </div>
      
      

      
    </div>
  );
};

export default Certifications;

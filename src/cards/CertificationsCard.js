import React from 'react';

import { FaCertificate } from 'react-icons/fa6';

const CertificationsCard = () => {
  return (
    <div className=" w-96 h-28 bg-white rounded-2xl shadow border border-black-900 flex justify-center items-center gap-6 ">
          <div className=" flex justify-center items-center w-16 h-16   bg-amber-400  rounded-xl">
            <FaCertificate className="text-white h-10 w-10" />
          </div>
          <div className="Heading text-center text-indigo-950 text-xl font-medium capitalize">
            Administrator Certification
          </div>
        </div>
  )
}

export default CertificationsCard;
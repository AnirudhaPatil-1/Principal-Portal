import React from 'react';

import { FaSchoolFlag } from 'react-icons/fa6';

const menu = () => {
  return (
    <div className=" flex-col justify-evenly items-center w-56 h-56 bg-purple-500 rounded-3xl ">
          <div className= "bg-white h-24 w-24 rounded-full flex justify-center items-center ">
          <FaSchoolFlag className= 'text-3xl'/>
          </div>
          <p className="font-xl font-medium text-white">School Tools</p>
        </div>
  )
}

export default menu
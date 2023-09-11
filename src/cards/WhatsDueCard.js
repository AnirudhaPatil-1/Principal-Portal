import React from 'react';
import {AiOutlineClockCircle} from 'react-icons/ai';

const WhatsDueCard = () => {
  return (
    <div className=''>
        <div className='w-96 h-28 bg-white rounded-xl shadow-lg   p-4 flex justify-between items-center flex-wrap  '>
          <div className=' w-48 h-14 bg-white flex justify-center items-center'>
              <p className='text-lg font-medium capitalize'>Fall ShakeOut EarthQuake Drill</p>
          </div>
          <div className=' w-40 h-14 bg-emerald-500 rounded-full   shadow  flex justify-center items-center'>
              <div className='heading text-white text-base  flex justify-center items-center gap-2 '> 
                <AiOutlineClockCircle className='w-6 h-6'/> 
                <p>10-10-2021</p>
              </div>
          </div>
        </div>
      </div>
  )
}

export default WhatsDueCard
import React from 'react';

import WhatsDueCard from '../cards/WhatsDueCard';

import {FaLessThan} from 'react-icons/fa';
import {FaGreaterThan} from 'react-icons/fa';
import {AiOutlineClockCircle} from 'react-icons/ai';


const WhatsDue = () => {
  return (
    <div className='bg-gray-200 p-20'>
      <div className='flex justify-between items-center'>
        <h1 className=' text-center text-4xl font-semibold capitalize'>What's Due</h1>
        <div className=' w-96 h-16 bg-white  rounded-full border border-emerald-500 p-1 flex justify-between items-center  border-opacity-25 '>
          <div className='w-32 h-14 bg-emerald-500 rounded-full  flex justify-center items-center'>
            <p className='heading text-white text-lg font-medium '>All</p>
          </div>
          <div className='w-32 h-14 text-gray-500 rounded-full  flex justify-center items-center'>
            <p className='heading  text-lg font-medium '>Element</p>
          </div>
          <div className='w-32 h-14 text-gray-500  rounded-full  flex justify-center items-center'>
            <p className='heading  text-lg font-medium '>Second</p>
          </div>
        </div>
        <div className='flex justify-between items-center gap-2'>
          <FaLessThan/>
          <p className='heading  text-2xl font-medium text-gray-800'>March 2021</p>
          <FaGreaterThan/>
        </div>
      </div>
      {/* <div className=''>
        <div className='w-96 h-28 bg-white  p-8 flex justify-between items-center flex-wrap rounded-2xl'>
          <div className='w-32 h-14 bg-white flex justify-center items-center'>
              <p className='text-sm font-medium capitalize '>Fall ShakeOut EarthQuake Drill</p>
          </div>
          <div className='w-32 h-14 bg-emerald-500 rounded-full  flex justify-center items-center'>
              <div className='heading text-white text-base  flex justify-center items-center gap-1 '> 
                <AiOutlineClockCircle/> 
                <p>10-10-2021</p>
              </div>
          </div>
        </div>
      </div> */}
      <div className=' flex flex-wrap justify-between items-center gap-2 mt-10'>
        <WhatsDueCard/>
        <WhatsDueCard/>
        <WhatsDueCard/>
        <WhatsDueCard/>
        <WhatsDueCard/>
        <WhatsDueCard/>
        <WhatsDueCard/>
        <WhatsDueCard/>
        <WhatsDueCard/>
      </div>
    </div>
  )
}

export default WhatsDue
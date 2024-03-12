import React, { useEffect, useState } from 'react';
import { IoMdWater } from "react-icons/io";
import '../styles/ChartBox.css';

const ChartBox = () => {
  const [isVisible1, setIsVisible1] = useState(false);

  useEffect(() => {
    const animateSlide1 = () => {
      setIsVisible1(true);
      setTimeout(() => {
        setIsVisible1(false);
      }, 6300);
    };

    // Initially start the animation after 6 seconds
    const initialTimeout = setTimeout(() => {
      animateSlide1();
    }, 6300);

    // Repeat the animation every 12 seconds after the initial delay
    const repeatInterval = setInterval(() => {
      animateSlide1();
    }, 12600);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(repeatInterval);
    };
  }, []);

  return (
    <div className={`slide-container1 absolute ${isVisible1 ? 'slide-in1' : 'slide-out1'}`}>
      <div className="slide-content1">
        <div className='bg-white flex items-center justify-center w-[200px] h-[200px] rounded-xl'>
          <div className="donut-container m-6">
            <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
              <circle className="donut-hole" cx="20" cy="20" r="35.91549430918954" fill="#fff"></circle>
              <circle className="donut-ring" cx="20" cy="20" r="35.91549430918954" fill="transparent" stroke-width="3.5"></circle>
              <circle className="donut-segment donut-segment-2" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="70 30" stroke-dashoffset="95"></circle>
            </svg>
            <h1 className='absolute top-[85px] left-[90px] text-black text-2xl font-bold'>22</h1>
            <div className='flex absolute top-8 left-28'>
              <IoMdWater className='text-[#5356FF] text-lg font-bold' />
              <p className='text-sm font-light text-black ml-1'>H20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
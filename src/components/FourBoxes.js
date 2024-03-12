// SlideAnimation.js

import React, { useEffect, useState } from 'react';
import { MdAccessTimeFilled } from "react-icons/md";
import { IoHeartSharp } from "react-icons/io5";
import { GiWaterDrop } from "react-icons/gi";
import '../styles/FourBoxes.css';

const SlideAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const animateSlide = () => {
        setIsVisible(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 6300);
      };
  
      // Initially start the animation after 6 seconds
      const initialTimeout = setTimeout(() => {
        animateSlide();
      }, 6300);
  
      // Repeat the animation every 12 seconds after the initial delay
      const repeatInterval = setInterval(() => {
        animateSlide();
      }, 12600);
  
      return () => {
        clearTimeout(initialTimeout);
        clearInterval(repeatInterval);
      };
    }, []);
  
    return (
      <div className={`slide-container absolute left-28 top-[60px] ${isVisible ? 'slide-in' : 'slide-out'}`}>
        <div className="slide-content">
          <div className='flex items-center justify-center'>
          <div className='w-32 h-24 flex items-center justify-center bg-orange-transparent rounded-lg m-2'>
          <MdAccessTimeFilled />
          </div>
          <div className='w-32 h-24 flex items-center justify-center bg-white rounded-lg m-2'>
            <h1 className='text-black text-lg'>36 °</h1>
          </div>
          </div>
          <div className='flex items-center justify-center'>
          <div className='w-32 h-24 flex items-center justify-center bg-black-transparent rounded-lg m-2'>
          <GiWaterDrop className='text-blue-300' />
          </div>
          <div className='w-32 h-24 flex items-center justify-center bg-purple-transparent rounded-lg m-2'>
            <h1 className='flex text-black text-lg'>65 <IoHeartSharp className='mb-1 text-xs ml-1 text-green-500' /></h1>
          </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SlideAnimation;
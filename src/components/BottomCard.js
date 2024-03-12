// BottomCard.js
import React, { useEffect, useState } from 'react';
import { GoDotFill } from "react-icons/go";
import { FaCircleDot } from "react-icons/fa6";
import '../styles/BottomCard.css';

const BottomCard = () => {
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    const animateSlide3 = () => {
      setIsVisible3(true);
      setTimeout(() => {
        setIsVisible3(false);
      }, 6300);
    };

    // Initially start the animation after 6 seconds
    const initialTimeout1 = setTimeout(() => {
      animateSlide3();
    }, 6300);

    // Repeat the animation every 12 seconds after the initial delay
    const repeatInterval1 = setInterval(() => {
      animateSlide3();
    }, 12600);

    return () => {
      clearTimeout(initialTimeout1);
      clearInterval(repeatInterval1);
    };
  }, []);

  return (
    <div className={`slide-container3 absolute ${isVisible3 ? 'slide-in3' : 'slide-out3'}`} style={{ zIndex: 3 }}>
      <div className="slide-content3">
        <div className='bg-white bg-opacity-50  w-[180px] h-[80px] rounded-2xl'>
            <div className='flex space-x-4 text-sm items-center justify-center pt-8'>
            <GoDotFill className='text-gray-500' />
            <GoDotFill className='text-gray-500' />
            <FaCircleDot className='text-black' />
            </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCard;

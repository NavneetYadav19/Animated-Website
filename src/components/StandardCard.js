import React, { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { IoArrowUpOutline } from "react-icons/io5";
import '../styles/StandardCard.css';

const StandardCard = () => {
  const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    const animateSlide2 = () => {
      setIsVisible2(true);
      setTimeout(() => {
        setIsVisible2(false);
      }, 6300);
    };

    // Initially start the animation after 6 seconds
    const initialTimeout1 = setTimeout(() => {
      animateSlide2();
    }, 6300);

    // Repeat the animation every 12 seconds after the initial delay
    const repeatInterval1 = setInterval(() => {
      animateSlide2();
    }, 12600);

    return () => {
      clearTimeout(initialTimeout1);
      clearInterval(repeatInterval1);
    };
  }, []);

  return (
    <div className={`slide-container2 absolute ${isVisible2 ? 'slide-in2' : 'slide-out2'}`}>
      <div className="slide-content2">
      <div className='bg-white bg-opacity-50  w-[280px] h-[320px] rounded-2xl'>
        <div className='p-16'>
            <FaRegHeart className='text-xl text-black font-bold my-4' />
            <h1 className='text-2xl text-black font-bold my-4'>44'</h1>
            <svg className='line' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251 38">
                <path className='' fill="none" stroke="#FBA834" stroke-width="12" stroke-miterlimit="10" d="M0,9C17.93,9,17.93,29,35.85,29S53.78,9,71.71,9s17.92,20,35.85,20S125.49,9,143.42,9s17.93,20,35.86,20S197.21,9,215.14,9,233.07,29,251,29"/>
            </svg>
            <div className='absolute top-40 right-[270px] bg-black w-10 h-10 rounded-full'>
                <IoArrowUpOutline className='text-[#FBA834] m-[8px] text-2xl' />
            </div>
            <p className='text-lg text-slate-700 mt-4 font-medium'>Standard<br/>Snooze</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default StandardCard;
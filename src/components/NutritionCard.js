import React, { useEffect, useState } from 'react';
import { MdOutlineFastfood } from "react-icons/md";
import { FiArrowDownRight } from "react-icons/fi";

import '../styles/NutritionCard.css';
import AnimatedBarsWithDots from './AnimatedBarsWithDots';

const NutritionCard = () => {
  const [isVisible0, setIsVisible0] = useState(false);

  useEffect(() => {
    const animateSlide = () => {
      setIsVisible0(true);
      setTimeout(() => {
        setIsVisible0(false);
      }, 6300);
    };

    // Initially start the animation after 6 seconds
    const initialTimeout0 = setTimeout(() => {
      animateSlide();
    }, 6300);

    // Repeat the animation every 12 seconds after the initial delay
    const repeatInterval0 = setInterval(() => {
      animateSlide();
    }, 12600);

    return () => {
      clearTimeout(initialTimeout0);
      clearInterval(repeatInterval0);
    };
  }, []);

  return (
    <div className={`slide-container0 absolute top-[100px] ${isVisible0 ? 'slide-in0' : 'slide-out0'}`}>
      <div className="slide-content0 bg-white bg-opacity-75 p-10 rounded-2xl">
        <h1 className="text-black font-normal text-2xl">Nutrition</h1>
        <AnimatedBarsWithDots/>
        <MdOutlineFastfood className='text-black my-6 text-2xl' />
        <div className='flex'>
            <h1 className='text-black text-2xl font-bold'>2,227</h1>
            <div className='flex items-center justify-center text-[#FBA834] ml-14 space-x-4'>
                <FiArrowDownRight />
                <svg className='line2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251 38">
                    <path className='' fill="none" stroke="#FBA834" stroke-width="12" stroke-miterlimit="10" d="M0,9C17.93,9,17.93,29,35.85,29S53.78,9,71.71,9s17.92,20,35.85,20S125.49,9,143.42,9s17.93,20,35.86,20S197.21,9,215.14,9,233.07,29,251,29"/>
                </svg>
            </div>
        </div>
        <div className='flex mt-4'>
            <h1 className='text-black text-xl my-2 font-normal'>Grain</h1>
            <div className='flex items-center justify-center text-[#000] ml-16 space-x-4'>
                <FiArrowDownRight />
                <svg className='line2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251 38">
                    <path className='' fill="none" stroke="#000" stroke-width="12" stroke-miterlimit="10" d="M0,9C17.93,9,17.93,29,35.85,29S53.78,9,71.71,9s17.92,20,35.85,20S125.49,9,143.42,9s17.93,20,35.86,20S197.21,9,215.14,9,233.07,29,251,29"/>
                </svg>
            </div>
        </div>
        <div className='flex'>
            <h1 className='text-black text-xl my-2 font-normal'>Carbs</h1>
            <div className='flex items-center justify-center text-[#000] ml-16 space-x-4'>
                <FiArrowDownRight />
                <svg className='line2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251 38">
                    <path className='' fill="none" stroke="#000" stroke-width="12" stroke-miterlimit="10" d="M0,9C17.93,9,17.93,29,35.85,29S53.78,9,71.71,9s17.92,20,35.85,20S125.49,9,143.42,9s17.93,20,35.86,20S197.21,9,215.14,9,233.07,29,251,29"/>
                </svg>
            </div>
        </div>
        <div className='flex'>
            <h1 className='text-black text-xl my-2 font-normal'>Sugar</h1>
            <div className='flex items-center justify-center text-[#000] ml-16 space-x-4'>
                <FiArrowDownRight />
                <svg className='line2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251 38">
                    <path className='' fill="none" stroke="#000" stroke-width="12" stroke-miterlimit="10" d="M0,9C17.93,9,17.93,29,35.85,29S53.78,9,71.71,9s17.92,20,35.85,20S125.49,9,143.42,9s17.93,20,35.86,20S197.21,9,215.14,9,233.07,29,251,29"/>
                </svg>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionCard;

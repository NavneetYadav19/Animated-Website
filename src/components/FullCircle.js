// src/components/FullCircle.js
import React, { useState, useEffect } from 'react';
import '../styles/FullCircle.css';
import { Switch } from '@headlessui/react'
import { GiConverseShoe } from "react-icons/gi";
import { FaPlug } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";
import { FaBottleDroplet } from "react-icons/fa6";
import TransparentCircle from '../components/TransparentCircle';

const FullCircle = ({ setDonutProgress }) => {
  const [isPopped, setIsPopped] = useState(false);
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setIsPopped(true);
  }, []);

  return (
    <div className={`full-circle ${isPopped ? 'popped' : ''}`}>
      <TransparentCircle isPopped={isPopped} />
      
      <svg width="100%" height="100%" viewBox="0 0 40 40" className="full-circle-svg">
        <circle cx="50%" cy="50%" r="15.91549430918954" fill="black" strokeWidth="6.5" stroke="#000"></circle>
      </svg>

      <div className="box-container">
        <div className="box box-1">
            <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-green-600' : 'bg-green-500'}
              relative inline-flex h-[16px] w-[32px] items-center mx-4 mt-2 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
          >
            <span className="sr-only"></span>
            <span
              aria-hidden="true"
              className={`${enabled ? 'translate-x-4' : 'translate-x-0'}
                pointer-events-none inline-block h-[12px] w-[12px] transform rounded-full bg-black shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
            </Switch>
            <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-white' : 'bg-white'}
              relative inline-flex h-[16px] w-[32px] items-center mx-4 mt-1 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
          >
            <span className="sr-only"></span>
            <span
              aria-hidden="true"
              className={`${enabled ? 'translate-x-0' : 'translate-x-4'}
                pointer-events-none inline-block h-[12px] w-[12px] transform rounded-full bg-black shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
            </Switch>
          <p className="box-label">Summary</p>
        </div>
        <div className="box box-2">
          <GiConverseShoe className='m-6 text-yellow-400 text-md' />
          <p className="box-label">Performance</p>
        </div>
        <div className="box box-3">
          <FaPlug className='m-6 text-blue-200 text-md' />
          <p className="box-label">Body battery</p>
        </div>
        <div className="box box-4">
          <FaHeart className='m-6 text-red-500 text-md' />
          <p className="box-label">Rest status</p>
        </div>
        <div className="box box-5">
          <FaBowlFood className='m-6 text-md' />
          <p className="box-label">Nutrition</p>
        </div>
        <div className="box box-6">
          <FaBottleDroplet className='m-6 text-md' />
          <p className="box-label">Hydration</p>
        </div>
      </div>
    </div>
  );
};

export default FullCircle;

// src/Header.js

import React from 'react';
import { VscBellSlash } from "react-icons/vsc";
import { LuDot } from "react-icons/lu";
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ background: 'transparent' }}
      animate={{ background: 'rgba(169, 169, 169, 0.8)' }}
      className=" bg-transparent fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center"
    >
      <div className="text-black text-lg">Good morning <span className='mx-4'>11 Dec</span></div>
      <div className="flex text-lg items-center">
        <VscBellSlash className='font-bold mr-2 text-center' />
        <span className="text-black mr-6">11 10</span>
        <span className="flex text-black ml-4">22 <LuDot className='text-black text-xl' /></span>
      </div>
    </motion.header>
  );
};

export default Header;

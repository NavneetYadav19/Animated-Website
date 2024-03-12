// src/components/SlideText.js
import React, { useEffect } from 'react';
import { LuRepeat2 } from "react-icons/lu";
import '../styles/SlideText.css';

const SlideText = () => {
  useEffect(() => {
    const textSlide = document.querySelector('.text-slide');
    const text = textSlide.querySelectorAll('p');

    let counter = -1; // Initialize to -1 to start with "one" sliding from the left
    const size = text[0].clientWidth;

    const transitionDuration = 1500; // Adjust this value for the transition duration
    const visibleDuration = 6000; // Duration each text is visible

    const slide = () => {
      textSlide.style.transition = `transform ${transitionDuration / 1000}s ease`;
      counter++;
      textSlide.style.transform = `translateX(-${size * counter}px)`;

      if (counter >= text.length) {
        counter = 0;
        textSlide.style.transition = 'none';
        textSlide.style.transform = `translateX(-${size * counter}px)`;
        setTimeout(() => {
          textSlide.style.transition = `transform ${transitionDuration / 1000}s ease`;
        }, 0);
      }
    };

    // Initial slide to set the starting position
    slide();

    const intervalId = setInterval(() => {
      slide();
      setTimeout(() => {
        textSlide.style.transition = 'none';
        textSlide.style.transform = `translateX(${size}px)`;
        setTimeout(() => {
          textSlide.style.transition = `transform ${transitionDuration / 1000}s ease`;
        }, 0);
      }, visibleDuration);
    }, visibleDuration + transitionDuration); // Total duration for both "one" and "two"

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="carousel-container">
      <div className="text-slide text-xl">
        <p className='texts text-sm text-start' style={{ background: 'transparent' }}><span className='text-3xl font-bold'>Hello, Josh</span><br/> 18 minutes ago</p>
        <p className='texts text-start text-sm' style={{ background: 'transparent' }}><span className='text-start text-4xl font-bold'>97</span><br/><span className='text-start text-3xl font-bold mt-4 mb-4'>Goals<br/>Recap</span><br/><span className='flex mt-2'><LuRepeat2 className='text-lg text-black mx-1' />16700</span></p>
      </div>
    </div>
  );
};

export default SlideText;

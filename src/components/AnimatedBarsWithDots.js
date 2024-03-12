import React from 'react';

const AnimatedBarsWithDots = () => {
  return (
    <div className="flex justify-between  mx-auto mt-10">
      {[1, 2, 3, 4].map((bar) => (
        <div key={bar} className="flex flex-col items-center">
          {/* Bar */}
          <div
            className={`w-8 h-32 rounded-2xl ${
              bar === 4 ? 'bg-black' : 'bg-orange-500'
            } mb-4`}
          ></div>

          {/* Dots */}
          <div className="flex">
            {[1].map((dot) => (
              <div
                key={dot}
                className={`w-4 h-4 ${
                  bar === 4 ? 'bg-black' : 'bg-orange-500'
                } rounded-full mx-1`}
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedBarsWithDots;

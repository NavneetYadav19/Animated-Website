// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import FullCircle from './components/FullCircle';
import DonutCircle from './components/DonutCircle';
import ImageComponent from './components/ImageComponent';
import SlideText from './components/SlideText';
import FourBoxes from './components/FourBoxes';
import ChartBox from './components/ChartBox';
import StandardCard from './components/StandardCard';
import BottomCard from './components/BottomCard';
import NutritionCard from './components/NutritionCard';

function App() {
  const [donutProgress, setDonutProgress] = useState(0);

  return (
    <div style={{ overflow: 'hidden' }}>
    <div className="bg-gray-300 h-screen flex flex-col justify-center items-center relative">
      <NutritionCard/>
      <FourBoxes />
      <StandardCard/>
      <ChartBox/>
      <Header />
      <SlideText />
      <FullCircle setDonutProgress={setDonutProgress} />
      <DonutCircle />
      <ImageComponent />
      <BottomCard/>
    </div>
    </div>
  );
}

export default App;

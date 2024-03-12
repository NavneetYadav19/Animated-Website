// DonutCircle.js
import React, { useEffect, useState } from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  const { value, ...otherProps } = props;

  
  const rotation = -90 - (value / 100) * 340;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress
        variant="determinate"
        size={450} 
        thickness={5} 
        {...otherProps}
        value={value}
        style={{ color: 'black', transform: `rotate(${rotation}deg)` }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary"></Typography>
      </Box>
    </Box>
  );
}

const DonutCircle = () => {
  const [progress, setProgress] = useState(0);
  const [increasing, setIncreasing] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (increasing) {
        setProgress(85);
        setIncreasing(false);
      } else {
        setProgress(0);
        setIncreasing(true);
      }
    }, 7400); // Adjusted the interval to match the FullCircle animation

    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(timer);
    };
  }, [increasing]);

  return <CircularProgressWithLabel value={progress} />;
};

export default DonutCircle;

// ImageComponent.js
import React, { useState, useEffect } from 'react';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';

const ImageComponent = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    // Set a timeout to switch images every 7 seconds
    const timeout = setTimeout(() => {
      // Toggle between the images
      setShowFirstImage((prev) => !prev);
    }, 7500); // Change the timeout duration to 7000 milliseconds (7 seconds)

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timeout);
  }, [showFirstImage]); // Add showFirstImage as a dependency to useEffect

  return (
    <div
      style={{
        position: 'absolute',
        top: '56%',
        left: '51%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2, // Ensure the ImageComponent appears above DonutCircle and FullCircle
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {showFirstImage ? (
        <img
          src={img2} // Replace with the actual path to your first image
          alt="First Image"
          style={{ width: '350px', height: '600px' }} // Adjust image size as needed
        />
      ) : (
        <img
          src={img1} // Replace with the actual path to your second image
          alt="Second Image"
          style={{ width: '350px', height: '600px' }} // Adjust image size as needed
        />
      )}
    </div>
  );
};

export default ImageComponent;

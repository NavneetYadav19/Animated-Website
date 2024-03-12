// src/components/TransparentCircle.js
import React from 'react';
import '../styles/TransparentCircle.css';


const TransparentCircle = ({ isPopped }) => {
  return (
    <div className={`transparent-circle ${isPopped ? 'popped' : ''}`}>
      
    </div>
  );
};

export default TransparentCircle;

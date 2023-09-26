import React from 'react';
import './ScrollDownChevron.css';

const ScrollDownChevron = () => {
  return (
    <div className="scrollDownWrapper" onClick={handleScrollDown}>
      <div className="chevron"></div>
    </div>
  );

  function handleScrollDown() {
    window.scrollBy({
      top: window.innerHeight, 
      left: 0, 
      behavior: 'smooth'
    });
  }
}

export default ScrollDownChevron;

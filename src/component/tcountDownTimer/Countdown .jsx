import React, { useState, useEffect } from 'react';
import './countdown.css';

const CountdownTimer = () => {
  // Initial time in seconds (1 hour)
  const initialTime = 300 * 200;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          // Perform actions when the timer reaches zero
          console.log('Countdown complete!');
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, []); // The empty dependency array ensures the effect runs only once on mount

  // Convert seconds to hours, minutes, and seconds
  const Days = Math.floor(timeRemaining / 86400);
  // timeRemaining = timeRemaining % 86400;
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className='box_countdown'>

     
      <span style={{ color: '#fff', fontSize:'smaller', fontWeight:'900' }}>
        {` ${hours}:${minutes}:${seconds}`}
      </span>
      <span><i style={{color:'#fff'}} class="bi bi-stopwatch-fill"></i></span>
    </div>
  );
};

export default CountdownTimer;
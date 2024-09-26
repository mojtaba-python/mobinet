import React, { useState, useEffect } from 'react';
import './offer.css';

const TimerOffer = () => {
    // Initial time in seconds (1 hour)
    const initialTime = 100 * 200;
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
        <>
            <div className='box_timer_offer'>
                <div className='timer_offer box1_t_o'>
                   <span> {hours}</span>
                   <span> ساعت</span>
                </div>
                <div className='timer_offer box2_t_o'>
                    <span>{minutes}</span>
                    <span>دقیقه</span>
                </div>
                <div className='timer_offer box3_t_o'>
                    <span>{seconds}</span>
                    <span>ثانیه</span>
                </div>
            </div>
        </>
    );
};

export default TimerOffer;
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const CountDown = ({ targetDate }) => {
  const calculateTimeLeft =
    (() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference <= 0) {
        // timer expired
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    },
    []);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div>
      <section>
        <div className="flex justify-between items-center gap-1">
          <h2 className="text-sm font-semibold">Deals ends in : </h2>

          <div className="flex justify-between items-center gap-3 bg-[#F3DE6D] rounded-sm py-1 px-2">
            <section className="flex items-center justify-between text-sm font-semibold">
              <p>{timeLeft.days}</p>
              <h1>d</h1>
            </section>
            <span className="text-sm font-semibold">:</span>
            <section className="flex items-center justify-between text-sm font-semibold">
              <p>{timeLeft.hours}</p>
              <h1>h</h1>
            </section>
            <span className="text-sm font-semibold">:</span>
            <section className="flex items-center justify-between text-sm font-semibold">
              <p>{timeLeft.minutes}</p>
              <h1>m</h1>
            </section>
            <span className="text-sm font-semibold">:</span>
            <section className="flex items-center justify-between text-sm font-semibold">
              <p>{timeLeft.seconds}</p>
              <h1>s</h1>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountDown;

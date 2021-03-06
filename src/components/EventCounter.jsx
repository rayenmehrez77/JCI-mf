import React, { useEffect, useRef, useState } from "react";
import Timer from "./Timer";

import { ReactComponent as Calender } from "../images/calender.svg";

const Event = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const starTimer = () => {
    const countDownDate = new Date("February 16, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    starTimer();

    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="px-10 pt-4 pb-12 lg:p-18 max-w-full relative" id="event">
      <Calender className="w-12 h-12 lg:w-20 md:h-20 object-cover mx-auto mb-5" />
      <h1 className="text-sm sm:text-md text-gray-900 md:text-2xl lg:text-4xl w-full text-center font-bold space-y-2 tracking-widest">
        <span className="lg:block">L'ÉVÉNEMENT COMMENCERA DANS</span>
      </h1>
      <p className="font-extrabold mt-4 text-center text-sm sm:text-xl tracking-wider text-gray-900">
        {" "}
        ♦️ Planification d'une Action ♦️{" "}
      </p>
      <p className="font-extrabold mt-4 text-center text-sm sm:text-md tracking-wider text-gray-900">
        {" "}
        - Mercredi 16 Février 2022 -{" "}
      </p>
      <div className="flex space-x-3 sm:space-x-6 mt-8 justify-center">
        <Timer type="jours" count={timerDays} color="aqua" />
        <Timer type="HEURES" count={timerHours} color="gold" />
        <Timer type="MINUTES" count={timerMinutes} color="seafoam" />
        <Timer type="SECONDS" count={timerSeconds} color="navy" />
      </div>
      <div className="flex mt-8 items-center cursor-pointer text-xs text-center border px-6 w-28 mx-auto py-2 lg:text-sm lg:text-md rounded-full bg-brand text-white font-bold shadow-lg">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSczvj8t5sjli_NunRvGW1ekTUEyNr7mgKWc5sEfUNZrWifcTA/viewform?fbclid=IwAR2wV30MYu18Jm00meGDpdgcQjKUMR_XNee7mJkOv9BkX5GOWmKHbovzxkc"
          target="_blank"
        >
          Inscription
        </a>
      </div>
    </div>
  );
};

export default Event;

import React from "react";

const Timer = ({ type, count, color }) => {
  return (
    <div className="shadow-md relative p-2 lg:p-6 rounded-xl flex flex-col items-center w-20 h-22 sm:w-24 sm:h-24 lg:w-30 lg:h-28 lg:mx-1">
      <h2 className="text-xl sm:text-2xl md:text-5xl mb-2 sm:mb-3 font-bold text-gray-800">
        {count}
      </h2>
      <span className="font-bold text-xs text-gray-700 tracking-wide uppercase">
        {type}
      </span>
      <div
        className={`absolute inset-0 w-full h-full bg-${color} rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob`}
      />
    </div>
  );
};

export default Timer;

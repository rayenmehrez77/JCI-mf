import React from "react";

const Action = ({ desc, ar }) => {
  return (
    <div
      className={` md:max-w-full relative p-2 rounded-xl overflow-hidden z-10`}
    >
      <div className="text-center space-x-4">
        <p className="font-semibold text-white text-xs sm:text-lg tracking-wider">
          {desc}
        </p>
        <span className=" text-sm sm:text-lg tracking-widest">{ar}</span>
      </div>
    </div>
  );
};

export default Action;

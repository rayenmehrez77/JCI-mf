import React from "react";

const Title = ({ title, des1, des2, isWhite, skew, ar }) => {
  return (
    <>
      <h1
        className={`sm:text-4xl text-3xl  uppercase tracking-widest font-bold text-center  ${
          isWhite || skew
            ? "text-white z-50 transform skew-y-2 "
            : "text-gray-900"
        } `}
      >
        <span>{title} </span>
      </h1>
      <div className="flex flex-col items-center mt-4">
        <div className="w-20 my-1.5 h-0.5 gradient"></div>
        <div className="w-20 h-0.5 ml-16 gradient"></div>
      </div>
      <p className="text-center mt-8 font-bold text-gray-700">
        <h1
          className={`${
            isWhite || skew ? "text-white transform skew-y-2" : ""
          } block`}
        >
          <span className="block">{des1}</span>
          {ar && <span className="block tracking-wider text-lg">{ar}</span>}
        </h1>
        <span className="block">{des2}</span>
      </p>
    </>
  );
};

export default Title;

import React, { useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Fade from "react-reveal/Fade";

const Question = ({ title, description }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`${
        toggle ? " ring-1 ring-brand" : "border border-white"
      }border-gray-200 cursor-pointer px-3  lg:px-6 rounded `}
    >
      <div
        onClick={() => setToggle(!toggle)}
        className="flex items-center justify-between h-16"
      >
        <h1
          className={`font-bold ${
            toggle ? "text-brand" : "text-gray-600"
          }  sm:text-md xl:text-lg text-xs w-5/6	`}
        >
          {title}
        </h1>
        {toggle ? (
          <Fade>
            <IoMdArrowDropup
              className={`w-6 h-6 ${toggle ? "text-brand" : "text-gray-800"}`}
            />
          </Fade>
        ) : (
          <Fade>
            <IoMdArrowDropdown className="h-4 w-4 sm:w-6 sm:h-6 text-gray-800" />
          </Fade>
        )}
      </div>
      {toggle ? (
        <Fade>
          <p className="pb-3 font-semibold text-gray-600 sm:text-sm md:text-base text-xs">
            {description}
          </p>
        </Fade>
      ) : null}
    </div>
  );
};

export default Question;

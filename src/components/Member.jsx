import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const Member = ({ img, name, role, InstaLink, fbLink, LinkedInLink }) => {
  return (
    <div className="flex flex-col mx-auto lg:w-full items-center  ">
      <div
        className={`z-10 w-full h-full hover:rounded-b-xl relative transition transform cursor-pointer `}
      >
        <div className="h-32 w-32 sm:w-42 sm:h-42 lg:w-56 lg:h-56 rounded-full  mx-auto">
          <img
            src={img}
            alt="name"
            className=" object-cover rounded-full bg-aqua h-full w-full  hover:scale-50"
            width="640"
            height="360"
          />
        </div>
        <div className="py-4  flex items-center text-center flex-col  transition-all delay-100 rounded space-y-2">
          <div className="">
            <h1 className="lg:text-xl text-navy text-md font-extrabold">
              {name}
            </h1>
            <p className="font-extrabold text-gold text-sm lg:text-xl tracking-wider">
              {role}
            </p>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-800">
            {LinkedInLink ? (
              <a href={LinkedInLink} target="_blank" rel="noreferrer">
                <FaLinkedin className="lg:w-6 lg:h-6 w-5 h-5 text-navy" />
              </a>
            ) : null}
            {fbLink ? (
              <a href={fbLink} target="_blank" rel="noreferrer">
                <FaFacebook className="lg:w-6 lg:h-6  w-5 h-5 text-navy" />
              </a>
            ) : null}
            {InstaLink ? (
              <a href={InstaLink} target="_blank" rel="noreferrer">
                <AiOutlineInstagram className="lg:w-6 lg:h-6  w-5 h-5 text-navy" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;

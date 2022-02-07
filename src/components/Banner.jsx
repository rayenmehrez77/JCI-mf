import React from "react";

import teamImg from "../images/heroImage.png";
import heropxr from "../images/heropxr.jxr";
import herowbp from "../images/herowbp.webp";
import herojp2 from "../images/herojp2.jp2";

import { ImgNextGen } from "../components";
import { BsPlayFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link as LinkScroll } from "react-scroll";

const Banner = ({ setToggleModal, toggleModal }) => {
  return (
    <div className="relative mb-4">
      <ImgNextGen
        srcWebp={herowbp}
        srcJrx={heropxr}
        srcJp2={herojp2}
        fallback={teamImg}
        alt="Banner image"
        className="w-full h-min -mt-4	 object-center object-cover"
      />

      <button
        className="flex w-10 h-10 lg:h-16 lg:w-16 items-center hover:scale-105 hover:bg-brand-light rounded-full justify-center bg-brand absolute top-1/2 left-1/2 transform -translate-x-1/2 "
        onClick={() => setToggleModal(!toggleModal)}
      >
        <div className="animate-ping inline-flex h-full w-full rounded-full bg-sky-400 bg-brand absolute inset-0 duration-75"></div>
        <BsPlayFill className="lg:w-7 lg:h-7 w-4 h-4 text-white" />
      </button>
      <LinkScroll
        to="event"
        smooth={true}
        offset={50}
        duration={700}
        className="hover:text-aqua transition delay-100 flex flex-col items-center animate-bounce cursor-pointer center lg:-mt-20 -mt-12"
      >
        <MdKeyboardArrowDown className="lg:w-12 lg:h-12 w-8 h-8  text-gold" />
      </LinkScroll>
    </div>
  );
};

export default Banner;

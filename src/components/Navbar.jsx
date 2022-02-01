import React from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { Link as LinkScroll } from "react-scroll";
import { RiPhoneFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { ImgNextGen } from "../components";

import logowebp from "../images/logowbp.webp";
import logojxr from "../images/logojxr.jxr";
import logojp2 from "../images/logojp2.jp2";
import logopng from "../images/logov1.png";

const Navbar = ({ clicked, setClicked, scrollToTop }) => {
  return (
    <header
      className={`flex items-center h-20 py-6 shadow-2xl
      } fixed top-0 left-0 z-50 justify-between  lg:justify-around px-4 lg:px-6 w-full bg-gray-50`}
    >
      <Link to="/" className="flex items-center cursor-pointer">
        <ImgNextGen
          srcWebp={logowebp}
          srcJrx={logojxr}
          srcJp2={logojp2}
          fallback={logopng}
          alt="Banner image"
          className="lg:w-32 w-24 mt-2 object-cover "
        />
      </Link>
      {clicked ? (
        <IoClose
          className="w-8 h-8 lg:hidden flex object-cover cursor-pointer text-brand transition duration-300"
          onClick={() => setClicked(!clicked)}
        />
      ) : (
        <FiMenu
          className="w-8 h-8 lg:hidden flex object-cover cursor-pointer text-brand transition duration-300"
          onClick={() => setClicked(!clicked)}
        />
      )}

      <div className="lg:flex items-center hidden">
        <ul className="lg:flex items-center space-x-12 uppercase font-semibold text-gray-600 text-md hidden">
          <li
            onClick={scrollToTop}
            className="cursor-pointer hover:text-aqua transition delay-100 h-full"
          >
            Acceuil
          </li>
          <li>
            <LinkScroll
              to="event"
              smooth={true}
              offset={50}
              duration={700}
              className="cursor-pointer hover:text-aqua transition delay-100"
            >
              Événement
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="credo"
              smooth={true}
              offset={50}
              duration={700}
              className="cursor-pointer hover:text-aqua transition delay-100"
            >
              Credo
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="team"
              smooth={true}
              offset={50}
              duration={700}
              className="cursor-pointer hover:text-aqua transition delay-100"
            >
              Équipe
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="faq"
              smooth={true}
              offset={50}
              duration={700}
              className="cursor-pointer hover:text-aqua transition delay-100"
            >
              FAQ
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="suggestion"
              smooth={true}
              offset={50}
              duration={700}
              className="cursor-pointer hover:text-aqua transition delay-100"
            >
              Suggestion
            </LinkScroll>
          </li>
        </ul>
      </div>
      <div className="lg:inline-block hidden">
        <div className="flex items-center border px-6 py-2 text-sm lg:text-md rounded-full bg-brand text-white font-bold shadow-lg">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf8d7Z1vuNfh_yucC41WTACsT04L3x4EBx59S-88U3vWYPt0w/viewform"
            target="_blank"
          >
            Inscription
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

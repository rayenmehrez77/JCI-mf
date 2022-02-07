import React from "react";
import Fade from "react-reveal/Fade";
import { Link as LinkScroll } from "react-scroll";

const Dropdown = ({ clicked, setClicked, scrollToTop }) => {
  return (
    <Fade>
      <ul className="flex lg:hidden uppercase flex-col bg-opacity-90 pb-6  items-center justify-start pt-8 shadow-xl fixed left-0 top-20  w-full pl-4 border-t space-y-10 bg-gray-100 z-50 font-bold text-gray-600 text-lg">
        <li
          onClick={() => {
            scrollToTop();
            setClicked(!clicked);
          }}
          className="cursor-pointer"
        >
          Acceuil
        </li>
        <li>
          <LinkScroll
            onClick={() => setClicked(!clicked)}
            to="event"
            smooth={true}
            offset={50}
            duration={700}
            className="cursor-pointer"
          >
            Événement
          </LinkScroll>
        </li>
        <li>
          <LinkScroll
            onClick={() => setClicked(!clicked)}
            to="credo"
            smooth={true}
            offset={50}
            duration={700}
            className="cursor-pointer"
          >
            Credo
          </LinkScroll>
        </li>
        <li>
          <LinkScroll
            onClick={() => setClicked(!clicked)}
            to="team"
            smooth={true}
            offset={50}
            duration={700}
            className="cursor-pointer"
          >
            Équipe
          </LinkScroll>
        </li>
        <li>
          <LinkScroll
            onClick={() => setClicked(!clicked)}
            to="faq"
            smooth={true}
            offset={50}
            duration={700}
            className="cursor-pointer"
          >
            FAQ
          </LinkScroll>
        </li>
        <li>
          <LinkScroll
            onClick={() => setClicked(!clicked)}
            to="suggestion"
            smooth={true}
            offset={50}
            duration={700}
            className="cursor-pointer"
          >
            Suggestion
          </LinkScroll>
        </li>
        <div className="inline-block lg:hidden">
          <div className="flex items-center border px-4 py-2 text-sm rounded-full bg-brand text-white font-bold shadow-lg">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf8d7Z1vuNfh_yucC41WTACsT04L3x4EBx59S-88U3vWYPt0w/viewform"
              target="_blank"
            >
              Inscription
            </a>
          </div>
        </div>
      </ul>
    </Fade>
  );
};

export default Dropdown;

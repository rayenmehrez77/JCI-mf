import React, { useEffect, useState } from "react";
import {
  Actions,
  EventCounter,
  Footer,
  FrequentQuestions,
  Newsletter,
  Banner,
  Team,
  VideoModal,
} from "../components";

import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import { MdKeyboardArrowUp } from "react-icons/md";

const Homepage = () => {
  const [showButton, setShowButton] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="font-neuton">
      <main className="min-h-screen bg-white">
        <Banner toggleModal={toggleModal} setToggleModal={setToggleModal} />
        <EventCounter />
        <Actions />
        <Team />
        <FrequentQuestions />
        <Newsletter />
      </main>
      {toggleModal ? (
        <VideoModal toggleModal={toggleModal} setToggleModal={setToggleModal} />
      ) : null}
      {showButton && (
        <div className="-left-1 top-96 w-10 space-y-3 lg:space-y-6 fixed rounded-md ">
          <div className="relative p-2 z-50">
            <a href="https://www.facebook.com/JCI.mf.24" target="_blank">
              <img src={facebook} alt="" className="w-full h-full" />
            </a>
            <a
              href="https://www.instagram.com/jci.menzel_fersi/"
              target="_blank"
            >
              <img
                src={instagram}
                target="_blank"
                alt=""
                className="w-full h-full mt-2 lg:mt-4"
              />
            </a>
            <span className="absolute flex-col p-2 flex justify-center items-center -top-4 -right-2 lg:-top-2 lg:-right-4 bg-red-500 text-xs text-white rounded-full w-7 h-7 lg:w-8 lg:h-8">
              1.2K
            </span>
          </div>
        </div>
      )}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 gradient w-11 h-11 z-20 flex items-center justify-center shadow rounded cursor-pointer"
        >
          <MdKeyboardArrowUp className="w-8 h-6 text-white animate-bounce" />
        </button>
      )}
      <Footer scrollToTop={scrollToTop} />
    </div>
  );
};

export default Homepage;

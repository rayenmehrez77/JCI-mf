import React from "react";
import video from "../images/présentation.mp4";
import { RiCloseLine } from "react-icons/ri";
import Fade from "react-reveal/Fade";

const Modal = ({ setToggleModal, toggleModal }) => {
  return (
    <Fade>
      <div className="fixed top-32 w-full lg:w-1/2 lg:left-96 transform -translate-y-1/2  delay-100 z-50">
        <RiCloseLine
          className="w-6 h-6 ml-auto absolute right-0 -top-6 bg-red-500 text-white cursor-pointer"
          onClick={() => setToggleModal(!toggleModal)}
        />
        <video controls autoPlay>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </Fade>
  );
};

export default Modal;

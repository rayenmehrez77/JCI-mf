import React, { useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { addEmail } from "../firebase/firebase";
import { Link as LinkScroll } from "react-scroll";
import logo from "../images/logov1.png";

const Footer = ({ scrollToTop }) => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const db = getFirestore();

  const colRef = collection(db, "emails");

  const addEmail = (e) => {
    e.preventDefault();

    addDoc(colRef, {
      email: email,
    }).then(() => {
      setEmail("");
      setSuccessMessage("Merci de vous être abonné");
    });
  };
  return (
    <div className="bg-footerbg space-y-4 p-5 sm:p-6 md:p-8 flex items-center justify-center flex-col text-center">
      <div className="">
        <h1 className="lg:text-2xl text-xl font-bold text-gray-700 tracking-wider">
          Recevez nos dernières actualités
        </h1>
        <div className="flex flex-col items-center mt-2 mb-6">
          <div className="w-20 h-0.5 mx-auto gradient"></div>
        </div>
        <form>
          <div className="flex items-center border  border-gray-300 overflow-hidden flex-col h-10 bg-gray-100 md:flex-row rounded-full md:space-x-4 max-w-5xl justify-center my-2">
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-2 lg:px-4 bg-gray-100 outline-none h-full  text-gray-900 font-semibold "
              required
            />

            <button
              disabled={!email || successMessage}
              onClick={addEmail}
              type="submit"
              className="bg-brand h-full hidden md:flex text-sm items-center justify-center  rounded-full px-5 text-white outline-none"
            >
              Subscribe
            </button>
          </div>
          <button
            disabled={!email || successMessage}
            onClick={addEmail}
            type="submit"
            className="bg-brand h-full md:hidden py-1 my-2  rounded-full px-5 text-white outline-none"
          >
            Subscribe
          </button>
        </form>
      </div>
      {successMessage && (
        <h1 className="text-green-500 text-sm font-extrabold ">
          {successMessage}
        </h1>
      )}
      <img src={logo} alt="logo" className="lg:w-32 w-24 mt-2 object-cover " />
      <ul className="sm:flex items-center hidden sm:space-x-4 lg:space-x-12 uppercase font-semibold text-gray-600 text-sm lg:text-md py-6">
        <li onClick={scrollToTop} className="cursor-pointer hover:text-aqua">
          Acceuil
        </li>
        <li className="hover:text-aqua">
          <LinkScroll
            to="event"
            smooth={true}
            offset={50}
            duration={700}
            className="cursor-pointer"
          >
            Événement
          </LinkScroll>
        </li>
        <li className="hover:text-aqua">
          <LinkScroll
            to="credo"
            smooth={true}
            offset={50}
            duration={700}
            className="cursor-pointer"
          >
            Credo
          </LinkScroll>
        </li>
        <li className="hover:text-aqua">
          <LinkScroll
            to="team"
            smooth={true}
            offset={50}
            duration={700}
            className="cursor-pointer"
          >
            Équipe
          </LinkScroll>
        </li>
        <li className="hover:text-aqua">
          <LinkScroll
            to="faq"
            smooth={true}
            offset={50}
            duration={700}
            className="cursor-pointer"
          >
            FAQ
          </LinkScroll>
        </li>
        <li className="hover:text-aqua">
          <LinkScroll
            to="suggestion"
            smooth={true}
            offset={50}
            duration={700}
            className="cursor-pointer"
          >
            Suggestion
          </LinkScroll>
        </li>
      </ul>
      <div className="flex space-x-3">
        <a href="https://www.facebook.com/JCI.mf.24">
          <AiFillFacebook className="lg:w-8 lg:h-8 w-6 h-6 text-gray-800 hover:text-brand transition delay-50" />
        </a>
        <a href="https://www.instagram.com/jci.menzel_fersi/">
          <RiInstagramLine className="lg:w-8 lg:h-8 w-6 h-6 text-gray-800 hover:text-brand transition delay-50" />
        </a>
      </div>
      <h3 className=" text-sm sm:text-md md:text-lg font-semibold tracking-wider text-center text-gray-800 mt-4">
        Réalisé par{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://rayenmehrez.me/"
          className="text-brand font-bold"
        >
          Rayen Mehrez
        </a>
      </h3>
    </div>
  );
};

export default Footer;

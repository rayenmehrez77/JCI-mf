import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import img from "../images/rejoindre1.png";
import { BiRightArrowAlt } from "react-icons/bi";

const Newsletter = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  const db = getFirestore();

  const colRef = collection(db, "suggestions");

  const addSuggestion = (e) => {
    e.preventDefault();

    addDoc(colRef, {
      createdAt: new Date(),
      email,
      fullName,
      description,
      type,
    })
      .then(() => {
        setFullName("");
        setEmail("");
        setDescription("");
        setType("");
        setSuccessMessage(
          "Merci pour votre suggestion. Nous viendrons bientôt chez vous."
        );
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div
      className=" flex items-center gradient relative overflow-hidden"
      id="suggestion"
    >
      <div className="relative xl:inline-block hidden lg:mr-6 xl:mr-2">
        <img src={img} alt="" className="object-center object-cover" />
      </div>
      <div className="mx-auto py-12">
        <div className="space-y-2">
          <h1 className="mb-2 font-semibold text-white text-center md:text-left text-xl md:text-4xl capitalize">
            Donnez-nous votre suggestion
          </h1>
        </div>
        <form className=" mt-10 lg:max-w-7xl  w-full">
          <div className="">
            <div className="md:flex text-white">
              <div className="flex items-center space-x-4">
                <h1 className="lg:text-xl text-md ">Hey, Je suis</h1>
                <input
                  type="text"
                  required
                  className="block"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Votre nom et prénom"
                  className="bg-transparent border-b-2 outline-none w-56 placeholder-gray-200 text-sm focus:border-orange"
                />
                <h1> .</h1>
              </div>
              <div className="flex items-center space-x-4 mt-3  ">
                <h1 className="lg:text-xl text-md">Mon Tel ou Email: </h1>
                <input
                  type="text"
                  value={email}
                  placeholder="Email ou Tel "
                  className="block"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent text-sm border-b-2 w-44 lg:w-56 outline-none placeholder-gray-200 focus:border-orange "
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4  my-3 text-white">
            <h1 className="lg:text-xl text-md">Type de mon suggestion : </h1>
            <select
              className="border-b-2 outline-none text-white text-sm focus:border-orange bg-transparent"
              onChange={(e) => setType(e.target.value)}
              value={type}
            >
              <option
                value="collaboration"
                className="text-gray-800 bg-gray-100 text-sm"
              >
                Collaboration
              </option>
              <option
                value="sponsoring"
                className="text-gray-800 bg-gray-100 text-sm"
              >
                Sponsoring
              </option>
              <option
                value="avis"
                className="text-gray-800 bg-gray-100 text-sm"
              >
                Avis
              </option>
              <option
                value="autre"
                className="text-gray-800 bg-gray-100 text-sm"
              >
                Autre
              </option>
            </select>
          </div>
          <div className="flex items-center space-x-4  mt-4 text-white">
            <h1 className="lg:text-xl text-md">Suggestion: </h1>
            <input
              type="text"
              required
              placeholder="Mon suggestion"
              className="block"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border-b-2 text-sm w-full outline-none placeholder-gray-200 focus:border-orange bg-transparent"
            />
            <h1 className="lg:text-2xl text-md">!</h1>
          </div>
          <button
            disabled={!email || successMessage}
            onClick={addSuggestion}
            type="submit"
            className="flex  items-center py-1 mt-6 mx-auto space-x-2 text-sm lg:text-md px-6 btn-secondary text-gray-900 tracking-widest"
          >
            Envoyer
            <BiRightArrowAlt className="w-6 h-6" />
          </button>{" "}
        </form>
        {successMessage ? (
          <h1 className="text-green-400 py-2 mt-2 w-full text-center text-xs  lg:text-md">
            {successMessage}
          </h1>
        ) : (
          error
        )}
      </div>
      <div className="absolute top-4 -right-2 lg:top-4 lg:right-20 lg:w-24 lg:h-24 w-8 h-8  bg-blue-600 rounded-full filter opacity-30"></div>
      <div className="absolute top-4 left-10 lg:top-4 lg:right-20 lg:w-14 lg:h-14 sm:w-8 sm:h-8 w-4 h-4  bg-orange rounded-full opacity-80"></div>
    </div>
  );
};

export default Newsletter;

import React from "react";

const Card = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-8 cursor-pointer font-bold group hover:shadow-lg hover:border-transparent rounded-lg ">
      <div className="border p-2 rounded-full">
        <Icon className="w-24 h-24  text-blue-800 group-hover:text-yellow-500 transition duration-500 ease-in-out group-hover:scale-110 " />
      </div>
      <h1 className="py-4">{title}</h1>
      <p className="w-96 text-center text-gray-700">{description}</p>
    </div>
  );
};

export default Card;

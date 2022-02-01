import React from "react";
import img from "../images/jci.png";

const Logo = () => {
  return (
    <div className="flex items-start flex-col">
      <img src={img} alt="logo" className="lg:h-11 h-8 object-cover" />
      <p className="font-semibold text-yellow-500 text-xs uppercase sm:text-sm">
        Menzel fersi
      </p>
    </div>
  );
};

export default Logo;

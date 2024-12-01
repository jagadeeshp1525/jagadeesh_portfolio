import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { BiMenu } from "react-icons/bi";
import Logo from "../../assets/ciaara-logo-white.png";
import { AppContext } from "../../Utilities/Context.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  const { customClass, setCustomClass } = useContext(AppContext);

  return (
    // <div className="w-full bg-[#1e2b8a]">
    <div className="w-full bg-transparent absolute top-0 left-0 z-10">
      <div className="container w-full z-30 lg:py-5 py-5 ">
        <div className="flex justify-between items-center">
          <div className="logo ">
            <a href="/">
              {/* <img src={Logo} alt="" title="" className="lg:w-40 w-32" /> */}
              <span className="text-white text-4xl tracking-wider">dfghj</span>
            </a>
          </div>
          <div>
            <Navbar />
            <button
              className="items-center md:hidden inline-block"
              onClick={() => setCustomClass("sidebarMobile")}
            >
              <BiMenu className="text-white" size={40} />
            </button>
          </div>
          <div className="md:inline-block hidden">
            <a
              href="/contact-us"
              className="bg-custom-gradient text-white px-5 py-2 rounded-2xl"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const ThankYou = () => {
  return (
    <div className="bg-transparent">
      <Header />
      <div className="w-full text-center pt-[200px] pb-[100px] bg-[#fffff]">
        <h4 className="lg:text-3xl md:text-lg inline-block px-3 py-2 rounded-lg text-[#000000] font-medium text-center mb-1 font-montserrat">
          Thank You!
        </h4>
        <h2 className="lg:text-xl md:text-lg text-[#000000] font-medium text-center mb-6 font-montserrat">
          Thank you for reaching out to us. We will get back to you shortly
        </h2>
        <NavLink
          to="/"
          // onClick={() => navigate("/")}
          className="text-[#ffffff] bg-[#1d2d4e] font-bold uppercase text-base px-5 py-2 rounded-xl border border-[#ffffff] hover:bg-transparent hover:border hover:border-[#1d2d4e] hover:text-[#1d2d4e] transition-all ease-out inline-block "
        >
          Back to Home
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;

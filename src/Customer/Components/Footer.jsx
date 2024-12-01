import React from "react";
import Logo from "../../assets/ciaara-logo-white.png";
import {
  BsBriefcase,
  BsStar,
  BsAward,
  BsHouseGear,
  BsTwitterX,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
const Footer = () => {
  return (
    <div className="w-full">
      <div className="w-full sm:px-10 md:px-10 lg:px-16 px-5 bg-white lg:py-10 py-2 ">
        <div className="container">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
            <div className="w-full">
              <div className="logo mb-4">
                <h2 className="text-[#565764] text-5xl font-medium">VJS</h2>
              </div>
              <p className="text-base text-[#565764] text-left">
                Founded in 2015, Ciaara Home Interiors stands as a beacon of
                innovation in interior design in Bangalore.
              </p>

              <div className="w-full flex justify-start gap-3 items-start mt-6">
                <a
                  href=""
                  className="text-[#565764] px-3 py-3 hover:bg-[#565764] hover:text-[#ffffff] transition-all ease-in-out rounded-full border border-[#565764]"
                >
                  <BsTwitterX />
                </a>
                <a
                  href=""
                  className="text-[#565764] px-3 py-3 hover:bg-[#565764] hover:text-[#ffffff] transition-all ease-in-out rounded-full border border-[#565764]"
                >
                  <BsInstagram />
                </a>
                <a
                  href=""
                  className="text-[#565764] px-3 py-3 hover:bg-[#565764] hover:text-[#ffffff] transition-all ease-in-out rounded-full border border-[#565764]"
                >
                  <BsFacebook />
                </a>
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-[#565764] font-medium text-2xl  mb-5">
                Information
              </h2>
              <ul className="mb-3 flex flex-col gap-3 list-disc pl-4">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>

                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="w-full">
              <h2 className="text-[#565764] font-medium text-2xl  mb-5">
                Services
              </h2>
              <ul className="mb-3 flex flex-col gap-3 list-disc pl-4">
                <li>
                  <a href="/services/digital-marketing">Digital Marketing</a>
                </li>
                <li>
                  <a href="/services/web-development">Web Development</a>
                </li>
                <li>
                  <a href="/services/mobile-app-development">
                    Mobile App Development
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h2 className="text-[#565764] text-xl font-semibold mb-5">
                Connect with Us
              </h2>

              <div className="mb-3">
                <h3 className="text-base text-[#565764] font-semibold mb-2">
                  Phone:
                </h3>
                <p className="text-base text-[#565764] font-normal">
                  <a href="tel:+919113849914"> +91 94949 49494</a>
                </p>
              </div>

              <div className="mb-3">
                <h3 className="text-base text-[#565764] font-semibold mb-2">
                  Email:
                </h3>
                <p className="text-base text-[#565764] font-normal">
                  <a href="mailto:service@vjs.com"> service@vjs.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full container text-center py-3 border-t border-t-[#565764]">
        <p>© 2024 Copyrights by company. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

import React, { Fragment, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch, BsChevronDown } from "react-icons/bs";
import { Disclosure, Menu, Transition } from "@headlessui/react";

const Navbar = () => {
  const pathname = window.location.pathname;

  return (
    <div>
      <div className="nav-menu w-full relative md:inline-block hidden">
        <ul className="md:flex md:flex-row flex flex-col justify-end md:items-center items-start md:gap-6 lg:gap-8 gap-6">
          <li>
            <a
              href="/"
              className={
                pathname == "/"
                  ? "text-[#ffffff] inline-block font-medium text-sm pb-1 border-b border-[#d9d9d9] hover:border-[#d9d9d9] hover:border-b"
                  : "text-[#ffffff] inline-block font-medium text-sm pb-1 border-b border-transparent hover:border-[#d9d9d9] hover:border-b hover:text-[#d9d9d9]"
              }
            >
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="/about-us"
              className={
                pathname == "/about-us"
                  ? "text-[#ffffff] inline-block font-medium text-sm pb-1 border-b border-[#d9d9d9] hover:border-[#d9d9d9] hover:border-b"
                  : "text-[#ffffff] inline-block font-medium text-sm pb-1 border-b border-transparent hover:border-[#d9d9d9] hover:border-b hover:text-[#d9d9d9]"
              }
            >
              <span>About Us</span>
            </a>
          </li>

          <li>
            <div className="z-[9999]">
              <div class="group relative cursor-pointer py-0">
                <div>
                  <a
                    href="#"
                    className={
                      pathname == "#"
                        ? "text-[#ffffff] inline-block font-medium text-sm pb-1 border-b border-[#d9d9d9] hover:border-[#d9d9d9] hover:border-b"
                        : "text-[#ffffff] inline-block font-medium text-sm pb-1 border-b border-transparent hover:border-[#d9d9d9] hover:border-b hover:text-[#d9d9d9]"
                    }
                    onClick=""
                  >
                    <span className="flex items-center gap-1">
                      Services
                      <BsChevronDown className="inline-block" />
                    </span>
                  </a>
                </div>
                <div
                  class="invisible absolute z-50 flex w-60 rounded-lg flex-col bg-gray-100 py-1 px-2 text-gray-800 shadow-xl group-hover:visible transition-all ease-in"
                  onClick=""
                >
                  <a
                    href="/services/digital-marketing"
                    className="block px-2 py-2 text-sm font-medium text-black"
                  >
                    Digital Marketing
                  </a>

                  <a
                    href="/services/web-development"
                    className="block px-2 py-2 text-sm font-medium text-black"
                  >
                    Web Development
                  </a>
                  <a
                    href="/services/mobile-app-development"
                    className="block px-2 py-2 text-sm font-medium text-black"
                  >
                    Mobile App Development
                  </a>
                </div>
              </div>
            </div>
          </li>

          {/* <li>
            <a
              href="/blog"
              className={
                pathname == "/blog"
                  ? "text-[#ffffff] inline-block font-medium text-sm pb-1 border-b border-[#d9d9d9] hover:border-[#d9d9d9] hover:border-b"
                  : "text-[#ffffff] inline-block font-medium text-sm pb-1 border-b border-transparent hover:border-[#d9d9d9] hover:border-b hover:text-[#d9d9d9]"
              }
            >
              <span>Blog</span>
            </a>
          </li> */}

          <li>
            <a
              href="/contact-us"
              className={
                pathname == "/contact-us"
                  ? "text-[#ffffff] inline-block font-medium text-sm pb-1 border-b border-[#d9d9d9] hover:border-[#d9d9d9] hover:border-b"
                  : "text-[#ffffff] inline-block font-medium text-sm pb-1 border-b border-transparent hover:border-[#d9d9d9] hover:border-b hover:text-[#d9d9d9]"
              }
            >
              <span>Contact Us</span>
            </a>
          </li>

          {/* <li>
            <Link
              to=""
              className={
                pathname == ""
                  ? "text-sm py-1 px-5 border border-[#8925AE] bg-[#8925AE] hover:bg-transparent text-white hover:text-black transition-all ease-in inline-block rounded-full"
                  : "text-sm py-1 px-5 border border-[#8925AE] bg-[#8925AE] hover:bg-transparent text-white hover:text-black transition-all ease-in inline-block rounded-full"
              }
            >
              <span>Blog</span>
            </Link>
          </li> */}

          {/* <li>
            <a
              href=""
              className={
                pathname == ""
                  ? "text-[#444444] flex items-center gap-2 font-normal  text-sm pb-1 border-b border-[#8925AE] hover:border-[#8925AE] hover:border-b"
                  : "text-[#444444] flex items-center gap-2 font-medium  text-sm pb-1 border-b border-transparent hover:border-[#8925AE] hover:border-b hover:text-[#8925AE]"
              }
            >
              <BsSearch className="text-[#8925AE]" />
              <span>Search</span>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SidebarMobile from "./Components/SidebarMobile";
import {
  BsBriefcase,
  BsStar,
  BsAward,
  BsHouseGear,
  BsTwitterX,
  BsInstagram,
  BsFacebook,
  BsMegaphoneFill,
  BsArrowRight,
  BsEmojiSmile,
  BsPeople,
} from "react-icons/bs";
import HomeImg2 from "../assets/06.png";
import ChooseIcon1 from "../assets/choose-icon-1.png";
import ChooseIcon2 from "../assets/choose-icon-2.png";
import ChooseIcon3 from "../assets/choose-icon-3.png";
import AboutUsImg1 from "../assets/about-us.webp";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <SidebarMobile />
      <div className="w-full bg-[#05003B] z-30 rounded-sm mb-10">
        <div className="relative lg:h-[450px] h-[300px] flex flex-col items-center justify-center">
          <div className="w-full md:max-w-4xl max-w-full mx-auto text-center px-6 ">
            <h1 className="text-white lg:text-5xl md:text-3xl text-3xl font-semibold mb-3 lg:leading-[60px] leading-[40px]">
              About Us
            </h1>
            <p className="text-[#d7d7d7] md:text-xl text-sm font-normal mb-6">
              All in one SEO for your business to give real impact consultancy
              and analysis.!
            </p>
          </div>
        </div>
      </div>

      <div className="w-full py-10">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center justify-center">
            <div className="w-full">
              <img src={HomeImg2} className="w-full" alt="" />
            </div>
            <div className="w-full">
              <h4 className="text-black bg-[#eff2fe] px-3 py-1.5 text-base font-semibold rounded-md inline-block mb-3">
                About Us
              </h4>
              <h2 className="md:text-4xl text-2xl text-[#000000] font-semibold mb-6">
                What makes Us <br />
                Different from Others
              </h2>
              <p>
                Migrating your rank tracking tool is like migrating from Google
                Analytics to another solution. Migrating your rank tracking tool
                is like migrating from Google Analytics to another
                solution.Migrating your rank tracking tool is like migrating
                from Google Analytics to another solution.
              </p>
              <div className="mt-4">
                <a
                  href="/contact-us"
                  className="bg-custom-gradient text-white px-5 py-2 rounded-2xl"
                >
                  Get in Touch
                </a>
              </div>

              {/* <div className="w-full grid md:grid-cols-3 grid-cols-2 justify-center items-start gap-8 mt-6">
                <div className="w-full rounded-xl p-7 shadow-md border border-[#b9b9b9] hover:shadow-2xl transition-all ease-in-out">
                  <img src={ChooseIcon1} className="max-w-full mb-3" alt="" />
                  <h2 className="text-[#565764] font-medium text-lg">
                    Experts <br />
                    Consulting
                  </h2>
                </div>
                <div className="w-full rounded-xl p-7 shadow-md border border-[#b9b9b9] hover:shadow-2xl transition-all ease-in-out">
                  <img src={ChooseIcon2} className="max-w-full mb-3" alt="" />
                  <h2 className="text-[#565764] font-medium text-lg">
                    Competitor <br />
                    Analysis
                  </h2>
                </div>
                <div className="w-full rounded-xl p-7 shadow-md border border-[#b9b9b9] hover:shadow-2xl transition-all ease-in-out">
                  <img src={ChooseIcon3} className="max-w-full mb-3" alt="" />
                  <h2 className="text-[#565764] font-medium text-lg">
                    Responsive <br />
                    Support
                  </h2>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-10">
        <div className="container">
          <div className="w-full relative">
            <img
              src={AboutUsImg1}
              className="w-full md:inline-block hidden"
              alt=""
            />
            <div className="w-[90%] md:absolute static md:top-1/2 top-auto md:left-1/2 left-auto md:-translate-x-1/2 transform-none">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="w-full">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-xl text-black font-semibold mb-2">
                      Our Mission
                    </h2>
                    <p className="text-base font-medium">
                      we are in business to develop an SEO software that allows
                      anyone to independently optimize and promote a website on
                      the web, regardless of the level of expertise.
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-xl text-black font-semibold mb-2">
                      Our Purpose
                    </h2>
                    <p className="text-base font-medium">
                      We aim to constantly improve the user experience,
                      functionality, and support to provide the best possible
                      options for search engine optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#05003B] md:py-20 py-6">
        <div className="container">
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-6 items-start justify-center">
            <div className="w-full md:col-span-1 col-span-full">
              <h4 className="text-white text-lg mb-4">Contact Us</h4>
              <h2 className="text-white text-3xl mb-6 font-semibold">
                Ready to get started? <br />
                Let's chat.
              </h2>
              <div className="w-full">
                <div className="rounded-3xl p-10 bg-[#ffffff11] text-white">
                  <div className="mb-3">
                    <h3 className="text-basefont-semibold mb-2">Phone:</h3>
                    <p className="text-base font-normal">
                      <a href="tel:+919113849914"> +91 94949 49494</a>
                    </p>
                  </div>

                  <div className="mb-3">
                    <h3 className="text-base font-semibold mb-2">Email:</h3>
                    <p className="text-base font-normal">
                      <a href="mailto:service@vjs.com"> service@vjs.com</a>
                    </p>
                  </div>
                  <div className="w-full flex justify-start gap-3 items-start mt-6">
                    <a
                      href=""
                      className="text-[#ffffff] px-3 py-3 hover:bg-[#ffffff] hover:text-[#565764] transition-all ease-in-out rounded-full border border-[#565764]"
                    >
                      <BsTwitterX />
                    </a>
                    <a
                      href=""
                      className="text-[#ffffff] px-3 py-3 hover:bg-[#ffffff] hover:text-[#565764] transition-all ease-in-out rounded-full border border-[#565764]"
                    >
                      <BsInstagram />
                    </a>
                    <a
                      href=""
                      className="text-[#ffffff] px-3 py-3 hover:bg-[#ffffff] hover:text-[#565764] transition-all ease-in-out rounded-full border border-[#565764]"
                    >
                      <BsFacebook />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:col-span-2 col-span-full">
              <div className="rounded-3xl p-10 bg-[#ffffff11] text-white">
                <h2 className="text-white text-3xl mb-6 font-semibold">
                  Send Message
                </h2>
                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="col-span-1">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-3 py-3 rounded-xl bg-[#312C61]"
                    />
                  </div>
                  <div className="col-span-1">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-3 py-3 rounded-xl bg-[#312C61]"
                    />
                  </div>
                  <div className="col-span-full">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-3 py-3 rounded-xl bg-[#312C61]"
                    />
                  </div>
                  <div className="col-span-full">
                    <textarea
                      rows={6}
                      type="text"
                      placeholder="Message"
                      className="w-full px-3 py-3 rounded-xl bg-[#312C61]"
                    ></textarea>
                  </div>
                  <div className="w-full col-span-full text-center">
                    <div>
                      <a
                        href=""
                        className="bg-custom-gradient text-white px-5 py-2 rounded-2xl"
                      >
                        Send Message
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;

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
const ContactUs = () => {
  return (
    <div>
      <Header />
      <SidebarMobile />
      <div className="w-full bg-[#05003B] z-30 rounded-sm mb-10">
        <div className="relative lg:h-[450px] h-[300px] flex flex-col items-center justify-center">
          <div className="w-full md:max-w-4xl max-w-full mx-auto text-center px-6 ">
            <h1 className="text-white lg:text-5xl md:text-3xl text-3xl font-semibold mb-3 lg:leading-[60px] leading-[40px]">
              Contact Us
            </h1>
            <p className="text-[#d7d7d7] md:text-xl text-sm font-normal mb-6">
              All in one SEO for your business to give real impact consultancy
              and analysis.!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:py-10 py-6 mb-10 contact-bg bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-6 items-start justify-center">
            <div className="w-full md:col-span-1 col-span-full">
              <h4 className="text-black text-lg mb-4 font-medium">
                Contact Us
              </h4>
              <h2 className="text-black text-3xl mb-6 font-semibold">
                Ready to get started? <br />
                Let's chat.
              </h2>
              <div className="w-full">
                <div className="rounded-3xl p-10 bg-[#05003B] text-white">
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
              <div className="rounded-3xl p-10 bg-white border border-[#ccc] shadow-xl text-black">
                <h2 className="text-black text-3xl mb-6 font-semibold">
                  Send Message
                </h2>
                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="col-span-1">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-3 py-3 rounded-xl border border-[#ccc]"
                    />
                  </div>
                  <div className="col-span-1">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-3 py-3 rounded-xl border border-[#ccc]"
                    />
                  </div>
                  <div className="col-span-full">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-3 py-3 rounded-xl border border-[#ccc]"
                    />
                  </div>
                  <div className="col-span-full">
                    <textarea
                      rows={6}
                      type="text"
                      placeholder="Message"
                      className="w-full px-3 py-3 rounded-xl border border-[#ccc]"
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

export default ContactUs;

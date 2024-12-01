import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Bg from "../assets/bg2-2.jpg";
import Img1 from "../assets/img1.jpg";
import Int1 from "../assets/interior1-1.jpg";
import Int2 from "../assets/interior1-2.jpg";
import Int3 from "../assets/interior1-3.jpg";
import Int4 from "../assets/interior1-4.jpg";
import Int5 from "../assets/interior1-5.jpg";
import Int6 from "../assets/interior1-6.jpg";
import Int7 from "../assets/interior1-7.jpg";
import Int8 from "../assets/interior1-8.jpg";
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
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import ContactForm from "./Components/ContactForm";
import Icon1 from "../assets/choose-4-shape-1.png";
import Icon2 from "../assets/choose-4-shape-2.png";
import Icon3 from "../assets/choose-4-shape-3.png";

import Icon11 from "../assets/counter-shape-4-1.png";
import Icon12 from "../assets/counter-shape-4-2.png";
import Icon13 from "../assets/counter-shape-4-3.png";
import Icon14 from "../assets/counter-shape-4-4.png";
import Icon15 from "../assets/counter-shape-4-5.png";
import SidebarMobile from "./Components/SidebarMobile";
import HomeImg1 from "../assets/05.png";
import HomeImg2 from "../assets/06.png";
import ChooseIcon1 from "../assets/choose-icon-1.png";
import ChooseIcon2 from "../assets/choose-icon-2.png";
import ChooseIcon3 from "../assets/choose-icon-3.png";

const HomePage = () => {
  return (
    <div>
      <Header />
      <SidebarMobile />
      <div className="w-full bg-[#05003B] z-30 rounded-sm mb-10">
        <div className="relative bg-sec lg:h-[620px] h-[400px] flex flex-col items-center justify-center">
          <div className="w-full md:max-w-4xl max-w-full mx-auto text-center px-6 ">
            <h1 className="text-white lg:text-7xl md:text-3xl text-3xl font-semibold mb-3 lg:leading-[80px] leading-[40px]">
              SEO Marketing <br />
              Agency in Bangalore
            </h1>
            <p className="text-[#d7d7d7] md:text-2xl text-sm font-normal mb-6">
              All in one SEO for your business to give real impact consultancy
              and analysis.!
            </p>
            <div>
              <a
                href="/contact-us"
                className="bg-custom-gradient text-white px-5 py-2 rounded-2xl"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="container w-full text-center md:py-6 py-2">
          <h2 className="md:text-4xl text-2xl text-[#000000] font-semibold mb-14">
            Our Services
          </h2>
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-6">
            <div className="w-full text-center group transition-all ease-in-out p-4">
              <div className="relative mb-4">
                <img src={Icon1} className="max-w-full inline-block" />
                <BsMegaphoneFill className="text-5xl text-[#7659fa] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="w-full">
                <h2 className="text-[#000000] text-2xl font-medium mb-4">
                  Digital Marketing
                </h2>
                <p className="text-black text-base mb-4">
                  We develop digital strategies, products and services
                  appreciated by clients.
                </p>
              </div>
              <div className="w-full ">
                <a
                  href=""
                  className="text-[#000000] flex justify-center items-center gap-2"
                >
                  <span className="invisible opacity-0 -ml-10 group-hover:visible group-hover:opacity-100 group-hover:ml-0 transition-all ease-out">
                    Read More
                  </span>
                  <BsArrowRight />
                </a>
              </div>
            </div>
            <div className="w-full text-center group transition-all ease-in-out p-4">
              <div className="relative mb-4">
                <img src={Icon2} className="max-w-full inline-block" />
                <BsMegaphoneFill className="text-5xl text-[#ff8139] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="w-full">
                <h2 className="text-[#000000] text-2xl font-medium mb-4">
                  Web Development
                </h2>
                <p className="text-black text-base mb-4">
                  We develop digital strategies, products and services
                  appreciated by clients.
                </p>
              </div>
              <div className="w-full ">
                <a
                  href=""
                  className="text-[#1e2b8a] flex justify-center items-center gap-2"
                >
                  <span className="invisible opacity-0 -ml-10 group-hover:visible group-hover:opacity-100 group-hover:ml-0 transition-all ease-out">
                    Read More
                  </span>
                  <BsArrowRight />
                </a>
              </div>
            </div>
            <div className="w-full text-center group transition-all ease-in-out p-4">
              <div className="relative mb-4">
                <img src={Icon3} className="max-w-full inline-block" />
                <BsMegaphoneFill className="text-5xl text-[#3cd0ff] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="w-full">
                <h2 className="text-[#000000] text-2xl font-medium mb-4">
                  Mobile App Development
                </h2>
                <p className="text-black text-base mb-4">
                  We develop digital strategies, products and services
                  appreciated by clients.
                </p>
              </div>
              <div className="w-full ">
                <a
                  href=""
                  className="text-[#1e2b8a] flex justify-center items-center gap-2"
                >
                  <span className="invisible opacity-0 -ml-10 group-hover:visible group-hover:opacity-100 group-hover:ml-0 transition-all ease-out">
                    Read More
                  </span>
                  <BsArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="container py-10">
          <div className="w-full text-center mb-10">
            <h4 className="text-black bg-[#eff2fe] px-3 py-1.5 rounded-md inline-block mb-3">
              How do we it
            </h4>
            <h2 className="md:text-4xl text-2xl text-[#000000] font-semibold mb-6">
              Helping others Succeed
            </h2>
          </div>
          <div className="w-full">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-10 gap-6 justify-center items-start">
              <div className="w-full text-center flex flex-col justify-center items-center">
                <h4 className="w-[50px] h-[50px] mb-3 text-white flex justify-center items-center rounded-full bg-[#3EB9FF] text-center">
                  1
                </h4>
                <h2 className="text-[#000000] text-2xl font-medium mb-2">
                  Research
                </h2>
                <p className="text-black text-base mb-4">
                  Migrating your rank Google Analytics to another solution.
                </p>
              </div>
              <div className="w-full text-center flex flex-col justify-center items-center">
                <h4 className="w-[50px] h-[50px] mb-3 text-white flex justify-center items-center rounded-full bg-[#ABBF78] text-center">
                  2
                </h4>
                <h2 className="text-[#000000] text-2xl font-medium mb-2">
                  Customize
                </h2>
                <p className="text-black text-base mb-4">
                  Migrating your rank Google Analytics to another solution.
                </p>
              </div>
              <div className="w-full text-center flex flex-col justify-center items-center">
                <h4 className="w-[50px] h-[50px] mb-3 text-white flex justify-center items-center rounded-full bg-[#FFB876] text-center">
                  3
                </h4>
                <h2 className="text-[#000000] text-2xl font-medium mb-2">
                  Targeting
                </h2>
                <p className="text-black text-base mb-4">
                  Migrating your rank Google Analytics to another solution.
                </p>
              </div>
              <div className="w-full text-center flex flex-col justify-center items-center">
                <h4 className="w-[50px] h-[50px] mb-3 text-white flex justify-center items-center rounded-full bg-[#FFA0C9] text-center">
                  4
                </h4>
                <h2 className="text-[#000000] text-2xl font-medium mb-2">
                  Result
                </h2>
                <p className="text-black text-base mb-4">
                  Helping to achieve more People
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-10">
        <div className="container w-full stats-sec relative overflow-hidden">
          <div className="w-full ">
            <img
              src={Icon11}
              className="max-w-full absolute top-0 right-0 -z-[1]"
            />
            <img
              src={Icon12}
              className="max-w-full absolute top-0 left-0 -z-[1]"
            />
            <img
              src={Icon13}
              className="max-w-full absolute bottom-0 right-0 -z-[1]"
            />
            <img
              src={Icon14}
              className="max-w-full absolute bottom-0 left-0 -z-[1]"
            />
            <img
              src={Icon15}
              className="max-w-full absolute bottom-0 left-0 -z-[1]"
            />
          </div>
          <div className="w-full flex sm:flex-row flex-col gap-4 justify-between items-start">
            <div className="flex justify-start items-start gap-4">
              <div className="">
                <BsBriefcase className="text-white text-3xl mt-1" />
              </div>
              <div className="">
                <CountUp end={100} redraw={true} suffix="+">
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span
                        ref={countUpRef}
                        className="block text-white font-medium mb-2 text-4xl  group-hover:text-black"
                      />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <span className="text-white text-base">
                  Successful Projects
                </span>
              </div>
            </div>
            <div className="flex justify-start items-start gap-4">
              <div className="">
                <BsEmojiSmile className="text-white text-3xl mt-1" />
              </div>
              <div className="">
                <CountUp end={180} redraw={true} suffix="+">
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span
                        ref={countUpRef}
                        className="block text-white font-medium mb-2 text-4xl  group-hover:text-black"
                      />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <span className="text-white text-base">Happy Customers</span>
              </div>
            </div>
            <div className="flex justify-start items-start gap-4">
              <div className="">
                <BsPeople className="text-white text-3xl mt-1" />
              </div>
              <div className="">
                <CountUp end={64} redraw={true} suffix="+">
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span
                        ref={countUpRef}
                        className="block text-white font-medium mb-2 text-4xl  group-hover:text-black"
                      />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <span className="text-white text-base">Team Members</span>
              </div>
            </div>
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
                Why Choose us
              </h4>
              <h2 className="md:text-4xl text-2xl text-[#000000] font-semibold mb-6">
                What makes Us <br />
                Different from Others
              </h2>
              <p>
                Migrating your rank tracking tool is like migrating from Google
                Analytics to another solution.
              </p>

              <div className="w-full grid md:grid-cols-3 grid-cols-2 justify-center items-start gap-8 mt-6">
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

export default HomePage;

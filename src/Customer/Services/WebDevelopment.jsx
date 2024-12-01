import React from "react";
import Header from "../Components/Header";
import SidebarMobile from "../Components/SidebarMobile";
import Footer from "../Components/Footer";
import Service1 from "../../assets/services-1-icon-1.png";
import Service2 from "../../assets/services-1-icon-2.png";
import Service3 from "../../assets/services-1-icon-4.png";
import Service4 from "../../assets/services-1-icon-6.png";
import SerImg1 from "../../assets/06.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "../../../node_modules/react-accessible-accordion/dist/fancy-example.css";

const WebDevelopment = () => {
  return (
    <div>
      <Header />
      <SidebarMobile />
      <div className="w-full bg-[#05003B] z-30 rounded-sm mb-10">
        <div className="relative lg:h-[450px] h-[300px] flex flex-col items-center justify-center">
          <div className="w-full md:max-w-4xl max-w-full mx-auto text-center px-6 ">
            <h1 className="text-white lg:text-5xl md:text-3xl text-3xl font-semibold mb-3 lg:leading-[60px] leading-[40px]">
              Web Development
            </h1>
            <p className="text-[#d7d7d7] md:text-xl text-sm font-normal mb-6">
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

      <div className="w-full mb-20">
        <div className="container mx-auto -mt-20">
          <div className="w-full text-center rounded-lg shadow-xl mx-auto lg:max-w-5xl max-w-full bg-white lg:px-20 px-6 py-6">
            <h2 className="lg:text-4xl text-2xl font-semibold text-black mb-5 lg:px-40 px-0">
              Expect great things from your SEO agency.!
            </h2>
            <p className="lg:text-xl text-lg text-[#484848] font-medium leading-5">
              Iterative approaches to corporate strategy foster collaborative
              thinking to further the overall value. Leverage agile frameworks
              to provide a robust high level over views. In an ideal world this
              text wouldn't exist.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full py-10">
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6">
            <div className="w-full service-sec text-center mb-10">
              <div className="relative service-img mb-7">
                <img
                  src={Service1}
                  className="max-w-full inline-block"
                  alt=""
                />
              </div>
              <h2 className="text-lg font-medium mb-1 text-[#303030]">
                MERN Stack Applications
              </h2>
              <h4 className="text-2xl text-black font-semibold">
                Instant account activation if instant access.
              </h4>
            </div>
            <div className="w-full service-sec text-center mb-10">
              <div className="relative service-img mb-7">
                <img
                  src={Service2}
                  className="max-w-full inline-block"
                  alt=""
                />
              </div>
              <h2 className="text-lg font-medium mb-1 text-[#303030]">
                HTMl Websites
              </h2>
              <h4 className="text-2xl text-black font-semibold">
                Services activation if need access.
              </h4>
            </div>
            <div className="w-full service-sec text-center mb-10">
              <div className="relative service-img mb-7">
                <img
                  src={Service4}
                  className="max-w-full inline-block"
                  alt=""
                />
              </div>
              <h2 className="text-lg font-medium mb-1 text-[#303030]">
                Wordpress Websites
              </h2>
              <h4 className="text-2xl text-black font-semibold">
                Services activation if need access.
              </h4>
            </div>
            {/* <div className="w-full service-sec text-center">
              <div className="relative service-img mb-4">
                <img
                  src={Service3}
                  className="max-w-full inline-block"
                  alt=""
                />
              </div>
              <h2 className="text-lg font-medium mb-1 text-[#303030]">
                Content Marketing
              </h2>
              <h4 className="text-2xl text-black font-semibold">
                Services activation if need access.
              </h4>
            </div> */}
          </div>
        </div>
      </div>

      <div className="w-full mb-10 py-10">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-between gap-8">
            <div className="w-full">
              <h2 className="text-black lg:text-5xl text-xl font-semibold mb-3">
                Grow your <br />
                business today
              </h2>
              <p className="text-[#303030] font-medium text-lg">
                Enim cras in eget urna. Ut proin integer tempor, bibendum quam
                ullamcorper faucibus
              </p>
              <div className="mt-6">
                <a
                  href="/contact-us"
                  className="bg-custom-gradient text-white px-5 py-2 rounded-2xl"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="w-full">
              <img src={SerImg1} className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-10">
        <div className="container">
          <div className="text-center">
            <h2 className="text-black font-semibold text-3xl">FAQ's</h2>
          </div>

          <div className="w-full">
            <Accordion allowZeroExpanded={true} className="bg-white ">
              <AccordionItem className="mb-3 bg-white p-3 rounded-lg shadow-lg">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How do I know if I need SEO services?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    If you're experiencing low visibility or poor website
                    performance, investing in SEO services can boost your online
                    presence and attract more customers. Adze studio offers
                    tailored SEO services to boost visibility and drive customer
                    engagement. With our expertise, personalized strategies, and
                    commitment to client success, Adze studio ensures your
                    website achieves optimal performance and attracts targeted
                    traffic, leading to tangible business growth.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="mb-3 bg-white p-3 rounded-lg shadow-lg">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Are SEO Services Worth it?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, SEO services are worth it as they can significantly
                    improve your website's visibility, attract more organic
                    traffic, increase brand awareness, and ultimately drive more
                    leads and sales. Investing in SEO ensures long-term growth
                    and competitiveness in the online landscape.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem className="mb-3 bg-white p-3 rounded-lg shadow-lg">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can I choose SEO services for small business?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, choosing SEO services for small businesses is crucial.
                    Local searches are common, and proximity matters to
                    customers. Having a visible online presence boosts
                    credibility. Benefits include attracting more customers,
                    higher conversion rates, brand awareness, user-friendly
                    website design, and outshining competitors.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem className="mb-3 bg-white p-3 rounded-lg shadow-lg">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can I stop doing SEO after my website has reached the top
                    ranks?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Continuing SEO efforts after reaching the top ranks is
                    essential due to fierce competition and ever-evolving search
                    algorithms, ensuring sustained visibility and business
                    growth. Investing in ongoing SEO guarantees long-term
                    success and revenue growth, justifying the continued effort.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem className="mb-3 bg-white p-3 rounded-lg shadow-lg">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How is Adze studio different from other Seo Companies in
                    Bangalore?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Adze stands out from other SEO companies in Bangalore with
                    its unwavering commitment to client satisfaction and
                    exceptional services. While search engine algorithms evolve,
                    Adze ensures clients stay ahead by regularly updating
                    strategies to meet industry standards. Our unique practices,
                    clear processes, and innovative strategies consistently
                    deliver maximum value. With a dedicated team, we work
                    tirelessly to boost your SEO rankings and secure first-page
                    rankings on search engines.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WebDevelopment;

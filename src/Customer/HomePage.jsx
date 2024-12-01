import React from "react";
import { motion } from "framer-motion";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import ContactForm from "./Components/ContactForm";
import About from "../assets/about-me.webp";
import About1 from "../assets/about-me-2.webp";

const HomePage = () => {
  const skills = [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Tailwind CSS",
    "Docker",
  ];

  const projects = [
    {
      title: "Project 1",
      description: "A brief description of project 1.",
      link: "#",
    },
    {
      title: "Project 2",
      description: "A brief description of project 2.",
      link: "#",
    },
    {
      title: "Project 3",
      description: "A brief description of project 3.",
      link: "#",
    },
  ];

  return (
    <div>
      <motion.nav
        className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">Jagadeesh</h1>
          <ul className="flex space-x-6">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, color: "#3B82F6" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-500"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white h-screen flex flex-col items-center justify-center text-center">
        <div>
          <img
            src={About1}
            className="w-[150px] h-[150px] rounded-full shadow-xl text-center inline-block"
          />
        </div>
        <div className="text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm <span className="text-yellow-300">Jagadeesh Poola</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            A Passionate Full Stack Developer
          </motion.p>
          <motion.a
            href="#projects"
            className="mt-6 inline-block mb-6 bg-yellow-400 text-gray-900 py-3 px-6 rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            View My Work
          </motion.a>
        </div>
      </section>
      <motion.section
        id="about"
        className="py-16 bg-white text-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-8">
              I'm a Full Stack Developer with expertise in building scalable web
              and mobile applications. My goal is to deliver solutions that
              blend great user experience with robust backend systems.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-2 justify-center gap-6 text-center">
              <div>
                <h3 className="text-4xl font-bold text-blue-600">
                  <CountUp start={0} end={7} duration={2} />+
                </h3>
                <p className="text-gray-600 mt-2">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-blue-600">
                  <CountUp start={0} end={50} duration={2} />+
                </h3>
                <p className="text-gray-600 mt-2">Projects Completed</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={About}
              alt="About Me"
              className="w-full rounded-full shadow-lg object-cover"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        id="what-i-do"
        className="py-16 bg-gray-100 text-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* Left: Information and Description */}
          <div className="md:col-span-2 col-span-full">
            <h2 className="text-3xl font-bold mb-6">What I Do</h2>
            <p className="text-lg mb-6">
              I specialize in crafting user-friendly web and mobile
              applications, integrating robust backend solutions, and delivering
              seamless user experiences. With expertise across multiple
              frameworks and technologies, I ensure every project meets the
              highest standards.
            </p>
            <p className="text-lg">
              From building scalable APIs to developing interactive frontends,
              my work is driven by innovation and a passion for problem-solving.
            </p>
          </div>

          {/* Right: Skills and Expertise */}
          <div className="md:col-span-3 col-span-full">
            <h3 className="text-2xl font-bold mb-4">Skills & Expertise</h3>
            {/* <div className="grid grid-cols-2 gap-4">
              <div className="bg-white shadow-md p-4 rounded-lg">
                <p className="text-lg font-semibold text-blue-600">React</p>
              </div>
              <div className="bg-white shadow-md p-4 rounded-lg">
                <p className="text-lg font-semibold text-blue-600">Node.js</p>
              </div>
              <div className="bg-white shadow-md p-4 rounded-lg">
                <p className="text-lg font-semibold text-blue-600">Express</p>
              </div>
              <div className="bg-white shadow-md p-4 rounded-lg">
                <p className="text-lg font-semibold text-blue-600">MongoDB</p>
              </div>
              <div className="bg-white shadow-md p-4 rounded-lg">
                <p className="text-lg font-semibold text-blue-600">
                  Tailwind CSS
                </p>
              </div>
              <div className="bg-white shadow-md p-4 rounded-lg">
                <p className="text-lg font-semibold text-blue-600">AWS</p>
              </div>
              <div className="bg-white shadow-md p-4 rounded-lg">
                <p className="text-lg font-semibold text-blue-600">MySQL</p>
              </div>
              <div className="bg-white shadow-md p-4 rounded-lg">
                <p className="text-lg font-semibold text-blue-600">
                  TypeScript
                </p>
              </div>
            </div> */}

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">
                      Category
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">
                      Technologies/Tools
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">
                      Languages
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      JavaScript, HTML, CSS
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">
                      Frontend Technologies
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      React JS, React Native, Vite, CRA
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">
                      Backend Technologies
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Node JS/Express JS
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">
                      Databases
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      MySQL, MongoDB
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">
                      CSS Libraries
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Tailwind, Bootstrap
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">
                      CI/CD/VCS
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Git, Jira
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">
                      Cloud Services
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Vercel, Netlify, Digital Ocean
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">
                      Tools
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Postman, VS-Code, MongoDB Compass
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">
                      OS
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-600">
                      Linux-Ubuntu, macOS, MS Windows
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.section>

      {/* <motion.section
        id="skills"
        className="py-16 bg-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                className="bg-white shadow-lg p-4 text-center rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section> */}

      <section id="projects" className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 shadow-lg rounded-lg p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        id="contact"
        className="py-16 bg-gray-800 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="mb-6">
            Feel free to reach out to me at{" "}
            <a href="mailto:jagadeesh.p200@gmail.com" className="text-blue-400">
              jagadeesh.p200@gmail.com
            </a>
            .
          </p>
          <motion.div className="flex justify-center space-x-4">
            <motion.a
              href="#"
              className="bg-blue-600 px-3 py-2 rounded-lg hover:bg-blue-500 transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="#"
              className="bg-blue-600 px-3 py-2 rounded-lg hover:bg-blue-500 transition duration-300"
              whileHover={{ scale: 1.2 }}
            >
              Github
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;

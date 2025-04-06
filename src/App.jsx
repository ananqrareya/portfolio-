import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Briefcase,
  User,
  ChevronDown,
  ChevronUp,
  Calendar,
  MessageSquare,
  Sparkles,
  Download,
  Phone,
  Home,
  Folder,
  Send,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  heroData,
  aboutData,
  experienceData,
  skillsData,
  projectsData,
} from "./data";
import DarkModeToggle from "./components/DarkModeToggle";
import react from "./icons/react.svg";
import spring from "./icons/spring.svg";
import java from "./icons/java.svg";
import mysql from "./icons/mysql.svg";
import cplusplus from "./icons/c_6132222.png";
import python from "./icons/python_5968350.png";
import postgres from "./icons/postgre_5968342.png";
import GitHub from "./icons/github-svgrepo-com.svg";
import linkenin from "./icons/linkedin-svgrepo-com.svg";
import Gmail from "./icons/gmail-svgrepo-com.svg";
import AboutMe from "./assets/ChatGPT Image Apr 6, 2025, 08_45_24 PM.png";
function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "experience",
      "skills",
      "projects",
      "contact",
    ];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const toggleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", toggleScroll);
    return () => window.removeEventListener("scroll", toggleScroll);
  }, []);

  return (
    <>
 
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full py-4 px-6 flex justify-end items-center fixed top-0 left-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
      >
        <DarkModeToggle title="Toggle Dark Mode" />
      </motion.header>
      <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <section
          id="hero"
          className="min-h-screen pt-16 flex items-center justify-center relative px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-300 dark:bg-indigo-800 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float" />
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-300 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float delay-2000" />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float delay-4000 transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <div className="mb-4">
                <span className="inline-block bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm px-6 py-2 rounded-full text-indigo-600 dark:text-indigo-300 font-semibold">
                  {heroData.welcome}
                </span>
              </div>

              <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-gray-900 dark:text-white mb-6">
                {heroData.title}{" "}
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                  {heroData.name}
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                <Typewriter
                  words={[heroData.subtitle]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={0}
                  delaySpeed={1000}
                />
              </p>

              <p className="text-lg italic text-gray-500 dark:text-gray-400 mb-8 max-w-xl">
                “Building experiences, not just websites.”
              </p>

              <div className="flex flex-col gap-4 mb-10">
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="#contact"
                    className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition transform hover:scale-105 shadow-lg flex items-center gap-2"
                  >
                    <MessageSquare size={20} />
                    Let’s Talk
                  </a>
                  <a
                    href="#projects"
                    className="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-300 px-8 py-4 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition transform hover:scale-105 shadow-lg flex items-center gap-2"
                  >
                    <Briefcase size={20} />
                    View my work
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-600 dark:text-gray-300 justify-center md:justify-start">
                  <a
                    href="./Anan Qrareya CV.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-200 px-4 py-2 rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-700 transition"
                  >
                    <Download size={16} />
                    Download CV
                  </a>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <span className="inline-flex items-center gap-2">
                      <Phone size={16} /> +970 597 376 520
                    </span>
                  </div>
                </div>
              </div>

              {heroData.available && (
                <div className="mb-8">
                  <span className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium shadow">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                    Available
                  </span>
                </div>
              )}
              <div className="flex gap-6 justify-center md:justify-start">
                {heroData.socials.map(({ icon, url, name }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={name}
                    className="hover:scale-110 transition transform"
                  >
                    <img src={icon} alt={name} className="w-8 h-8" />
                  </a>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <img
                  src={java}
                  className="w-8 h-8 hover:scale-125 transition"
                  alt="Java"
                />
                <img
                  src={cplusplus}
                  className="w-8 h-8 hover:scale-125 transition"
                  alt="cplusplus"
                />
                <img
                  src={python}
                  className="w-8 h-8 hover:scale-125 transition"
                  alt="python"
                />
                <img
                  src={spring}
                  className="w-8 h-8 hover:scale-125 transition"
                  alt="Spring Boot"
                />
                <img
                  src={react}
                  className="w-8 h-8 hover:scale-125 transition"
                  alt="React"
                />
                <img
                  src={mysql}
                  className="w-8 h-8 hover:scale-125 transition"
                  alt="MySQL"
                />
                <img
                  src={postgres}
                  className="w-8 h-8 hover:scale-125 transition"
                  alt="Postgres"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl hover:scale-105 transition-transform">
                <div className="absolute inset-0 rounded-[2rem] bg-pink-500 opacity-20 blur-3xl z-[-1]" />
                <img
                  src={heroData.image}
                  alt="Profile"
                  className="w-full h-[600px] object-cover mix-blend-multiply  "
                />
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown
              size={32}
              className="text-indigo-600 dark:text-indigo-300"
            />
          </div>
        </section>

        <section
          id="about"
          className={`py-24 bg-white dark:bg-gray-900 transition-colors duration-500 
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6 mb-4">
              <User
                size={40}
                className="text-indigo-600 dark:text-indigo-400"
              />
              <div>
                <span className="text-sm uppercase tracking-wider text-indigo-500 dark:text-indigo-400 font-semibold">
                  Who I Am
                </span>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                  About Me
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center mt-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-20 blur-2xl" />
                <img
                  src={AboutMe}
                  alt="Profile"
                  className="relative rounded-3xl shadow-2xl ring-4 ring-white dark:ring-gray-800 hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {aboutData.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className={`text-xl text-gray-600 dark:text-gray-300 ${
                      i !== aboutData.paragraphs.length - 1 ? "mb-6" : ""
                    } leading-relaxed`}
                  >
                    {para}
                  </p>
                ))}

                <div className="mt-6 flex flex-wrap gap-3 text-indigo-600 dark:text-indigo-300 text-sm font-medium">
                  <span className="bg-indigo-100 dark:bg-indigo-800 px-3 py-1 rounded-full">
                    🧠 Problem Solver
                  </span>
                  <span className="bg-indigo-100 dark:bg-indigo-800 px-3 py-1 rounded-full">
                    🔁 Real-World Projects
                  </span>
                  <span className="bg-indigo-100 dark:bg-indigo-800 px-3 py-1 rounded-full">
                    💻 Full Stack Developer
                  </span>
                  <span className="bg-indigo-100 dark:bg-indigo-800 px-3 py-1 rounded-full">
                    🚀 React.js & Spring Boot
                  </span>
                  <span className="bg-indigo-100 dark:bg-indigo-800 px-3 py-1 rounded-full">
                    🗃️ MySQL & PostgreSQL
                  </span>
                  <span className="bg-indigo-100 dark:bg-indigo-800 px-3 py-1 rounded-full">
                    🌍 Based in Palestine
                  </span>
                </div>

                <blockquote className="mt-8 italic text-gray-500 dark:text-gray-400 border-l-4 border-indigo-500 pl-4">
                  “Code is my language, design is my voice.”
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className={`py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-4"
            >
              <Sparkles
                size={40}
                className="text-indigo-600 dark:text-indigo-400 animate-pulse"
              />
              <div>
                <span className="text-sm uppercase tracking-wider text-indigo-500 dark:text-indigo-400 font-semibold">
                  Growth & Milestones
                </span>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                  My Professional Journey
                </h2>
              </div>
            </motion.div>

            <div className="relative ml-6 mt-16 before:absolute before:top-0 before:left-[12px] before:h-full before:w-[4px] before:bg-gradient-to-b before:from-indigo-500 before:to-purple-500 before:dark:from-indigo-400 before:dark:to-purple-600 before:animate-pulse">
              {experienceData.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative mb-20 pl-14"
                >
                  <div className="absolute left-0 top-2 w-6 h-6 bg-white dark:bg-gray-900 border-4 border-indigo-500 dark:border-indigo-400 rounded-full z-10 shadow-md"></div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-indigo-300 dark:hover:shadow-indigo-700 transition duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={job.image}
                        alt={job.company}
                        className="w-16 h-16 rounded-xl object-cover ring-2 ring-indigo-500"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {job.position}
                        </h3>
                        <p className="text-md text-indigo-600 dark:text-indigo-300 font-medium">
                          {job.company}
                        </p>

                        {job.type && (
                          <span
                            className={`mt-1 inline-block text-xs px-2 py-1 rounded-full font-medium ${
                              job.type === "Internship"
                                ? "bg-green-100 text-green-700 dark:bg-green-700 dark:text-white"
                                : "bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-white"
                            }`}
                          >
                            {job.type}
                          </span>
                        )}

                        <div className="mt-2 text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2">
                          <Calendar size={18} />
                          <span>{job.period}</span>
                        </div>
                      </div>
                    </div>

                    <hr className="my-4 border-t border-indigo-200 dark:border-indigo-600" />

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-100 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          className={`py-24 bg-white dark:bg-gray-900 transition-colors duration-500 }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-12"
            >
              <Code2
                size={40}
                className="text-indigo-600 dark:text-indigo-400 animate-pulse"
              />
              <div>
                <span className="text-sm uppercase tracking-wider text-indigo-500 dark:text-indigo-400 font-semibold">
                  What I Do Best
                </span>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                  Skills & Technologies
                </h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform text-center"
                >
                  <div className="flex flex-col items-center gap-3">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10"
                    />
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </p>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${skill.color}`}
                    >
                      {skill.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className={`py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-12"
            >
              <Briefcase
                size={40}
                className="text-indigo-600 dark:text-indigo-400 animate-pulse"
              />
              <div>
                <span className="text-sm uppercase tracking-wider text-indigo-500 dark:text-indigo-400 font-semibold">
                  Featured Projects
                </span>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                  What I've Built
                </h2>
              </div>
            </motion.div>

            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {projectsData.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="project-card group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-400 flex items-center gap-1 group"
                      >
                        <Github size={20} />
                        <span className="group-hover:underline text-sm">
                          Code
                        </span>
                      </a>
                      {project.demo && project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-400 flex items-center gap-1 group"
                        >
                          <ExternalLink size={20} />
                          <span className="group-hover:underline text-sm">
                            Video
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className={`py-24 bg-white dark:bg-gray-900 transition-colors duration-500 }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-12"
            >
              <Mail
                size={40}
                className="text-indigo-600 dark:text-indigo-400 animate-pulse"
              />
              <div>
                <span className="text-sm uppercase tracking-wider text-indigo-500 dark:text-indigo-400 font-semibold">
                  Get In Touch
                </span>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                  Contact Me
                </h2>
              </div>
            </motion.div>

            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
              <form className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="block w-full rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-3 transition focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="block w-full rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-3 transition focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Type your message here..."
                    className="block w-full rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-3 transition focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
        <footer className="bg-gray-50 dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-700 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                © 2025 Anan Qrareya. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a
                  href="https://github.com/ananqrareya"
                  title="GitHub"
                  className="hover:scale-110 transition"
                >
                  <img src={GitHub} alt="GitHub" className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/anan-qrareya-31213a283/"
                  title="LinkedIn"
                  className="hover:scale-110 transition"
                >
                  <img src={linkenin} alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a
                  href="mailto:ananqrareya@gmail.com"
                  title="Email Me"
                  className="hover:scale-110 transition"
                >
                  <img src={Gmail} alt="Email" className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-500">
              Crafted with ❤️
            </div>
          </div>
        </footer>
      </div>
      {/* Floating Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black/90 dark:bg-white/10 backdrop-blur-md px-6 py-2 rounded-full flex items-center justify-center gap-6 z-50 shadow-lg">
        {[
          { href: "#hero", icon: Home, id: "hero" },
          { href: "#about", icon: User, id: "about" },
          { href: "#experience", icon: Sparkles, id: "experience" },
          { href: "#skills", icon: Code2, id: "skills" },
          { href: "#projects", icon: Folder, id: "projects" },
          { href: "#contact", icon: Send, id: "contact" },
        ].map((item, i) => {
          const Icon = item.icon;
          const isActive = item.id === activeSection;
          return (
            <a
              key={i}
              href={item.href}
              className={`transition rounded-full p-2 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md scale-110"
                  : "text-white dark:text-white hover:text-indigo-400"
              }`}
              title={item.id.charAt(0).toUpperCase() + item.id.slice(1)}
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>

      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </>
  );
}

export default App;

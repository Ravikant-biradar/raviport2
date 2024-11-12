"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-5 md:px-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold">Ravikant S. B.</h1>
        <p className="text-xl mt-4 text-gray-400">
          Full Stack Developer | JavaScript Enthusiast
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="space-y-16">
        {/* About Section */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I&apos;m a Full Stack Developer specializing in JavaScript, React.js,
            Next.js, Node.js, and MongoDB. I love building scalable web
            applications and delivering exceptional user experiences.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "JavaScript",
              "React.js",
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "Git",
              "Tailwind CSS",
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-700 p-4 rounded-lg shadow-md text-center"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">
                Full Stack Developer - XYZ Company
              </h3>
              <p className="text-gray-400">2022 - Present</p>
              <p className="mt-2 text-gray-300">
                Developed multiple web applications using MERN stack, optimized
                backend APIs, and enhanced UI/UX for better customer engagement.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Frontend Developer - ABC Solutions
              </h3>
              <p className="text-gray-400">2021 - 2022</p>
              <p className="mt-2 text-gray-300">
                Focused on creating responsive, mobile-first designs with
                Tailwind CSS and React.js, improving performance by 30%.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">
                B.Tech in Computer Science
              </h3>
              <p className="text-gray-400">XYZ University - 2017 to 2021</p>
              <p className="mt-2 text-gray-300">
                Graduated with honors, specializing in Full Stack Development.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="bg-gray-800 rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-500" />
              <span>9972548995</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              <span>ravikantdev4278@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-blue-500" />
              <a
                href="https://www.linkedin.com/in/ravikant"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;

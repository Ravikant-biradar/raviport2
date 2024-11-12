"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      name: "Twitter-like Web App",
      description:
        "Built a full-featured Twitter clone using the MERN stack, featuring real-time messaging, user authentication, and media sharing.",
      link: "https://github.com/ravikant/twitter-clone",
      demo: "https://twitter-clone-demo.com",
    },
    {
      name: "Zomato-like App",
      description:
        "Created a Zomato-like app for restaurant discovery and reviews, with a complete user interface and backend integration using the MERN stack.",
      link: "https://github.com/ravikant/zomato-clone",
      demo: "https://zomato-clone-demo.com",
    },
    {
      name: "Amazon-like E-Commerce App",
      description:
        "Developed an e-commerce platform with a shopping cart and dynamic product search using React.js, Axios, and Firebase authentication.",
      link: "https://github.com/ravikant/amazon-clone",
      demo: "https://amazon-clone-demo.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-5 md:px-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-purple-500">My Projects</h1>
        <p className="text-xl mt-4 text-gray-400">
          Showcase of Web Apps I’ve Built
        </p>
      </motion.div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
          >
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              {project.name}
            </h2>
            <p className="text-lg text-gray-300 mb-4">{project.description}</p>
            <div className="flex items-center gap-6">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaGithub className="inline-block mr-2" />
                GitHub
              </motion.a>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaLink className="inline-block mr-2" />
                Live Demo
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

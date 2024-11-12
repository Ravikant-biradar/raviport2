"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Navbar Section */}
      <section className="p-6 shadow-lg flex justify-between items-center bg-gray-900">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 border-2 border-gray-700 bg-orange-400 rounded-full"></div>
          <p className="text-3xl font-bold font-serif text-white">Ravikant</p>
          <p className="text-sm text-gray-400 sm:block">(Developer)</p>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={handleToggle} className="focus:outline-none">
            {!isOpen ? (
              <svg
                className="w-8 h-8 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-serif text-lg">
          <p className="cursor-pointer text-gray-300 hover:text-yellow-400 transition-all">
            Resume
          </p>
          <p className="cursor-pointer text-gray-300 hover:text-yellow-400 transition-all">
            Projects
          </p>
          <p className="cursor-pointer text-gray-300 hover:text-yellow-400 transition-all">
            Contact
          </p>
        </div>
      </section>

      {/* Mobile Menu with Smooth Transition */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-gray-800 text-white flex flex-col items-center justify-center gap-6 font-serif text-2xl z-20 p-8 transition-all duration-500 ease-in-out transform ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          {/* Menu Items */}
          <p className="cursor-pointer py-2 hover:text-yellow-400 transition-all duration-200">
            Resume
          </p>
          <p className="cursor-pointer py-2 hover:text-yellow-400 transition-all duration-200">
            Projects
          </p>
          <p className="cursor-pointer py-2 hover:text-yellow-400 transition-all duration-200">
            Contact
          </p>

          {/* Close Button */}
          <button onClick={handleToggle} className="absolute top-6 right-6">
            <svg
              className="w-8 h-8 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;

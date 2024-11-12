"use client"; // Enable client-side rendering for Next.js 13+
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// Dynamically import framer-motion to prevent SSR issues
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure that the component is only rendered on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-5 flex items-center justify-center">
      <MotionDiv
        className="max-w-3xl w-full bg-gray-800 rounded-lg shadow-lg p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-8">Let's Connect!</h2>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-green-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <a href="tel:123-456-7890" className="hover:text-green-500">
                123-456-7890
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-green-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <a href="mailto:info@mysite.com" className="hover:text-green-500">
                info@mysite.com
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-green-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">LinkedIn</h3>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500"
              >
                linkedin.com
              </a>
            </div>
          </div>

          {/* Twitter */}
          <div className="flex items-center gap-4">
            <FaTwitter className="text-green-500 text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Twitter</h3>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500"
              >
                twitter.com
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-lg font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium">Message</label>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </MotionDiv>
    </div>
  );
};

export default Contact;

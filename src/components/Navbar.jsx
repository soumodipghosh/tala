import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-100 hover:text-gray-300">About</a>
            <a href="#services" className="text-gray-100 hover:text-gray-300">Services</a>
            <a href="#album" className="text-gray-100 hover:text-gray-300">Album</a>
            <a href="#stories" className="text-gray-100 hover:text-gray-300">Stories</a>
            <a href="#blog" className="text-gray-100 hover:text-gray-300">Blog</a>
          </div>

          <div className="hidden md:flex">
            <a
              href="#contact"
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Contact Us
            </a>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-100 text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>

        </div>
      </div>

      {/* for mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="#about" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</a>
          <a href="#services" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Services</a>
          <a href="#album" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Album</a>
          <a href="#stories" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Stories</a>
          <a href="#blog" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Blog</a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-white bg-red-600 hover:bg-red-700"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

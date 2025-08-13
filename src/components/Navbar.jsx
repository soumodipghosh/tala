import React, { useState } from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu on click
  };

  return (
    <nav className="bg-gray-800 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-100 hover:text-gray-300 font-medium">About</a>
            <a href="#services" className="text-gray-100 hover:text-gray-300 font-medium">Services</a>
            <a href="#album" className="text-gray-100 hover:text-gray-300 font-medium">Album</a>
            <a href="#stories" className="text-gray-100 hover:text-gray-300 font-medium">Stories</a>
            <a href="#blog" className="text-gray-100 hover:text-gray-300 font-medium">Blog</a>
          </div>

          {/* Contact Us */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-100 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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

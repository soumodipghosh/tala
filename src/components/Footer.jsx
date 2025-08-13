import React from "react";
import logo from "../assets/logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12" id="contact">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <img src={logo} alt="Logo" className="w-32 mb-4" />
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Send your mail here"
              className="px-4 py-2 rounded-md flex-1 border border-white"
            />
            <button className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-700">
              Submit
            </button>
          </div>
        </div>

        
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold mb-2">Product</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Movies</li>
              <li>TV Show</li>
              <li>Videos</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Media Group</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Nice Studio</li>
              <li>Nice News</li>
              <li>Nice TV</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Sitemap</h3>
            <ul className="text-gray-400 space-y-1">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <ul className="text-gray-400 space-y-1">
              <li>+91 386-647-3637</li>
              <li>710110 St. South Gate, India, West Bengal</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Tala Prattoy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

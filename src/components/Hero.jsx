import React from "react";
import hero from "../assets/gallery3.png";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Welcome to Tala Prattoy
        </h1>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-red-600 rounded-md hover:bg-red-700 cursor-pointer">
            Art Walkthrough
          </button>
          <button className="px-6 py-3 bg-yellow-500 rounded-md hover:bg-yellow-600 cursor-pointer">
            Privileged Entry
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

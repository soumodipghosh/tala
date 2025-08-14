import React from "react";
import discover1 from "../assets/discover.png";
import CountUp from "react-countup";

const Service = () => {
  return (
    <section className="w-full py-16 px-5" id="services">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Discover Tala Prattoy
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.
        </p>
      </div>

      <div className="flex max-w-3xl mx-auto gap-6">
        <img
          src={discover1}
          alt="Discover"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="bg-blue-950 text-white py-10 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Stat Item */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl font-semibold">
              <CountUp start={0} end={500} suffix="+" duration={3} />
            </p>
            <p>Existing Partners</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl font-semibold">
              <CountUp start={0} end={299} separator="," suffix="+" duration={3} />
            </p>
            <p>New Ideas</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl font-semibold">
              <CountUp start={0} end={199} suffix="+" duration={3} />
            </p>
            <p>Art Exhibition</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl font-semibold">
              <CountUp start={0} end={599} separator="," suffix="+" duration={3} />
            </p>
            <p>Award Winning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

import React, { useEffect, useRef } from "react";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";

const About = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (scrollContainer) {
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        scrollAmount += scrollContainer.clientWidth; 
        if (scrollAmount > maxScroll) scrollAmount = 0; // loop back to start
        scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-10 px-5 bg-black" id="about">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          About Tala Prattoy
        </h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.
        </p>
      </div>

      {/* for horizontal */}
      <div className="overflow-hidden max-w-5xl mx-auto">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar"
        >
          {[about1, about2, about3].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Art ${idx + 1}`}
              className="w-full md:w-[500px] h-[300px] object-cover flex-shrink-0 rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default About;

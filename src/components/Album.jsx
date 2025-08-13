import React from "react";
import album1 from "../assets/album1.png";
import album2 from "../assets/album2.png";
import album3 from "../assets/album3.png";
import album4 from "../assets/album4.png";

const Album = () => {
  const albums = [
    {
      src: album1,
      title: "Durga Puja Art 2024",
      description:
        "Tala Prattoy, endeavouring towards global art forever, projects this year’s Durga Puja Art as celebrating the journey of a Durga Puja Artist. It thus highlights Kahan – a narration by Susanta Paul, the Artist of high repute.",
    },
    {
      src: album2,
      title: "Watch Art with Artist",
      description:
        "2024 introduces a never-seen-before guided walkthrough in Tala Prattoy Durga Puja Art venue where visitors may, in groups, see the artworks through a smooth walk with a guide. Here the guide is the Artist himself. This programme is chargeable and the visitors have to buy tickets for booking the slots of different times.",
    },
    {
      src: album3,
      title: "Encouraging Craftsmanship",
      description:
        "Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.",
    },
    {
      src: album4,
      title: "Promotion of Installation Art",
      description:
        "Installation Art is an artistic genre of multi-dimensional works which are generally site-specific. It’s aim – to see a generation of exquisite artists to emerge.",
    },
  ];

  return (
    <section className="w-full py-16 px-5 bg-black" id="album">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Objective & features
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {albums.map((album, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-lg">
            <img
              src={album.src}
              alt={album.title}
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-red-500 font-bold text-lg md:text-xl mb-2">
                {album.title}
              </h3>
              <p className="text-white text-sm md:text-base leading-relaxed">
                {album.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Album;

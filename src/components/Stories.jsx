import React from "react";
import storyImg from "../assets/story1.png"; 
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/home.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";
import gallery7 from "../assets/gallery7.png";
import gallery8 from "../assets/gallery8.png";

const StoriesSection = () => {
  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];

  return (
    <section className="w-full py-16 px-5 bg-black text-white" id="stories">
      
      <div className="max-w-6xl mx-auto text-center mb-10 px-2">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Award</h2>
        <p className="text-gray-300 text-base md:text-lg">
          Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.
        </p>
      </div>

      <div className="pb-6">
  <div className="flex gap-4 px-2 justify-start lg:justify-center overflow-x-auto lg:overflow-visible scrollbar-hide">
    {[...Array(5)].map((_, id) => (
      <img
        key={id}
        src={storyImg}
        alt={`Story ${id + 1}`}
        className="h-40 sm:h-44 md:h-48 lg:h-48 object-cover rounded-lg flex-shrink-0"
      />
    ))}
  </div>
</div>


      <div className="bg-gray-700 rounded-lg p-6 md:p-8 mt-12 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Advertise With Us</h3>
          <p className="text-gray-200 max-w-md mx-auto md:mx-0">
            Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival.
          </p>
        </div>
        <button className="px-6 py-3 bg-red-600 rounded-md hover:bg-red-700">
          Contact Us
        </button>
      </div>

      
      <div className="max-w-6xl mx-auto text-center mt-16 mb-6 px-2">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
        <p className="text-gray-300 text-base md:text-lg">
          Learning provides the environment and inspiration to create and exhibit that brings people together to build connections to community.
        </p>
      </div>

  
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 px-2">
        {galleryImages.map((img, id) => (
          <img
            key={id}
            src={img}
            alt={`Gallery ${id + 1}`}
            className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default StoriesSection;

import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";
import blog6 from "../assets/blog6.png";

const Blog = () => {
  const blogImages = [blog1, blog2, blog3, blog4, blog5, blog6];

  return (
    <section className="w-full py-16 px-5 bg-black text-white" id="blog">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Tala In News</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogImages.map((img, id) => (
          <img
            key={id}
            src={img}
            alt={`Blog ${id + 1}`}
            className="w-full object-cover rounded-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;

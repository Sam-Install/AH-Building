import React from "react";
import hs1 from "../assets/house1.jpg";
import hs2 from "../assets/house2.jpg";
import hs3 from "../assets/house3.jpg";
import hs4 from "../assets/house4.jpg";

const blogPosts = [
  {
    id: 1,
    image: hs1,
    title: "5 Things to Consider Before Building Your Dream Home",
    excerpt:
      "Planning to build your dream home? Here are key factors to keep in mind to avoid common mistakes and save money.",
    date: "Sept 13, 2025",
    link: "https://share.google/C2bbroutXmFVleBiC"
  },
  {
    id: 2,
    image: hs2,
    title: "Top Renovation Tips for 2025",
    excerpt:
      "Discover the latest trends and practical tips to make your next renovation smooth, cost-effective, and stress-free.",
    date: "Sept 10, 2025",
    link: "https://share.google/g5C3IaUIfMr4uHBEw"
  },
  {
    id: 3,
    image: hs3,
    title: "Why Sustainable Construction Matters",
    excerpt:
      "Eco-friendly construction isn’t just a trend — it’s a smarter, greener, and more cost-efficient future for homeowners.",
    date: "Sept 5, 2025",
    link: "https://share.google/LHIMfux23LpgCx7n9"
  },
  {
    id: 4,
    image: hs4,
    title: "How to Choose the Right Contractor",
    excerpt:
      "Hiring the right contractor can make or break your project. Here’s what to look for before signing that contract.",
    date: "Aug 28, 2025",
    link: "https://share.google/YBdTMfwPIBVKnyg5n"
  },
];

const Blogs = () => {
  return (
    <section className="mt-10 px-4 sm:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Articles</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />

            <div className="p-4 flex flex-col">
              <span className="text-gray-500 text-sm">{post.date}</span>
              <h3 className="text-xl font-semibold mt-2">{post.title}</h3>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              
              
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 self-start text-blue-600 hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;

import React from "react";
import { blogsList } from "../../data/mockData";
import { FaSearch } from "react-icons/fa";

export const BlogList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Side: Blog Posts Vertical List (Takes 2 Columns) */}
        <div className="lg:col-span-2 space-y-12">
          {blogsList.map((blog) => (
            <div
              key={blog.id}
              className="bg-white overflow-hidden pb-8 border-b border-gray-100"
            >
              {/* Image with Date Badge Overlay */}
              <div className="relative h-[350px] md:h-[420px] rounded-lg overflow-hidden shadow-sm">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                {/* Date Badge */}
                <div className="absolute bottom-4 left-4 bg-[#0099ff] text-white text-center px-4 py-2.5 rounded shadow-lg">
                  <span className="block text-xl font-extrabold leading-tight">
                    {blog.date.split(" ")[0]} {/* 15 */}
                  </span>
                  <span className="block text-xs uppercase tracking-wider font-medium">
                    {blog.date.split(" ")[1]} {/* Jan */}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="pt-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 hover:text-[#0099ff] cursor-pointer transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center gap-6 text-gray-400 text-xs">
                  <span>Travel, Lifestyle</span>
                  <span>•</span>
                  <span>03 Comments</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Professional Sidebar (Takes 1 Column) */}
        <div className="space-y-8">
          {/* Search Box */}
          <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-sm">
            <div className="flex items-center border border-gray-200 rounded overflow-hidden">
              <input
                type="text"
                placeholder="Search Keyword"
                className="w-full px-4 py-3 text-xs outline-none text-gray-700 placeholder-gray-400"
              />
              <button className="bg-[#0099ff] hover:bg-[#0088ee] text-white px-5 py-3 text-xs transition-colors">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 pb-4 mb-4 border-b border-gray-100">
              Category
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {[
                { name: "Resaurant food", count: 37 },
                { name: "Travel news", count: 10 },
                { name: "Modern technology", count: 3 },
                { name: "Product", count: 11 },
                { name: "Inspiration", count: 21 },
                { name: "Health Care", count: 9 },
              ].map((cat, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center hover:text-[#0099ff] cursor-pointer border-b border-gray-50 pb-2.5"
                >
                  <span>{cat.name}</span>
                  <span className="text-gray-400">({cat.count})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 pb-4 mb-4 border-b border-gray-100">
              Recent Post
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "From life was fish...",
                  date: "January 12, 2019",
                  img: "/image/photo-1560518883-ce09059eeffa.avif",
                },
                {
                  title: "The Amazing Hubble",
                  date: "02 Hours ago",
                  img: "/image/photo-1512917774080-9991f1c4c750.avif",
                },
                {
                  title: "Astronomy Or Astrology",
                  date: "03 Hours ago",
                  img: "/image/photo-1600596542815-ffad4c1539a9.avif",
                },
                {
                  title: "Asteroids telescope",
                  date: "01 Hours ago",
                  img: "/image/photo-1618221195710-dd6b41faaea6.avif",
                },
              ].map((post, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 cursor-pointer group"
                >
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-gray-800 group-hover:text-[#0099ff] transition-colors line-clamp-1">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tag Clouds */}
          <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 pb-4 mb-4 border-b border-gray-100">
              Tag Clouds
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "project",
                "love",
                "technology",
                "travel",
                "restaurant",
                "life style",
                "design",
                "illustration",
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-50 border border-gray-200 text-gray-600 text-xs px-3 py-1.5 rounded hover:bg-[#0099ff] hover:text-white hover:border-[#0099ff] transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="bg-white p-6 border border-gray-100 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 pb-4 mb-4 border-b border-gray-100">
              Newsletter
            </h3>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-3 text-xs border border-gray-200 rounded outline-none focus:border-[#0099ff]"
              />
              <button className="w-full bg-transparent hover:bg-[#0099ff] text-[#0099ff] hover:text-white border border-[#0099ff] py-3 rounded text-xs font-bold uppercase tracking-wider transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

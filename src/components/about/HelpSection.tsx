import React from "react";
import { FaBuilding, FaHome, FaSearch } from "react-icons/fa";

export const HelpSection: React.FC = () => {
  return (
    <div
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1920&auto=format&fit=crop')`,
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto px-4 text-center text-white mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">How we help people?</h2>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Sell home or office", icon: FaBuilding },
          { title: "Rent home or office", icon: FaHome },
          { title: "Find next", icon: FaSearch },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-[#0099ff] text-white p-8 rounded shadow-xl text-center flex flex-col items-center justify-center transition-transform hover:-translate-y-1"
          >
            <item.icon className="text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-xs text-gray-100 leading-relaxed font-light">
              Get started by choosing from one of our pre-built page templates
              to showcase your properties
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

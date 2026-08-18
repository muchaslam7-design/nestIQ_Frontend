import React from "react";
import type { PropertyDetails } from "../types";

interface HeroProps {
  data: PropertyDetails;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  // Yahan direct high-quality rustic nature/cabin image ka link laga diya hai
  const bgImage =
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1920&auto=format&fit=crop";

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Improved Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto h-full px-4 flex flex-col justify-center text-white pt-16">
        <div className="max-w-2xl">
          <span className="text-sm font-medium text-gray-100 tracking-wide block mb-3">
            {data.beds} Bed - {data.baths} Bath - {data.sqft} Sq Ft
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
            {data.title}
          </h1>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6 max-w-xl font-light">
            {data.subtitle}
          </p>
          <div className="text-4xl md:text-5xl font-bold mb-8 text-white">
            $ {data.price.toLocaleString()}
          </div>
          <button className="bg-[#0099ff] hover:bg-[#0088ee] text-white px-8 py-4 rounded text-sm font-bold tracking-wider transition-all shadow-lg uppercase">
            View Property
          </button>
        </div>
      </div>
    </div>
  );
};

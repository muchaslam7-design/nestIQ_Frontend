import React from "react";

export const ContactHero: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/image/photo-1486406146926-c627a92ad1ab.avif')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative max-w-7xl mx-auto h-full px-4 flex flex-col justify-center text-white">
        <span className="bg-[#0099ff] text-white text-[11px] font-bold px-3 py-1 rounded w-max uppercase tracking-wider mb-3 shadow-md">
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
          Contact Us
        </h1>
        <p className="text-gray-200 text-sm md:text-base max-w-xl font-light leading-relaxed">
          We’d love to hear from you. Reach out to our team for any property
          inquiries, support, or feedback.
        </p>
      </div>
    </div>
  );
};

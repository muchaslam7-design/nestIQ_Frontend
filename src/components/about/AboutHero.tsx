import React from "react";

export const AboutHero: React.FC = () => {
  return (
    <>
      <div className="relative w-full h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1920&auto=format&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative max-w-7xl mx-auto h-full px-4 flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            About Us
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-xl font-light">
            Get started by choosing from one of our pre-built page templates to
            showcase your properties
          </p>
        </div>
      </div>
    </>
  );
};

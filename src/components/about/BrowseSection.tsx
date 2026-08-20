import React from "react";

export const BrowseSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Just browse away.
          <br />
          It’s all here.
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Rhoncus est pellen tesque elit ullam corper dignissim cras tincidunt
          lobortis feugiat. Et netus malesuada fames.
        </p>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          Rhoncus est pellen tesque elit ullam corper dignissim cras tincidunt
          lobortis feugiat. Et netus malesuada fames.
        </p>
        <button className="bg-[#0099ff] hover:bg-[#0088ee] text-white px-7 py-3.5 rounded text-sm font-bold tracking-wider transition-all uppercase shadow-md">
          View All Property
        </button>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src="/image/photo-1618221195710-dd6b41faaea6.avif"
          alt="Interior view"
          className="w-full h-[400px] object-cover"
        />
      </div>
    </div>
  );
};

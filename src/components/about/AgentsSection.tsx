import React from "react";

export const AgentsSection: React.FC = () => {
  const agents = [
    {
      name: "Nick R. Bocker",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Jimmy Changa",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Buster Hyman",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
    },
    {
      name: "Buster Hyman",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=500&auto=format&fit=crop",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Agents</h2>
      <p className="text-gray-500 text-sm mb-12">
        Get started by choosing from one of our pre-built page templates to
        showcase your properties
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {agents.map((agent, index) => (
          <div
            key={index}
            className="text-left bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm"
          >
            <div className="h-72 overflow-hidden">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h4 className="font-bold text-gray-900 text-base mb-1">
                {agent.name}
              </h4>
              <p className="text-gray-400 text-xs">Real Estate Agent</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

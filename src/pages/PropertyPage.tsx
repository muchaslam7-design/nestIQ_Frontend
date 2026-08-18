import React from "react";
import { PropertyHero } from "../components/PropertyHero";
import { SearchBar } from "../components/SearchBar";
import { propertiesList } from "../data/mockData";
import { Navbar } from "../components/Navbar";

export const PropertyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PropertyHero />

      {/* Properties for Sale Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-[#07294d] mb-12">
          Properties for Sale
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {propertiesList.map((property) => (
            <div
              key={property.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="text-lg font-semibold text-[#003366] mb-1">
                  $ {property.price}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">
                  {property.subtitle}
                </p>
                <div className="border-t border-gray-100 pt-4 flex justify-between text-xs text-gray-500">
                  <span>{property.beds} Bedroom</span>
                  <span>{property.baths} Bedroom</span>
                  <span>{property.sqft} Sq Ft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

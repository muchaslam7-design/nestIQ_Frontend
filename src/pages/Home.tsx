import React from "react";
import { Hero } from "../components/Hero";
import { SearchBar } from "../components/SearchBar";
import { propertyData } from "../data/mockData";

export default function Home() {
  return (
    <div className="relative">
      <Hero data={propertyData} />
      {/* SearchBar ko Hero ke foran baad rakha hai negative margin ke sath */}
    </div>
  );
}

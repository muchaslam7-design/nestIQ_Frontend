import React from "react";
import { AboutHero } from "../components/about/AboutHero";
import { BrowseSection } from "../components/about/BrowseSection";
import { HelpSection } from "../components/about/HelpSection";
import { AgentsSection } from "../components/about/AgentsSection";

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <BrowseSection />
      <HelpSection />
      <AgentsSection />
    </div>
  );
};

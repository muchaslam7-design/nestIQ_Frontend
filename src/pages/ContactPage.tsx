import React from "react";
import { ContactHero } from "../components/contact/ContactHero";
import { ContactContent } from "../components/contact/ContactContent";

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-550 bg-gray-50">
      <ContactHero />
      <ContactContent />
    </div>
  );
};

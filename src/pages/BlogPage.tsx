import React from "react";
import { BlogHero } from "../components/blog/BlogHero";
import { BlogList } from "../components/blog/BlogList";

export const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHero />
      <BlogList />
    </div>
  );
};

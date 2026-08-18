import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { navItems, propertyData } from "./data/mockData";
import { PropertyPage } from "./pages/PropertyPage";
import { AboutPage } from "./pages/AboutPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { Footer } from "./components/Footer";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navbar with Auth Props */}
      <Navbar
        items={navItems}
        callNumber={propertyData.callNumber}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
      />

      {/* SearchBar with Auth Prop */}
      <SearchBar isAuthenticated={isAuthenticated} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/property" element={<PropertyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/login"
          element={
            <LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />
          }
        />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

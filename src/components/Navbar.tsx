import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import type { NavItem } from "../types";

interface NavbarProps {
  items: NavItem[];
  callNumber: string;
  isAuthenticated: boolean;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  items,
  callNumber,
  isAuthenticated,
  onLogout,
}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#07294d] text-white">
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Professional Minimalist Logo Section */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0099ff] to-[#38bdf8] flex items-center justify-center text-white shadow-md shadow-[#0099ff]/20 transition-transform group-hover:scale-105">
            <FaHome size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-white font-sans leading-none">
              Nest<span className="text-[#0099ff]">IQ</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mt-1">
              Real Estate
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {items.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              className={({ isActive }) =>
                `transition-colors pb-1 ${
                  isActive
                    ? "text-[#0099ff] font-semibold border-b-2 border-[#0099ff]"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Call Info & Dynamic Auth Button (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <div className="hidden lg:block text-right">
            <span className="text-xs text-gray-400 block font-normal">
              Call Us:
            </span>
            <span className="text-sm font-semibold tracking-wide text-white">
              {callNumber}
            </span>
          </div>

          {isAuthenticated ? (
            <button
              onClick={onLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded text-sm font-medium transition-colors shadow"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-[#0099ff] hover:bg-[#0088ee] text-white px-6 py-2.5 rounded text-sm font-medium transition-colors shadow"
            >
              Sign In
            </button>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-4">
          {isAuthenticated ? (
            <button
              onClick={onLogout}
              className="bg-red-500 text-white px-3 py-1.5 rounded text-xs font-medium"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-[#0099ff] text-white px-3 py-1.5 rounded text-xs font-medium"
            >
              Sign In
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2"
          >
            {isOpen ? <FaSizeIcon size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#07294d] border-t border-gray-700 px-4 pt-4 pb-6 flex flex-col gap-4">
          {items.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium py-2 ${
                  isActive ? "text-[#0099ff] font-semibold" : "text-gray-300"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="text-xs text-gray-400 pt-2 border-t border-gray-700">
            Call Us:{" "}
            <span className="text-white font-semibold">{callNumber}</span>
          </div>
        </div>
      )}
    </header>
  );
};

// Helper component for close icon
function FaSizeIcon({ size }: { size: number }) {
  return <FaTimes size={size} />;
}

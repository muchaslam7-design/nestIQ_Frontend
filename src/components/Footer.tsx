import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
  FaHome,
} from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#f4f6f9] text-gray-800 pt-24 pb-12 overflow-hidden border-t border-gray-200">
      {/* Top accent glowing border line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0099ff] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-300/60">
          {/* Column 1: Brand Logo (Same as Navbar) & Bio */}
          <div className="lg:col-span-4 space-y-6">
            {/* Exact Navbar Logo Match */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0099ff] to-[#38bdf8] flex items-center justify-center text-white shadow-md shadow-[#0099ff]/20 transition-transform group-hover:scale-105">
                <FaHome size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-gray-900 leading-none">
                  Nest<span className="text-[#0099ff]">IQ</span>
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                  Real Estate
                </span>
              </div>
            </Link>

            <p className="text-gray-600 text-xs leading-relaxed font-light pr-4">
              Your premier destination for luxury properties, high-yield
              investments, and elite architectural solutions tailored for modern
              living.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white shadow-sm hover:bg-[#0099ff] border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white text-xs transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white shadow-sm hover:bg-[#0099ff] border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white text-xs transition-all duration-300 hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white shadow-sm hover:bg-[#0099ff] border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white text-xs transition-all duration-300 hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white shadow-sm hover:bg-[#0099ff] border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white text-xs transition-all duration-300 hover:scale-110"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Takes 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 border-l-2 border-[#0099ff] pl-3">
              Explore
            </h3>
            <ul className="space-y-3 text-xs text-gray-600">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#0099ff] transition-colors flex items-center gap-2 group"
                >
                  <FaArrowRight className="text-[9px] text-[#0099ff] transform group-hover:translate-x-1 transition-transform" />{" "}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/property"
                  className="hover:text-[#0099ff] transition-colors flex items-center gap-2 group"
                >
                  <FaArrowRight className="text-[9px] text-[#0099ff] transform group-hover:translate-x-1 transition-transform" />{" "}
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#0099ff] transition-colors flex items-center gap-2 group"
                >
                  <FaArrowRight className="text-[9px] text-[#0099ff] transform group-hover:translate-x-1 transition-transform" />{" "}
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-[#0099ff] transition-colors flex items-center gap-2 group"
                >
                  <FaArrowRight className="text-[9px] text-[#0099ff] transform group-hover:translate-x-1 transition-transform" />{" "}
                  Blog & News
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#0099ff] transition-colors flex items-center gap-2 group"
                >
                  <FaArrowRight className="text-[9px] text-[#0099ff] transform group-hover:translate-x-1 transition-transform" />{" "}
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (Takes 3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 border-l-2 border-[#0099ff] pl-3">
              Headquarters
            </h3>
            <div className="space-y-3 text-xs text-gray-600">
              <div className="flex items-start gap-3 bg-white shadow-sm p-3.5 rounded-xl border border-gray-200/60">
                <FaMapMarkerAlt className="text-[#0099ff] mt-0.5 flex-shrink-0 text-sm" />
                <span className="leading-relaxed text-gray-600">
                  123 Real Estate Ave, Suite 100, NY 10001
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white shadow-sm p-3.5 rounded-xl border border-gray-200/60">
                <FaPhoneAlt className="text-[#0099ff] flex-shrink-0 text-sm" />
                <span className="text-gray-600">+10 (78) 356 3276</span>
              </div>
              <div className="flex items-center gap-3 bg-white shadow-sm p-3.5 rounded-xl border border-gray-200/60">
                <FaEnvelope className="text-[#0099ff] flex-shrink-0 text-sm" />
                <span className="text-gray-600">support@realestate.com</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter (Takes 3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 border-l-2 border-[#0099ff] pl-3">
              Stay Updated
            </h3>
            <p className="text-gray-600 text-xs font-light leading-relaxed">
              Subscribe to get exclusive property listings and weekly market
              trends.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-white shadow-sm border border-gray-300 text-gray-900 placeholder-gray-400 text-xs rounded-xl px-4 py-3.5 outline-none focus:border-[#0099ff] focus:ring-1 focus:ring-[#0099ff] transition-all"
              />
              <button className="w-full bg-[#0099ff] hover:bg-[#0088ee] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#0099ff]/20">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2026 NestIQ Real Estate. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Support Center
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

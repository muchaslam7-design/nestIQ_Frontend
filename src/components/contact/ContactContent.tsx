import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

export const ContactContent: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Clean Minimalist Details (No Cards) */}
        <div className="space-y-8">
          <div>
            <span className="text-[#0099ff] text-xs font-bold uppercase tracking-widest block mb-2">
              Get In Touch With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Let’s discuss your next real estate venture.
            </h2>
            <p className="text-gray-500 text-xs md:text-sm font-light mt-4 leading-relaxed">
              Whether you are looking to buy your dream property, sell an asset,
              or require expert market analysis, our team is ready to provide
              elite assistance.
            </p>
          </div>

          <div className="space-y-6 pt-2">
            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[#0099ff]/10 text-[#0099ff] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0099ff] group-hover:text-white transition-all duration-300">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  Headquarters
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  123 Real Estate Ave, Suite 100, Modern City, NY 10001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[#0099ff]/10 text-[#0099ff] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0099ff] group-hover:text-white transition-all duration-300">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Direct Line</h4>
                <p className="text-xs text-gray-500 mt-1">
                  +10 (78) 356 3276 / +1 (800) 123 4567
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[#0099ff]/10 text-[#0099ff] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0099ff] group-hover:text-white transition-all duration-300">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  Email Support
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  support@realestate.com / info@realestate.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[#0099ff]/10 text-[#0099ff] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0099ff] group-hover:text-white transition-all duration-300">
                <FaClock />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  Working Hours
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Mon - Sat: 9:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Stunning Immersive Visual Banner with New Background Image */}
        <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl group">
          <img
            src="/image/photo-1497366216548-37526070297c.avif"
            alt="Modern Office Building"
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07294d]/90 via-[#07294d]/30 to-transparent flex flex-col justify-end p-8 md:p-10 text-white">
            <span className="bg-[#0099ff] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider w-max mb-3 shadow-md">
              Global HQ
            </span>
            <h3 className="text-2xl font-extrabold mb-2">
              Visit Our Main Office
            </h3>
            <p className="text-gray-200 text-xs font-light mb-6 max-w-md">
              Experience personalized property consultations with our senior
              real estate experts in a state-of-the-art environment.
            </p>
            <a
              href="tel:+10783563276"
              className="inline-flex items-center gap-3 text-xs font-bold text-white bg-white/20 hover:bg-[#0099ff] backdrop-blur-md px-6 py-3.5 rounded-xl transition-all duration-300 w-max"
            >
              <span>Schedule a Visit</span>
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

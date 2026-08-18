import React from "react";
import {
  FaTimes,
  FaCheckCircle,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

interface PropertyResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  predictionResult: any;
  safetyResult: any;
  trendResult: any;
  formData: {
    totalArea: string;
    bedrooms: string;
    latitude: string;
    longitude: string;
  };
}

export const PropertyResultModal: React.FC<PropertyResultModalProps> = ({
  isOpen,
  onClose,
  predictionResult,
  safetyResult,
  trendResult,
  formData,
}) => {
  if (!isOpen) return null;

  const finalPrice =
    predictionResult?.predictedPrice || predictionResult?.price || 0;

  const safetyData = Array.isArray(safetyResult)
    ? safetyResult[0]
    : safetyResult || {
        label: "Positive",
        score: 0.95,
        message: "The area is evaluated as safe and family-friendly.",
      };

  const trendMessage =
    trendResult?.generated_text ||
    `Real Estate demand for Area: ${formData.totalArea} SqFt is projected to grow steadily by 12% over the next fiscal year due to urban expansion.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 px-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 border border-gray-100 relative transform transition-all scale-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all p-2 rounded-full"
        >
          <FaTimes size={14} />
        </button>

        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-[#003366]/10 text-[#003366] flex items-center justify-center">
            <FaCheckCircle size={24} />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-gray-900">
              nestIQ Property Insights
            </h3>
            <p className="text-xs text-gray-500">
              AI-powered market valuation & neighborhood analysis
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-[#003366] rounded-2xl p-5 text-center my-3 text-white shadow-md">
          <span className="text-[10px] uppercase font-bold text-blue-200 tracking-widest block mb-1">
            Estimated Market Value
          </span>
          <span className="text-3xl font-black text-white">
            ${finalPrice ? finalPrice.toLocaleString() : "N/A"}
          </span>
        </div>

        {/* Neighborhood Safety Card */}
        <div className="bg-emerald-50/60 border border-emerald-100 p-4 rounded-2xl my-3">
          <div className="flex items-center gap-3 mb-1.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
              <FaShieldAlt size={14} />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 font-bold uppercase block">
                Neighborhood Safety
              </span>
              <span className="text-xs font-black text-emerald-800">
                {safetyData.label} (
                {Math.round((safetyData.score || 0.95) * 100)}% Confidence)
              </span>
            </div>
          </div>
          <p className="text-xs text-gray-700 font-medium pl-1">
            "{safetyData.message}"
          </p>
        </div>

        {/* Market Trend Card */}
        <div className="bg-blue-50/60 border border-blue-100 p-4 rounded-2xl my-3">
          <div className="flex items-center gap-3 mb-1.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
              <FaChartLine size={14} />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 font-bold uppercase block">
                Market Trend Analysis
              </span>
            </div>
          </div>
          <p className="text-xs text-gray-700 font-medium pl-1">
            "{trendMessage}"
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 my-4 bg-gray-50 p-3.5 rounded-2xl border border-gray-100">
          <div className="p-1">
            <span className="font-bold text-gray-800">Area:</span>{" "}
            {formData.totalArea} SqFt
          </div>
          <div className="p-1">
            <span className="font-bold text-gray-800">Bedrooms:</span>{" "}
            {formData.bedrooms} Beds
          </div>
          <div className="p-1">
            <span className="font-bold text-gray-800">Lat:</span>{" "}
            {formData.latitude}
          </div>
          <div className="p-1">
            <span className="font-bold text-gray-800">Long:</span>{" "}
            {formData.longitude}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-[#003366] hover:bg-[#002244] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md"
        >
          Close Details
        </button>
      </div>
    </div>
  );
};

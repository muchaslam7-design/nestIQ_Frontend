import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaBed,
  FaMapMarkerAlt,
  FaRulerCombined,
} from "react-icons/fa";
import api from "../services/api";
import { PropertyResultModal } from "./PropertyResultModal";

interface SearchBarProps {
  isAuthenticated: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ isAuthenticated }) => {
  const [totalArea, setTotalArea] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [loading, setLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState<any>(null);
  const [trendResult, setTrendResult] = useState<any>(null);
  const [safetyResult, setSafetyResult] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [fieldErrors, setFieldErrors] = useState({
    totalArea: "",
    bedrooms: "",
    latitude: "",
    longitude: "",
  });

  const navigate = useNavigate();

  const validateField = (field: string, value: string) => {
    let error = "";
    const num = Number(value);

    if (field === "totalArea") {
      if (!value.trim() || isNaN(num) || num <= 0)
        error = "Area required (> 0)";
    } else if (field === "bedrooms") {
      if (
        !value.trim() ||
        isNaN(num) ||
        num <= 0 ||
        value.includes(".") ||
        !Number.isInteger(num)
      ) {
        error = "Whole number required";
      }
    } else if (field === "latitude") {
      if (!value.trim() || isNaN(num) || num < -90 || num > 90)
        error = "Lat: -90 to 90";
    } else if (field === "longitude") {
      if (!value.trim() || isNaN(num) || num < -180 || num > 180)
        error = "Long: -180 to 180";
    }
    return error;
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "totalArea") setTotalArea(value);
    if (field === "bedrooms") setBedrooms(value);
    if (field === "latitude") setLatitude(value);
    if (field === "longitude") setLongitude(value);

    setFieldErrors((prev) => ({
      ...prev,
      [field]: validateField(field, value),
    }));
  };

  const handleSearchClick = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = {
      totalArea: validateField("totalArea", totalArea),
      bedrooms: validateField("bedrooms", bedrooms),
      latitude: validateField("latitude", latitude),
      longitude: validateField("longitude", longitude),
    };

    setFieldErrors(errors);
    if (
      errors.totalArea ||
      errors.bedrooms ||
      errors.latitude ||
      errors.longitude
    )
      return;

    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/Prediction/predict", {
        totalArea: Number(totalArea),
        bedrooms: Number(bedrooms),
        latitude: Number(latitude),
        longitude: Number(longitude),
      });
      setPredictionResult(response.data);

      try {
        const trendRes = await api.post("/Prediction/predict-trend", {
          inputs: `Area: ${totalArea} SqFt, Location (${latitude}, ${longitude})`,
        });
        setTrendResult(trendRes.data);
      } catch (e) {
        console.warn(e);
      }

      try {
        const safetyRes = await api.post("/Prediction/predict-safety", {
          inputs: `Location (${latitude}, ${longitude})`,
        });
        setSafetyResult(safetyRes.data);
      } catch (e) {
        console.warn(e);
      }

      setIsModalOpen(true);
    } catch (err: any) {
      console.error("Prediction failed", err);
      if (err.response?.status === 401) navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 relative z-30 pt-4 pb-12">
      <form
        onSubmit={handleSearchClick}
        className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100"
        noValidate
      >
        {/* Total Area */}
        <div className="flex flex-col">
          <div className="relative flex items-center group">
            <FaRulerCombined className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-[#003366] transition-colors text-xs" />
            <input
              type="text"
              value={totalArea}
              onChange={(e) => handleInputChange("totalArea", e.target.value)}
              placeholder="Total Area (SqFt)"
              className={`w-full pl-9 pr-3 py-2.5 bg-gray-50/85 border rounded-xl text-xs font-medium outline-none transition-all ${
                fieldErrors.totalArea
                  ? "border-red-500 bg-red-50 text-red-900"
                  : "border-gray-200/80 text-gray-800 focus:border-[#003366]"
              }`}
            />
          </div>
          <div className="h-5 mt-1 px-1">
            {fieldErrors.totalArea && (
              <span className="text-red-600 text-[11px] font-bold block">
                {fieldErrors.totalArea}
              </span>
            )}
          </div>
        </div>

        {/* Bedrooms */}
        <div className="flex flex-col">
          <div className="relative flex items-center group">
            <FaBed className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-[#003366] transition-colors text-xs" />
            <input
              type="text"
              value={bedrooms}
              onChange={(e) => handleInputChange("bedrooms", e.target.value)}
              placeholder="Bedrooms"
              className={`w-full pl-9 pr-3 py-2.5 bg-gray-50/85 border rounded-xl text-xs font-medium outline-none transition-all ${
                fieldErrors.bedrooms
                  ? "border-red-500 bg-red-50 text-red-900"
                  : "border-gray-200/80 text-gray-800 focus:border-[#003366]"
              }`}
            />
          </div>
          <div className="h-5 mt-1 px-1">
            {fieldErrors.bedrooms && (
              <span className="text-red-600 text-[11px] font-bold block">
                {fieldErrors.bedrooms}
              </span>
            )}
          </div>
        </div>

        {/* Latitude */}
        <div className="flex flex-col">
          <div className="relative flex items-center group">
            <FaMapMarkerAlt className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-[#003366] transition-colors text-xs" />
            <input
              type="text"
              value={latitude}
              onChange={(e) => handleInputChange("latitude", e.target.value)}
              placeholder="Latitude"
              className={`w-full pl-9 pr-3 py-2.5 bg-gray-50/85 border rounded-xl text-xs font-medium outline-none transition-all ${
                fieldErrors.latitude
                  ? "border-red-500 bg-red-50 text-red-900"
                  : "border-gray-200/80 text-gray-800 focus:border-[#003366]"
              }`}
            />
          </div>
          <div className="h-5 mt-1 px-1">
            {fieldErrors.latitude && (
              <span className="text-red-600 text-[11px] font-bold block">
                {fieldErrors.latitude}
              </span>
            )}
          </div>
        </div>

        {/* Longitude */}
        <div className="flex flex-col">
          <div className="relative flex items-center group">
            <FaMapMarkerAlt className="absolute left-3.5 top-3.5 text-gray-400 group-focus-within:text-[#003366] transition-colors text-xs" />
            <input
              type="text"
              value={longitude}
              onChange={(e) => handleInputChange("longitude", e.target.value)}
              placeholder="Longitude"
              className={`w-full pl-9 pr-3 py-2.5 bg-gray-50/85 border rounded-xl text-xs font-medium outline-none transition-all ${
                fieldErrors.longitude
                  ? "border-red-500 bg-red-50 text-red-900"
                  : "border-gray-200/80 text-gray-800 focus:border-[#003366]"
              }`}
            />
          </div>
          <div className="h-5 mt-1 px-1">
            {fieldErrors.longitude && (
              <span className="text-red-600 text-[11px] font-bold block">
                {fieldErrors.longitude}
              </span>
            )}
          </div>
        </div>

        {/* Predict Button */}
        <div className="flex flex-col">
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-[#003366] to-[#004080] hover:from-[#002244] hover:to-[#003366] text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#003366]/20 flex items-center justify-center gap-2 transform active:scale-95 h-[38px] mt-0.5"
          >
            <FaSearch size={11} />
            {loading ? "Analyzing..." : "Predict Price"}
          </button>
        </div>
      </form>

      {/* Modal Component Call */}
      <PropertyResultModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        predictionResult={predictionResult}
        safetyResult={safetyResult}
        trendResult={trendResult}
        formData={{ totalArea, bedrooms, latitude, longitude }}
      />
    </div>
  );
};

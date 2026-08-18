import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaLock,
  FaEnvelope,
  FaUser,
  FaArrowLeft,
  FaBuilding,
} from "react-icons/fa";
import { z } from "zod";
import api from "../services/api";

// Zod Schema with strict Full Name validation (Only letters and spaces allowed)
const registerSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters long.")
    .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces."),
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
});

export const RegisterPage: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
  }>({});

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setFieldErrors({});

    const validationResult = registerSchema.safeParse({
      fullName,
      email,
      password,
    });

    if (!validationResult.success) {
      const formattedErrors = validationResult.error.format();
      setFieldErrors({
        fullName: formattedErrors.fullName?._errors[0],
        email: formattedErrors.email?._errors[0],
        password: formattedErrors.password?._errors[0],
      });
      return;
    }

    setLoading(true);

    try {
      await api.post("/Auth/register", { fullName, email, password });
      navigate("/login");
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          "Registration failed. Please check your details and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000')`,
      }}
    >
      {/* Main Form Container */}
      <div className="relative z-10 max-w-md w-full space-y-8 bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20">
        {/* Top Back Link & Heading */}
        <div>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-[#003366] mb-4 transition-colors"
          >
            <FaArrowLeft size={12} /> Back to Sign In
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-[#003366] text-white rounded-2xl shadow-md">
              <FaBuilding size={20} />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">
                Create Account
              </h2>
              <p className="text-xs text-gray-500">
                Join NestIQ Intelligence Platform
              </p>
            </div>
          </div>
        </div>

        {/* General Error Notification */}
        {error && (
          <div className="p-3 bg-red-50 text-red-600 text-xs rounded-xl border border-red-100 text-center font-medium">
            {error}
          </div>
        )}

        {/* Form Fields */}
        <form onSubmit={handleRegister} className="space-y-4" noValidate>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3.5 top-3.5 text-gray-400 text-xs" />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Muneeba Aslam"
                className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-xl text-xs outline-none transition-all ${
                  fieldErrors.fullName
                    ? "border-red-500 bg-red-50/50"
                    : "border-gray-200 focus:border-[#003366] focus:bg-white"
                }`}
              />
            </div>
            {fieldErrors.fullName && (
              <p className="text-red-500 text-[11px] font-semibold mt-1 ml-1">
                {fieldErrors.fullName}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3.5 top-3.5 text-gray-400 text-xs" />
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-xl text-xs outline-none transition-all ${
                  fieldErrors.email
                    ? "border-red-500 bg-red-50/50"
                    : "border-gray-200 focus:border-[#003366] focus:bg-white"
                }`}
              />
            </div>
            {fieldErrors.email && (
              <p className="text-red-500 text-[11px] font-semibold mt-1 ml-1">
                {fieldErrors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3.5 top-3.5 text-gray-400 text-xs" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-xl text-xs outline-none transition-all ${
                  fieldErrors.password
                    ? "border-red-500 bg-red-50/50"
                    : "border-gray-200 focus:border-[#003366] focus:bg-white"
                }`}
              />
            </div>
            {fieldErrors.password && (
              <p className="text-red-500 text-[11px] font-semibold mt-1 ml-1">
                {fieldErrors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#003366] hover:bg-[#001f3f] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#003366]/30 mt-2"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        {/* Footer Navigation */}
        <div className="text-center border-t border-gray-100 pt-4">
          <p className="text-xs text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-[#003366] hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaLock, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { z } from "zod";
import api from "../services/api";

// Zod Schema for Login Validation
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
});

interface LoginPageProps {
  onLoginSuccess: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setFieldErrors({});

    // Zod validation check
    const validationResult = loginSchema.safeParse({ email, password });

    if (!validationResult.success) {
      const errors = validationResult.error.format();
      setFieldErrors({
        email: errors.email?._errors[0],
        password: errors.password?._errors[0],
      });
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/Auth/login", { email, password });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        onLoginSuccess();
        navigate("/");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          "Invalid email or password. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url('/image/photo-1542314831-068cd1dbfeeb.avif')`,
      }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-white mb-6 transition-colors"
        >
          <FaArrowLeft size={12} /> Back to Home
        </Link>
        <h2 className="text-center text-2xl font-extrabold text-white">
          Sign in to your account
        </h2>
        <p className="text-center text-xs text-gray-300 mt-2">
          Access AI Real Estate Intelligence Platform
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white/95 backdrop-blur-md py-8 px-4 shadow-2xl sm:rounded-2xl sm:px-10 border border-white/20">
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 text-xs rounded-xl border border-red-100 text-center font-medium">
              {error}
            </div>
          )}

          {/* Added noValidate to prevent browser default tooltips */}
          <form onSubmit={handleLogin} className="space-y-4" noValidate>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3.5 top-3.5 text-gray-400 text-xs" />
                {/* Changed type="email" to type="text" */}
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
                <p className="text-red-500 text-[10px] font-semibold mt-1 ml-1">
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
                <p className="text-red-500 text-[10px] font-semibold mt-1 ml-1">
                  {fieldErrors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#003366] hover:bg-[#002244] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#003366]/20 mt-2"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center border-t border-gray-100 pt-4">
            <p className="text-xs text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-bold text-[#003366] hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

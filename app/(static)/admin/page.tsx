"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Hardcoded credentials for admin (replace with secure method later)
    if (email === "foodtuckwithmahi@gmail.com" && password === "mahi6785") {
      localStorage.setItem("isLoggedIn", "true"); 
      router.push("/admin/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className=" max-w-md bg-white rounded-lg shadow-2xl border border-solid border-gray-400 p-8 w-[350px]"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
       
        {/* Email or Username Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email 
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-csYellow focus:outline-none"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-csYellow focus:outline-none"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-2 rounded-lg text-white font-medium bg-csYellow hover:bg-orange-500 transition-colors duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

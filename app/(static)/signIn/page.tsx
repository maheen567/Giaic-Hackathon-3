"use client";

import React from "react";
import TopHeader from "@/Components/TopHeader";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

const Login = () => {
  return (
    <section>
      <TopHeader
        title="Sign In Page"
        link1="Home"
        link2="Sign In"
        link3="/signIn"
      />

      <div className="px-5 py-[60px] ">
        <div className="flex justify-center items-center p-4">
          <div className="w-full max-w-sm bg-white rounded-lg shadow-2xl border border-solid border-gray-400 p-8 text-center">
            <SignedIn>
              <UserButton />
              <h2 className="text-2xl font-bold text-center">Welcome!</h2>
              <p className="text-sm text-center text-gray-600 my-3 mb-3 ">
                Welcome! Use coupon Dicount6785 to get a $35 discount on your
                next order!
              </p>
            </SignedIn>

            <SignedOut>
              <h1 className="font-bold text-2xl text-csBlack font-inter mb-3">
                Login
              </h1>
              {/* Email or Username Field */}
              <div className="mb-4 text-left">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email or Username
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email or username"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-csYellow focus:outline-none"
                />
              </div>

              {/* Password Field */}
              <div className="mb-6 text-left">
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
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-csYellow focus:outline-none"
                />
              </div>

              {/* Login Button */}
              <button className="w-full py-2 rounded-lg text-white font-medium bg-csYellow hover:bg-orange-500 transition-colors duration-200">
                <SignInButton mode="modal" />
              </button>

              {/* Account Creation Link */}
              <p className="mt-6 text-sm text-center text-gray-600">
                No account?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-csYellow hover:underline "
                >
                  Create one
                </Link>
              </p>
            </SignedOut>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

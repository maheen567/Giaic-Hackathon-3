"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu, IoCloseSharp, IoSearch, IoBagOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="w-full text-white bg-csBlack px-[5%] fixed top-0 h-auto flex flex-wrap items-center z-20 font-inter">
      <div className="w-full flex py-5 flex-col md:flex-row items-center z-20">
        {/* Logo */}
        <div className="flex font-medium items-center mb-4 md:mb-0 cursor-pointer">
          <Link
            href="/"
            className="ml-3 text-xl text-white text-[24px] font-bold"
          >
            Food<span className="text-csYellow">tuck</span>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden ml-auto bg-transparent text-white border-none focus:outline-none cursor-pointer"
        >
          {isMenuOpen ? <IoCloseSharp size={24} /> : <IoMenu size={24} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } block  flex-shrink-0 md:flex overflow-x-hidden w-full md:overflow-visible md:mx-auto md:w-auto justify-center items-center text-base text-[14px] md:text-[16px] font-normal gap-2`}
        >
          <div className="flex flex-col items-center justify-center md:flex-row gap-2 md:gap-1  lg:gap-3 md:w-full flex-nowrap md:flex-wrap">
            <Link
              href="/"
              className="px-2 py-1 font-bold text-white hover:text-csYellow transition-all duration-150"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="px-2 py-1 font-bold text-white hover:text-csYellow transition-all duration-150"
            >
              Menu
            </Link>
            <Link
              href="/blog"
              className="px-2 py-1 font-bold text-white hover:text-csYellow transition-all duration-150"
            >
              Blog
            </Link>
            <div className="group relative">
              {/* "Pages" Link */}
              <button
                onClick={toggleDropdown}
                className="px-2 py-1 font-bold text-white hover:text-csYellow transition-all duration-150 flex items-center gap-1"
              >
                Pages <FaAngleDown />
              </button>

              {/* Dropdown Menu */}
              <ul
                className={`absolute shadow-lg bg-black/10 backdrop-blur-md text-white space-y-3 lg:top-10 max-lg:top-12 -left-6 min-w-[250px] z-50 px-6 py-4 transform transition-all duration-300 ${
                  isDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-4"
                }`}
              >
                <li className="border-b py-2">
                  <Link
                    href="/chefs"
                    className="hover:text-csYellow transition text-white text-[15px] font-bold block"
                  >
                    Our Chefs
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    href="/faq"
                    className="hover:text-csYellow transition text-white text-[15px] font-bold block"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    href="/cart"
                    className="hover:text-csYellow transition text-white text-[15px] font-bold block"
                  >
                    Cart
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    href="/userDetails"
                    className="hover:text-csYellow transition text-white text-[15px] font-bold block"
                  >
                    User Details
                  </Link>
                </li>
                <li className="border-b py-2">
                  <Link
                    href="/wishList"
                    className="hover:text-csYellow transition text-white text-[15px] font-bold block"
                  >
                    WishList
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              href="/about"
              className="px-2 py-1 font-bold text-white hover:text-csYellow transition-all duration-150"
            >
              About
            </Link>
            <Link
              href="/shop"
              className="px-2 py-1 font-bold text-white hover:text-csYellow transition-all duration-150"
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className="px-2 py-1 font-bold text-white hover:text-csYellow transition-all duration-150"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-3 sm:gap-5 mt-4 md:mt-0">
          <Link href="/search" className="cursor-pointer">
            <IoSearch
              size={24}
              className="hover:-translate-y-1 transition-all duration-200 text-white"
            />
          </Link>
          <Link href="/signIn" className="cursor-pointer">
            <FiUser
              size={24}
              className="hover:-translate-y-1 transition-all duration-200 text-white"
            />
          </Link>
          <Link
            href="/cart"
            className="cursor-pointer hover:-translate-y-1 transition-all duration-200"
          >
            <IoBagOutline size={24} className="text-white" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

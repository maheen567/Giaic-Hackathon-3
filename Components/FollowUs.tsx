import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const FollowUs = () => {
  return (
    <div className="bg-white border border-solid border-gray-300 shadow-sm p-5 lg:p-7 mb-6">
              <h4 className="font-bold font-inter text-csBlack text-[20px] mb-6">
                Follow Us
              </h4>
              <div className="flex justify-evenly">
                <Link
                  href={"#"}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 text-[#222] hover:text-white hover:bg-csYellow transition"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href={"#"}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 text-[#222] hover:text-white hover:bg-csYellow transition"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href={"#"}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 text-[#222] hover:text-white hover:bg-csYellow transition"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href={"#"}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 text-[#222] hover:text-white hover:bg-csYellow transition"
                >
                  <FaYoutube />
                </Link>
                <Link
                  href={"#"}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 text-[#222] hover:text-white hover:bg-csYellow transition"
                >
                  <FaPinterestP />
                </Link>
              </div>
            </div>
  )
}

export default FollowUs

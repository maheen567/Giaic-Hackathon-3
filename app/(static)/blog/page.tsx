import TopHeader from "@/Components/TopHeader";
import Image from "next/image";
import React from "react";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { VscCommentDiscussion } from "react-icons/vsc";
import { FaRegUserCircle, FaYoutube } from "react-icons/fa";
import { PiArrowLineUpRightBold } from "react-icons/pi";
import Link from "next/link";
import { blogPost } from "@/Data/BlogPost";
import { FiSearch } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import Gallery from "@/Components/Gallery";
import FilterByMenu from "@/Components/FilterByMenu";
import RecentPost from "@/Components/RecentPost";
import ProductTags from "@/Components/ProductTags";
import FollowUs from "@/Components/FollowUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Foodtuck",
  description: "An online food restraunt",
};

const page = () => {
  return (
    <section>
      <TopHeader title="Blog List" link1="Home" link2="Blog" link3="/blog" />

      <div className="flex flex-col lg:flex-row px-4 md:px-[7%] lg:px-10 py-[50px] md:py-[100px] lg:space-x-8 space-y-8 lg:space-y-0">
        
        {/* Left Portion */}
        <div className="w-full lg:w-[65%] space-y-10">
          <div className="text-csBlack">
            {blogPost.map((post) => (
              <div
                key={post.id}
                className="flex flex-col justify-center md:justify-start mb-8"
              >
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={687}
                    height={520}
                    className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] lg:w-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-csYellow text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-[4px] sm:py-[6px] rounded-md text-center">
                    <p>{post.publish_date}</p>
                    <p className="font-[300] -mt-1">{post.publish_month}</p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center text-black    text-xs sm:text-sm my-3 gap-2">
                    <p className="flex items-center gap-2">
                      <IoCalendarNumberSharp
                        className="text-csYellow"
                        height={20}
                        width={20}
                      />
                      {post.date} /
                    </p>
                    <p className="flex items-center gap-2">
                      <VscCommentDiscussion
                        height={24}
                        width={24}
                        className="text-csYellow"
                      />
                      {post.comment} /
                    </p>
                    <p className="flex items-center gap-2">
                      <FaRegUserCircle
                        height={20}
                        width={20}
                        className="text-csYellow"
                      />
                      {post.user}
                    </p>
                  </div>

                  <h2 className="font-bold font-sans text-base sm:text-lg max-w-[850px] hover:text-csYellow transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <hr className="max-w-[700px] my-3 sm:my-5" />
                  <p className="text-txtGray max-w-[330px] text-sm sm:max-w-[450px] lg:max-w-[600px] mb-4">
                    {post.description}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-csYellow w-fit font-semibold py-2 px-5 rounded-md border border-solid border-csYellow flex items-center gap-[6px]"
                  >
                    <span>Read More</span>
                    <PiArrowLineUpRightBold
                      height={16}
                      width={16}
                      className="relative hover:animate-repeatMotion"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Portion */}
        <div className="w-full lg:w-[35%]">
          <aside className="px-4">
            {/* Search Input */}
            <div className="mb-6">
              <div className="relative flex items-center mb-4">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full border border-solid border-gray-300  h-[50px] py-2 px-4 text-sm placeholder-[#cfcccc] focus:outline-none focus:border-csYellow"
                />
                <button className="flex items-center justify-center absolute top-0 right-0 h-[50px] w-[50px] bg-csYellow cursor-pointer">
                  <FiSearch size={20} className="text-white" />
                </button>
              </div>

              {/* About Prince Miyako */}
              <div className="bg-white border border-solid border-gray-300 shadow-sm p-5 min-[1200px]:p-7 text-center mb-6">
                <Image
                  src={"/blogPhotos/blogauthor.png"}
                  alt={"Blog Author"}
                  className="rounded-full mx-auto"
                  height={100}
                  width={100}
                />
                <h3 className="font-bold font-sans text-txtBlack text-[20px] mt-3 mb-1">
                  Prince Miyako
                </h3>
                <p className="text-[16px] text-gray-500 mb-4">
                  Photographer / Blogger
                </p>
                <div className="flex items-center justify-center my-2 rating rating-sm space-x-[8px]">
                  <FaStar className="text-csYellow" />
                  <FaStar className="text-csYellow" />
                  <FaStar className="text-csYellow" />
                  <FaStar className="text-csYellow" />
                  <FaStar className="text-csYellow" />
                  <p className="text-gray-500 text-[14px]">(1 Review)</p>
                </div>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.Veritatis distinctio, odio eligendi suscipit
                  reprehenderit atque
                </p>
                <div className="flex justify-center gap-4 mt-5">
                  <Link
                    href={"#"}
                    className="text-csBlack hover:text-csYellow transition text-[18px]"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    href={"#"}
                    className="text-csBlack hover:text-csYellow transition text-[18px]"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    href={"#"}
                    className="text-csBlack hover:text-csYellow transition text-[18px]"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href={"#"}
                    className="text-csBlack hover:text-csYellow transition text-[18px]"
                  >
                    <FaPinterestP />
                  </Link>
                </div>
              </div>
            </div>

            {/* Recent Post */}
            <RecentPost />

            {/* Filter by Menu */}
            <FilterByMenu />

            {/* Popular Tags */}
            <ProductTags />

            {/* Gallery */}
            <Gallery />

            {/* Follow Us */}
            <FollowUs />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default page;

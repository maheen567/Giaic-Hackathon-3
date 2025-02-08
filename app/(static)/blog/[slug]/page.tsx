import TopHeader from "@/Components/TopHeader";
import { blogPost } from "@/Data/BlogPost";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { VscCommentDiscussion } from "react-icons/vsc";
import { PiQuotesThin } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { FaRegUserCircle, FaStar, FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import Comments from "@/Components/Comments";
import CommentsSect from "@/Components/Comments";
import RecentPost from "@/Components/RecentPost";
import FilterByMenu from "@/Components/FilterByMenu";
import ProductTags from "@/Components/ProductTags";
import Gallery from "@/Components/Gallery";
import FollowUs from "@/Components/FollowUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Foodtuck",
  description: "An online food restraunt",
};


interface Params {
  params: {
    slug: string;
  };
}

const page = ({ params }: Params) => {
  const blog_slug = params.slug;
  const blog_data = blogPost;
  const blogs = blog_data.find((blog) => blog.slug === blog_slug);

  const all_comments = Comments;

  return (
    <section>
      <TopHeader title="Blog List" link1="Home" link2="Blog" link3="#"/>

      <div className="flex flex-col lg:flex-row px-4 md:px-[7%] lg:px-10 py-[50px] md:py-[100px] lg:space-x-8 space-y-8 lg:space-y-0">
        {/* For Left Portion */}
        <div className="w-full lg:w-[65%] space-y-10">
          <div className="text-csBlack">
            <div
              key={blogs?.id}
              className="flex flex-col justify-center md:justify-start mb-8"
            >
              <div className="relative">
                <img
                  src={blogs?.image}
                  alt={blogs?.title}
                  width={687}
                  height={520}
                  className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] lg:w-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-csYellow text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-[4px] sm:py-[6px] rounded-md text-center">
                  <p>{blogs?.publish_date}</p>
                  <p className="font-[300] -mt-1">{blogs?.publish_month}</p>
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
                    {blogs?.date} /
                  </p>
                  <p className="flex items-center gap-2">
                    <VscCommentDiscussion
                      height={24}
                      width={24}
                      className="text-csYellow"
                    />
                    {blogs?.comment} /
                  </p>
                  <p className="flex items-center gap-2">
                    <FaRegUserCircle
                      height={20}
                      width={20}
                      className="text-csYellow"
                    />
                    {blogs?.user}
                  </p>
                </div>

                <h2 className="font-bold font-sans text-base sm:text-lg max-w-[850px] hover:text-csYellow transition-colors cursor-pointer">
                  {blogs?.title}
                </h2>
                <hr className="max-w-[700px] my-3 sm:my-5" />
                <p className="text-[#222] leading-normal w-full mb-4">
                  {blogs?.description}.
                </p>
                <div className="flex flex-col md:flex-row md:items-center md:justify-center w-full bg-csYellow p-3 gap-3 my-10 text-wrap">
                  <PiQuotesThin
                    size={40}
                    className="text-white w-[40px] h-[40px] "
                  />
                  <p className="text-[16px] md:text-[20px] text-white font-semibold font-inter text-center md:text-left text-wrap leading-snug">
                    {blogs?.quote}
                  </p>
                  <PiQuotesThin
                    size={40}
                    className="text-white w-[40px] h-[40px] "
                  />
                </div>
                <div className="space-y-10">
                  <p className="text-[#222] leading-normal w-full mb-4">
                    {blogs?.para1}
                  </p>
                  <div className="flex flex-col items-center lg:flex-row gap-6 ">
                    <div className="lg:w-[55%] min-[1100px]:w-1/2">
                      <p className="text-[#222] leading-normal w-full mb-3">
                        {blogs?.para2}
                      </p>
                    </div>
                    <img
                      src={blogs?.single_blog_img}
                      alt=""
                      className="w-auto max-w-[270px] sm:max-w-[400px] lg:w-[45%] object-cover object-center rounded-sm"
                    />
                  </div>
                  <p className="text-[#222] leading-normal w-full mb-2">
                    {blogs?.para3}
                  </p>
                  <p className="text-[#222] leading-normal w-full mb-2">
                    {blogs?.para4}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border border-solid border-gray-300 text-csBlack p-5 mt-8 gap-5">
                  <div className="flex flex-col sm:flex-row items-center gap-2">
                    <p className="font-inter text-[16px] text-[#222] font-medium">
                      <b>Tags: </b>Restaurant, Dinner, Pizza, Yummy
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="font-bold">Share:</span>
                    <Link
                      href={"#"}
                      className="text-[#222] hover:text-csYellow transition duration-200"
                    >
                      <FaFacebookF />
                    </Link>
                    <Link
                      href={"#"}
                      className=" text-[#222] hover:text-csYellow transition duration-200"
                    >
                      <FaTwitter />
                    </Link>
                    <Link
                      href={"#"}
                      className="text-[#222] hover:text-csYellow transition duration-200"
                    >
                      <FaInstagram />
                    </Link>
                    <Link
                      href={"#"}
                      className="text-[#222] hover:text-csYellow transition duration-200"
                    >
                      <FaPinterestP />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CommentsSect />
        </div>

        {/* For Right Portion */}
        <div className="w-full lg:w-[35%]">
          <aside className="px-4">
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

            {/* Filter By Menu */}
            <FilterByMenu />

            {/* Popular Tags */}
            <ProductTags />

            {/* Gallery */}
            <Gallery />

            {/* Follow wUs */}
            <FollowUs />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default page;

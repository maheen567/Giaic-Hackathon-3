import Button from "@/Components/ui/Button";
import { blog } from "@/Data/HomeBlog";
import Link from "next/link";
import React from "react";

const Blog = () => {
  const blogData = blog;
  return (
    <div className="bg-[#111]">
      <section className="max-w-screen-xl lg:mx-auto py-[120px] px-[20px] md:px-[60px]  flex flex-col text-white text-wrap">
        <div className="text-center">
          <h1 className="text-2xl font-curly text-csYellow mb-2">Blog Post</h1>
          <h2 className="font-bold text-4xl md:text-5xl mb-3">
            <span className="text-csYellow">La</span>
            test News & Blogs
          </h2>
          <p className="font-mono text-[14px] text-csGray md:text-[16px] mb-10">
            Explore the latest trends, recipes, and mouth-watering stories in my
            food blogs!
          </p>
        </div>

        <div className="flex flex-wrap -m-4 mb-4">
          {blogData.map((card) => (
            <div key={card.id} className="p-4 w-full md:w-[50%] lg:w-1/3">
              <div className="h-full border-2 border-solid border-csGray rounded-none overflow-hidden">
                <img
                  className="h-[300px] md:h-[260px] lg:h-[240px] w-full object-cover object-center"
                  src={card.image}
                  alt={card.title}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-semibold text-csGray mb-1">
                    {card.category}
                  </h2>
                  <h1 className="title-font text-2xl text-csYellow font-poppins font-semibold mb-3">
                    {card.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{card.description}</p>
                  <div className="flex items-center flex-wrap mx-auto justify-between">
                    <Link
                      href={"#"}
                      className="text-csYellow inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>

                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      {card.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href={'/blog'} className="text-center">
          <button className="px-12 py-4 rounded-full bg-csYellow text-white text-base hover:shadow-xl transition-all duration-200 cursor-pointer hover:bg-orange-500 focus:text-white ">Read More</button>
        </Link>
      </section>
    </div>
  );
};

export default Blog;

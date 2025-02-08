"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import data from "../../Data/food.json";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="px-5 pt-[148px] pb-[40px] md:px-20 md:py-24 w-full lg:w-[50%] lg:mx-auto bg-black text-white">
      <div className="relative flex items-center justify-center mb-4">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full border border-solid border-gray-400  h-[50px] py-2 px-4 text-sm placeholder-gray-500 focus:outline-none focus:border-yellow-700 text-black mb-2"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="flex items-center justify-center absolute top-0 right-0 h-[50px] w-[50px] bg-csYellow cursor-pointer">
          <FaSearch size={20} className="text-white" />
        </button>
      </div>

      {data
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(search);
        })
        .map((item) => {
          const regex = new RegExp(`(${search})`, "gi");
          const parts = item.name.split(regex);
          console.log(item.image);

          return (
            <Link key={item.id} href={`/shop/${item.slug}`}>
              <div className="flex items-start justify-start gap-2 mb-3 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={1000}
                  height={1000}
                  className="h-[75px] w-[75px] object-cover object-center rounded-md"
                />
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-bold text-gray-200 hover:text-csYellow transition-colors duration-300">
                    {parts.map((part, index) =>
                      part.toLowerCase() === search.toLowerCase() ? (
                        <span
                          key={index}
                          className="text-csYellow font-extrabold"
                        >
                          {part}
                        </span>
                      ) : (
                        <span key={index}>{part}</span>
                      )
                    )}
                  </h2>
                  <p className="text-sm ">{item.description}</p>
                </div>
              </div>
              <div className="border-b-2 border-gray-400 my-4"></div>
            </Link>
          );
        })}
    </div>
  );
};

export default page;

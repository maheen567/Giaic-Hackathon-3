import Button from "@/Components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUsSect = () => {
  return (
    <div className="bg-[#111]">
      <section className="max-w-screen-xl lg:mx-auto py-[120px] px-[20px] md:px-[60px] flex flex-col lg:flex-row gap-10 text-white text-wrap">
        {/* First Column */}
        <div className="lg:w-[50%]">
          <h2 className="text-3xl mb-4 font-curly text-csYellow text-center md:text-start">
            About Us
          </h2>
          <h1 className="font-bold font-inter text-3xl md:text-5xl mb-4 leading-[1.25] md:leading-[1.145]">
            <span className="text-csYellow">We </span>
            Create the best Foody Product
          </h1>
          <p className="font-inter font-normal text-[16px] mb-4 leading-snug text-gray-200 text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <p className="font-inter font-normal text-[14px] mb-3">
            {" "}
            &#10003; Lorem ipsum dolor sit amet.
          </p>
          <p className="font-inter font-normal text-[14px] mb-3">
            {" "}
            &#10003; Ratione veritatis accusantium earum maxime
          </p>
          <p className="font-inter font-normal text-[14px] mb-7">
            {" "}
            &#10003; Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="text-center md:text-start">
          <Link href={"/about"} className="px-12 py-4 rounded-full bg-csYellow text-white text-base hover:shadow-xl transition-all duration-200 cursor-pointer hover:bg-orange-500 focus:text-white ">
            Read More
          </Link>
          </div>
        </div>

        {/* Second Column */}
        <div className="gap-2 flex flex-col items-center justify-end lg:w-[50%]">
          <Image
            src="/homephotos/about1.jpeg"
            alt="About 1"
            className="h-[250px] w-full object-cover object-center rounded-sm cursor-pointer "
            height={1000}
            width={1000}
          />
          <div className="flex  md:flex-row gap-2 justify-center w-[100%] md:w-[100%]">
            <Image
              src="/homephotos/about2.jpeg"
              alt="2"
              className="h-[170px] w-[50%] object-cover object-center rounded-sm"
              width={1000}
              height={1000}
            />
            <Image
              src="/homephotos/about3.jpeg"
              alt="2"
              className="h-[170px] w-[50%] object-cover object-center rounded-sm"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsSect;

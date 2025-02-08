import Image from "next/image";
import React from "react";
import { MdOutlineCookie } from "react-icons/md";
import { PiHamburger, PiWineFill } from "react-icons/pi";

const WhyUs = () => {
  return (
    <div className="bg-[#111] ">
      <section className="max-w-screen-xl lg:mx-auto px-[20px] md:px-[60px] py-[120px] text-white text-wrap flex flex-col lg:flex-row gap-14">
        <div className="w-full lg:w-auto">
          <img
            src="/homePhotos/helloworld.webp"
            alt="hello"
            className="w-full lg:w-[500px] h-auto"
          />
        </div>

        {/* For Why Us Section Details */}
        <div>
          <h1 className="text-csYellow text-center lg:text-start font-curly text-2xl md:text-3xl font-normal mb-4">
            Why Choose Us
          </h1>
          <h1 className="font-poppins font-semibold lg:font-bold text-3xl sm:text-5xl text-center lg:text-start mb-4 md:leading-[56px]">
            <span className="text-csYellow">Ex</span>tra ordinary taste <br />{" "}
            And Experience
          </h1>
          <p className="text-[14px] leading-snug md:text-[16px] font-normal max-w-[90%] md:max-w-[526px] my-[20px] mx-auto text-center lg:text-start lg:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            asperiores ipsum voluptatum, architecto, dolor distinctio dolorum ab
            deleniti et temporibus quibusdam minima explicabo maiores quidem
            blanditiis consectetur voluptates rerum illo.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-6 mb-5">
            <div className="flex flex-col items-center gap-1 w-[100px] h-[120px]">
              <PiHamburger className="p-4 w-full h-full bg-csYellow text-white text-xl rounded" />
              <span className="font-inter text-base font-normal">
                Fast Food
              </span>
            </div>

            <div className="flex flex-col items-center gap-1 w-[100px] h-[120px]">
              <MdOutlineCookie className="p-4 w-full h-full bg-csYellow text-white text-7xl rounded" />
              <span className="font-inter text-base font-normal">Lunch</span>
            </div>

            <div className="flex flex-col items-center gap-1 w-[100px] h-[120px]">
              <PiWineFill className="p-4 w-full h-full bg-csYellow text-white text-7xl rounded" />
              <span className="font-inter text-base font-normal">Dinner</span>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start">
            <div className="bg-white w-60 border border-solid border-csYellow flex items-center gap-4 rounded-md mt-4">
              <div className="border-4 boder-solid rounded-r-none border-csYellow h-14 rounded"></div>
              <h1 className="text-4xl font-bold text-csYellow">30+</h1>
              <h1 className="text-lg text-gray-500 font-medium">
                Years of Experience
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;

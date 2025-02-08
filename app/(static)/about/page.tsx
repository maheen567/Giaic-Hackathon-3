import TeamMembers from "@/Components/TeamMembers";
import TopHeader from "@/Components/TopHeader";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa6";


export const metadata: Metadata = {
  title: "About - Foodstuck",
  description: "An online food restraunt",
};

const page = () => {
  return (
    <section className="">
      <div>
        <TopHeader title="About Us" link1="Home" link2="About" link3="/about" />

        <div className="px-4 pt-10 flex flex-col gap-8 md:flex-row  md:gap-10 md:px-[40px] lg:px-[7%] md:pt-[100px] lg:gap-22 lg:flex-row lg:justify-between max-w-screen-xl lg:mx-auto">

          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src="/aboutPhotos/about.jpeg"
              alt=""
              className="w-full md:max-w-[430px] lg:w-[559px] h-auto"
              height={734}
              width={669}
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-0 md:pt-[80px] lg:pt-[140px] ">
            <h2 className="text-[16px] md:text-[22px] font-normal text-csYellow flex items-center font-curly">
              About us
              <div className="w-[20px] md:w-[34px] bg-csYellow h-[1.5px] mt-2 ml-2 shadow-2xl"></div>
            </h2>
            
            <h1 className="text-csBlack text-[24px] md:text-[32px] lg:text-[48px] font-bold leading-[36px] md:leading-[44px] lg:leading-[56px] w-full max-w-[350px] md:max-w-[500px] lg:max-w-[550px]">
              Food is an important part of a balanced Diet
            </h1>
            <p className="text-[#414141] text-[14px] md:text-[16px] w-full  md:max-w-[500px] lg:max-w-[550px] my-4 leading-normal mb-8">
            At Foodtuck, we believe that food is not just about taste, but about nourishing your body with the right nutrients. Our menu offers a diverse selection of delicious, healthy, and balanced meals made with fresh, high-quality ingredients. Whether you're craving a quick bite or a wholesome meal, we ensure every dish supports your health and well-being, so you can enjoy great food without compromise!
            </p>

            {/* Read more & Play video Button */}
            <div className="flex sm:flex-row items-center gap-5 lg:flex-row">
              <div className="w-fit">
                <Link
                  href={"/about"}
                  className="my-2 bg-csYellow hover:bg-orange-500 transition-colors duration-100 py-3 lg:py-4 px-12 text-white text-[16px] font-bold rounded-md font-inter text-nowrap"
                >
                  Read More
                </Link>
              </div>
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="flex items-center justify-center text-xl bg-csYellow h-12 w-12 rounded-full">
                  <FaPlay className="text-white" />
                </div>
                <h1 className="text-csBalck text-base hover:text-csYellow transition ease-in duration-200">
                  Play Video
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-[50px] md:pt-[100px] md:py-[60px] px-[5%] md:px-[7%]">
        <div
          className="flex flex-col items-center 
          justify-center text-center"
        >
          <h1 className="text-[24px] sm:text-[28px] md:text-[48px] font-bold font-inter text-[#222] mb-1">
            Why Choose Us
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#414141] w-full sm:w-[90%] md:w-[580px] font-[cursive]">
          Choose us for unmatched food quality, nourishing healthy meals, and a commitment to delivering exceptional taste that you can trust every time.
          </p>
          <Image
            src={"/aboutPhotos/about2.png"}
            alt=""
            className="my-[30px] md:my-[50px] w-full  md:max-w-none object-cover object-center"
            height={386}
            width={1320}
          />

          {/* Best Chefs, Food Items, Environment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10 mt-[20px]">
            <div className="flex flex-col items-center text-center p-4 lg">
              <Image
                src={"/aboutPhotos/studentIcon.png"}
                alt="Student"
                className="w-[50px] h-[50px] md:w-[60px]  md:h-[60px]  object-cover object-center"
                height={80}
                width={80}
              />
              <h2 className="text-[#222] text-[18px] md:text-[24px] font-bold font-inter mt-4 mb-3">
                Best Chef
              </h2>
              <p className="text-[14px] md:text-[16px] text-[#414141] leading-normal">
              Our culinary experts bring passion and precision to every dish, crafting unforgettable flavors with the finest ingredients to deliver an exceptional dining experience.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 lg">
              <Image
                src={"/aboutPhotos/coffeeIcon.png"}
                alt="Coffee"
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]  object-cover"
                height={80}
                width={80}
              />
              <h2 className="text-[#222] text-[18px] md:text-[24px] font-bold font-inter mt-4 mb-3">
                120 Item Food
              </h2>
              <p className="text-[14px] md:text-[16px] text-[#414141] leading-normal">
              Indulge in our diverse menu featuring 120 delicious options, from classic favorites to unique culinary creations, all crafted to satisfy every craving
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 lg">
              <Image
                src={"/aboutPhotos/personIcon.png"}
                alt="Student"
                className="w-[50px] h-[50px] md:w-[60px]  md:h-[60px]  object-cover object-center"
                height={80}
                width={80}
              />
              <h2 className="text-[#222] text-[18px] md:text-[24px] font-bold font-inter mt-4 mb-3">
                Clean Environment
              </h2>
              <p className="text-[14px] md:text-[16px] text-[#414141] leading-normal">
              Enjoy delicious food with peace of mind, knowing our biodegradable packaging helps preserve the planet. Together, we can make every meal a step toward a cleaner, greener future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="pb-[60px]">
        <TeamMembers />
      </div>
    </section>
  );
};

export default page;

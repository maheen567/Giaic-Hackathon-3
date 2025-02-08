import Button from "@/Components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodCategory = () => {
  return (
    <div className="bg-csBlack">
      <section className="max-w-screen-xl lg:mx-auto px-[20px] md:px-[60px] py-[120px] text-white text-wrap flex flex-col ">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-curly text-csYellow mb-4">
            Food Category
          </h1>
          <h2 className="font-bold text-4xl md:text-5xl mb-3">
            <span className="text-csYellow">Ch</span>
            oose Food Items
          </h2>
          <p className="font-mono text-[14px] md:text-[16px] mb-10">
            Fresh, wholesome meals at your fingertips – taste the difference!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 lg:w-[100%] mb-10">
          <div className="relative group overflow-hidden rounded-lg shadow-lg transition-transform ease-linear duration-200 hover:scale-105">
            <img
              src={"/homePhotos/foodCategory_1.jpeg"}
              alt="1"
              className="w-full h-[350px] sm:h-[350px] lg:h-[280px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer ">
              <p className="text-white text-[30px] lg:text-[20px] font-bold">
                Chinese Food
              </p>
              <p className="text-csYellow text-[22px] lg:text-[18px] font-bold">
                25% OFF
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg transition-transform ease-linear duration-200 hover:scale-105">
            <img
              src={"/homePhotos/foodCategory_2.jpeg"}
              alt="1"
              className="w-full h-[350px] sm:h-[350px] lg:h-[280px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <p className="text-white text-[30px] lg:text-[20px] font-bold">
                Burger
              </p>
              <p className="text-csYellow text-[22px] lg:text-[18px] font-bold">
                10% OFF
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg transition-transform ease-linear duration-200 hover:scale-105">
            <img
              src={"/homePhotos/foodCategory_3.jpeg"}
              alt="1"
              className="w-full h-[350px] sm:h-[350px] lg:h-[280px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <p className="text-white text-[30px] lg:text-[20px] font-bold">
                Salads
              </p>
              <p className="text-csYellow text-[22px] lg:text-[18px] font-bold">
                15% OFF
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg transition-transform ease-linear duration-200 hover:scale-105">
            <img
              src={"/homePhotos/foodCategory_4.jpeg"}
              alt="1"
              className="w-full h-[350px] sm:h-[350px] lg:h-[280px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <p className="text-white text-[30px] lg:text-[20px] font-bold">
                Donuts
              </p>
              <p className="text-csYellow text-[22px] lg:text-[18px] font-bold">
                45% OFF
              </p>
            </div>
          </div>
        </div>

        <div className="block text-center">
          <Link href={"/shop"}>
            <button className="px-12 py-4 rounded-full bg-csYellow text-white text-base hover:shadow-xl transition-all duration-200 cursor-pointer hover:bg-orange-500 focus:text-white ">
              View More
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FoodCategory;

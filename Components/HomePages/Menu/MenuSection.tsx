import Image from "next/image";
import React from "react";
import MenuSection2 from "./MenuSection2";

const MenuSection = () => {
  const tabs = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drink"];
  return (
    <section className="bg-csBlack px-[20px] md:px-[60px] lg:px-[30px] py-[120px] text-white text-wrap flex flex-col ">

      <div className="text-center">
      <h1 className="font-curly text-2xl font-normal text-csYellow text-center mb-3">
        Choose & Pick
      </h1>
      <h2 className="font-poppins text-4xl font-bold text-center mb-2">
        <span className="text-csYellow">Fr</span>
        om Our Menu
      </h2>
      <p className="text-sm md:text-base font-mono text-center mb-8 text-csGray">
        Fresh flavors, healthy choices, and happiness on every plate—discover
        your next favorite meal!
      </p>

      <ul
        className="flex max-lg:flex-col max-lg:space-y-4 bg-transparent items-center justify-center border-2 border-solid border-csYellow rounded-md"
        role="tablist"
      >
        {tabs.map((tab, index) => (
          <li
            key={index}
            className="tab text-white font-bold text-[20px] py-3.5 px-7 mr-8 cursor-pointer transition duration-200 ease-in hover:text-csYellow"
            role="tab"
            aria-selected="false"
          >
            {tab}
          </li>
        ))}
      </ul>
      </div>

      <div className="flex flex-col items-center justify-start gap-0 md:justify-between lg:justify-start md:flex-row md:gap-10 lg:mx-auto">

        {/* For menu Image Section */}
        <div className="hidden lg:inline-flex md:h-[400px] md:w-[385px] relative text-center">
          <Image
            src="/homePhotos/menuImg.png"
            alt="img-1"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="lg:w-[280px]"
          />
        </div>
        <MenuSection2 />
      </div>
    </section>
  );
};

export default MenuSection;

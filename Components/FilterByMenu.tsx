import Image from "next/image";
import React from "react";

const FilterByMenu = () => {
  return (
    <div className="bg-white border border-solid border-gray-300 shadow-sm p-5 lg:p-7 mb-6">
      <h4 className="font-bold font-inter text-csBlack text-[20px] mb-4">
        Filter By Menu
      </h4>
      <ul className="text-sm text-gray-600 space-y-4">
        <li className="flex items-center justify-between ">
          <div className="flex items-center gap-4">
            <Image
              src={"/blogPhotos/filterMenu1.jpg"}
              alt="Fried Chicken"
              height={75}
              width={75}
              className="object-cover object-center rounded-md"
            />
            <span className="font-bold text-[16px] font-inter text-[#222]">
              Fried Chicken
            </span>
          </div>
          <span className="text-[#222] text-[15px] font-inter font-semibold">
            27
          </span>
        </li>

        <li className="flex items-center justify-between ">
          <div className="flex items-center gap-4">
            <Image
              src={"/blogPhotos/filterMenu2.jpg"}
              alt="Burger"
              height={75}
              width={75}
              className="object-cover object-center rounded-md"
            />
            <span className="font-bold text-[16px] font-inter text-[#222]">
              Burger
            </span>
          </div>
          <span className="text-[#222] text-[15px] font-inter font-semibold">
            39
          </span>
        </li>

        <li className="flex items-center justify-between ">
          <div className="flex items-center gap-4">
            <Image
              src={"/blogPhotos/filterMenu3.jpg"}
              alt="Pizza"
              height={75}
              width={75}
              className="object-cover object-center rounded-md"
            />
            <span className="font-bold text-[16px] font-inter text-[#222]">
              Pizza
            </span>
          </div>
          <span className="text-[#222] text-[15px] font-inter font-semibold">
            41
          </span>
        </li>

        <li className="flex items-center justify-between ">
          <div className="flex items-center gap-4">
            <Image
              src={"/blogPhotos/filterMenu4.jpg"}
              alt="Fresh Fruits"
              height={75}
              width={75}
              className="object-cover object-center rounded-md"
            />
            <span className="font-bold text-[16px] font-inter text-[#222]">
              Fresh Fruits
            </span>
          </div>
          <span className="text-[#222] text-[15px] font-inter font-semibold">
            38
          </span>
        </li>

        <li className="flex items-center justify-between ">
          <div className="flex items-center gap-4">
            <Image
              src={"/blogPhotos/filterMenu5.jpg"}
              alt="Sandwich"
              height={75}
              width={75}
              className="object-cover object-center rounded-md"
            />
            <span className="font-bold text-[16px] font-inter text-[#222]">
              Sandwich
            </span>
          </div>
          <span className="text-[#222] text-[15px] font-inter font-semibold">
            16
          </span>
        </li>
      </ul>
    </div>
  );
};

export default FilterByMenu;

import Image from "next/image";
import React from "react";
import { menu } from "@/Data/MenuData";

const MenuSection2 = () => {
  return (
    <>
      {/* Second Column */}
      <div className="flex flex-col gap-4 mt-10">
        {/* Div image-1 */}
        <div className="flex gap-2 w-full">
          <div className=" h-[70px] w-[70px] relative">
            <Image
              src={menu[0].image}
              alt="img-1"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-[6px]"
            />
          </div>
          <div>
            <h1 className="font-inter text-xl font-bold">{menu[0].title}</h1>
            <p className="font-inter text-sm font-normal">
              {menu[0].description}
            </p>
            <p className="text-csYellow font-inter text-lg font-bold">
              ${menu[0].price}
            </p>
          </div>
        </div>

        {/* Div image-2 */}
        <div className="flex gap-2">
          <div className=" h-[70px] w-[70px] relative">
            <Image
              src={menu[1].image}
              alt="img-1"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-[6px]"
            />
          </div>
          <div>
            <h1 className="font-inter text-xl font-bold">{menu[1].title}</h1>
            <p className="font-inter text-sm font-normal">
              {menu[1].description}
            </p>
            <p className="text-csYellow font-inter text-lg font-bold">
              ${menu[1].price}
            </p>
          </div>
        </div>

        {/* Div image-3 */}
        <div className="flex gap-2">
          <div className=" h-[70px] w-[70px] relative">
            <Image
              src={menu[2].image}
              alt="img-1"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-[6px]"
            />
          </div>
          <div>
            <h1 className="font-inter text-xl font-bold">{menu[2].title}</h1>
            <p className="font-inter text-sm font-normal">
              {menu[2].description}
            </p>
            <p className="text-csYellow font-inter text-lg font-bold">
              ${menu[2].price}
            </p>
          </div>
        </div>

        {/* Div image-4 */}
        <div className="flex gap-2">
          <div className=" h-[70px] w-[70px] relative">
            <Image
              src={menu[3].image}
              alt="img-1"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-[6px]"
            />
          </div>
          <div>
            <h1 className="font-inter text-xl font-bold">{menu[3].title}</h1>
            <p className="font-inter text-sm font-normal">
              {menu[3].description}
            </p>
            <p className="text-csYellow font-inter text-lg font-bold">
              ${menu[3].price}
            </p>
          </div>
        </div>
      </div>

      {/* Second Column */}
      <div className="flex flex-col gap-4 mt-10">
        {/* Div image-5 */}
        <div className="flex gap-2 w-full">
          <div className=" h-[70px] w-[70px] relative">
            <Image
              src={menu[4].image}
              alt="img-1"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-[6px]"
            />
          </div>
          <div>
            <h1 className="font-inter text-xl font-bold">{menu[4].title}</h1>
            <p className="font-inter text-sm font-normal">
              {menu[4].description}
            </p>
            <p className="text-csYellow font-inter text-lg font-bold">
              ${menu[4].price}
            </p>
          </div>
        </div>

        {/* Div image-6 */}
        <div className="flex gap-2">
          <div className=" h-[70px] w-[70px] relative">
            <Image
              src={menu[5].image}
              alt="img-1"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-[6px]"
            />
          </div>
          <div>
            <h1 className="font-inter text-xl font-bold">{menu[5].title}</h1>
            <p className="font-inter text-sm font-normal">
              {menu[5].description}
            </p>
            <p className="text-csYellow font-inter text-lg font-bold">
              ${menu[5].price}
            </p>
          </div>
        </div>

        {/* Div image-7 */}
        <div className="flex gap-2">
          <div className=" h-[70px] w-[70px] relative">
            <Image
              src={menu[6].image}
              alt="img-1"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-[6px]"
            />
          </div>
          <div>
            <h1 className="font-inter text-xl font-bold">{menu[6].title}</h1>
            <p className="font-inter text-sm font-normal">
              {menu[6].description}
            </p>
            <p className="text-csYellow font-inter text-lg font-bold">
              ${menu[6].price}
            </p>
          </div>
        </div>

        {/* Div image-8 */}
        <div className="flex gap-2">
          <div className=" h-[70px] w-[70px] relative">
            <Image
              src={menu[7].image}
              alt="img-1"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-[6px]"
            />
          </div>
          <div>
            <h1 className="font-inter text-xl font-bold">{menu[7].title}</h1>
            <p className="font-inter text-sm font-normal">
              {menu[7].description}
            </p>
            <p className="text-csYellow font-inter text-lg font-bold">
              ${menu[7].price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSection2;

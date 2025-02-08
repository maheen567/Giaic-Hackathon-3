import Image from "next/image";
import React from "react";

const RecentPost = () => {
  return (
    <div className="bg-white border border-solid border-gray-300 shadow-sm p-5 lg:p-7 mb-6">
      <h4 className="font-bold font-sans text-csBlack text-[20px] mb-4">
        Recent Post
      </h4>
      <div>
        <div className="flex items-center mb-4">
          <Image
            src={"/blogPhotos/recentPost1.jpg"}
            alt="Hamburger"
            width={75}
            height={75}
            className="object-cover object-center"
          />
          <div className="flex flex-col space-y-3 ml-4">
            <p className="text-xs text-gray-500">June 22, 2020</p>
            <p className="text-sm text-gray-600 font-semibold">
              Lorem ipsum dolor sit cing elit, sed do.
            </p>
          </div>
        </div>
        <hr className="w-full my-2" />

        <div className="flex items-center mb-4">
          <Image
            src={"/blogPhotos/recentPost2.jpg"}
            alt="Hamburger"
            width={75}
            height={75}
            className="object-cover object-center"
          />
          <div className="flex flex-col space-y-3 ml-4">
            <p className="text-xs text-gray-500">June 22, 2020</p>
            <p className="text-sm text-gray-600 font-semibold">
              Lorem ipsum dolor sit cing elit, sed do.
            </p>
          </div>
        </div>
        <hr className="w-full my-2" />

        <div className="flex items-center mb-4">
          <Image
            src={"/blogPhotos/recentPost3.jpg"}
            alt="Hamburger"
            width={75}
            height={75}
            className="object-cover object-center"
          />
          <div className="flex flex-col space-y-3 ml-4">
            <p className="text-xs text-gray-500">June 22, 2020</p>
            <p className="text-sm text-gray-600 font-semibold">
              Lorem ipsum dolor sit cing elit, sed do.
            </p>
          </div>
        </div>
        <hr className="w-full my-2" />

        <div className="flex items-center mb-4">
          <Image
            src={"/blogPhotos/recentPost4.jpg"}
            alt="Hamburger"
            width={75}
            height={75}
            className="object-cover object-center"
          />
          <div className="flex flex-col space-y-3 ml-4">
            <p className="text-xs text-gray-500">June 22, 2020</p>
            <p className="text-sm text-gray-600 font-semibold">
              Lorem ipsum dolor sit cing elit, sed do.
            </p>
          </div>
        </div>
        <hr className="w-full my-2" />
      </div>
    </div>
  );
};

export default RecentPost;

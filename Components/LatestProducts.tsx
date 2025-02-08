import Image from "next/image";
import React from "react";

const LatestProducts = () => {
  return (
    <div className="bg-white border border-solid border-gray-300 shadow-sm p-5 lg:p-7 mb-6">
      <h4 className="font-bold font-sans text-csBlack text-[20px] mb-4">
        Latest Products
      </h4>

      <div className="flex items-center mb-4">
        <Image
          src={"/shopPhotos/shop7.png"}
          alt="Cheese Butter"
          width={50}
          height={50}
          className="object-cover object-center"
        />
        <div className="flex flex-col space-y-1 ml-3">
          <p className="text-lg text-[#333333] font-semibold">Cheese Butter</p>
          <p className="text-xs text-gray-500">$10.00</p>
        </div>
      </div>
      <hr className="w-full my-4" />

      <div className="flex items-center mb-4">
        <Image
          src={"/shopPhotos/shop6.png"}
          alt="Pizza"
          width={50}
          height={50}
          className="object-cover object-center"
        />
        <div className="flex flex-col space-y-1 ml-3">
          <p className="text-lg text-[#333333] font-semibold">Pizza</p>
          <p className="text-xs text-gray-500">$34.00</p>
        </div>
      </div>
      <hr className="w-full my-4" />

      <div className="flex items-center mb-4">
        <Image
          src={"/shopPhotos/shop9.png"}
          alt="Chicken Chup"
          width={50}
          height={50}
          className="object-cover object-center"
        />
        <div className="flex flex-col space-y-1 ml-3">
          <p className="text-lg text-[#333333] font-semibold">Chicken Chup</p>
          <p className="text-xs text-gray-500">$12.00</p>
        </div>
      </div>
      <hr className="w-full my-4" />

      <div className="flex items-center mb-4">
        <Image
          src={"/shopPhotos/shop2.png"}
          alt="Chocolate Muffin"
          width={50}
          height={50}
          className="object-cover object-center"
        />
        <div className="flex flex-col space-y-1 ml-3">
          <p className="text-lg text-[#333333] font-semibold">
            Chocolate Muffin
          </p>
          <p className="text-xs text-gray-500">$28.00</p>
        </div>
      </div>
      <hr className="w-full my-4" />
    </div>
  );
};

export default LatestProducts;

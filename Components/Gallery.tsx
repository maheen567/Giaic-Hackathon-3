import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="bg-white border border-solid border-gray-300 shadow-sm p-5 lg:p-7 mb-6">
      <h4 className="font-bold font-inter text-csBlack text-[20px] mb-4">
        Gallery
      </h4>
      <div className="grid grid-cols-3 gap-2 lg:place-items-start">
        <Image
          src={"/blogPhotos/gallery2.jpg"}
          alt=""
          className="object-cover object-center rounded-md cursor-pointer "
          height={85}
          width={90}
        />
        <Image
          src={"/blogPhotos/gallery1.jpg"}
          alt=""
          className="w-[90px] h-[60px] object-cover object-center rounded-md cursor-pointer "
          height={1000}
          width={1000}
        />
        <Image
          src={"/blogPhotos/gallery3.jpg"}
          alt=""
          className="object-cover object-center rounded-md cursor-pointer "
          height={85}
          width={90}
        />
        <Image
          src={"/blogPhotos/gallery4.jpg"}
          alt=""
          className="w-[90px] h-[60px] object-cover object-center rounded-md cursor-pointer "
          height={1000}
          width={1000}
        />
        <Image
          src={"/blogPhotos/gallery5.jpg"}
          alt=""
          className="object-cover object-center rounded-md cursor-pointer"
          height={85}
          width={90}
        />
        <Image
          src={"/blogPhotos/gallery6.jpg"}
          alt=""
          className="object-cover object-center rounded-md cursor-pointer"
          height={85}
          width={90}
        />
      </div>
    </div>
  );
};

export default Gallery;

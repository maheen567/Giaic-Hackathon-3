import React from "react";
import Button from "@/Components/ui/Button";
import Link from "next/link";
import Image from "next/image";

interface Chefs {
  id: number
  image: any
  chefName: string
  position: string
}

const chefs:Chefs[] = [
  {
      id: 1,
      image: '/homePhotos/chefs_1.jpeg',
      chefName: 'D.Estwood',
      position: 'Chief Chef',
  },
  {
      id: 2,
      image: '/homePhotos/chefs_2.jpeg',
      chefName: 'D.Scoriesh',
      position: 'Assistant Chef',
  },
  {
      id: 3,
      image: '/homePhotos/chefs_3.jpeg',
      chefName: 'M. William',
      position: 'Advertising Chef',
  },
  {
      id: 4,
      image: '/homePhotos/chefs_4.jpeg',
      chefName: 'W.Readfroad',
      position: 'Chef',
  },
]

const Chefs = () => {
  return (
   <div className="bg-[#111] ">
     <section className="max-w-screen-xl lg:mx-auto py-[120px] px-[20px] md:px-[60px] flex flex-col items-center justify-center  text-white text-wrap ">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-curly text-csYellow mb-2">
          Chefs
        </h1>
        <h2 className="font-bold text-4xl md:text-5xl mb-3">
          <span className="text-csYellow">Me</span>
          et Our Chefs
        </h2>
        <p className="font-mono text-[14px] md:text-[16px] mb-10">
          Meet Our Chefs: The artists behind every delicious masterpiece!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 lg:w-[100%] mb-5">
       
        {chefs.map((item) => (
          <div
            key={item.id}
            className="relative rounded-lg "
          >
            <Image
              src={item.image}
              alt={item.chefName}
              className="w-full h-[350px] sm:h-[350px] lg:h-[280px] object-cover rounded-[6px] cursor-zoom-in transition-transform ease-linear duration-200 hover:scale-105"
              height={1000} width={1000}
            />
            <div className="flex flex-col items-center p-4">
              <h1 className="font-bold text-lg">{item.chefName}</h1>
              <p className="font-normal font-mono text-sm text-csGray">
                {item.position}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link href='/chefs'>
        <button className="px-12 py-4 rounded-full bg-csYellow text-white text-base hover:shadow-xl transition-all duration-200 cursor-pointer hover:bg-orange-500 focus:text-white ">View More</button>
      </Link>
    </section>
   </div>
  );
};

export default Chefs;

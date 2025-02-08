'use client';

import React, { useEffect, useState } from 'react';
import { Chef } from '@/types/chefs';
import { client } from '@/sanity/lib/client';
import { allChefs } from '@/sanity/lib/queries';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import TopHeader from '@/Components/TopHeader';


const page = () => {

  const [chef, setChef] = useState<Chef[]>([]);
  
      useEffect(() => {
          async function getChef () {
              const fetchedChef : Chef[] = await client.fetch(allChefs);
              setChef(fetchedChef)
          }
          getChef()
      },[])
  
  return (
   <div>
    <TopHeader title='Our Chefs' link1='Home' link2='Our Chefs' link3='/chefs'/>
     <section className="max-w-screen-xl py-[80px] px-[20px] md:px-[60px]  bg-white flex flex-col items-center justify-center  text-[#222] text-wrap ">
      <div className="text-center">
        <h2 className="font-bold text-4xl md:text-5xl mb-3">
          <span className="text-csYellow">Me</span>
          et Our Chefs
        </h2>
        <p className="font-mono text-[14px] md:text-[16px] mb-10">
          Meet Our Chefs: The artists behind every delicious masterpiece!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 lg:w-[100%] mb-5">
       
        {chef.map((item) => (
          <div
            key={item._id}
            className="relative rounded-lg  overflow-hidden group"
          >
           {item.image && (
            <Image src={urlFor(item.image).url()} alt={item.name} className='w-full h-[350px] sm:h-[350px] lg:h-[280px] object-cover rounded-[6px] cursor-zoom-in transition-transform ease-linear duration-200 hover:scale-105' width={1000} height={1000}/>
           )}
            
            <div className="flex flex-col items-center p-4 ">
              <h1 className="font-bold text-lg">{item.name}</h1>
              <p className="font-normal font-mono text-sm text-gray-800">
                {item.position}
              </p>
            </div>
            <div className='absolute hover:inset-0 bottom-[-100%] z-10 left-0 w-full bg-black bg-opacity-80 text-white p-4 flex flex-col items-center justify-center text-center backdrop-blur-md animate-slideUp transition-all duration-500 group-hover:top-0 cursor-pointer'>
              <p className='mt-2 text-sm'><strong className='text-csYellow'>Experience:</strong> {item.experience} yrs</p>
              <p className='mt-2 text-sm'><strong className='text-csYellow'>Speciality:</strong> {item.specialty} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
   </div>
  )
}

export default page

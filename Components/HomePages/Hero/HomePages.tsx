import Button from '@/Components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";



const HomePages = () => {
  return (

    // Main Section
    <section className=' bg-csBlack relative pt-[85px]'>

        {/* Container */}
      <div className='max-w-screen-xl md:mx-auto px-[5%] py-[50px] flex flex-col lg:flex-row justify-between md:items-center gap-4 w-full'>

        <div className='flex flex-col md:flex-row gap-10 items-center  lg:w-[60%]'>

            {/* First Column */}
            <div className='flex flex-col items-center space-y-8 text-white'>
                <div className='h-[80px] md:h-[158px] bg-white w-[1px]'></div>
                <FaFacebookF />
                <FaTwitter />
                <FaPinterestP />
                <div className='h-[80px] md:h-[158px] bg-white w-[1px]'></div>
            </div>

            {/* Second Column */}
            <div className='text-white text-center md:text-left inline-flex  flex-col space-y-4 max-w-full lg:py-[35px] lg:w-[80%]'>
                <h2 className='text-[24px] md:text-[32px] text-csYellow font-curly'>It's Quick & Amusing!</h2>
                <h1 className='text-[36px] md:text-[50px] font-bold leading-tight font-poppins'>
                    <span className='text-csYellow font-bold'>Th</span>
                    e Art of Speed Food Quality
                </h1>
                <p className='text-[14px] md:text-[16px] font-light max-w-[90%] md:max-w-[420px] mx-auto md:mx-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Varius sed pharetra dictum neque massa congue
                </p>
                <div  className='flex justify-center md:justify-start'>
                    <Link href={'/menu'} className='my-3'>
                        <button className='px-12 py-4 rounded-full bg-csYellow text-white text-base hover:shadow-xl transition-all duration-200 cursor-pointer hover:bg-orange-500 focus:text-white '>See Menu</button>
                    </Link>
                </div>
            </div>
        </div>

        {/* Image Section */}
      <div className="flex items-center justify-center w-full md:w-[99%] lg:w-[60%]">
        <Image
          src={'/homePhotos/hero.png'}
          alt="Hero Image"
          width={700}
          height={510}
          className=" w-[300px] md:w-[550.18px] h-auto"
        />
      </div>
        

      </div>
    </section>
  )
}

export default HomePages

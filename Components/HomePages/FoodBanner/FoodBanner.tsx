import { section } from 'framer-motion/client'
import React from 'react'
import { MdSlowMotionVideo } from 'react-icons/md'

const FoodBanner = () => {
  return (
    <section className="h-[40vh] bg-[url('/homePhotos/bannerImage.jpeg')] bg-cover bg-center lg:h-[400px] flex flex-col items-center justify-center px-2 py-5 md:py-20 md:px-12">
        <div className="text-right">
        <h1 className="font-curly text-csYellow text-base md:text-2xl md:mb-2 ">Restaurant Active Process</h1>
        <h1 className="font-poppins text-xl md:text-4xl text-white font-semibold mb-2 md:mb-4 leading-snug">
         <span className='text-csYellow'>We</span> Document Every Food <br />
          Bean Process until it is saved
        </h1>
        <p className="font-inter font-normal text-white text-[12px] md:text-sm md:pl-10 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque
           bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna.
        </p>

        <div className=" flex justify-end gap-4 text-right">
          <button className="bg-transparent border-2 border-solid border-csYellow font-inter text-white text-base py-2 px-7 rounded-[30px] transition duration-200 ease-linear hover:bg-csYellow cursor-pointer">
            Read More
          </button>
          <div className="flex items-center gap-3 justify-end cursor-pointer">
            <div className="flex items-center justify-center text-xl bg-csYellow h-10 w-10 rounded-full">
              <MdSlowMotionVideo />
            </div>
            <h1 className='text-white text-base hover:text-csYellow transition ease-in duration-200'>Play Video</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodBanner

import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa'
import { ImSpoonKnife } from 'react-icons/im'
import { IoFastFoodOutline } from 'react-icons/io5'
import { PiChefHatFill } from 'react-icons/pi'

const StatsBanner = () => {
  return (
     <section className='bg-black'>
         <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div>
            <PiChefHatFill className="text-csYellow w-20 h-20 mb-4 inline-block" />
              <p className="leading-relaxed font-medium text-white text-xl mb-2">
                Professional Chefs
              </p>
              <h2 className="title-font font-bold text-4xl text-csGray">420</h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div>
            <IoFastFoodOutline className="text-csYellow w-20 h-20 mb-4 inline-block" />
              <p className="leading-relaxed font-medium text-white text-xl mb-2">
                Items of Food
              </p>
              <h2 className="title-font font-bold text-4xl text-csGray">320</h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div>
            <ImSpoonKnife className="text-csYellow w-20 h-20 mb-4 inline-block" />
              <p className="leading-relaxed font-medium text-white text-xl mb-2">
                Years of Experience
              </p>
              <h2 className="title-font font-bold text-4xl text-csGray">30+</h2>
            </div>
          </div>

          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div>
              <FaPizzaSlice className="text-csYellow w-20 h-20 mb-4 inline-block" />
              <p className="leading-relaxed font-medium text-white text-xl mb-2">
                Happy Customers
              </p>
              <h2 className="title-font font-bold text-4xl text-csGray">220</h2>
            </div>
          </div>
        </div>
      </div>
     </section>
  )
}

export default StatsBanner

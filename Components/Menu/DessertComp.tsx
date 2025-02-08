import { desserts } from '@/Data/Desserts'
import Image from 'next/image'
import React from 'react'
import { PiCoffeeLight } from 'react-icons/pi'

const DessertComp = () => {
  return (
     <section className="px-5 md:px-10 lg:px-[60px] py-12 mx-auto max-w-screen-xl">
          <div className="container mx-auto flex flex-col lg:flex-row gap-14">
    
            {/* Image Section */}
            <div className="text-center ">
              <Image
                src={"/menuPhotos/dessert.png"}
                alt="Dessert"
                width={448}
                height={626}
                className="w-full h-[350px] sm:w-[450px] sm:h-[400px] lg:w-[250px] lg:h-[450px] md:object-cover lg:object-fill object-center max-w-full rounded-lg shadow-lg"
              />
            </div>
    
    
            {/* Menu Content */}
            <div className="w-full lg:w-[80%]">
    
              <div className="flex flex-col mb-6">
                <PiCoffeeLight className=" text-[#FF9F0D] mb-2" size={24} />
                <h1 className="text-[32px] sm:text-[36px] lg:text-[48px]  font-inter font-bold">
                Dessert
                </h1>
              </div>
    
              <div className="space-y-4">
                {desserts.map((item, index) => (
                  <div>
                    <div
                      key={index}
                      className="space-y-2 flex flex-col sm:flex-row justify-between gap-2 md:gap-0"
                    >
                      <div className="flex flex-col w-full items-start">
                        <h1 className="text-[24px] font-bold hover:text-csYellow text-csBlack transition-colors duration-150 mb-4 cursor-pointer">
                          {item.name}
                        </h1>
                        <p className="text-[16px] font-normal text-[#4F4F4F] mb-2">
                          {item.description}
                        </p>
                        <p className="text-[14px] font-normal text-[#828282]">
                          {item.calories} CAL
                        </p>
                      </div>
                      <div className="text-csYellow text-[24px] font-bold">
                        ${item.price}
                      </div>
                    </div>
                    <hr className="w-full md:w-[650px] lg:w-[760px] my-7" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  )
}

export default DessertComp

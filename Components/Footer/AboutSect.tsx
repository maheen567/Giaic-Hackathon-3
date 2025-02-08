import React from 'react'
import { PiClockClockwise } from 'react-icons/pi'

const AboutSect = () => {
  return (
    <div className='flex flex-col w-full  lg:w-[320px] mb-12'>
      <h3 className="text-2xl font-bold text-csYellow mb-4 md:text-center lg:text-start">About Us</h3>
      <p className="mb-6 text-base">
        Corporate clients and leisure travelers have been relying on Groundlink for dependable safe, and professional chauffeured car service in major cities across World.
      </p>
      <div className="flex items-start">
        <div className="bg-csYellow rounded mr-4 w-[77px] h-[70px] flex items-center justify-center">
          <PiClockClockwise className="text-white text-5xl" />
        </div>
        <div>
          <h4 className="font-bold text-csGray">Opening Hours</h4>
          <p className="text-sm mt-3">Mon - Sat (8.00 - 6.00)</p>
          <p className="text-sm">Sunday - Closed</p>
        </div>
      </div>
    </div>
  )
}

export default AboutSect

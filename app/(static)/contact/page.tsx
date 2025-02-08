import TopHeader from '@/Components/TopHeader'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Foodtuck",
  description: "An online food restraunt",
};

const page = () => {
  return (
    <section>
      <TopHeader title='Contact Us' link1='Home' link2='Contact Us' link3='/contact'/>
      <div className='mt-10 px-5'>
      <h2 className='text-[45px] text-center leading-normal font-semibold'>Get in touch</h2>
      <p className='text-base font-[cursive] text-center text-gray-600'>
        Reach out to us with your questions, feedback, or supportneeds—we’re
        here to help!
      </p>

      <div className='w-full p-5 lg:px-[60px] lg:py-[50px] md:p-[50px] flex flex-col-reverse items-center justify-center max-w-screen-xl lg:mx-auto md:flex-col lg:flex-row gap-9 sm:flex-col'>
        <div className='w-full lg:w-[40%] flex flex-col'>

          <div className='relative py-5 flex items-center'>
            <div className='h-[80px] w-[80px] bg-csYellow rounded-full text-white flex items-center justify-center text-[25px]'>
              <MdLocationOn />
            </div>
            <div className='flex flex-col ml-5 text-xl font-normal'>
              <h4>Address</h4>
              <p>
                461 Sugar Camp Street, <br /> California, 56600.
              </p>
            </div>
          </div>

          <div className='relative py-5 flex items-center'>
            <div className='h-[80px] w-[80px] bg-csYellow rounded-full text-white flex items-center justify-center text-[25px]'>
              <FaPhoneAlt />
            </div>
            <div className='flex flex-col ml-5 text-xl font-normal'>
              <h4>Phone</h4>
              <p>+21 312456789</p>
            </div>
          </div>

          <div className='relative py-5 flex items-center'>
            <div className='h-[80px] w-[80px] bg-csYellow rounded-full text-white flex items-center justify-center text-[25px]'>
              <MdEmail />
            </div>
            <div className='flex flex-col ml-5 text-xl font-normal'>
              <h4 className='font-semibold'>Email</h4>
              <p className='font-[cursive]'>foodtuck@temporary.com</p>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-[45%] p-6 md:p-[40px] bg-csYellow '>
          <form action="#">
            <h2 className='text-3xl mb-4'>Send Message</h2>
            <div className='realtive w-full mt-[10px]'>
              <label className='text-gray-800 font-[cursive] font-medium'>Your Name:</label>
              <input type="text" placeholder="Enter your name" className='w-full p-4 text-base mt-[5px] mb-[10px] border border-solid border-csYellow outline-none rounded-md' required />
            </div>

            <div className='realtive w-full mt-[10px]'>
              <label className='text-gray-800 font-[cursive] font-medium'>Your Email:</label>
              <input type="email" placeholder="Enter your email" className='w-full p-4 text-base mt-[5px] mb-[10px] border border-solid border-csYellow outline-none rounded-md' required />
            </div>

            <div className='realtive w-full mt-[10px]'>
              <label className='text-gray-800 font-[cursive] font-medium'>Your Message:</label>
              <textarea
                rows={5}
                placeholder="Write your message here"
                className='w-full p-4 text-base mt-[5px] mb-[10px] border border-solid border-csYellow outline-none rounded-md'
              ></textarea>
            </div>

            <div className='realtive w-full mt-[10px]'>
              <input type="submit" value={"Send"} className='w-full bg-white hover:bg-orange-500 hover:text-white transition-colors duration-150 text-csYellow font-bold text-[18px] rounded-lg mt-3 p-3 outline-none cursor-pointer border-white border-solid' />
            </div>
          </form>
        </div>
      </div>
      </div>
    </section>
  )
}

export default page

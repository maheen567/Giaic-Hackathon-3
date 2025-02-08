import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-5 pt-[148px] lg:py-[100px] text-center flex flex-col items-center justify-center my-10'>
      <h1 className='text-center text-[32px] font-bold text-[#333333]'>Your order has been placed successfully!</h1>
       <a href="/" className='my-3 bg-csYellow hover:bg-orange-500 transition-colors duration-100 py-3 px-10 text-white text-[18px] font-bold rounded-md font-sans text-nowrap'>Go to home</a>
    </div>
  )
}

export default page

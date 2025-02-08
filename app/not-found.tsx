import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
  <div>
    <div className='px-5 pt-[148px] lg:py-[100px] text-center flex flex-col items-center justify-center my-10'>
        <h1 className='text-[96px] font-bold text-csYellow font-sans'>404</h1>
        <h3 className='text-[32px] font-bold text-[#333333]'>
        Oops! Looks like something went wrong
        </h3>
        <p className='text-[#4f4f4f] w-auto text-wrap sm:w-[500px] mx-auto font text-[18px] my-5'>
        Page Cannot be found! we’ll have it figured out in no time. Meanwhile, check out these fresh ideas;
        </p>
        <Link href={'/'} className='my-3 bg-csYellow hover:bg-orange-500 transition-colors duration-100 py-3 px-10 text-white text-[18px] font-bold rounded-md font-sans text-nowrap'>
        Go to home
        </Link>
    </div>
  </div>
  )
}

export default notFound

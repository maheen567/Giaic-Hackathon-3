import { url } from 'inspector'
import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from "react-icons/fa";


const backgroundImageStyle = {
    backgroundImage: 'url("/menuPhotos/topHeader.png")',
  };

interface Props {
  title: string
  link1: string
  link2: string
  link3: string
}

const TopHeader = (props: Props) => {
  return (

  <div className='pt-[148px] md:pt-[72px]'>
    <div className='h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] bg-cover bg-center w-full text-white flex items-center justify-center' style={backgroundImageStyle}>
      <div className='flex flex-col items-center gap-3 px-4 md:gap-4'>
        <h1 className='font-sans text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-center'>
          {props.title}
        </h1>
        <div className='text-base sm:text-lg md:text-xl flex items-center gap-2 text-center justify-center'>
              <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
                {props.link1}
              </Link>
              <span className='text-white text-sm'> <FaAngleRight className='text-[#4b4b4b]' size={22}/></span>
              <Link href={props.link3} className='text-[#FF9F0D]'>
                {props.link2}
              </Link>
            </div>
      </div>
    </div>
  </div>
  )
}

export default TopHeader

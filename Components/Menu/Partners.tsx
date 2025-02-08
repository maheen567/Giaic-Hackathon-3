import { section } from 'framer-motion/client'
import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <section className='px-5 md:px-[60px] py-[60px] mx-auto max-w-screen-xl'>
        <div className='text-center text-csBlack'>
            <h1 className='text-5xl font-semibold font-poppins mb-2'>Partners & Clients</h1>
            <p className='text-sm md:text-base font-mono text-center mb-14 text-[#141414]'>Partnering with the best to deliver the extraordinary!</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center items-center justify-center mb-12'>
            <Image src={'/menuPhotos/partner1.png'} alt='1' height={130} width={240}/>
            <Image src={'/menuPhotos/partner2.png'} alt='1' height={130} width={240}/>
            <Image src={'/menuPhotos/partner3.png'} alt='1' height={130} width={240}/>
            <Image src={'/menuPhotos/partner4.png'} alt='1' height={130} width={240}/>
            <Image src={'/menuPhotos/partner5.png'} alt='1' height={130} width={240}/>
        <Image src={'/menuPhotos/partner6.png'} alt='1' height={130} width={240}/>
        </div>
        
    </section>
  )
}

export default Partners

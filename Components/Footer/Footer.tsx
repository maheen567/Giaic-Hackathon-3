import { footer } from 'framer-motion/client'
import React from 'react'
import NewsletterSect from './NewsletterSect'
import Link from 'next/link';
import AboutSect from './AboutSect';
import LinksSect from './UsefulLinks';
import HelpSect from './HelpSect';
import RecentPostFooter from './RecentPostSect';
import SocialIcons from './BottomSect';

export default function Footer() {
  return (
   <footer className='bg-black text-csGray'>
     <div className="max-w-screen-xl mx-auto px-5 lg:px-[60px] py-8 pt-[70px]">
        <NewsletterSect />
        <hr className='border-t border-[#FF9F0D] max-w-screen-xl mx-auto mb-14'/>
        <div className='flex justify-between flex-wrap'>
        <AboutSect />
        <LinksSect />
        <HelpSect />
        <RecentPostFooter />
        </div>
     </div>
     <div className="bg-[#4F4F4F] py-8 flex ">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[16px] leading-6 mb-4 md:mb-0">
             © 2024 | {" "} 
          <Link href={'https://www.linkedin.com/in/maheen-hussain-931388301/'} target='_blank' className='text-csGray hover:text-csYellow transition duration-300 ease-in'>
            Maheen Hussain
          </Link>
           {" "} | All Rights Reserved
          </p>
          <SocialIcons />
        </div>
      </div>
   </footer>
  );
}

//<div className="max-w-screen-xl mx-auto px-5 lg:px-[60px] py-8 flex  justify-between">


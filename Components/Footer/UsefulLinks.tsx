import Link from 'next/link';
import React from 'react'

const UsefulLinks = () => {
  return (
    <div className="w-[120.36px] mb-12">
    <h3 className="text-2xl lg:text-xl font-bold mb-4 text-csYellow text-nowrap">Useful Links</h3> 
    <ul className="text-[16px] leading-6 flex flex-col gap-4">
        <li className="mb-1 text-center">
          <Link href="/about" className="text-csGray font-medium hover:text-csYellow transition duration-300">
            About
          </Link>
        </li>
        <li className="mb-1 text-center">
          <Link href="/blogs" className="text-csGray font-medium hover:text-csYellow transition duration-300">
          News
          </Link>
        </li>
        <li className="mb-1 text-center">
          <Link href="/chefs" className="text-csGray font-medium hover:text-csYellow transition duration-300">
          Partners
          </Link>
        </li>
        <li className="mb-1 text-center">
          <Link href="#" className="text-csGray font-medium hover:text-csYellow transition duration-300">
          Team
          </Link>
        </li>
        <li className="mb-1 text-center">
          <Link href="/menu" className="text-csGray font-medium hover:text-csYellow transition duration-300">
          Menu
          </Link>
        </li>
        <li className="mb-1 text-center">
          <Link href="/contact" className="text-csGray font-medium hover:text-csYellow transition duration-300">
          Contact
          </Link>
        </li>
    </ul>
  </div>
  )
}

export default UsefulLinks

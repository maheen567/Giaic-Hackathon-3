import Link from 'next/link';
import React from 'react'

const HelpSect = () => {
  return (
    <div>
    <h3 className="text-2xl lg:text-xl font-bold mb-4 text-csYellow text-center">Help?</h3>
    <ul className="text-[16px] flex flex-col gap-4 leading-6">
        <li className="mb-1 text-center">
          <Link href="/faq" className="text-csGray hover:text-csYellow transition duration-300">
            FAQ
          </Link>
        </li>
        <li className="mb-1 text-center">
          <Link href="#" className="text-csGray hover:text-csYellow transition duration-300">
          Term & Condition
          </Link>
        </li>
        <li className="mb-1 text-center">
          <Link href="#" className="text-csGray hover:text-csYellow transition duration-300">
          Reporting
          </Link>
        </li>
        <li className="mb-1 text-center">
          <Link href="#" className="text-csGray hover:text-csYellow transition duration-300">
          Documentation
          </Link>
        </li>
        <li className="mb-1 text-center">
          <Link href="#" className="text-csGray hover:text-csYellow transition duration-300">
          Support Policy
          </Link>
        </li>
        <li className="mb-1 text-center">
          <Link href="#" className="text-csGray hover:text-csYellow transition duration-300">
          Privacy
          </Link>
        </li>
    </ul>
  </div>
  )
}

export default HelpSect

import Link from 'next/link'
import React from 'react'

const ProductTags = () => {
  return (
    <div className="bg-white border border-solid border-gray-300 shadow-sm p-5 lg:p-7 mb-6">
      <h4 className="font-bold font-inter text-csBlack text-[20px] mb-4">
        Popular Tags
      </h4>
      <div className="flex flex-wrap gap-2">
        <Link
          href={"#"}
          className="text-sm px-[15px] py-[6px] text-gray-500 border border-solid border-gray-300 hover:border-csYellow hover:bg-csYellow hover:text-white transition"
        >
          Sandwich
        </Link>

        <Link
          href={"#"}
          className="text-sm px-[15px] py-[6px] text-gray-500 border border-solid border-gray-300 hover:border-csYellow hover:bg-csYellow hover:text-white transition"
        >
          Tikka
        </Link>

        <Link
          href={"#"}
          className="text-sm px-[15px] py-[6px] text-gray-500 border border-solid border-gray-300 hover:border-csYellow hover:bg-csYellow hover:text-white transition"
        >
          BBQ
        </Link>

        <Link
          href={"#"}
          className="text-sm px-[15px] py-[6px] text-gray-500 border border-solid border-gray-300 hover:border-csYellow hover:bg-csYellow hover:text-white transition"
        >
          Restaurant
        </Link>

        <Link
          href={"#"}
          className="text-sm px-[15px] py-[6px] text-gray-500 border border-solid border-gray-300 hover:border-csYellow hover:bg-csYellow hover:text-white transition"
        >
          Chicken Shawarma
        </Link>

        <Link
          href={"#"}
          className="text-sm px-[15px] py-[6px] text-gray-500 border border-solid border-gray-300 hover:border-csYellow hover:bg-csYellow hover:text-white transition"
        >
          Pizza
        </Link>

        <Link
          href={"#"}
          className="text-sm px-[15px] py-[6px] text-gray-500 border border-solid border-gray-300 hover:border-csYellow hover:bg-csYellow hover:text-white transition"
        >
          Burger
        </Link>

        <Link
          href={"#"}
          className="text-sm px-[15px] py-[6px] text-gray-500 border border-solid border-gray-300 hover:border-csYellow hover:bg-csYellow hover:text-white transition"
        >
          Food
        </Link>

        <Link
          href={"#"}
          className="text-sm px-[15px] py-[6px] text-gray-500 border border-solid border-gray-300 hover:border-csYellow hover:bg-csYellow hover:text-white transition"
        >
          Chicken
        </Link>
      </div>
    </div>
  )
}

export default ProductTags

import Link from 'next/link'
import React from 'react'

const Button = (props:any) => {
  return (
    <button className="px-12 py-4 rounded-full bg-csYellow text-white text-base hover:shadow-xl transition-all duration-0 cursor-pointer hover:bg-transparent hover:text-csYellow focus:text-white hover:border hover:border-solid hover:border-csYellow">
  {props.text}
</button>
  )
}

export default Button

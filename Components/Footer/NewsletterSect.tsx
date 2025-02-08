import React from 'react'

const NewsletterSect = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mx-auto md:items-center mb-9">
      <div className="flex flex-col md:items-center md:justify-center">
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-4">
          <span className="text-csYellow">Still</span> You Need Our Support
          ?
        </h2>
        <p className="mb-6 text-center md:text-start text-sm">
          Dont wait make a smart and logical quote here. Its pretty easy.
        </p>
      </div>

      <form className="w-[70%] h-[55.86px] md:w-[70%] lg:w-[40%] flex justify-center">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-grow bg-csYellow text-white placeholder-white placeholder-opacity-60 px-4 py-2 rounded-l-md outline-none border-none"
        />
        <button
          type="submit"
          className="bg-white text-csYellow px-6 py-2 rounded-r-md font-semibold hover:bg-customYellow hover:bg-orange-500 hover:text-white transition duration-200 cursor-pointer"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  )
}

export default NewsletterSect


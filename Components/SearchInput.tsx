import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput = () => {
  return (
    <div className="mb-6">
      <div className="relative flex items-center mb-4">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full border border-solid border-gray-300  h-[50px] py-2 px-4 text-sm placeholder-[#cfcccc] focus:outline-none focus:border-csYellow"
        />
        <button className="flex items-center justify-center absolute top-0 right-0 h-[50px] w-[50px] bg-csYellow cursor-pointer">
          <FiSearch size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;

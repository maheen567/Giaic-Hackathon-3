"use client";

import { Food } from "@/types/foods";
import React, { useState } from "react";


const Counter = () => {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };
  const subValue = () => {
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <div className="flex items-center border border-solid border-gray-500 overflow-hidden rounded-md w-[120px] my-4">
        <button
          className="w-1/3 h-[40px] text-lg font-bold text-gray-500 hover:bg-gray-200 flex justify-center items-center cursor-pointer"
          onClick={subValue}
        >
          -
        </button>
        <span className="w-1/3 h-full flex justify-center border-l border-r border-gray-500 items-center text-lg font-medium text-gray-800 border-x">
          {counter}
        </span>
        <button
          className="w-1/3 h-[40px] text-lg font-bold text-gray-500 hover:bg-gray-200 flex justify-center items-center cursor-pointer"
          onClick={addValue}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;

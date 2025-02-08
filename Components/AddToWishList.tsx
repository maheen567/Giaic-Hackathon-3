"use client";

import { Food } from "@/types/foods";
import React, { useState } from "react";
import { addToWishlist, removeFromWishlist } from "@/app/actions/actions";
import { Bounce, toast } from "react-toastify";

const AddToWishList = ({ foodItem }: { foodItem: Food }) => {
  const [wishlist, setWishlist] = useState<Food[]>([]);

  const handleAddToWishlist = (e: React.MouseEvent, product: Food) => {
    e.preventDefault();
    const isInWishlist = wishlist.find((item) => item._id === product._id);

    if (isInWishlist) {
      removeFromWishlist(product._id);
      toast.success(`${product.name} removed from wishlist`, {
        position: "bottom-right",
        pauseOnHover: false,
        theme: "colored",
        transition: Bounce,
      });
      setWishlist(wishlist.filter((item) => item._id !== product._id));
    } else {
      addToWishlist(product);
      toast.success(`${product.name} added to wishlist successfully!`, {
        position: "bottom-right",
        pauseOnHover: false,
        theme: "colored",
        transition: Bounce,
      });
      setWishlist([...wishlist, product]);
    }
  };

  const isProductInWishlist = (productId: number) => {
    return wishlist.some((item) => item._id === productId);
  };
  return (
    <button
      className={`rounded-full w-10 h-10 bg-csYellow p-0  border-0 inline-flex items-center justify-center text-white ml-4 cursor-pointer focus:text-red-600
                      
        ${isProductInWishlist(foodItem._id) ? "bg-red-500" : "text-white"}
        `}
      onClick={(e) => handleAddToWishlist(e, foodItem)}
    >
      <svg
        fill="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        className="w-5 h-5 text-white"
        viewBox="0 0 24 24"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
      </svg>
    </button>
  );
};

export default AddToWishList;
"use client";

import { useState } from "react";
import { addToCart } from "@/app/actions/actions";
import { Food } from "@/types/foods";
import { Bounce, toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";

interface AddToCartButtonProps {
  product: Food;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    await addToCart({ ...product });
    setIsAdding(false);
    toast.success(`${product.name} added to cart successfully!`, {
      position: "bottom-right",
      pauseOnHover: false,
      theme: "colored",
      transition: Bounce,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className="py-3 px-8 bg-csYellow hover:bg-orange-500 text-white whitespace-nowrap text-sm flex items-center gap-2 shadow-md hover:shadow-lg "
    >
      <FaShoppingCart size={20} />
      {isAdding ? "Adding to Cart..." : "Add to Cart"}
    </button>
  );
}

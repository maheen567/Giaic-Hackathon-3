"use client";
import {
  addToCart,
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "@/app/actions/actions";
import AuthGuard from "@/Components/AuthGuard";
import TopHeader from "@/Components/TopHeader";
import { urlFor } from "@/sanity/lib/image";
import { Food } from "@/types/foods";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { Bounce, toast } from "react-toastify";

const page = () => {
  const [cartItems, setCartItems] = useState<Food[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [couponCode, setCouponCode] = useState<string>("");

  useEffect(() => {
    setCartItems(getCartItems());
  });

  const handleRemove = (id: number, product: Food) => {
    if (product) {
      toast.success(`${product.name} has been removed successfully!`, {
        position: "bottom-right",
        pauseOnHover: false,
        theme: "colored",
        transition: Bounce,
      });
    }
    removeFromCart(id);
    setCartItems(getCartItems());
  };

  const handleQuanityChange = (id: number, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: number) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuanityChange(id, product.quantity + 1);
    }
  };

  const handleDecrement = (id: number) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.quantity > 1) {
      handleQuanityChange(id, product.quantity - 1);
    }
  };

  const handleApplyCoupon = () => {
    if (couponCode === "Dicount6785") {
      setDiscount(35); // Apply $35 discount
      localStorage.setItem("appliedDiscount", "35"); // Store discount in LocalStorage
      toast.success(`Congratulations! You've got $35 discount🎉`, {
        position: "bottom-right",
        pauseOnHover: false,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      setDiscount(0); // Reset discount if code is invalid
      localStorage.removeItem("appliedDiscount"); // Remove any invalid discount
    }
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = Math.max(subtotal - discount, 0); // Ensure total does not go negative

  return (
    <AuthGuard>
    <section>
      <TopHeader
        title="Shopping Cart"
        link1="Home"
        link2="Shopping Cart"
        link3="/cart"
      />

      <div className="py-[100px] max-w-screen-xl lg:mx-auto">
        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-4xl font-inter text-csYellow font-bold mb-8">
              Your cart is empty.
            </p>
            <Link
              href="/shop"
              className="py-3 px-8 bg-csYellow hover:bg-orange-500 text-white text-sm shadow-md hover:shadow-lg rounded-md"
            >
              Go to Shop
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto md:px-[4%] px-[7%]">
            <h1 className="text-4xl font-bold text-csYellow mb-4">Your Cart</h1>
            <div className="hidden md:block">
              <table className="min-w-full text-csBlack">
                <thead>
                  <tr className="font-bold text-lg text-[#333333]">
                    <th className="px-6 py-3 text-left">Product</th>
                    <th className="px-6 py-3 text-left">Price</th>
                    <th className="px-6 py-3 text-left">Quantity</th>
                    <th className="px-6 py-3 text-left">Total</th>
                    <th className="px-6 py-3 text-center">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr className="border-b border-gray-200" key={item._id}>
                      <td className="px-6 py-4 flex items-center space-x-4">
                        {item.image && (
                          <Image
                            src={urlFor(item.image).url()}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="w-16 h-16 rounded"
                          />
                        )}

                        <div>
                          <p className="font-bold text-[18px] text-[#333333] mb-1">
                            {item.name}
                          </p>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-[#333333]">
                        ${item.price}
                      </td>

                      <td className="px-6 py-4">
                        <div className="inline-flex items-center border border-solid border-gray-500 overflow-hidden rounded-md w-[90px] my-4">
                          <button
                            onClick={() => handleDecrement(item._id)}
                            className="w-[30px] h-[30px] text-lg font-bold text-gray-500 hover:bg-gray-200 flex justify-center items-center cursor-pointer"
                          >
                            -
                          </button>
                          <span className="w-1/3 h-full flex justify-center border-l border-r border-gray-500  items-center text-base font-medium text-gray-800 border-x">
                            {item.quantity}
                          </span>
                          <button
                            className="w-[30px] h-[30px] text-lg font-bold text-gray-500 hover:bg-gray-200 flex justify-center items-center cursor-pointer"
                            onClick={() => handleIncrement(item._id)}
                          >
                            +
                          </button>
                        </div>
                      </td>

                      <td className="px-6 py-4 font-bold text-[16px]">
                        ${item.price * item.quantity}
                      </td>

                      <td className="px-6 py-4 text-center">
                        <button className="text-csBlack">
                          <IoClose
                            className="hover:text-csYellow w-[25px] h-[25px] transition-color duration-100 bg-white cursor-pointer"
                            onClick={() => handleRemove(item._id, item)}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="block md:hidden">
              {cartItems.map((item) => (
                <div className="flex flex-col p-4 border-b border-gray-200 mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="w-16 h-16 rounded"
                      />
                    )}
                    <div>
                      <p className="font-bold text-[18px]">{item.name}</p>
                    </div>
                  </div>

                  <div className="flex justify-between mb-4">
                    <span className="font-bold">Price:</span>
                    <span>${item.price}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold">Quantity</span>
                    <div className="inline-flex items-center border border-solid border-gray-500 overflow-hidden rounded-md w-[90px] my-4">
                      <button
                        className="w-[30px] h-[30px] text-lg font-bold text-gray-500 hover:bg-gray-200 flex justify-center items-center cursor-pointer"
                        onClick={() => handleDecrement(item._id)}
                      >
                        -
                      </button>
                      <span className="w-1/3 h-full flex justify-center border-l border-r border-gray-500  items-center text-base font-medium text-gray-800 border-x">
                        {item.quantity}
                      </span>
                      <button
                        className="w-[30px] h-[30px] text-lg font-bold text-gray-500 hover:bg-gray-200 flex justify-center items-center cursor-pointer"
                        onClick={() => handleIncrement(item._id)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between mb-4">
                    <span className="font-bold">Total</span>
                    <span>${item.price * item.quantity}</span>
                  </div>

                  <div className="flex justify-center items-center">
                    <button className="text-csBlack group">
                      <IoClose
                        className="hover:text-csYellow w-[25px] h-[25px] transition-color duration-100 bg-white cursor-pointer"
                        onClick={() => handleRemove(item._id, item)}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Coupon and Cart Total */}
            <div className="flex flex-col md:flex-row justify-between px-4 lg:px-[7%] pt-28 bg-white gap-6">
              <div className="w-full md:w-[648px]">
                <h2 className="text-2xl md:text-[32px] font-bold text-csBlack mb-4">
                  Coupon Code
                </h2>
                <div className="border border-solid border-gray-300 rounded-lg p-4 md:p-6 w-full">
                  <p className="text-txtlight text-sm mb-4 leading-relaxed">
                    Enter a coupon code to receive a discount on your purchase.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center sm:-space-x-1">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-full flex-1 border border-gray-300 rounded-md py-4 md:py-[12px] px-4 text-gray-500 focus:outline-csYellow placeholder:text-gray-500 mb-3 sm:mb-0"
                      placeholder="Enter your coupon code"
                    />
                    <button
                      className="bg-csYellow hover:bg-orange-500 text-white text-base py-[16px] px-6 md:py-3 rounded-r-md rounded-l-none rounded-br-md rounded-bl-none transition-all duration-200 w-full sm:w-auto cursor-pointer"
                      onClick={handleApplyCoupon}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[648px]">
                <h2 className="text-2xl md:text-[32px] font-bold text-csBlack mb-4">
                  Total Bill
                </h2>

                <div className="border border-solid border-gray-300 rounded-lg p-4 md:p-6 w-full">
                  <div className="space-y-4">
                    <div className="flex justify-between text-csBlack">
                      <span className="font-bold text-base font-inter text-[#333333]">
                        Cart Subtotal
                      </span>
                      <span className="text-gray-800 font-bold">
                        ${subtotal}
                      </span>
                    </div>

                    <div className="flex justify-between text-csBlack">
                      <span className="font-bold text-base font-inter text-[#333333]">
                        Discount
                      </span>
                      <span className="text-gray-800 font-bold">
                        -${discount}
                      </span>
                    </div>

                    <div className="flex justify-between text-gray-500">
                      <span className=" font-inter text-[#4f4f4f] text-base">
                        Shipping Charge
                      </span>
                      <span className="font-inter text-[#4f4f4f] text-base">
                        Free
                      </span>
                    </div>
                    <hr className="-mx-4 md:-mx-6 w-[calc(100%+2rem)] md:w-[calc(100%+3rem)] border-t border-gray-300" />

                    <div className="flex font-inter justify-between text-csBlack text-lg font-bold">
                      <span>Total Amount</span>
                      <span>${total}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-center">
                  <a href={"/checkout"} className="inline-flex items-center gap-2 bg-csYellow hover:bg-orange-500 text-white text-lg py-2 md:py-[14px] px-6 md:px-8 w-full md:w-auto mt-4 cursor-pointer">
                      Proceed to Checkout
                      <LuSquareArrowOutUpRight className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
    </AuthGuard>
  );
};

export default page;

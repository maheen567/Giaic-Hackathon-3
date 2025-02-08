'use client';

import React from "react";

import { getCartItems } from "@/app/actions/actions";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Food } from "@/types/foods";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import TopHeader from "@/Components/TopHeader";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from "next/navigation";

const page = () => {
  const [cartItems, setCartItems] = useState<Food[]>([]);
  const [discount, setDiscount] = useState<number>(0); // State for discount
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const router = useRouter();

  const handlePlaceOrder = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the page from refreshing
    if (validateForm()) {
      try {
        // Step 1: Create the order in Sanity
        const orderData = {
          _type: "order",
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          address: formValues.address,
          city: formValues.city,
          zipCode: formValues.zipCode,
          phone: formValues.phone,
          email: formValues.email,
          cartItems: cartItems.map((item) => ({
            _type: "reference",
            _ref: item._id, // Assuming cartItems have the correct product references
          })),
          total: total, // Make sure this value is being calculated
          discount: discount, // Add any discount if applicable
          orderDate: new Date().toISOString(), // Order date for when the order was placed
        };
        
        // Send the order data to Sanity
        const orderResponse = await client.create(orderData);
        localStorage.removeItem("appliedDiscount");
        localStorage.removeItem('cart');
        router.push('/orderSuccess')
        toast.success(`Order placed successfully!`, {
          position: "bottom-right",
          pauseOnHover: false,
          theme: "colored",
          transition: Bounce,
        });
      } catch (error) {
        toast.error("An error occurred while processing your request.");
        console.error(error);
      }
    } else {
      toast.error(`Please fill in all the fields`, {
        position: "top-right",
        pauseOnHover: false,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <section>
      <TopHeader
        title="CheckOut Page"
        link1="Home"
        link2="Checkout"
        link3="/checkout"
      />

      <div className="py-[100px] md:px-[7%] px-[3%] max-w-screen-xl mx-auto ">
        <form id="shipping-form">
          <div className="bg-white text-black ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Left Portion | Shipping Form */}
              <div className="lg:col-span-2">
                <h2 className="text-[20px] font-bold font-inter mb-4">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium"
                    >
                      First name
                    </label>
                    <input
                      id="firstName"
                      className="p-3 rounded border border-solid border-gray-300 outline-none w-full focus:border-csYellow"
                      value={formValues.firstName}
                      onChange={handleInputChange}
                    />
                    {formErrors.firstName && (
                      <p className="text-sm text-red-500">
                        First Name is required
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm font-medium"
                    >
                      Last name
                    </label>
                    <input
                      id="lastName"
                      className="p-3 rounded border border-solid border-gray-300 outline-none w-full focus:border-csYellow"
                      value={formValues.lastName}
                      onChange={handleInputChange}
                    />
                    {formErrors.lastName && (
                      <p className="text-sm text-red-500">
                        Last Name is required
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      className="p-3 rounded border border-solid border-gray-300 outline-none w-full focus:border-csYellow"
                      value={formValues.email}
                      onChange={handleInputChange}
                    />
                    {formErrors.email && (
                      <p className="text-sm text-red-500">Email is required</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium"
                    >
                      Phone number
                    </label>
                    <input
                      id="phone"
                      className="p-3 rounded border border-solid border-gray-300 outline-none w-full focus:border-csYellow"
                      value={formValues.phone}
                      onChange={handleInputChange}
                    />
                    {formErrors.phone && (
                      <p className="text-sm text-red-500">
                        Phone number is required
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Country
                    </label>
                    <select className="p-3 rounded border border-solid border-gray-300 outline-none w-full focus:border-csYellow">
                      <option value="Pakistan">Pakistan</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="city"
                      className="block mb-2 text-sm font-medium"
                    >
                      City
                    </label>
                    <input
                      id="city"
                      className="p-3 rounded border border-solid border-gray-300 outline-none w-full focus:border-csYellow"
                      value={formValues.city}
                      onChange={handleInputChange}
                    />
                    {formErrors.city && (
                      <p className="text-sm text-red-500">City is required</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="zipCode"
                      className="block mb-2 text-sm font-medium"
                    >
                      Zip code
                    </label>
                    <input
                      id="zipCode"
                      className="p-3 rounded border border-solid border-gray-300 outline-none w-full focus:border-csYellow"
                      value={formValues.zipCode}
                      onChange={handleInputChange}
                    />
                    {formErrors.zipCode && (
                      <p className="text-sm text-red-500">
                        Zip Code is required
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-medium"
                    >
                      Address
                    </label>
                    <input
                      id="address"
                      className="p-3 rounded border border-solid border-gray-300 outline-none w-full focus:border-csYellow"
                      value={formValues.address}
                      onChange={handleInputChange}
                    />
                    {formErrors.address && (
                      <p className="text-sm text-red-500">
                        Address is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <h2 className="text-[20px] font-bold font-inter mb-4">
                    Billing Address
                  </h2>
                  <div className="mt-4">
                    <div className="inline-flex items-center cursor-pointer gap-2">
                      <input
                        type="checkbox"
                        id="address"
                        className=" text-black"
                        checked
                        value={formValues.address}
                        onChange={handleInputChange}
                      />
                      <p>Same as shipping address</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Link
                    href={"/cart"}
                    className="flex items-center justify-center gap-1 text-black px-6 py-[10px] border border-solid border-gray-300 cursor-pointer"
                  >
                    <FaAngleLeft size={24} className="text-gray-500" />
                    Back to cart
                  </Link>
                  <button
                    onClick={handlePlaceOrder}
                    className="flex items-center text-base justify-center gap-1 bg-csYellow text-white px-6 py-[10px] cursor-pointer hover:bg-orange-500 transition-colors duration-200"
                  >
                    Proceed to shipping
                    <FaAngleRight size={24} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Right Portion | Order Summary */}
              <div className="p-6 rounded border border-solid border-gray-300">
                <div className="space-y-4 h-auto overflow-y-auto scrollbar-thin">
                  <h2 className="font-bold font-inter text-2xl">
                    Order Summary
                  </h2>

                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <div key={item._id}>
                        <div className="flex items-center gap-1">
                          {item.image && (
                            <Image
                              src={urlFor(item.image).url()}
                              alt={item.name}
                              width={100}
                              height={100}
                              className="w-20 h-20"
                            />
                          )}
                          <div className="ml-2 flex flex-col gap-2">
                            <h2 className="font-bold text-[16px] font-inter">
                              {item.name}
                            </h2>
                            <p className="text-gray-500 text-sm">
                              ${item.quantity} x ${item.price}
                            </p>
                            <p className="text-gray-500 text-sm">
                              <b>Subtotal: </b>${item.price * item.quantity}
                            </p>
                          </div>
                        </div>
                        <hr className="w-full my-4 h-[2px]" />
                      </div>
                    ))
                  ) : (
                    <p>No items found in your cart</p>
                  )}
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex justify-between">
                    <p className="text-gray-800 text-base">Subtotal</p>
                    <p className="text-gray-800 text-base">${subtotal}</p>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex justify-between">
                    <p className="text-gray-800 text-base">Shipping</p>
                    <p className="text-gray-800 text-base">Free</p>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex justify-between">
                    <p className="text-gray-800 text-base">Discount</p>
                    <p className="text-gray-800 text-base">-${discount}</p>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex justify-between">
                    <p className="text-gray-800 text-base">Tax</p>
                    <p className="text-gray-800 text-base">$0</p>
                  </div>
                </div>
                <hr className="w-full my-4 h-[2px]" />

                <div className="flex justify-between pt-3 text-[18px] text-csBlack">
                  <p>Total</p>
                  <p className="font-bold">${total}</p>
                </div>

                <button className="group flex items-center justify-center gap-2 mt-6 bg-csYellow text-white text-[18px] w-full py-3 rounded cursor-pointer hover:bg-orange-500" onClick={handlePlaceOrder}>
                  Place an order
                  <FaArrowRightLong
                    size={20}
                    className="group-hover:translate-x-2 transition-all duration-300"
                  />
                </button>
              </div>

            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default page;

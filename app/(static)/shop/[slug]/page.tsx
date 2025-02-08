import AddToCartButton from "@/Components/AddToCart";
import AddToWishList from "@/Components/AddToWishList";
import Counter from "@/Components/Counter";
import TopHeader from "@/Components/TopHeader";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Food } from "@/types/foods";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaStar,
  FaTwitter,
} from "react-icons/fa";

interface FoodProps {
  params: { slug: string };
}

async function getFood(slug: string): Promise<Food> {
  return client.fetch(
    groq`*[_type == 'food' && slug.current == $slug][0]{
      _id,
      name,
      _type,
      image,
      originalPrice,
      tags,
      category,
      price,
      description,
    }`,
    { slug }
  );
}

const page = async ({ params }: FoodProps) => {
  const { slug } = params;
  const food = await getFood(slug);

  if (!food) {
    return <div>Food not found</div>;
  }

  return (
    <section>
      <TopHeader
        title="Product Details"
        link1="Home"
        link2="Product Details"
        link3="#"
      />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="w-full lg:max-w-[84%] px-5 py-[30px] lg:py-24 lg:mx-auto md:px-[40px]">
          <div className=" mx-auto flex flex-wrap lg:gap-2 items-center justify-center">
            {food.image && (
              <Image
                src={urlFor(food.image).url()}
                alt={food.name}
                width={200}
                height={300}
                className="w-full h-[300px] object-cover object-center rounded-lg md:w-full md:h-auto lg:max-w-[417px] lg:w-[378px] lg:h-[407px]"
              />
            )}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="px-3 py-1 bg-csYellow text-white rounded-md text-sm inline-block">
                In Stock
              </h2>
              <h1 className="text-gray-900 text-4xl title-font font-bold my-3">
                {food.name}
              </h1>

              <p className="leading-normal">{food.description}</p>
              <div className="flex my-2 items-center border-b-2 border-gray-100"></div>
              <div className="flex">
                <span className="title-font font-bold text-2xl  text-gray-900">
                  ${food.price}.00
                </span>
              </div>
              <div className="flex my-3">
                <span className="flex items-center gap-1">
                  <FaStar size={16} className="text-csYellow" />
                  <FaStar size={16} className="text-csYellow" />
                  <FaStar size={16} className="text-csYellow" />
                  <FaStar size={16} className="text-csYellow" />
                  <FaStar size={16} className="text-csYellow" />
                  <span className="ml-2 text-sm">|</span>
                  <span className="text-gray-600 ml-2 text-sm">
                    3.0 Ratings
                  </span>
                  <span className="ml-2 text-sm">|</span>
                  <span className="text-gray-600 ml-2 text-sm">32 reviews</span>
                </span>
              </div>

              <div className="flex items-center justify-between my-7">

                  {/* Add to Cart & Wishlist Button */}
                  <div className="flex gap-1">
                    <AddToCartButton product={food} />
                    <AddToWishList foodItem={food} />
                  </div>
                
              </div>

              {/* Category & Tags */}
              <div>
                <p className="my-2">
                  <b>Category:</b> {food.category}
                </p>
                <p className="my-2">
                  <b>Tags: </b>
                  {food.tags.join(" | ")}
                </p>
              </div>

              {/* Social links */}
              <div className="flex items-center  my-2">
                <p className="">
                  <b>Share:</b>
                </p>
                <div className="flex gap-2 ml-2">
                  <Link
                    href={"#"}
                    className="text-[#414141] hover:text-csYellow transition duration-300 text-[14px]"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    href={"#"}
                    className="text-[#414141] hover:text-csYellow transition duration-300 text-[14px]"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href={"#"}
                    className="text-[#414141] hover:text-csYellow transition duration-300 text-[14px]"
                  >
                    <FaPinterestP />
                  </Link>
                  <Link
                    href={"#"}
                    className="text-[#414141] hover:text-csYellow transition duration-300 text-[14px]"
                  >
                    <FaTwitter />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default page;

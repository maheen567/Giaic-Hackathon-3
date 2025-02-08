"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  addToCart,
  removeFromWishlist,
  getWishlistItems,
  moveAllToCart,
} from "@/app/actions/actions";
import { Food } from "@/types/foods";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { allFoods } from "@/sanity/lib/queries";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";
import TopHeader from "@/Components/TopHeader";

export default function WishlistPage() {
  const router = useRouter();
  const [wishlistItems, setWishlistItems] = useState<Food[]>([]);
  const [recommendedItems, setRecommendedItems] = useState<Food[]>([]);

  useEffect(() => {
    setWishlistItems(getWishlistItems());
    fetchRecommendedItems();
  }, []);

  const fetchRecommendedItems = async () => {
    const products: Food[] = await client.fetch(allFoods);
    setRecommendedItems(products.slice(0, 4));
  };

  const handleRemoveFromWishlist = (productId: number) => {
    removeFromWishlist(productId);
    setWishlistItems(getWishlistItems());
    toast.success(`Item removed from wishlist`, {
      position: "bottom-right",
      pauseOnHover: false,
      theme: "colored",
      transition: Bounce,
    });
  };

  const handleAddToCart = (product: Food) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "bottom-right",
      pauseOnHover: false,
      theme: "colored",
      transition: Bounce,
    });
  };

  const handleMoveAllToBag = () => {
    moveAllToCart();
    setWishlistItems([]);
    toast.success(`All items moved to cart!`, {
          position: "bottom-right",
          pauseOnHover: false,
          theme: "colored",
          transition: Bounce,
        });
  };

  const ProductCard = ({
    item,
    isWishlistItem = false,
  }: {
    item: Food;
    isWishlistItem?: boolean;
  }) => (
    <div className="group">
      <div className="relative aspect-square bg-[#F5F5F5] rounded-sm mb-4">
        <Link href={`/shop/${item.slug?.current}`}>
          {item.image && (
            <Image
              src={urlFor(item.image).url()}
              alt={item.name}
              fill
              className="object-cover cursor-pointer"
            />
          )}
        </Link>
        <div className="absolute inset-x-4 bottom-4"></div>
      </div>
      <h3 className="font-bold text-lg text-center text-[#1f2937] font-inter">
        {item.name}
      </h3>
      <div className="flex items-center justify-center gap-3 mb-2 ">
        <span className="text-medium font-inter text-center  text-[#2a2a2a] ">
          ${item.price}
        </span>
        {item.originalPrice && item.originalPrice > item.price && (
          <span className="text-[#666666]  line-through">
            ${item.originalPrice}
          </span>
        )}
      </div>
      <div className="flex items-center justify-center">
        <button
          className=" bg-csYellow flex items-center gap-2 text-white hover:bg-orange-500 h-10 rounded-sm py-3 px-6"
          onClick={() => handleAddToCart(item)}
        >
          <FaShoppingCart size={15} />
          Add To Cart
        </button>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen font-inter bg-white`}>
      <TopHeader
        title="WishList"
        link1="Home"
        link2="WishList"
        link3="/wishList"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex justify-between items-center mb-10">
          <h1 className={`font-poppins text-2xl font-medium`}>
            Wishlist ({wishlistItems.length})
          </h1>
          {wishlistItems.length > 0 && (
            <button
              className="px-6 py-3 rounded-sm bg-csYellow text-white font-medium hover:bg-orange-500 hover:text-white transition-colors"
              onClick={handleMoveAllToBag}
            >
              Move All To Cart
            </button>
          )}
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {wishlistItems.map((item) => (
              <ProductCard key={item._id} item={item} isWishlistItem={true} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-3xl text-[#333333] font-bold mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-[#4f4f4f] font-inter text-lg w-auto mx-auto">
              Add items to your wishlist to see them here.
            </p>
          </div>
        )}

        <div className="space-y-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className={`font-inter text-2xl font-medium`}>
                Just For You
              </h2>
            </div>
            <button
              className="px-6 py-3 rounded-sm text-white font-medium bg-csYellow hover:bg-orange-500 hover:text-white transition-colors"
              onClick={() => router.push("shop")}
            >
              See All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {recommendedItems.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

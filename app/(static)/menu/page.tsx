import FoodBanner from '@/Components/HomePages/FoodBanner/FoodBanner'
import DessertComp from '@/Components/Menu/DessertComp'
import DrinksComp from '@/Components/Menu/DrinksComp'
import MainCourseComp from '@/Components/Menu/MainCourseComp'
import Partners from '@/Components/Menu/Partners'
import StarterMenu from '@/Components/Menu/StartMenuComp'
import TopHeader from '@/Components/TopHeader'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu - Foodtuck",
  description: "An online food restraunt",
};

const page = () => {
  return (
    <div>
      <TopHeader title='Our Menu' link1='Home' link2='Menu' link3='/menu'/>
      <StarterMenu />
      <MainCourseComp />
      <FoodBanner />
      <DessertComp />
      <DrinksComp />
      <Partners />
    </div>
  )
}

export default page

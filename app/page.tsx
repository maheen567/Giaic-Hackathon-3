import AboutUsSect from "@/Components/HomePages/AboutUs/AboutUsSect";
import Blog from "@/Components/HomePages/Blog/Blog";
import Chefs from "@/Components/HomePages/Chefs/Chefs";
import FoodBanner from "@/Components/HomePages/FoodBanner/FoodBanner";
import FoodCategory from "@/Components/HomePages/FoodCategory/FoodCategory";
import HomePages from "@/Components/HomePages/Hero/HomePages";
import MenuSection from "@/Components/HomePages/Menu/MenuSection";
import StatsBannersection from "@/Components/HomePages/StatsBanner/StatsBanner";
import Testimonials from "@/Components/HomePages/Testimonials/Testimonials";
import WhyUs from "@/Components/HomePages/WhyUs/WhyUs";

export default function Home() {
  return (
   <>
   <HomePages />
   <AboutUsSect />
   <FoodCategory />
   <WhyUs />
   <StatsBannersection />
   <MenuSection />
   <Chefs />
   <Testimonials />
   <FoodBanner />
   <Blog />
   </>
  );
}

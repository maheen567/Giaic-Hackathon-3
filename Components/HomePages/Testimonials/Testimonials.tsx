import { AnimatedTestimonials } from "@/Components/ui/AnimatedTestimonials";
import { testimonialsData } from "@/Data/Testimonials";
import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-csBlack ">
      <section className="max-w-screen-xl lg:mx-auto py-[120px] px-[20px] md:px-[60px] flex flex-col items-center justify-center  text-white text-wrap ">
      <div className="text-center">
        <h1 className="font-curly text-2xl font-normal text-csYellow text-center mb-3">
          Testimonials
        </h1>
        <h2 className="font-poppins text-4xl font-bold text-center mb-2">
          <span className="text-csYellow">Wh</span>
          at Our Clients are saying
        </h2>
        <p className="text-sm md:text-base font-mono text-center mb-8 text-csGray">
          Our clients are loving every bite—see what they have to say about us!
        </p>
      </div>
      <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
    </section>
    </div>
  );
};

export default Testimonials;

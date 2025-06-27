"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
  },
};

const Review = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f172a]">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="">
            <h1 className="text-lg sm:text-xl md:text-2xl text-yellow-300 font-bold uppercase">
              Testimonials
            </h1>
            <h1 className="text-xl sm:text-3xl md:text-4xl text-white font-bold mt-1">
              Driving Change with Innovative Projects
            </h1>
          </div>
          <div className="lg:ml-auto">
            <a
              href=""
              className="relative inline-flex font-bold text-amber-50 justify-start items-center text-lg md:text-xl bg-blue-400 px-8 py-2 rounded-2xl hover:bg-red-700 uppercase"
            >
              All Reviews
            </a>
          </div>
        </div>
        <div className="mt-16">
          <Carousel
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
          >
            <ReviewCard
              reviewTitle="Great Work !"
              userName="Jassica Doe"
              userImage="/images/pic1.png"
              role="UI UX Designer"
            />
            <ReviewCard
              reviewTitle="Great Work !"
              userName="Jassica Doe"
              userImage="/images/pic1.png"
              role="UI UX Designer"
            />
            <ReviewCard
              reviewTitle="Great Work !"
              userName="Jassica Doe"
              userImage="/images/about.png"
              role="UI UX Designer"
            />
          </Carousel>
          ;
        </div>
      </div>
    </div>
  );
};

export default Review;

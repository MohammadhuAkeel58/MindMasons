import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full sm:h-[100vh] lg:h-[100vh] md:h-[100vh] h-[60vh]  bg-[#0f172a]  relative flex justify-center flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10 ">
        <div>
          <p className="sm:text-base md:text-xl text-sm font-bold text-white">
            The Top Most Wonderful Company
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mt-4 lg:text-7xl leading-[2.5rem] md:leading-[4rem]">
            Providing Software Solutions for Any
            <span className="text-amber-300"> Business</span>
          </h1>
          <a
            href="#_"
            className="relative inline-flex font-bold text-amber-50 justify-start items-center mt-5 text-lg md:text-xl bg-purple-500 px-8 py-2 rounded-2xl hover:bg-red-700"
          >
            Company
          </a>
        </div>
        <div className="mx-auto xl:block">
          <Image
            src="/images/pic1.png"
            alt="Hero Image"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

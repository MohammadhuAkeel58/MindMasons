import React from "react";
import { FaRegFileCode } from "react-icons/fa";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f172a]">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div>
          <p className="text-xl sm:text-base md:text-xl font-bold text-amber-300 uppercase ">
            Why Choose Us ?
          </p>
          <h1 className="text-2xl md-text-3xl lg:text-5xl mt-3 font-bold text-white">
            Innovations is a beast of technology to enhance future with
            endaverous
          </h1>
          <div className="mt-8 mb-8 w-full h-[1px]"></div>
          <div className="sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-6 mb-6">
            <div className="flex items-center w-16 h-16 outline-2  rounded-full justify-center flex-col text-white">
              <FaRegFileCode className="w-8 h-8 text-amber-50" />
            </div>
            <div className="flex-1 text-white">
              <h1 className="text-xl font-bold ">Free Integration</h1>
              <p className="mt-2 w-[70%]">
                Completely leverage existing top line technology
              </p>
            </div>
          </div>

          <div className="sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-6 mb-6">
            <div className="flex items-center w-16 h-16 outline-2  rounded-full justify-center flex-col text-white">
              <FaRegFileCode className="w-8 h-8 text-amber-50" />
            </div>
            <div className="flex-1 text-white">
              <h1 className="text-xl font-bold ">Free Integration</h1>
              <p className="mt-2 w-[70%]">
                Completely leverage existing top line technology
              </p>
            </div>
          </div>

          <div className="sm:flex space-y-3 sm:space-y-0 items-center gap-6 mt-6 mb-6">
            <div className="flex items-center w-16 h-16 outline-2  rounded-full justify-center flex-col text-white">
              <FaRegFileCode className="w-8 h-8 text-amber-50" />
            </div>
            <div className="flex-1 text-white">
              <h1 className="text-xl font-bold ">Free Integration</h1>
              <p className="mt-2 w-[70%]">
                Completely leverage existing top line technology
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/why_C.png"
            alt="Hero Image"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

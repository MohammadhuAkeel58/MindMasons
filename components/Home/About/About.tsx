import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f172a]">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="">
          <Image src="/images/about.png" alt="about" width={700} height={700} />
        </div>
        <div>
          <p className="text-sm md:text-xl sm:text-base font-bold text-amber-300 uppercase">
            About Us
          </p>
          <h1 className="text-2xl md-text-3xl lg:text-5xl mt-3 font-bold text-white">
            Innovations is a beast of technology to enhance future with
            endaverous
          </h1>
          <p className="mt-5 text-gray-300 ">
            {" "}
            Innovations is a beast of technology to enhance future with
            endaverous
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 mt-5">
            <div className="flex items-center gap-4">
              <Image src="/images/s1.png" alt="" width={80} height={80} />
              <h1 className="text-xl text-white font-bold">
                IT Infrastructure Management
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/images/s1.png" alt="" width={80} height={80} />
              <h1 className="text-xl text-white font-bold">
                IT Infrastructure Management
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/images/s1.png" alt="" width={80} height={80} />
              <h1 className="text-xl text-white font-bold">
                Customer Software <br /> Development
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/images/s1.png" alt="" width={80} height={80} />
              <h1 className="text-xl text-white font-bold">
                Cloud Integration <br /> Service Provider
              </h1>
            </div>
          </div>
          <div>
            <a
              href="#_"
              className="relative inline-flex font-bold text-amber-50 justify-start items-center mt-10 text-lg md:text-xl bg-gradient-to-br from-blue-900 to-purple-600 px-10 py-3 rounded-2xl hover:bg-red-700 "
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

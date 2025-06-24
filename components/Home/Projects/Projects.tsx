import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="pt-8 pb-16 bg-[#0f172a]">
      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl text-yellow-300 font-bold uppercase">
              Latest Works
            </h1>
            <h1 className="text-xl sm:text-3xl md:text-4xl text-white font-bold mt-1">
              Driving Change with Innovative Projects
            </h1>
          </div>
          <div className="lg:ml-auto">
            <a
              href=""
              className="relative inline-flex font-bold text-amber-50 justify-start items-center mt-5 text-lg md:text-xl bg-blue-400 px-8 py-2 rounded-2xl hover:bg-red-700 uppercase"
            >
              All Projects
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <div>
            <Image
              src="/images/6385a7093f7e6.jpg"
              alt="about"
              width={600}
              height={600}
              className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-4 border-white"
            />
          </div>
          <div>
            <Image
              src="/images/about.png"
              alt="about"
              width={600}
              height={600}
              className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-4 border-white"
            />
          </div>
          <div>
            <Image
              src="/images/s1.png"
              alt="about"
              width={600}
              height={600}
              className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-4 border-white"
            />
          </div>
          <div>
            <Image
              src="/images/6385a7093f7e6.jpg"
              alt="about"
              width={600}
              height={600}
              className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-4 border-white"
            />
          </div>
          <div>
            <Image
              src="/images/6385a7093f7e6.jpg"
              alt="about"
              width={600}
              height={600}
              className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-4  border-white"
            />
          </div>
          <div>
            <Image
              src="/images/6385a7093f7e6.jpg"
              alt="about"
              width={600}
              height={600}
              className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-4 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

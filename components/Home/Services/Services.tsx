import React from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "./ServicesData";

const Services = () => {
  return (
    <div id="services" className="pt-8 pb-16 bg-[#0f172a] ">
      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            {" "}
            <h1 className="text-lg sm:text-xl md:text-2xl text-yellow-300 font-bold uppercase">
              What Services We Offer
            </h1>
            <h1 className="text-xl sm:text-3xl md:text-4xl text-white font-bold mt-1">
              Provide High Quality Services to Our Clients All Industry
            </h1>
          </div>
          <div className="lg:ml-auto">
            <a
              href=""
              className="relative inline-flex font-bold text-amber-50 justify-start items-center mt-5 text-lg md:text-xl bg-purple-500 px-8 py-2 rounded-2xl hover:bg-red-700 uppercase"
            >
              All Services
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  items-stretch mt-16">
          {servicesData.map((service, index) => (
            <div key={index}>
              <ServiceCard
                image={service.image}
                title={service.title}
                description={service.description}
                url={service.url || "#"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

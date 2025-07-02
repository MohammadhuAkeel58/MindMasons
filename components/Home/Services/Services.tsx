import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { ServiceCardProps } from "./ServiceCard";
//import { servicesData } from "./ServicesData";

const Services = () => {
  const [services, setServices] = useState<ServiceCardProps[]>([]);
  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className="pt-32 pb-20 bg-[#0f172a] text-white">
      <div className="w-[90%] mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-yellow-400 text-xl md:text-2xl font-bold uppercase">
              What Services We Offer
            </h2>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
              Provide High Quality Services to Our Clients Across Industries
            </h1>
          </div>
          <div className="lg:ml-auto flex lg:justify-end mt-4 lg:mt-0">
            <a
              href="#"
              className="bg-purple-600 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-xl text-lg shadow-md transition-all"
            >
              View All Services
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              url={service.url || "#"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

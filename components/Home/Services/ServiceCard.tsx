import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
  url: string;
};

const ServiceCard = ({ image, title, description, url }: ServiceCardProps) => {
  return (
    <Link href={url} className="no-underline">
      <div className="relative p-6 h-full flex flex-col justify-between bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl hover:shadow-purple-600/30 transition-all duration-300 group hover:-translate-y-2">
        <div className="flex items-center justify-center mb-4">
          <Image
            src={image}
            alt={title}
            width={70}
            height={70}
            className="object-contain"
          />
        </div>
        <h2 className="text-xl font-semibold text-white group-hover:text-purple-300 transition">
          {title}
        </h2>
        <p className="text-sm text-gray-300 mt-2">{description}</p>
        <div className="mt-4 flex items-center gap-2 text-purple-400 group-hover:text-yellow-300 transition">
          <span className="font-medium">Learn More</span>
          <GoArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;

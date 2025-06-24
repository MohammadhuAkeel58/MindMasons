import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
  url: string;
};

const ServiceCard = ({ image, title, description, url }: ServiceCardProps) => {
  return (
    <Link href={url} className="no-underline">
      <div className="p-6 h-full flex flex-col bg-blue-950 cursor-pointer group relative rounded-xl hover:bg-gradient-to-br from-blue-900 to-purple-600 min-h-[300px] border-amber-300 border-3 shadow-[0_0_40px_0_rgba(255,183,0,0.5)]">
        <Image
          src={image}
          alt={title}
          width={90}
          height={90}
          className="object-contain "
        />
        <h1 className="font-semibold text-2xl mt-2 text-white group-hover:text-pink-300 min-h-[60px]">
          {title}
        </h1>
        <p className=" mt-2 text-xl group-hover:text-gray-100 font-bold text-amber-300">
          {description}
        </p>
        <div className="flex items-center gap-4 mt-6 font-medium text-white">
          <span>Learn More</span>
          <span>
            <GoArrowUpRight />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;

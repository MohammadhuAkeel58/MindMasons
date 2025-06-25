import React from "react";
import Image from "next/image";

const logos = [
  "/images/next.png",
  "/images/next.png",
  "/images/next.png",
  "/images/next.png",
  "/images/React.png",
  "/images/React.png",
  "/images/React.png",
];

const Carousel = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-4 bg-[#0f172a]">
      <div className="animate-scroll-left inline-flex gap-12 min-w-max">
        {[...logos, ...logos].map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Logo ${index}`}
            className="w-auto object-contain"
            width={180}
            height={180}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

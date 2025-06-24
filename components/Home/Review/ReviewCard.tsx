import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

type ReviewCardProps = {
  reviewTitle: string;
  userName: string;
  userImage: string;
  role: string;
};
const ReviewCard = ({
  reviewTitle,
  role,
  userName,
  userImage,
}: ReviewCardProps) => {
  return (
    <div className="bg-[#2A3550] p-6 rounded-lg mr-4 shadow-md">
      <h1 className="text-2xl text-white">{reviewTitle}</h1>
      <div className="mt-2 flex items-center">
        <FaStar className="text-amber-300 w-5 h-6" />
        <FaStar className="text-amber-300 w-5 h-6" />
        <FaStar className="text-amber-300 w-5 h-6" />
        <FaStar className="text-amber-300 w-5 h-6" />
        <FaStar className="text-amber-300 w-5 h-6" />
      </div>
      <p className=" mt-4 text-base md:text-lg font-medium text-white">
        Production-ready, lightweight fully customizable React carousel
        component that rocks supports multiple items and SSR Server-side
        rendering with typescript.. Latest version: 2.8.6, last …
      </p>
      <span className="block w-full h-[1px] bg-gray-300 mt-6 mb-6"></span>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src={userImage}
            alt="Image"
            width={80}
            height={80}
            className="rounded-full "
          />
          <div>
            <h1 className="text-white font-bold text-xl">{userName}</h1>
            <p className="text-sm text-white sm:text-base md:text-lg">{role}</p>
          </div>
        </div>
        <div>
          <Image src="/images/pic1.png" alt="dhd" width={80} height={80} />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

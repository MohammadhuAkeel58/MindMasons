"use client";
// import TogglerButton from "@/components/Helper/TogglerButton";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = () => {
  return (
    <div
      className="transition-all duration-200 h-[12vh] z-[100] fixed w-full bg-[#0f172a] 
"
    >
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto   ">
        <h1 className=" font-bold text-2xl hidden sm:block md:2xl text-white ">
          Mind : Masons
        </h1>
        <div className="hidden lg:flex items-center space-x-10 ">
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className=" text-xl hover:text-blue-300 transition-all duration-200 font-semibold text-white"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="items-center flex space-x-4">
          <a
            href="#_"
            className="bg-gradient-to-br from-blue-900 to-purple-600 text-white px-12 py-3 rounded-4xl hover:text-amber-100 transition-all duration-200 font-bold"
          >
            Sign In
          </a>
          {/* <TogglerButton /> */}
          {/* theme toggle */}
          {/* Hamburger */}
          <HiBars3BottomRight className="text-blue-50 text-3xl  cursor-pointer hover:text-blue-300 transition-all duration-200 w-8 h-8 lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Nav;

"use client";
// import TogglerButton from "@/components/Helper/TogglerButton";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
type Props = {
  openNav: () => void;
};
const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`transition-all ${
        navBg ? "shadow-md bg-blue-500" : "fixed"
      } duration-200 h-[12vh] z-[100] fixed w-full bg-[#0f172a]`}
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
            href="#"
            className="px-5 py-2.5 relative rounded group font-medium text-white inline-block"
          >
            <span
              className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm
    bg-gradient-to-br from-purple-600 to-blue-500"
            ></span>
            <span
              className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter
    group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"
            ></span>
            <span
              className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded
    shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600
    to-blue-500"
            ></span>
            <span
              className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded
    bg-gradient-to-br to-purple-600 from-blue-500"
            ></span>
            <span className="relative">Create Account</span>
          </a>
          {/* <a
            href="#_"
            className="bg-gradient-to-br from-blue-900 to-purple-600 text-white px-12 py-3 rounded-4xl hover:text-amber-100 transition-all duration-200 font-bold"
          >
            Sign In
          </a>
          {/* <TogglerButton /> */}
          {/* theme toggle */}
          {/* Hamburger */}
          <HiBars3BottomRight
            onClick={openNav}
            className="text-blue-50 text-3xl  cursor-pointer hover:text-blue-300 transition-all duration-200 w-8 h-8 lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;

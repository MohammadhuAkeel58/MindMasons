import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-12 pb-12 md:pt-16 md:pb-16 bg-blue-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ml-10">
          {/* Company Info Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h1 className="font-bold text-2xl text-white mb-4">
              Mind : Masons
            </h1>
            <p className="text-white mb-6 text-sm md:text-base">
              Production-ready, lightweight fully customizable React carousel
              component that rocks supports multiple items and SSR Server-side
              rendering with typescript.. Latest version: 2.8.6, last …
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebookF />, bg: "bg-blue-400" },
                { icon: <FaInstagram />, bg: "bg-pink-400" },
                { icon: <FaLinkedinIn />, bg: "bg-white text-black" },
                { icon: <FaWhatsapp />, bg: "bg-green-400" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${item.bg}`}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {[1, 2, 3].map((col) => (
            <div key={col} className="space-y-4">
              <h1 className="text-lg font-bold text-white">
                {col === 1 ? "Company" : col === 2 ? "Resources" : "Legal"}
              </h1>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "News and Press",
                  "Our Customers",
                  "Leadership",
                  "Careers",
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-white hover:text-blue-300 transition-colors duration-200 text-sm md:text-base"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

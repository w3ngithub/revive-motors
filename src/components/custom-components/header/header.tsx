"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import headerData from "../../../json/header.json";

const Header = () => {
  const { title, navItems, divider, contactInfo } = headerData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // px-4 py-4

  return (
    <nav className="container mx-auto  ">
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="text-customColor-primary text-h1 tracking-tighter font-bold">
          {title}
        </h1>
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-customColor-primary"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto lg:items-center mt-4 lg:mt-0`}
        >
          <ul className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.href} className="w-full lg:w-auto">
                <Link
                  href={item.href}
                  className="block p-2 text-b2 hover:text-customColor-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:block text-customColor-grey text-4xl font-thin mx-4">
            {divider}
          </div>
          <div className="flex flex-row justify-center items-center gap-4 mt-4 lg:mt-0">
            <div>
              <Image
                src={contactInfo.iconSrc}
                width={40}
                height={40}
                className="h-[40px] w-[40px]"
                alt={contactInfo.altText}
              />
            </div>
            <div className="font-medium">
              <p className="text-caption">{contactInfo.phoneDetails.caption}</p>
              <p className="text-b1">{contactInfo.phoneDetails.phoneNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

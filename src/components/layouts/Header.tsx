"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import headerData from "../../json/header.json";

const Header = () => {
  const { title, navItems, divider, contactInfo } = headerData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="container mx-auto">
      <div className="flex flex-wrap items-center justify-between">
        <Link href="/revive-motors">
          <h1 className="text-h1 font-bold tracking-tighter text-customColor-primary cursor-pointer">
            {title}
          </h1>
        </Link>
        <button
          onClick={toggleMenu}
          className="p-2 text-customColor-primary lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } mt-4 w-full lg:mt-0 lg:flex lg:w-auto lg:items-center`}
        >
          <ul className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8">
            {navItems.map((item) => (
              <li key={item.href} className="w-full lg:w-auto">
                <Link
                  href={item.href}
                  className="block p-2 text-b2 transition-colors duration-200 hover:text-customColor-primary"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mx-4 hidden text-4xl font-thin text-customColor-grey lg:block">
            {divider}
          </div>
          <div className="mt-4 flex flex-row items-center justify-center gap-4 lg:mt-0">
            <div>
              <Image
                src={`${
                  process.env.NEXT_PUBLIC_BASE_PATH + contactInfo.iconSrc
                }`}
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

import Image from "next/image";
import Link from "next/link";
import React from "react";
import headerData from "../../../json/header.json";

const Header = () => {
  const { title, navItems, divider, contactInfo } = headerData;
  return (
    <nav className="container border border-red-500">
      <div className=" border-2 border-black">
        <div className="flex flex-row justify-between items-center border border-red-500 gap-[132px]">
          <h1 className="text-customColor-primary text-h1 border border-red-500 tracking-tighter font-bold  block">
            {title}
          </h1>
          <ul className="hidden lg:flex flex-row justify-center items-center gap-4  h-full border border-red-500">
            {navItems.map((item) => {
              return (
                <li className="p-2 text-b2 hover:bg-red">
                  {" "}
                  <Link key={item.href} href={item.href}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <li className="p-2 text-customColor-grey text-4xl font-thin">
              {divider}
            </li>
            <div className="flex flex-row justify-center align-center gap-4 hover:cursor-pointer">
              <div className="">
                <Image
                  // src="/project/phone.svg"
                  src={contactInfo.iconSrc}
                  width={40}
                  height={40}
                  className="h-[40px] w-[40px]"
                  alt={contactInfo.altText}
                />
              </div>
              <div className="font-medium">
                <p className="text-caption">
                  {contactInfo.phoneDetails.caption}
                </p>
                <p className="text-b1">
                  {contactInfo.phoneDetails.phoneNumber}
                </p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

/* <img
                  src="/project/phone.svg"
                  alt="Phone Icon"
                  className="h-[40px] w-[40px]"
                /> */

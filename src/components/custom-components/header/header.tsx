import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="container border border-red-500">
      <div className=" border-2 border-black">
        <div className="flex flex-row justify-between items-center border border-red-500 gap-[132px]">
          <h1 className="text-customColor-primary text-h1 border border-red-500 tracking-tighter font-bold  block">
            Revive Motors
          </h1>
          <ul className="hidden lg:flex flex-row justify-center items-center gap-4  h-full border border-red-500">
            <Link href="/home">
              {" "}
              <li className="p-2 text-b2 hover:bg-red">Home</li>
            </Link>
            <Link href="/home">
              {" "}
              <li className="p-2 text-b2">About us</li>
            </Link>
            <Link href="/home">
              {" "}
              <li className="p-2 text-b2">Services</li>
            </Link>
            <Link href="/home">
              {" "}
              <li className="p-2 text-b2">Blog</li>
            </Link>
            <Link href="/home">
              {" "}
              <li className="p-2 text-b2">Contact</li>
            </Link>
            <li className="p-2 text-customColor-grey text-4xl font-thin">|</li>
            <div className="flex flex-row justify-center align-center gap-4 hover:cursor-pointer">
              <div className="">
                <Image
                  src="/project/phone.svg"
                  width={40}
                  height={40}
                  className="h-[40px] w-[40px]"
                  alt="Phone Icon"
                />
              </div>
              <div className="font-medium">
                <p className="text-caption">Road Assistance</p>
                <p className="text-b1">1800 265 24 52</p>
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

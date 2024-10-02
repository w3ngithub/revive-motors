import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import footerData from "../../json/footer.json";

const Footer = () => {
  const { getInTouch, contactInfo, navigation, copyright } = footerData;
  return (
    <footer className="bg-customColor-black text-white py-12 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0  flex flex-col gap-6">
          <h2 className="text-h3 font-bold mb-4 max-2xl:max-w-[400px] 2xl:max-w-[624px]  ">
            {getInTouch.heading}
          </h2>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-300">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="space-y-4 flex flex-col gap-5">
          {Object.values(contactInfo).map((item, index) => (
            <div key={index}>
              <p className="text-b1 mb-1 text-customColor-grey">{item.title}</p>
              <p className="text-t2 font-semibold max-sm:text-b1">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800  max-md:flex-col">
        <div className="flex-1">
          <ul className="flex flex-row justify-center items-center gap-8 p-4 flex-wrap ">
            {navigation.map((navItem, index) => (
              <li key={index}>
                <Link href={navItem.href} className="hover:text-gray-300">
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-right text-sm text-gray-500 ">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

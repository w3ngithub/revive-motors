import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-customColor-black text-white py-12 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0  flex flex-col gap-6">
          <h2 className="text-h3 font-bold mb-4">
            Get in touch with us
            <br />
            for your service
          </h2>
          <div className="flex space-x-4">
            <Facebook className="w-6 h-6" />
            <Twitter className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
            <Linkedin className="w-6 h-6" />
          </div>
        </div>
        <div className="space-y-4 flex flex-col gap-5">
          <div>
            <h3 className="text-b1 mb-1 text-customColor-grey">
              Help line Number
            </h3>
            <p className="text-t2 font-semibold">1800 265 24 52</p>
          </div>
          <div>
            <h3 className="text-b1 mb-1 text-customColor-grey">Address</h3>
            <p className="text-t2 font-semibold">
              NH 234 Public Square San Francisco 65368
            </p>
          </div>
          <div>
            <h3 className="text-b1 mb-1 text-customColor-grey">We are open</h3>
            <p className="text-t2 font-semibold">
              Monday to Friday 9:00 AM to 10:00 AM
            </p>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-end items-center ">
        <nav className="mb-4 md:mb-0 border">
          <ul className="flex space-x-6">
            <li>
              <Link href="#" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                About us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
        <p className="text-right text-sm text-gray-500">
          © Copyright Revive Motors 2024
        </p>
      </div> */}
      <div className="flex flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800  max-md:flex-col">
        <div className="flex-1">
          <ul className="flex flex-row justify-center items-center gap-8 p-4 ">
            <li>
              <Link href="#" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                About us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-right text-sm text-gray-500">
            © Copyright Revive Motors 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import footerData from "../../json/footer.json";

const Footer = () => {
  const { getInTouch, contactInfo, navigation, copyright } = footerData;
  return (
    <footer className="bg-customColor-black px-4 py-12 text-white md:px-8">
      <div className="container mx-auto flex flex-col justify-between md:flex-row">
        <div className="mb-8 flex flex-col gap-6 md:mb-0">
          <h2 className="mb-4 text-h3 font-bold max-2xl:max-w-[400px] 2xl:max-w-[624px]">
            {getInTouch.heading}
          </h2>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-300">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 space-y-4">
          {Object.values(contactInfo).map((item, index) => (
            <div key={index}>
              <p className="mb-1 text-b1 text-customColor-grey">{item.title}</p>
              <p className="text-t2 font-semibold max-sm:text-b1">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-12 mt-12 border-t border-gray-800 max-md:grid-cols-1 ">
        <div className="md:col-span-8 p-4 mt-6">
          <ul className="flex flex-row justify-end gap-10 text-b2 max-md:justify-center max-sm:flex-col 2xl:mr-11 ">
            {navigation.map((navItem, index) => (
              <li key={index}>
                <Link href={navItem.href} className="hover:text-gray-300">
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="md:col-span-4 text-center text-sm text-customColor-grey p-4 mt-6">
          {copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Button } from "../../ui/button";
import Image from "next/image";
import heroData from "../../../json/hero.json";
import { Heading } from "lucide-react";

const Hero = () => {
  const { heading, button, openHours, heroImage } = heroData;

  return (
    <section className="max-sm:mt-7 ">
      <div className="container grid sm:grid-cols-2 ">
        <div className="flex flex-col justify-center items-start  gap-11 max-sm:gap-5">
          <h1 className="text-h1 font-extrabold max-w-[624px] leading-tight">
            {heading}
          </h1>
          <Button className="bg-customColor-primary text-b1 text-customColor-white max-w-[203px] max-h-[64px] p-7 px-9 rounded-xl max-sm:p-2 max-sm:px-2 max-sm:text-caption ">
            {button.text}
          </Button>
          <div className="flex flex-row justify-center align-center gap-4 hover:cursor-pointer">
            <div className="">
              <Image
                src={openHours.iconSrc}
                width={40}
                height={40}
                // className="h-[30.94px] w-[30.94px]"
                alt={openHours.altText}
              />
            </div>
            <div>
              <p className="text-caption text-customColor-grey">
                {openHours.caption}
              </p>
              <p className="text-b1 font-semibold">{openHours.schedule}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end ">
         
          <Image
            src={heroImage.src}
            alt={heroImage.altText}
            width={605}
            height={632}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

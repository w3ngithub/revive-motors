import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const ServiceHero = () => {
  return (
    // aboutHero
    <section className="container  2xl:min-h-[550px] my-5 border border-red-500">
      <div className="grid grid-cols-1  sm:grid-cols-12 2xl:min-h-[550px]">
        <div className=" relative sm:col-span-5 h-[300px] sm:h-auto">
          {" "}
          <Image
            src="/project/aboutHero.png"
            alt="Car Pic"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="col-span-7 2xl:min-h-[550px] flex justify-center">
          <div className="  flex flex-col justify-center items-start  gap-11 w-full bg-customColor-black  p-10">
            <h1 className="text-h1 font-semibold text-customColor-lightGrey  leading-tight">
              About us
            </h1>
            <p className="text-b1 text-customColor-lightGrey max-w-[624px] ">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw Through True Rich Attended does
            </p>
            <Button className="bg-customColor-primary text-b1 text-customColor-lightGrey max-w-[177px] max-h-[64px] p-7 px-9 rounded-xl hover:bg-customColor-primary">
              Book a service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;

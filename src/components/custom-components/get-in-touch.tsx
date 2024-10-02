import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const GetInTouch = () => {
  // large-car
  //clips
  return (
    <section className="min-h-[100vh] max-w-[100vw]">
      <div className="grid grid-cols-12 border-2 border-slate-950 w-full h-[500px]">
        <div className="relative col-span-7 border-2 border-yellow-500">
          <div className="block  w-[976px] h-[502px] max-lg:hidden">
            <Image
              src="/project/large-car.png"
              alt="Car Pic"
              // width={976}
              // height={502}
              layout="fill" // This makes the image fill the container
              objectFit="cover" // This ensures the image scales proportionally
            />
          </div>
          <div className="bg-customColor-primary col-span-4 h-full w-[70%] absolute right-0 top-0 flex justify-center max-lg:w-[100%] max-lg:pl-5">
            <div className="flex flex-col justify-center items-start gap-11 bg-customColor-primary ">
              <p className="text-h3 text-customColor-white font-bold max-w-[569px] leading-tight max-lg:w-full">
                Get in touch with us for your service related query
              </p>
              <Button className="bg-customColor-black text-b1 text-customColor-white max-w-[203px] max-h-[64px] p-7 px-9 rounded-xl">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        <div className="relative col-span-5 border-2 border-green-500 max-lg:bg-customColor-primary">
          {" "}
          <div className="block h-full w-full max-lg:hidden">
            <Image
              src="/project/clips.png"
              alt="Car Pic"
              //   width={944}
              //   height={502}
              layout="fill" // This makes the image fill the container
              objectFit="cover" // This ensures the image scales proportionally
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

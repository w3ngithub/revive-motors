import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Middle from "./middle";

const Banner = () => {
  // min-h-[100vh]
  // max-lg
  return (
    <section className=" max-w-[100vw] ">
      <div className="grid grid-cols-12  w-full max-h-[502px] max-lg:grid-cols-2">
        {/* Left Image */}
        <div className="block col-span-2 relative max-lg:hidden">
          <Image
            src="/project/large-carss.png"
            alt="Car Pic"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Middle Component */}
        <div className="block m-0 p-0  justify-center items-center col-span-5  max-lg:col-span-1 ">
          <Middle />
        </div>

        {/* Right Image */}
        <div className="col-span-5 relative  max-lg:col-span-1">
          <Image
            src="/project/clips.png"
            alt="Car Pic"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

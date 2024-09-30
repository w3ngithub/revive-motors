import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Middle from "./middle";

const Banner = () => {
  return (
    <section className="min-h-[100vh] max-w-[100vw] border border-red-500">
      <div className="grid grid-cols-12 border-2 border-slate-950 w-full max-h-[502px]">
        {/* Left Image */}
        <div className="col-span-2 border-4 border-green-500 relative">
          <Image
            src="/project/large-carss.png"
            alt="Car Pic"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Middle Component */}
        <div className="block m-0 p-0  justify-center items-center col-span-5 border-4 border-blue-500">
          <Middle />
        </div>

        {/* Right Image */}
        <div className="col-span-5 border-4 border-purple-500 relative">
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

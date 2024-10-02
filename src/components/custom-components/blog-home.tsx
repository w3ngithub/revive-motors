import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const BlogHome = () => {
  return (
    <section className=" 2xl:min-h-[550px] my-5">
      <div className="grid grid-cols-1  sm:grid-cols-12 2xl:min-h-[624px]">
        <div className=" relative sm:col-span-5 h-[300px] sm:h-auto">
          {" "}
          <Image
            src="/project/blog-hero.png"
            alt="Car Pic"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full"
          />
          {/* Centered background black */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="flex justify-center items-center text-customColor-white text-h1 font-extrabold bg-customColor-black w-full h-full opacity-70"></h1>
          </div>
          {/* Centered Text */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="flex justify-center items-center text-customColor-white text-h1 font-extrabold  w-full h-full">
              Our Blog
            </h1>
          </div>
        </div>
        <div className="col-span-7 2xl:min-h-[550px] flex justify-center">
          <div className="  flex flex-col justify-center items-start  gap-11 w-full bg-customColor-black  p-10">
            <p className="text-b2 text-customColor-primary uppercase tracking-[0.4em] ">
              TRENDING
            </p>
            <h4 className="text-h4 font-bold text-customColor-lightGrey  leading-tight max-w-[582px]     ">
              Diagnose Car Problems If You Don’t Know Much About Cars
            </h4>
            <p className="text-b1 font-semibold text-customColor-lightGrey max-w-[624px]    ">
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes, We
              provide a full range of front end mechanical.
            </p>
            <div className="flex flex-row items-center justify-center gap-8">
              <Button className="bg-customColor-primary text-b1 text-customColor-lightGrey max-w-[177px] max-h-[64px] p-7 px-9 rounded-xl hover:bg-customColor-primary">
                Read more
              </Button>
              <p className="text-b1 font-semibold text-customColor-grey">
                Posted on October 6th 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHome;

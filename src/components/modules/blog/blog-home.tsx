import Image from "next/image";
import React from "react";
import { Button } from "../../ui/button";

const BlogHome = () => {
  return (
    <section className="mt-5 2xl:min-h-[550px]">
      <div className="grid grid-cols-1 sm:grid-cols-12 2xl:min-h-[624px]">
        <div className="relative h-[300px] sm:col-span-5 sm:h-auto">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-hero.png`}
            alt="Car Pic"
            fill
            sizes="(max-width: 640px) 100vw, 41.66vw"
            className="absolute inset-0 w-full h-full object-cover"
            // width={500}
            // height={100}
          />
          {/* Centered background black */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="flex h-full w-full items-center justify-center bg-customColor-black text-h1 font-extrabold text-customColor-white opacity-70"></h1>
          </div>
          {/* Centered Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="flex h-full w-full items-center justify-center text-h1 font-extrabold text-customColor-white">
              Our Blog
            </h1>
          </div>
        </div>
        <div className="col-span-7 flex justify-center 2xl:min-h-[550px]">
          <div className="flex w-full flex-col items-start justify-center gap-11 bg-customColor-black p-10 max-2xl:gap-5">
            <p className="text-b2 uppercase tracking-[0.4em] text-customColor-primary">
              TRENDING
            </p>
            <h4 className="max-w-[582px] text-h4 font-bold leading-tight text-customColor-lightGrey">
              Diagnose Car Problems If You Don’t Know Much About Cars
            </h4>
            <p className="max-w-[624px] text-b1 font-semibold text-customColor-lightGrey">
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes, We
              provide a full range of front end mechanical.
            </p>
            <div className="flex flex-row items-center justify-center gap-8">
              <Button className="max-h-[64px] max-w-[177px] rounded-xl bg-customColor-primary p-7 px-9 text-b1 text-customColor-lightGrey hover:bg-customColor-primary">
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

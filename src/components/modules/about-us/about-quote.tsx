import React from "react";
import AboutQuoteFirst from "./about-quote-first";
import Image from "next/image";

const AboutQuote = () => {
  // <AboutQuoteFirst />
  //   about-quote-car
  //   min-h-[100vh]
  // max-2xl:display ruby
  return (
    <section className="border border-red-500  w-full  bg-customColor-white   flex flex-row justify-center items-center ">
      <div className="container border border-green-500 grid grid-cols-1 lg:grid-cols-12 2xl:min-h-[773px] my-10  ">
        <div className="col-span-7 border border-red-500  ">
          {" "}
          <AboutQuoteFirst />
        </div>
        <div className="col-span-5  h-[100%] border border-red-500  ">
          <div className="col-span-5 relative h-[773px] max-sm:mt-4">
            <Image
              src="/images/about-quote-car.png"
              alt="Car Pic"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutQuote;

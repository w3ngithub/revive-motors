import React from "react";
import AboutQuoteFirst from "./about-quote-first";
import Image from "next/image";

const AboutQuote = () => {
  // <AboutQuoteFirst />
  //   about-quote-car
  //   min-h-[100vh]
  // max-2xl:display ruby
  return (
    <section className="  w-full  bg-customColor-white   flex flex-row justify-center items-center ">
      <div className="container grid grid-cols-1 lg:grid-cols-12 2xl:min-h-[773px] my-10">
        <div className="col-span-7 ">
          {" "}
          <AboutQuoteFirst />
        </div>
        <div className="col-span-5  h-[100%] ">
          <div className="col-span-5 relative h-[773px]">
            <Image
              src="/project/about-quote-car.png"
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

import React from "react";
import AboutQuoteFirst from "./about-quote-first";
import Image from "next/image";

const AboutQuote = () => {
  // <AboutQuoteFirst />
  //   about-quote-car
  //   min-h-[100vh]
  return (
    <section className="  w-full  bg-customColor- border border-red-500 flex flex-row justify-center items-center ">
      <div className="container grid grid-cols-1 lg:grid-cols-12 2xl:min-h-[773px] my-10">
        <div className="col-span-7  border border-red-500">
          {" "}
          <AboutQuoteFirst />
        </div>
        <div className="col-span-5  border border-red-500 h-[100%] ">
          <div className="sm:col-span-5 ">
            <Image
              src="/project/about-quote-car.png"
              alt="Car Pic"
              //   layout="fill"
              //   objectFit="cover"
              className=""
              height={773}
              width={573}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutQuote;

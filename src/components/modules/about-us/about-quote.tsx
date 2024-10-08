import Image from "next/image";
import AboutQuoteFirst from "./about-quote-first";

const AboutQuote = () => {
  return (
    <section className="flex w-full flex-row items-center justify-center bg-customColor-white">
      <div className="container my-10 grid grid-cols-1 lg:grid-cols-12 2xl:min-h-[773px]">
        <div className="col-span-7">
          <AboutQuoteFirst />
        </div>
        <div className="col-span-5 h-[100%]">
          <div className="relative col-span-5 h-[773px] max-sm:mt-4">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/about-quote-car.png`}
              alt="Car Pic"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 773px"
              className=" object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutQuote;

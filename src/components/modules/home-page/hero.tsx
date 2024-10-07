import Image from "next/image";
import heroData from "../../../json/hero.json";
import { Button } from "../../ui/button";

const Hero = () => {
  const { heading, button, openHours, heroImage } = heroData;

  return (
    <section className="max-sm:mt-7">
      <div className="container grid sm:grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-11 max-sm:gap-5">
          <h1 className="max-w-[624px] text-h1 font-extrabold leading-tight">
            {heading}
          </h1>
          <Button className="max-h-[64px] max-w-[203px] rounded-xl bg-customColor-primary p-7 px-9 text-b1 text-customColor-white max-sm:p-2 max-sm:px-2 max-sm:text-caption">
            {button.text}
          </Button>
          <div className="align-center flex flex-row justify-center gap-4 hover:cursor-pointer">
            <div className="">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH + openHours.iconSrc}`}
                width={40}
                height={40}
                alt={openHours.altText}
              />
            </div>
            <div>
              <p className="text-caption text-customColor-grey">
                {openHours.caption}
              </p>
              <p className="text-b1 font-semibold">{openHours.schedule}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH + heroImage.src}`}
            alt={heroImage.altText}
            width={605}
            height={632}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

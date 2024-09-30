"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import cardData from "../../json/maintenance.json";

const Maintenance = () => {
  const { smallHeading, largeHeading, cards } = cardData;

  return (
    <div className="bg-customColor-lightGrey">
      <section className="container flex flex-row justify-center min-h-[100vh] max-w-[100vw] bg-customColor-lightGrey ">
        <div className="   flex flex-col justify-center items-center gap-8 my-10">
          <p className="text-t2 font-bold text-center p-1">{smallHeading}</p>
          <h2 className="text-h2 font-extrabold max-w-[858px] leading-tight text-center">
            {largeHeading}
          </h2>
          <div className="flex flex-row justify-center items-center flex-wrap gap-2 w-[80%] border border-red-700 max-2xl:w-[100%]">
            {cards.map((card, index) => (
              <Card
                key={index}
                className="group flex flex-col justify-center items-center w-[316px] h-[232px] rounded-sm hover:bg-customColor-primary hover:cursor-pointer"
              >
                <CardHeader>
                  <CardTitle className="flex justify-center items-center">
                    <Image
                      src={card.image}
                      width={44}
                      height={49}
                      className="group-hover:brightness-0 group-hover:invert"
                      alt={`${card.title} Icon`}
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-t2 font-semibold group-hover:text-customColor-white">
                    {card.title}
                  </p>
                </CardContent>
              </Card>
            ))}
            <div className="w-[84%] pt-2">
              <div className="flex flex-row items-center justify-end gap-6 hover:cursor-pointer">
                <p className="text-b1 font-semibold">Know more about us</p>
                <span className="">
                  <Image
                    src="/project/right-arrow.svg"
                    width={52}
                    height={0}
                    alt="Right arrow"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maintenance;

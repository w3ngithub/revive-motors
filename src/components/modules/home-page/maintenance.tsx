"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import cardData from "../../../json/maintenance.json";

const Maintenance = () => {
  const { smallHeading, largeHeading, cards } = cardData;

  return (
    <div className="bg-customColor-lightGrey">
      <section className="container flex min-h-[100vh] max-w-[100vw] flex-row justify-center bg-customColor-lightGrey">
        <div className="my-10 flex flex-col items-center justify-center gap-8">
          <p className="p-1 text-center text-t2 font-bold">{smallHeading}</p>
          <h2 className="max-w-[858px] text-center text-h2 font-extrabold leading-tight">
            {largeHeading}
          </h2>
          <div className="flex w-[80%] flex-row flex-wrap items-center justify-center gap-2 max-2xl:w-[100%]">
            {cards.map((card, index) => (
              <Card
                key={index}
                className="group flex h-[232px] w-[316px] flex-col items-center justify-center rounded-sm hover:cursor-pointer hover:bg-customColor-primary"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH + card.image}`}
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
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/right-arrow.svg`}
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

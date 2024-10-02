import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import cardData from "../../json/maintenance.json";

const AboutCard = () => {
  const { smallHeading, largeHeading, cards } = cardData;

  return (
    <div className="bg-customColor-lightGrey">
      <section className="container flex flex-row justify-center min-h-[100vh] max-w-[100vw] bg-customColor-lightGrey border border-red-500">
        <div className="   flex flex-col justify-center items-center gap-8 my-10">
          <h2 className="text-h2 font-extrabold max-w-[858px] leading-tight text-center">
            Services we provide to our valued customers
          </h2>
          <div className="container flex flex-row justify-center items-center flex-wrap gap-2 w-[100%%] max-2xl:w-[100%] border border-red-500">
            <Card className="group flex flex-col justify-center items-center w-[425px] h-[424px] rounded-none  hover:cursor-pointer">
              <CardHeader>
                <CardTitle className="flex justify-center items-center">
                  <Image
                    src="/project/about-tool-logo.svg"
                    width={64}
                    height={64}
                    className=""
                    alt="Diagnostics"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="border border-red-500 flex flex-col justify-center items-center gap-4">
                <p className="text-center text-t1 font-bold border border-red-500">
                  Convenient Service
                </p>
                <p className="text-b1 text-customColor-grey max-w-[295px] min-h-[96px] border border-red-500  ">
                  Through True Rich Attended does no end it his mother since
                  real had half every.
                </p>
              </CardContent>
            </Card>
            <Card className="group flex flex-col justify-center items-center w-[425px] h-[424px] rounded-none  hover:cursor-pointer">
              <CardHeader>
                <CardTitle className="flex justify-center items-center">
                  <Image
                    src="/project/about-tool-logo.svg"
                    width={64}
                    height={64}
                    className=""
                    alt="Diagnostics"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="border border-red-500 flex flex-col justify-center items-center gap-4">
                <p className="text-center text-t1 font-bold border border-red-500">
                  Convenient Service
                </p>
                <p className="text-b1 text-customColor-grey max-w-[295px] min-h-[96px] border border-red-500  ">
                  Through True Rich Attended does no end it his mother since
                  real had half every.
                </p>
              </CardContent>
            </Card>
            <Card className="group flex flex-col justify-center items-center w-[425px] h-[424px] rounded-none  hover:cursor-pointer">
              <CardHeader>
                <CardTitle className="flex justify-center items-center">
                  <Image
                    src="/project/about-tool-logo.svg"
                    width={64}
                    height={64}
                    className=""
                    alt="Diagnostics"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="border border-red-500 flex flex-col justify-center items-center gap-4">
                <p className="text-center text-t1 font-bold border border-red-500">
                  Convenient Service
                </p>
                <p className="text-b1 text-customColor-grey max-w-[295px] min-h-[96px] border border-red-500  ">
                  Through True Rich Attended does no end it his mother since
                  real had half every.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCard;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const AboutCard = () => {
  return (
    <div className="bg-customColor-lightGrey">
      <section className="container flex min-h-[80vh] max-w-[100vw] flex-col justify-center bg-customColor-lightGrey">
        <div className="flex flex-col items-center justify-center gap-[64px]">
          <h2 className="max-w-[858px] text-center text-h2 font-extrabold leading-tight max-2xl:mt-10">
            Services we provide to our valued customers
          </h2>
          <div className="container flex w-[100%%] flex-row flex-wrap items-center justify-center gap-2 max-2xl:w-[100%]">
            <Card className="group flex h-[424px] w-[425px] flex-col items-center justify-center rounded-none hover:cursor-pointer max-sm:w-[300px]">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/about-tool-logo.svg`}
                    width={64}
                    height={64}
                    alt="Diagnostics"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center gap-4">
                <p className="text-center text-t1 font-bold">
                  Convenient Service
                </p>
                <p className="min-h-[96px] max-w-[295px] text-b1 text-customColor-grey">
                  Through True Rich Attended does no end it his mother since
                  real had half every.
                </p>
              </CardContent>
            </Card>
            <Card className="group flex h-[424px] w-[425px] flex-col items-center justify-center rounded-none hover:cursor-pointer max-sm:w-[300px]">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/about-tool-logo.svg`}
                    width={64}
                    height={64}
                    alt="Diagnostics"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center gap-4">
                <p className="text-center text-t1 font-bold">
                  Convenient Service
                </p>
                <p className="min-h-[96px] max-w-[295px] text-b1 text-customColor-grey">
                  Through True Rich Attended does no end it his mother since
                  real had half every.
                </p>
              </CardContent>
            </Card>
            <Card className="group flex h-[424px] w-[425px] flex-col items-center justify-center rounded-none hover:cursor-pointer max-sm:w-[300px]">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/about-tool-logo.svg`}
                    width={64}
                    height={64}
                    alt="Diagnostics"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center gap-4">
                <p className="text-center text-t1 font-bold">
                  Convenient Service
                </p>
                <p className="min-h-[96px] max-w-[295px] text-b1 text-customColor-grey">
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

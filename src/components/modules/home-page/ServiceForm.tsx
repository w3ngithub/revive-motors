import { Input } from "@/components/ui/Input";
import Image from "next/image";
import serviceFormData from "../../../json/serviceForm.json";
import { Button } from "../../ui/Button";
import { MoveRight } from "lucide-react";

const ServiceForm = () => {
  const { heading, services, knowMore } = serviceFormData;

  return (
    <section className="my-10 flex min-h-[100vh] w-full flex-row items-center justify-center overflow-hidden bg-customColor-steelGrey">
      <div className="container my-10 flex flex-row items-start justify-center gap-6 pt-3 max-lg:flex-col">
        <div className="flex flex-col items-start gap-[53px]">
          <h2 className="max-w-[624px] text-h2 font-extrabold leading-tight">
            {heading}
          </h2>
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="align-center flex flex-row justify-center gap-4 hover:cursor-pointer"
              >
                <div className="">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH + service.iconSrc}`}
                    width={47}
                    height={47}
                    alt={service.altText}
                  />
                </div>
                <div className="max-w-[360px]">
                  <p className="text-t2 font-semibold">{service.title}</p>
                  <p className="text-b2 text-customColor-grey">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="ml-11 flex flex-row items-center gap-6 pl-2 hover:cursor-pointer">
            <p className="text-b1 font-semibold">{knowMore.text} </p>
            <span className="w-[52px]">
              <MoveRight
                className="arrow-icon w-full"
                size={48}
                strokeWidth={1}
              />
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col gap-6">
            <h3 className="text-h3 font-bold leading-tight max-lg:mt-7 max-sm:font-extrabold">
              Get a quote for the car service
            </h3>
            <form className="flex flex-col flex-wrap gap-1">
              <Input
                className="h-[72px] w-full rounded-sm sm:w-[480px] md:w-[540px] lg:w-[624px]"
                placeholder="Enter your location"
                id="first"
              />
              <Input
                className="h-[72px] w-full sm:w-[480px] md:w-[540px] lg:w-[624px]"
                placeholder="Enter your location"
                id="second"
              />
              <Input
                className="h-[72px] w-full sm:w-[480px] md:w-[540px] lg:w-[624px]"
                placeholder="Enter your location"
                id="third"
              />
              <Input
                className="h-[72px] w-full sm:w-[480px] md:w-[540px] lg:w-[624px]"
                placeholder="Your phone number"
                id="forth"
              />
              <Button className="mt-5 max-h-[64px] max-w-[203px] rounded-xl bg-customColor-primary p-7 px-9 text-b1 text-customColor-white">
                Get your quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceForm;

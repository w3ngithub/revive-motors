import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import serviceFormData from "../../json/serviceForm.json";

const ServiceForm = () => {
  const { heading, services, knowMore, form } = serviceFormData;
  // min-w-[100vw]
  return (
    <section className=" flex flex-row items-center justify-center overflow-hidden  min-h-[100vh] w-full     bg-customColor-steelGrey my-10">
      <div className="container flex flex-row items-start justify-center     pt-3 gap-6 max-lg:flex-col my-10">
        <div className="flex flex-col items-start gap-[53px]    ">
          <h2 className="text-h2 font-extrabold max-w-[624px] leading-tight">
            {heading}
          </h2>
          {services.map((service, index) => {
            return (
              <div className="flex flex-row justify-center align-center gap-4 hover:cursor-pointer">
                <div className="">
                  <Image
                    src={service.iconSrc}
                    width={47}
                    height={47}
                    // className="h-[30.94px] w-[30.94px]"
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

          <div className="flex flex-row items-center gap-6 ml-11 pl-2 hover:cursor-pointer">
            <p className="text-b1 font-semibold">{knowMore.text} </p>
            <span>
              <Image
                src={knowMore.arrowIconSrc}
                width={52}
                height={0}
                // className="h-[30.94px] w-[30.94px]"
                alt={knowMore.altText}
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
                className="h-[72px] w-full sm:w-[480px] md:w-[540px] lg:w-[624px] rounded-sm"
                placeholder="Enter your location"
              />
              <Input
                className="h-[72px] w-full sm:w-[480px] md:w-[540px] lg:w-[624px]"
                placeholder="Enter your location"
              />{" "}
              <Input
                className="h-[72px] w-full sm:w-[480px] md:w-[540px] lg:w-[624px]"
                placeholder="Enter your location"
              />{" "}
              <Input
                className="h-[72px] w-full sm:w-[480px] md:w-[540px] lg:w-[624px]"
                placeholder="Your phone number"
              />
              <Button className="bg-customColor-primary text-b1 text-customColor-white max-w-[203px] max-h-[64px] p-7 px-9 rounded-xl mt-5">
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

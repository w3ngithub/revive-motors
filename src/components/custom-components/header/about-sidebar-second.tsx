import React from "react";
import serviceFormData from "../../../json/serviceForm.json";
import Image from "next/image";

const AboutSidebarSecond = () => {
  const { heading, services, knowMore, form } = serviceFormData;

  return (
    <div className="container flex flex-row items-start justify-center     pt-3 gap-6 max-lg:flex-col my-10 ">
      <div className="flex flex-col items-start gap-[53px]">
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
                <p className="text-b2 text-customColor-grey max-w-[266px]">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutSidebarSecond;

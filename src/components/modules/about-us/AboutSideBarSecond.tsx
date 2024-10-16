import Image from "next/image";
import serviceFormData from "../../../json/service-details.json";

const AboutSidebarSecond = () => {
  const { services } = serviceFormData;

  return (
    <div className="container my-10 flex flex-row items-start justify-center gap-6 pt-3 max-lg:flex-col">
      <div className="flex flex-col items-start gap-[53px]">
        {services.map((service, index) => {
          return (
            <div
              className="align-center flex flex-row justify-center gap-4 hover:cursor-pointer"
              key={index}
            >
              <div>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH + service.iconSrc}`}
                  width={47}
                  height={47}
                  alt={service.altText}
                  className="max-2xl:w-[87px] max-sm:w-[90px]"
                />
              </div>
              <div className="max-w-[360px]">
                <p className="text-t2 font-semibold">{service.title}</p>
                <p className="my-2 max-w-[266px] text-b2 font-semibold text-customColor-grey">
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

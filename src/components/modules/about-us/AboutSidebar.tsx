import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Image from "next/image";

const AboutSidebar = () => {
  const services = [
    { title: "Engine Repair", image: "car-doctor.svg" },
    { title: "Car wash", image: "car-doctor.svg" },
    { title: "Batteries", image: "car-doctor.svg" },
  ];

  return (
    <div className="container mb-5 flex min-h-[670px] min-w-[100%] flex-col items-center justify-center gap-3 bg-customColor-lightGrey">
      <p className="text-t1 font-bold max-2xl:text-[28px]">Other services</p>
      {services.map((service, index) => (
        <Card
          key={index}
          className="group flex h-[158px] w-full max-w-[90%] flex-col items-center justify-center rounded-sm hover:cursor-pointer hover:bg-customColor-primary"
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/${service.image}`}
                width={44}
                height={49}
                className="group-hover:brightness-0 group-hover:invert"
                alt={service.title}
              />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-t2 font-semibold group-hover:text-customColor-white">
              {service.title}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AboutSidebar;

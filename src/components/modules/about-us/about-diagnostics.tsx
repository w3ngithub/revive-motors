import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
// icon: "/images/about-diagnostics.png",
const serviceItems = [
  {
    title: "Auto Diagnostics",
    icon: "/images/car-doctor.svg",
  },
  { title: "Body Work", icon: "/images/car-doctor.svg" },
  { title: "Batteries", icon: "/images/car-doctor.svg" },
  { title: "Car wash", icon: "/images/car-doctor.svg" },
  { title: "AC Repair", icon: "/images/car-doctor.svg" },
  { title: "Engine Repair", icon: "/images/car-doctor.svg" },
];

export default function AboutDiagnostics() {
  return (
    <section className="bg-white py-12">
      <div className="container ">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <Card className="h-full">
              <CardContent className="p-0">
                <Image
                  src="/images/about-diagnostics.png"
                  alt="Auto Diagnostics"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-h3 font-bold mb-4">Auto Diagnostics</h3>
                  <p className="text-customColor-grey mb-4 text-t2 font-semibold">
                    Through True Rich Attended does no end it his mother since
                    favorable real had half every him case in packages enquire
                    we up ecstatic. Through True Rich Attended does no end it
                    his mother.
                  </p>
                  <a
                    href="#"
                    className="text-b1 font-semibold flex items-center"
                  >
                    See service details
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4  h-full">
              {serviceItems.map((item, index) => (
                <Card
                  key={index}
                  className="group hover:bg-customColor-primary transition-colors rounded-none"
                >
                  <CardContent className="p-4 flex flex-col items-center justify-center h-full rounded-none min-h-full">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={44}
                      height={44}
                      className="mb-4 group-hover:brightness-0 group-hover:invert"
                    />
                    <p className="text-t2 text-center font-semibold group-hover:text-white">
                      {item.title}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

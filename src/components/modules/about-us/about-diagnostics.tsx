import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
// icon: "/images/about-diagnostics.png",
const serviceItems = [
  {
    title: "Auto Diagnostics",
    icon: "/images/car-doctor.svg",
    color: "bg-orange-500",
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
      <div className="container mx-auto px-4">
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
                  <h2 className="text-2xl font-bold mb-4">Auto Diagnostics</h2>
                  <p className="text-gray-600 mb-4">
                    Through True Rich Attended does no end it his mother since
                    favorable real had half every him case in packages enquire
                    we up ecstatic. Through True Rich Attended does no end it
                    his mother.
                  </p>
                  <a
                    href="#"
                    className="text-orange-500 font-semibold flex items-center"
                  >
                    See service details
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {serviceItems.map((item, index) => (
                <Card
                  key={index}
                  className={`group hover:bg-orange-500 transition-colors ${
                    item.color || ""
                  }`}
                >
                  <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={44}
                      height={44}
                      className="mb-4 group-hover:filter group-hover:invert"
                    />
                    <h3 className="text-center font-semibold group-hover:text-white">
                      {item.title}
                    </h3>
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

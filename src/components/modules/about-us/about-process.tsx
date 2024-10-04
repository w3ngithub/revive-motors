import Image from "next/image";
import React from "react";
import { Button } from "../../ui/button";
import { CheckCircle2 } from "lucide-react";

const AboutProcess = () => {
  // checkmark
  return (
    <section className="container mx-auto px-4 py-16  ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16  ">
        <div>
          <h3 className="text-h3 font-bold mb-6">
            How we work and the process we follow
          </h3>
          <ul className="space-y-4">
            {[
              "Through True Rich Attended does no end it his mother since",
              "Attended does no end it his mother since real had half every",
              "Since real had half every him case in packages enquire we up ecstatic",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <Image
                  src="/images/checkmark.svg"
                  alt="logo"
                  width={48}
                  height={48}
                  className="h-6 w-6 mr-2 flex-shrink-0"
                />
                <p className="text-t2 font-semibold">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4  ">
          <Image
            src="/images/about-process-car.png"
            alt="Car service 1"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
          <Image
            src="/images/about-process-car-two.png"
            alt="Car service 2"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center  ">
        <div className="grid grid-cols-2 gap-4  ">
          <Image
            src="/images/about-process-wheel.png"
            alt="Car part 1"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
          <Image
            src="/images/about-process-lambo.png"
            alt="Car part 2"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className=" ">
          <h2 className="text-h3 font-bold mb-4">
            Diagnose Car Problems If You Don't Know Much About Cars
          </h2>
          <p className="mb-6 text-customColor-grey font-semibold">
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes
            everything from struts, shocks, and tie rod ends to ball joints,
            springs everything from struts, shocks, and tie rod ends to ball
            joints, springs.
          </p>
          <Button className="bg-customColor-primary text-b1 text-customColor-white max-w-[177px] max-h-[64px] p-7 px-9 rounded-xl">
            Book a service
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;

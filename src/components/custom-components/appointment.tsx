import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Appointment = () => {
  // min-w-[100vw]
  return (
    <section className="flex flex-row items-center justify-center min-h-[100vh] w-full overflow-hidden  border-2 border-red-700 bg-customColor-white">
      <div className="container grid sm:grid-cols-2 ">
        <div className="flex flex-col justify-center items-start border border-red-500 gap-11">
          <p className="text-h2 font-extrabold max-w-[624px] leading-tight">
            We follow a clear process to help you out.
          </p>
          <p className="text-b2 text-customColor-grey max-w-[425px] border-2 border-red-700">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire
          </p>
          <Button className="bg-customColor-primary text-b1 text-customColor-white max-w-[177px] max-h-[64px] p-7 px-9 rounded-xl">
            Learn more
          </Button>
        </div>
        <div className="flex flex-col justify-center items-start border-2 border-slate-900">
          <div className="space-y-6 relative">
            {[
              {
                number: "01",
                title: "Get a Quote",
                description:
                  "Through True Rich Attended does no end it his mother since real had half every",
              },
              {
                number: "02",
                title: "Book an Appointment",
                description:
                  "Through True Rich Attended does no end it his mother since real had half every",
              },
              {
                number: "03",
                title: "Get your Service Done",
                description:
                  "Through True Rich Attended does no end it his mother since real had half every",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 relative border border-red-950"
              >
                <div
                  className="flex-shrink-0 w-[72px] h-[72px] rounded-full
                 bg-customColor-secondary flex items-center justify-center z-10"
                >
                  <span className="text-white text-h5 font-bold">
                    {step.number}
                  </span>
                </div>
                <div className="space-y-1 flex-grow ">
                  <h3 className="text-t1  font-extrabold leading-tight mb-3 pt-3">
                    {step.title}
                  </h3>
                  <p className="text-b1 text-customColor-grey max-w-[300px]">
                    {step.description}
                  </p>
                </div>

                {index < 2 && (
                  <div className="absolute left-5 top-20 w-1px bg-purple-200 h-[40%] -z-999 mb-4 border border-[#FF6433] border-dashed" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;

// ...................

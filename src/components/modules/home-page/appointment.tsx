import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import appointmentData from "../../json/appointment.json";

const Appointment = () => {
  const { leftContent, rightContent } = appointmentData;
  // min-w-[100vw]
  ////////////////////
  // max-lg:flex-col max-md:bg-green-700
  return (
    <section className="flex flex-row items-center justify-center min-h-[100vh] w-full overflow-hidden   bg-customColor-white ">
      <div className="container grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col justify-center items-start  gap-11 ">
          <h2 className="text-h2 font-extrabold max-w-[624px] leading-tight">
            {leftContent.heading}
          </h2>
          <p className="text-b2 text-customColor-grey max-w-[425px] ">
            {leftContent.description}
          </p>
          <Button className="bg-customColor-primary text-b1 text-customColor-white max-w-[177px] max-h-[64px] p-7 px-9 rounded-xl">
            {leftContent.button}
          </Button>
        </div>
        <div className="flex flex-col justify-center items-start mt-9">
          <div className="space-y-6 relative">
            {rightContent.steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 relative ">
                <div
                  className="flex-shrink-0 w-[72px] h-[72px] rounded-full
                 bg-customColor-secondary flex items-center justify-center z-10"
                >
                  <span className="text-white text-h5 font-bold max-xl:text-t2">
                    {step.number}
                  </span>
                </div>
                <div className="space-y-1 flex-grow ">
                  <p className="text-t1  font-extrabold leading-tight mb-3 pt-3 max-xl:text-t2">
                    {step.title}
                  </p>
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

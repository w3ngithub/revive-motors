import React from "react";
import appointmentData from "../../../json/appointment.json";

const AboutQuoteFirst = () => {
  const { leftContent, rightContent } = appointmentData;

  return (
    <div className="container">
      <div>
        <h3 className="text-h3 font-bold text-customColor-black  max-w-[614px]    leading-tight">
          We Provide Expert Service and aim to have a long term with you
        </h3>
        <p className="text-t2 font-semibold text-customColor-grey max-w-[614px]    my-5 ">
          We provide a full range of front end mechanical repairs for all makes
          and models of cars, no matter
        </p>
      </div>
      <div>
        {/* ///////////////////////////// */}
        {/* /////////////////////////////// */}
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

        {/* /////////////////// */}
      </div>
    </div>
  );
};

export default AboutQuoteFirst;

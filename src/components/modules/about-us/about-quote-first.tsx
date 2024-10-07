import appointmentData from "../../../json/appointment.json";

const AboutQuoteFirst = () => {
  const { rightContent } = appointmentData;

  return (
    <div className="container max-2xl:mr-[150px]">
      <div>
        <h3 className="max-w-[614px] text-h3 font-bold leading-tight text-customColor-black">
          We Provide Expert Service and aim to have a long term with you
        </h3>
        <p className="my-5 max-w-[614px] text-t2 font-semibold text-customColor-grey">
          We provide a full range of front end mechanical repairs for all makes
          and models of cars, no matter
        </p>
      </div>
      <div>
        <div className="mt-9 flex flex-col items-start justify-center">
          <div className="relative space-y-6">
            {rightContent.steps.map((step, index) => (
              <div key={index} className="relative flex items-start space-x-4">
                <div className="z-10 flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-full bg-customColor-secondary">
                  <span className="text-h5 font-bold text-white max-xl:text-t2">
                    {step.number}
                  </span>
                </div>
                <div className="flex-grow space-y-1">
                  <p className="mb-3 pt-3 text-t1 font-extrabold leading-tight max-xl:text-t2">
                    {step.title}
                  </p>
                  <p className="max-w-[300px] text-b1 text-customColor-grey">
                    {step.description}
                  </p>
                </div>

                {index < 2 && (
                  <div className="w-1px -z-999 absolute left-5 top-20 mb-4 h-[40%] border border-dashed border-[#FF6433] bg-purple-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutQuoteFirst;

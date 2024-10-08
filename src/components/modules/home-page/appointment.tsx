import appointmentData from "../../../json/appointment.json";
import { Button } from "../../ui/Button";

const Appointment = () => {
  const { leftContent, rightContent } = appointmentData;

  return (
    <section className="flex min-h-[100vh] w-full flex-row items-center justify-center overflow-hidden bg-customColor-white 2xl:min-h-[100px] 2xl:my-11">
      <div className="container grid grid-cols-1 lg:grid-cols-2 2xl:my-11">
        <div className="flex flex-col items-start justify-center gap-11">
          <h2 className="max-w-[624px] text-h2 font-extrabold leading-tight">
            {leftContent.heading}
          </h2>
          <p className="max-w-[425px] text-b2 text-customColor-grey">
            {leftContent.description}
          </p>
          <Button className="max-h-[64px] max-w-[177px] rounded-xl bg-customColor-primary p-7 px-9 text-b1 text-customColor-white">
            {leftContent.button}
          </Button>
        </div>
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
    </section>
  );
};

export default Appointment;

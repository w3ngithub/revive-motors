import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const ContactForm = () => {
  return (
    <>
      <section className="flex flex-row items-center justify-center min-h-[100vh] w-full overflow-hidden   bg-customColor-white ">
        <div className="container grid grid-cols-1 lg:grid-cols-2    w-[1244px] h-auto lg:h-[628px] gap-11">
          <div className="   ">
            {" "}
            <div className="">
              <div className="flex flex-col gap-6">
                <h1 className="text-h1 max-w-[507px]    font-extrabold leading-tight max-lg:mt-7 max-sm:font-extrabold">
                  Get in touch with our experts
                </h1>
                <form className="flex flex-col flex-wrap gap-1   ">
                  {/* sm:w-[480px] md:w-[540px] lg:w-[624px] */}
                  <Input
                    className="h-[72px] w-full  rounded-sm bg-customColor-lightGrey text-b2 text-customColor-black font-semibold"
                    placeholder="Your Full Name"
                  />
                  <Input
                    className="h-[72px] w-full  rounded-sm bg-customColor-lightGrey text-b2 text-customColor-black font-semibold"
                    placeholder="Your Email"
                  />
                  <Input
                    className="h-[72px] w-full  rounded-sm bg-customColor-lightGrey text-b2 text-customColor-black font-semibold"
                    placeholder="Select service type"
                  />
                  <Input
                    className="h-[72px] w-full  rounded-sm bg-customColor-lightGrey text-b2 text-customColor-black font-semibold"
                    placeholder="Message"
                  />
                  <Button className="bg-customColor-primary text-b1 text-customColor-white max-w-[203px] max-h-[64px] p-7 px-9 rounded-xl mt-5">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-between gap-6 max-sm:mb-5">
            <div className="flex flex-col gap-5     ">
              <div>
                <p className="text-b2 font-semibold mb-1 text-customColor-grey">
                  Address
                </p>
                <p className="text-t2 font-semibold max-sm:text-b1 text-customColor-black">
                  NH 234 Public Square San Francisco 65368
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5      ">
              <div>
                <p className="text-b2 font-semibold mb-1 text-customColor-grey">
                  Contact Details
                </p>
                <p className="text-t2 max-w-[231px] font-semibold max-sm:text-b1 text-customColor-black">
                  1800 265 24 52 Finsweet@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5   ">
              <div>
                <p className="text-b2  font-semibold mb-1 text-customColor-grey">
                  Opening Hours
                </p>
                <p className="text-t2 font-semibold max-sm:text-b1 text-customColor-black">
                  Monday to Friday 9:00 AM to 10:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;

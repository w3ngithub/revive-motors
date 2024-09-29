import React from "react";
import { Button } from "../ui/button";

const Middle = () => {
  return (
    <section>
      <div className="bg-customColor-primary flex justify-center ">
        <div className="flex flex-col justify-center items-start gap-11 bg-customColor-primary p-10 ">
          <p className="text-h3 text-customColor-white font-bold max-w-[569px] leading-tight max-lg:w-full">
            Get in touch with us for your service related query
          </p>
          <Button className="bg-customColor-black text-b1 text-customColor-white max-w-[203px] max-h-[64px] p-7 px-9 rounded-xl">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Middle;

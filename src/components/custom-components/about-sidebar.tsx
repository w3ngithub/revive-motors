import Image from "next/image";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSidebar = () => {
  return (
    <div className="container flex flex-col justify-center items-center gap-3 mb-5 bg-customColor-lightGrey min-w-[100%] min-h-[670px]">
      <p className="text-t1 font-bold">Other services</p>
      <Card className="group flex flex-col justify-center items-center max-w-[90%] h-[158px] rounded-sm hover:bg-customColor-primary hover:cursor-pointer">
        <CardHeader>
          <CardTitle className="flex justify-center items-center">
            <Image
              src="/project/car-doctor.svg"
              width={44}
              height={49}
              className="group-hover:brightness-0 group-hover:invert"
              alt="Diagnostics"
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-t2 font-semibold group-hover:text-customColor-white">
            Auto Diagnostics
          </p>
        </CardContent>
      </Card>
      <Card className="group flex flex-col justify-center items-center max-w-[90%] h-[158px] rounded-sm hover:bg-customColor-primary hover:cursor-pointer">
        <CardHeader>
          <CardTitle className="flex justify-center items-center">
            <Image
              src="/project/car-doctor.svg"
              width={44}
              height={49}
              className="group-hover:brightness-0 group-hover:invert"
              alt="Diagnostics"
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-t2 font-semibold group-hover:text-customColor-white">
            Auto Diagnostics
          </p>
        </CardContent>
      </Card>
      <Card className="group flex flex-col justify-center items-center max-w-[90%] h-[158px] rounded-sm hover:bg-customColor-primary hover:cursor-pointer">
        <CardHeader>
          <CardTitle className="flex justify-center items-center">
            <Image
              src="/project/car-doctor.svg"
              width={44}
              height={49}
              className="group-hover:brightness-0 group-hover:invert"
              alt="Diagnostics"
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-t2 font-semibold group-hover:text-customColor-white">
            Auto Diagnostics
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutSidebar;

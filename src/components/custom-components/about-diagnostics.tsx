import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const AboutDiagnostics = () => {
  // border border-red-500
  return (
    <section className="bg-customColor-lightGrey  min-h-[100vh] max-w-[100vw]">
      <div className=" container bg-customColor-lightGrey">
        <div className="container  bg-customColor-lightGrey ">
          <div className="grid sm:grid-cols-2 border border-red-500 h-[760px]">
            <div className="border border-red-500">Card</div>
            <div className="border border-red-500">
              {/* ////////////////////////// */}

              <div className="flex flex-row justify-start items-center flex-wrap gap-2 w-[100%] max-2xl:w-[100%]">
                <Card className="group flex flex-col justify-center items-center w-[316px] h-[232px] rounded-sm hover:bg-customColor-primary hover:cursor-pointer">
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
                <Card className="group flex flex-col justify-center items-center w-[316px] h-[232px] rounded-sm hover:bg-customColor-primary hover:cursor-pointer">
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
                <Card className="group flex flex-col justify-center items-center w-[316px] h-[232px] rounded-sm hover:bg-customColor-primary hover:cursor-pointer">
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
                <Card className="group flex flex-col justify-center items-center w-[316px] h-[232px] rounded-sm hover:bg-customColor-primary hover:cursor-pointer">
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
                <Card className="group flex flex-col justify-center items-center w-[316px] h-[232px] rounded-sm hover:bg-customColor-primary hover:cursor-pointer">
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
                <Card className="group flex flex-col justify-center items-center w-[316px] h-[232px] rounded-sm hover:bg-customColor-primary hover:cursor-pointer">
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

              {/* //////////////////////// */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDiagnostics;

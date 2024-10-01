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
            <div className="border border-red-500 w-full h-full">
              {/* /////////////////////// */}

              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="/project/about-diagnostics.png"
                    alt="Auto Diagnostics"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* ///////////////////// */}
            </div>
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

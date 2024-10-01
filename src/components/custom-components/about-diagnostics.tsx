import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const AboutDiagnostics = () => {
  //
  return (
    <section className="bg-customColor-lightGrey  min-h-[100vh] max-w-[100vw] border border-red-500  flex justify-center items-center">
      <div className="   bg-customColor-lightGrey   max-2xl:my-10 border border-red-500">
        <div className="container  bg-customColor-lightGrey   ">
          <div className="grid sm:grid-cols-2 h-[760px]">
            <div className=" w-full h-full">
              {/* /////////////////////// */}
              {/* 1st part */}
              {/* max-w-sm */}
              <div className="max-w-[624px] min-h-[710px] bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 flex flex-col justify-center items-center">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="/project/about-diagnostics.png"
                    alt="Auto Diagnostics"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-h3 font-bold tracking-tight text-gray-900 dark:text-white">
                      Auto Diagnostics
                    </h5>
                  </a>
                  <p className="max-w-[500px] mb-3 text-t2 font-normal text-customColor-grey ">
                    Through True Rich Attended does no end it his mother since
                    favourable real had half every him case in packages enquire
                    we up ecstatic. Through True Rich Attended does no end it
                    his mother.
                  </p>
                  <a
                    href="#"
                    className="text-b1 font-semibold inline-flex items-center px-3 py-2 text-sm  text-center rounded-lg focus:ring-4 focus:outline-none"
                  >
                    See service details
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
            <div className="">
              {/* ////////////////////////// */}
              {/* 2nd part */}

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

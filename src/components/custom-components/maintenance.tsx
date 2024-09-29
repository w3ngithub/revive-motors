"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const Maintenance = () => {
  // min-w-[100vw]
  return (
    <section className="container flex flex-row justify-center min-h-[100vh] max-w-[100vw]   bg-customColor-lightGrey border border-red-500 ">
      <div className="flex flex-col justify-center items-center gap-8  my-10">
        <p className="text-t2 font-bold text-center p-1  ">What we Offer</p>
        <h2 className="text-h2 font-extrabold max-w-[858px]  leading-tight text-center">
          We offer full service auto repair & maintenance
        </h2>
        <div className="flex flex-row justify-center items-center flex-wrap gap-2  w-[80%]">
          <Card className=" group flex flex-col justify-center items-center   w-[316px] h-[232px] rounded-sm hover:bg-customColor-primary hover:cursor-pointer ">
            <CardHeader>
              <CardTitle className="flex justify-center items-center">
                <Image
                  src="/project/car-doctor.svg"
                  width={44}
                  height={49}
                  className="group-hover:brightness-0 group-hover:invert "
                  alt="Car Icon"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-t2 font-semibold  group-hover:text-customColor-white">
                Diagnostics
              </p>
            </CardContent>
          </Card>
          {/* ///////////////////// */}
          <Card className=" group flex flex-col justify-center items-center   w-[316px] h-[232px] rounded-sm hover:bg-customColor-primary  ">
            <CardHeader>
              <CardTitle className="flex justify-center items-center">
                <Image
                  src="/project/car-doctor.svg"
                  width={44}
                  height={49}
                  className="group-hover:brightness-0 group-hover:invert "
                  alt="Car Icon"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-t2 font-semibold  group-hover:text-customColor-white">
                Diagnostics
              </p>
            </CardContent>
          </Card>{" "}
          <Card className=" group flex flex-col justify-center items-center   w-[316px] h-[232px] rounded-sm hover:bg-customColor-primary  ">
            <CardHeader>
              <CardTitle className="flex justify-center items-center">
                <Image
                  src="/project/car-doctor.svg"
                  width={44}
                  height={49}
                  className="group-hover:brightness-0 group-hover:invert "
                  alt="Car Icon"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-t2 font-semibold  group-hover:text-customColor-white">
                Diagnostics
              </p>
            </CardContent>
          </Card>{" "}
          <Card className=" group flex flex-col justify-center items-center   w-[316px] h-[232px] rounded-sm hover:bg-customColor-primary  ">
            <CardHeader>
              <CardTitle className="flex justify-center items-center">
                <Image
                  src="/project/car-doctor.svg"
                  width={44}
                  height={49}
                  className="group-hover:brightness-0 group-hover:invert "
                  alt="Car Icon"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-t2 font-semibold  group-hover:text-customColor-white">
                Diagnostics
              </p>
            </CardContent>
          </Card>{" "}
          <Card className=" group flex flex-col justify-center items-center   w-[316px] h-[232px] rounded-sm hover:bg-customColor-primary  ">
            <CardHeader>
              <CardTitle className="flex justify-center items-center">
                <Image
                  src="/project/car-doctor.svg"
                  width={44}
                  height={49}
                  className="group-hover:brightness-0 group-hover:invert "
                  alt="Car Icon"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-t2 font-semibold  group-hover:text-customColor-white">
                Diagnostics
              </p>
            </CardContent>
          </Card>{" "}
          <Card className=" group flex flex-col justify-center items-center   w-[316px] h-[232px] rounded-sm hover:bg-customColor-primary  ">
            <CardHeader>
              <CardTitle className="flex justify-center items-center">
                <Image
                  src="/project/car-doctor.svg"
                  width={44}
                  height={49}
                  className="group-hover:brightness-0 group-hover:invert "
                  alt="Car Icon"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-t2 font-semibold  group-hover:text-customColor-white">
                Diagnostics
              </p>
            </CardContent>
          </Card>{" "}
          <Card className=" group flex flex-col justify-center items-center   w-[316px] h-[232px] rounded-sm hover:bg-customColor-primary  ">
            <CardHeader>
              <CardTitle className="flex justify-center items-center">
                <Image
                  src="/project/car-doctor.svg"
                  width={44}
                  height={49}
                  className="group-hover:brightness-0 group-hover:invert "
                  alt="Car Icon"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-t2 font-semibold  group-hover:text-customColor-white">
                Diagnostics
              </p>
            </CardContent>
          </Card>{" "}
          <Card className=" group flex flex-col justify-center items-center   w-[316px] h-[232px] rounded-sm hover:bg-customColor-primary  ">
            <CardHeader>
              <CardTitle className="flex justify-center items-center">
                <Image
                  src="/project/car-doctor.svg"
                  width={44}
                  height={49}
                  className="group-hover:brightness-0 group-hover:invert "
                  alt="Car Icon"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-t2 font-semibold  group-hover:text-customColor-white">
                Diagnostics
              </p>
            </CardContent>
          </Card>
          <div className=" w-[84%] pt-2">
            <div className=" flex flex-row items-center justify-end gap-6 hover:cursor-pointer">
              <p className="text-b1 font-semibold">Know more about us </p>
              <span className="">
                <Image
                  src="/project/right-arrow.svg"
                  width={52}
                  height={0}
                  alt="Right arrow"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maintenance;

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Brands = () => {
  return (
    <section className="bg-[#FAFAFA] min-h-[60vh] ">
      <div className="container flex flex-col items-center justify-center py-4 gap-11  ">
        <div>
          <h3 className="text-h3 font-bold mt-10 ">Brands we Serve</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-start  gap-11  w-[100%] h-full    mb-10 ">
          <div className="flex flex-row justify-center items-center gap-2 max-w-[225px] max-h-[126px] p-2 ">
            <Image
              src="/project/burger.svg"
              width={44}
              height={49}
              className="   "
              alt="Burger Icon"
            />
            <p className="text-center text-t2 font-extrabold ">logoipsum</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2 max-w-[224px] max-h-[126px] p-2 ">
            <Image
              src="/project/burger.svg"
              width={44}
              height={49}
              className="   "
              alt="Burger Icon"
            />
            <p className="text-center text-t2 font-extrabold ">logoipsum</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2      max-w-[224px] max-h-[126px] p-2">
            <Image
              src="/project/burger.svg"
              width={44}
              height={49}
              className="   "
              alt="Burger Icon"
            />
            <p className="text-center text-t2 font-extrabold      ">
              logoipsum
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2      max-w-[224px] max-h-[126px] p-2">
            <Image
              src="/project/burger.svg"
              width={44}
              height={49}
              className="   "
              alt="Burger Icon"
            />
            <p className="text-center text-t2 font-extrabold      ">
              logoipsum
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2      max-w-[224px] max-h-[126px] p-2">
            <Image
              src="/project/burger.svg"
              width={44}
              height={49}
              className="   "
              alt="Burger Icon"
            />
            <p className="text-center text-t2 font-extrabold      ">
              logoipsum
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2      max-w-[224px] max-h-[126px] p-2">
            <Image
              src="/project/burger.svg"
              width={44}
              height={49}
              className="   "
              alt="Burger Icon"
            />
            <p className="text-center text-t2 font-extrabold      ">
              logoipsum
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2      max-w-[224px] max-h-[126px] p-2">
            <Image
              src="/project/burger.svg"
              width={44}
              height={49}
              className="   "
              alt="Burger Icon"
            />
            <p className="text-center text-t2 font-extrabold      ">
              logoipsum
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2      max-w-[224px] max-h-[126px] p-2">
            <Image
              src="/project/burger.svg"
              width={44}
              height={49}
              className="   "
              alt="Burger Icon"
            />
            <p className="text-center text-t2 font-extrabold      ">
              logoipsum
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2      max-w-[224px] max-h-[126px] p-2">
            <Image
              src="/project/burger.svg"
              width={44}
              height={49}
              className="   "
              alt="Burger Icon"
            />
            <p className="text-center text-t2 font-extrabold      ">
              logoipsum
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-2      max-w-[224px] max-h-[126px] p-2">
            <Image
              src="/project/burger.svg"
              width={44}
              height={49}
              className="   "
              alt="Burger Icon"
            />
            <p className="text-center text-t2 font-extrabold      ">
              logoipsum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

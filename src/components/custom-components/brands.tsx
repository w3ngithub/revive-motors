import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import brandsData from "../../json/brands.json";

const Brands = () => {
  // heading, logo, logo title, logo src, logo alt
  const { heading, logos } = brandsData;
  return (
    <section className="bg-[#FAFAFA] min-h-[60vh] ">
      <div className="container flex flex-col items-center justify-center py-4 gap-11 ">
        <div>
          <h3 className="text-h3 font-bold mt-10 ">{heading}</h3>
        </div>

        <div className="grid   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-start  gap-11  w-[100%] h-full    mb-10  max-sm:justify-center  ">
          {logos.map((item) => {
            return (
              <div className="flex flex-row justify-center items-center gap-2 max-w-[225px] max-h-[126px] p-2 m-10 max-sm:m-2">
                <Image
                  src={item.src}
                  width={44}
                  height={49}
                  className="   "
                  alt={item.alt}
                />
                <p className="text-center text-t2 font-extrabold ">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;

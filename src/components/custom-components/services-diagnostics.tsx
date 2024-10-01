import { secureHeapUsed } from "crypto";
import React from "react";
import AboutSidebar from "./about-sidebar";
import AboutSidebarSecond from "./header/about-sidebar-second";
import Image from "next/image";

const ServicesDiagnostics = () => {
  // service-diagnostics
  return (
    <section className="container">
      <div>
        <h1 className="text-h1 text-customColor-black font-bold my-5">
          Auto Diagnostics
        </h1>

        <div className="grid sm:grid-cols-12 border border-red-500 gap-11">
          <div className="sm:col-span-3 border border-red-500">
            <AboutSidebar />
            <AboutSidebarSecond />
          </div>
          <div className="sm:col-span-9 border border-red-500 gap-6">
            <div className="relative border border-green-800 w-[full] h-[334px]">
              <Image
                src="/project/service-diagnostics.png"
                alt="Car Pic"
                layout="fill"
                objectFit="cover"
                className=""
                // width={854}
                // height={334}
              />
            </div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDiagnostics;

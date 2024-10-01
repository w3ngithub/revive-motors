import { secureHeapUsed } from "crypto";
import React from "react";
import AboutSidebar from "./about-sidebar";
import AboutSidebarSecond from "./header/about-sidebar-second";
import Image from "next/image";

const ServicesDiagnostics = () => {
  // service-diagnostics
  return (
    <section className="container mb-11 ">
      <div>
        <h1 className="text-h1 text-customColor-black font-bold my-11 ">
          Auto Diagnostics
        </h1>

        <div className="grid lg:grid-cols-12 border border-red-500 gap-11">
          <div className="lg:col-span-3 border border-red-500">
            <AboutSidebar />
            <AboutSidebarSecond />
          </div>
          <div className="lg:col-span-9 border border-red-500 space-y-10">
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
            <div className="flex flex-col gap-7">
              <h4 className="text-h4 font-bold">
                The warning lights on your dashboard are the most obvious
                starting point.
              </h4>
              <p className="text-b2 font-semibold text-customColor-grey leading-relaxed ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
                dui auctor dictum eget a elit. Pellentesque varius diam risus,
                ut condimentum lorem volutpat vel. Nam vel orci pharetra eros
                pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
                pretium interdum justo tincidunt a. Donec at congue lectus.
                Nulla facilisi. Phasellus consectetur sapien accumsan lectus
                tincidunt placerat. Etiam ornare nibh vel dui egestas, eu
                posuere metus convallis.
              </p>
              <p className="text-b2 font-semibold text-customColor-grey leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
                dui auctor dictum eget a elit. Pellentesque varius diam risus,
                ut condimentum lorem volutpat vel. Nam vel orci pharetra eros
                pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
                pretium interdum justo tincidunt a. Donec at congue lectus.
                Nulla facilisi. Phasellus consectetur sapien accumsan lectus
                tincidunt placerat. Etiam ornare nibh vel dui egestas, eu
                posuere metus convallis.
              </p>
            </div>
            {/* /// */}
            <div className="flex flex-col gap-7">
              <p className="text-t1 font-bold">
                Delaying a diagnosis and repair could lead to even bigger
                problems down the road.
              </p>
              <p className="text-b2 font-semibold text-customColor-grey leading-relaxed ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
                dui auctor dictum eget a elit. Pellentesque varius diam risus,
                ut condimentum lorem volutpat vel. Nam vel orci pharetra eros
                pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
                pretium interdum justo tincidunt a. Donec at congue lectus.
                Nulla facilisi. Phasellus consectetur sapien accumsan lectus
                tincidunt placerat. Etiam ornare nibh vel dui egestas, eu
                posuere metus convallis.
              </p>
            </div>

            {/* //// */}
            <div className="flex flex-row gap-6 justify-center min-h-[112px] border border-red-600">
              <p className="text-b1 font-bold text-customColor-grey leading-relaxed border-l-4 border-customColor-black pl-4 ">
                Ut non urna a odio condimentum dictum. Proin egestas erat a orci
                ultrices, vitae bibendum libero posuere. Quisque laoreet
                tincidunt justo. Vestibulum congue dictum libero finibus
                vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis
                mollis ante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDiagnostics;

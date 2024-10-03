import Image from "next/image";
import React from "react";

const ContactMap = () => {
  return (
    <section className="min-h-[100vh] w-full ">
      <div className="border border-red-500 ">
        <div className="border border-red-500 h-[512px] ">
          <div className="w-[1280] h-[512px]">
            <Image
              src="/images/map.png"
              alt="Map"
              //   layout="fill"
              //   objectFit="cover"
              className="w-full h-full"
              width={1280}
              height={512}
            />
          </div>
        </div>
        <div className="border border-red-500 h-[448px]">
          <div className="w-[1280] h-[512px]">
            <Image
              src="/images/blog-map-cover.png"
              alt="Map"
              //   layout="fill"
              //   objectFit="cover"
              className="w-full h-full"
              width={1280}
              height={512}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;

import Image from "next/image";
import React from "react";

const ContactMap = () => {
  return (
    <section className="border border-red-500">
      <div className="relative max-w-[100vw] min-h-[80vh]">
        {/* second image */}
        <img
          src="/images/blog-map-cover.png"
          className="absolute bottom-0 w-full h-auto"
          alt="Second Image"
          width={1920}
          height={442}
        />

        <div className="">
          {/* first image */}
          <img
            src="/images/map.png"
            className="absolute container top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            alt="First Image"
            width={1280}
            height={512}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;

{
  /* <Image
src="/images/map.png"
alt="Map"
//   layout="fill"
//   objectFit="cover"
//   className="w-full h-full"
className="absolute inset-0 w-[50%] h-[50%]"
width={1280}
height={512}
/> */
}

{
  /* <Image
src="/images/blog-map-cover.png"
alt="Map"
//   layout="fill"
//   objectFit="cover"
className="absolute inset-0 w-full h-full"
width={1280}
height={512}
/> */
}

{
  /* <section className="min-h-[100vh] w-full ">
      <div className="border border-red-500 ">
        <div className="border border-red-500 h-[512px] ">
          <div className="relative block  min-h-[512px] border-2 border-green-500"></div>
        </div>
        <div className=" relative border border-red-500 ">
          <div className="w-[1280] h-[512px]"></div>
        </div>
      </div>
    </section> */
}

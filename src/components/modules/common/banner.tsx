import Image from "next/image";
import Middle from "./Middle";

const Banner = () => {
  return (
    <section className="max-w-[100vw]">
      <div className="grid max-h-[502px] w-full grid-cols-12 max-lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative col-span-2 block max-lg:hidden">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/large-carss.png`}
            alt="Car Pic"
            className="absolute inset-0 h-full w-full object-cover"
            width={500}
            height={100}
          />
        </div>

        {/* Middle Component */}
        <div className="col-span-5 m-0 block items-center justify-center p-0 max-lg:col-span-1">
          <Middle />
        </div>

        {/* Right Image */}
        <div className="relative col-span-5 max-lg:col-span-1">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/clips.png`}
            alt="Car Pic"
            className="absolute inset-0 h-full w-full object-cover"
            width={500}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

import Image from "next/image";
import { Button } from "../../ui/button";

const ServiceHero = () => {
  return (
    <section className="container my-5 2xl:min-h-[550px]">
      <div className="grid grid-cols-1 sm:grid-cols-12 2xl:min-h-[550px]">
        <div className="relative h-[300px] sm:col-span-5 sm:h-auto">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/aboutHero.png`}
            alt="Car Pic"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 h-full w-full"
          />
        </div>
        <div className="col-span-7 flex justify-center 2xl:min-h-[550px]">
          <div className="flex w-full flex-col items-start justify-center gap-11 bg-customColor-black p-10">
            <h1 className="text-h1 font-extrabold leading-tight text-customColor-lightGrey">
              About us
            </h1>
            <p className="max-w-[624px] text-b1 text-customColor-lightGrey">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw Through True Rich Attended does
            </p>
            <Button className="max-h-[64px] max-w-[177px] rounded-xl bg-customColor-primary p-7 px-9 text-b1 text-customColor-lightGrey hover:bg-customColor-primary">
              Book a service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;

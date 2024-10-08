import Image from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";

const AboutProcess = () => {
  // checkmark
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-6 text-h3 font-bold">
            How we work and the process we follow
          </h3>
          <ul className="space-y-4">
            {[
              "Through True Rich Attended does no end it his mother since",
              "Attended does no end it his mother since real had half every",
              "Since real had half every him case in packages enquire we up ecstatic",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <Image
                  src="images/checkmark.svg"
                  alt="logo"
                  width={48}
                  height={48}
                  className="mr-2 h-6 w-6 flex-shrink-0"
                />
                <p className="text-t2 font-semibold">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/about-process-car.png`}
            alt="Car service 1"
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/about-process-car-two.png`}
            alt="Car service 2"
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/about-process-wheel.png`}
            alt="Car part 1"
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/about-process-lambo.png`}
            alt="Car part 2"
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="mb-4 text-h3 font-bold">
            Diagnose Car Problems If You Don&apos;t Know Much About Cars
          </h2>
          <p className="mb-6 font-semibold text-customColor-grey">
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes
            everything from struts, shocks, and tie rod ends to ball joints,
            springs everything from struts, shocks, and tie rod ends to ball
            joints, springs.
          </p>
          <Link href="/contact">
            <Button className="max-h-[64px] max-w-[177px] rounded-xl bg-customColor-primary p-7 px-9 text-b1 text-customColor-white">
              Book a service
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;

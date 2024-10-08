import Image from "next/image";
import AboutSidebar from "../about-us/AboutSidebar";
import AboutSidebarSecond from "@/components/layouts/header/about-sidebar-second";

const ServicesDiagnostics = () => {
  return (
    <section className="container mb-11">
      <div>
        <h1 className="my-11 text-h1 font-bold text-customColor-black">
          Auto Diagnostics
        </h1>

        <div className="grid gap-11 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <AboutSidebar />
            <AboutSidebarSecond />
          </div>
          <div className="space-y-10 lg:col-span-9">
            <div className="relative h-[334px] w-[full]">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/service-diagnostics.png`}
                alt="Car Pic"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 41.66vw"
                priority
              />
            </div>
            <div className="flex flex-col gap-7">
              <h4 className="text-h4 font-bold">
                The warning lights on your dashboard are the most obvious
                starting point.
              </h4>
              <p className="text-b2 font-semibold leading-relaxed text-customColor-grey">
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
              <p className="text-b2 font-semibold leading-relaxed text-customColor-grey">
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

            <div className="flex flex-col gap-7">
              <p className="text-t1 font-bold">
                Delaying a diagnosis and repair could lead to even bigger
                problems down the road.
              </p>
              <p className="text-b2 font-semibold leading-relaxed text-customColor-grey">
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

            <div className="flex min-h-[112px] flex-row justify-center gap-6">
              <p className="border-l-4 border-customColor-black pl-4 text-b1 font-bold leading-relaxed text-customColor-grey">
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

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
const serviceItems = [
  {
    title: "Auto Diagnostics",
    icon: "/images/car-doctor.svg",
  },
  { title: "Body Work", icon: "/images/car-doctor.svg" },
  { title: "Batteries", icon: "/images/car-doctor.svg" },
  { title: "Car wash", icon: "/images/car-doctor.svg" },
  { title: "AC Repair", icon: "/images/car-doctor.svg" },
  { title: "Engine Repair", icon: "/images/car-doctor.svg" },
];

export default function AboutDiagnostics() {
  return (
    <section className="bg-customColor-lightGrey py-12">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="lg:w-1/2">
            <Card className="h-full">
              <CardContent className="p-0">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/about-diagnostics.png`}
                  alt="Auto Diagnostics"
                  width={600}
                  height={300}
                  className="w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-4 text-h3 font-bold">Auto Diagnostics</h3>
                  <p className="mb-4 text-t2 font-semibold text-customColor-grey">
                    Through True Rich Attended does no end it his mother since
                    favorable real had half every him case in packages enquire
                    we up ecstatic. Through True Rich Attended does no end it
                    his mother.
                  </p>
                  <Link
                    href="/services/service-details"
                    className="flex items-center text-b1 font-semibold"
                  >
                    See service details
                    <svg
                      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:w-1/2">
            <div className="grid h-full grid-cols-2 gap-4">
              {serviceItems.map((item, index) => (
                <Link
                  className="block h-full"
                  href="/services/service-details"
                  key={index}
                >
                  <Card className="group h-full rounded-none transition-colors hover:bg-customColor-primary">
                    <CardContent className="flex h-full min-h-full flex-col items-center justify-center rounded-none p-4">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH + item.icon}`}
                        alt={item.title}
                        width={44}
                        height={44}
                        className="mb-4 group-hover:brightness-0 group-hover:invert"
                      />
                      <p className="text-center text-t2 font-semibold group-hover:text-white">
                        {item.title}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

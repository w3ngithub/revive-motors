import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const AboutSidebar = () => {
  return (
    <div className="container mb-5 flex min-h-[670px] min-w-[100%] flex-col items-center justify-center gap-3 bg-customColor-lightGrey">
      <p className="text-t1 font-bold max-2xl:text-[28px]">Other services</p>
      <Card className="group flex h-[158px] max-w-[90%] flex-col items-center justify-center rounded-sm hover:cursor-pointer hover:bg-customColor-primary">
        <CardHeader>
          <CardTitle className="flex items-center justify-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/car-doctor.svg`}
              width={44}
              height={49}
              className="group-hover:brightness-0 group-hover:invert"
              alt="Diagnostics"
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-t2 font-semibold group-hover:text-customColor-white">
            Auto Diagnostics
          </p>
        </CardContent>
      </Card>
      <Card className="group flex h-[158px] max-w-[90%] flex-col items-center justify-center rounded-sm hover:cursor-pointer hover:bg-customColor-primary">
        <CardHeader>
          <CardTitle className="flex items-center justify-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/car-doctor.svg`}
              width={44}
              height={49}
              className="group-hover:brightness-0 group-hover:invert"
              alt="Diagnostics"
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-t2 font-semibold group-hover:text-customColor-white">
            Auto Diagnostics
          </p>
        </CardContent>
      </Card>
      <Card className="group flex h-[158px] max-w-[90%] flex-col items-center justify-center rounded-sm hover:cursor-pointer hover:bg-customColor-primary">
        <CardHeader>
          <CardTitle className="flex items-center justify-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/car-doctor.svg`}
              width={44}
              height={49}
              className="group-hover:brightness-0 group-hover:invert"
              alt="Diagnostics"
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-t2 font-semibold group-hover:text-customColor-white">
            Auto Diagnostics
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutSidebar;

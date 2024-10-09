import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const ContactForm = () => {
  return (
    <>
      <section className="flex min-h-[100vh] w-full flex-row items-center justify-center overflow-hidden bg-customColor-white 2xl:min-h-[550px] 2xl:mt-8">
        <div className="container grid h-auto w-[1244px] grid-cols-1 gap-11 lg:h-[628px] lg:grid-cols-2 2xl:w-full 2xl:gap-[7rem]">
          <div className=" ">
            <div className="">
              <div className="flex flex-col gap-6 max-2xl:my-10">
                <h1 className="max-w-[507px] text-h1 font-extrabold leading-tight max-lg:mt-7 max-sm:font-extrabold 2xl:max-w-[520px]">
                  Get in touch with our experts
                </h1>
                <form className="flex flex-col flex-wrap gap-1">
                  <Input
                    className="h-[72px] w-full rounded-sm bg-customColor-lightGrey text-b2 font-semibold text-customColor-black"
                    placeholder="Your Full Name"
                    id="first"
                  />
                  <Input
                    className="h-[72px] w-full rounded-sm bg-customColor-lightGrey text-b2 font-semibold text-customColor-black"
                    placeholder="Your Email"
                    id="second"
                  />
                  <Input
                    className="h-[72px] w-full rounded-sm bg-customColor-lightGrey text-b2 font-semibold text-customColor-black"
                    placeholder="Select service type"
                    id="third"
                  />
                  <Input
                    className="h-[72px] w-full rounded-sm bg-customColor-lightGrey text-b2 font-semibold text-customColor-black"
                    placeholder="Message"
                    id="forth"
                  />
                  <Button className="mt-5 max-h-[64px] max-w-[203px] rounded-xl bg-customColor-primary p-7 px-9 text-b1 text-customColor-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className="items-between flex flex-col justify-center gap-6 max-sm:mb-5 2xl:mt-5">
            <div className="flex flex-col gap-5">
              <div>
                <p className="mb-1 text-b2 font-semibold text-customColor-grey">
                  Address
                </p>
                <p className="text-t2 font-semibold text-customColor-black max-sm:text-b1">
                  NH 234 Public Square San Francisco 65368
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <p className="mb-1 text-b2 font-semibold text-customColor-grey">
                  Contact Details
                </p>
                <p className="max-w-[231px] text-t2 font-semibold text-customColor-black max-sm:text-b1">
                  1800 265 24 52 Finsweet@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <p className="mb-1 text-b2 font-semibold text-customColor-grey">
                  Opening Hours
                </p>
                <p className="text-t2 font-semibold text-customColor-black max-sm:text-b1">
                  Monday to Friday 9:00 AM to 10:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;

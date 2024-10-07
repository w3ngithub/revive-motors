import { Button } from "../../ui/button";

const Middle = () => {
  return (
    <section>
      <div className="flex justify-center bg-customColor-primary">
        <div className="flex flex-col items-start justify-center gap-11 bg-customColor-primary p-10">
          <h3 className="max-w-[569px] text-h3 font-bold leading-tight text-customColor-white max-lg:w-full">
            Get in touch with us for your service related query
          </h3>
          <Button className="max-h-[64px] max-w-[203px] rounded-xl bg-customColor-black p-7 px-9 text-b1 text-customColor-white">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Middle;

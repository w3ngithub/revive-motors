import Image from "next/image";
import brandsData from "../../../json/brands.json";

const Brands = () => {
  const { heading, logos } = brandsData;
  return (
    <section className="min-h-[60vh] bg-[#FAFAFA]">
      <div className="container flex flex-col items-center justify-center gap-11 py-4">
        <div>
          <h3 className="mt-10 text-h3 font-bold">{heading}</h3>
        </div>

        <div className="mb-10 grid h-full w-[100%] justify-start gap-11 max-sm:justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {logos.map((item, index) => {
            return (
              <div
                key={index}
                className="m-10 flex max-h-[126px] max-w-[225px] flex-row items-center justify-center gap-2 p-2 max-sm:m-2"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH + item.src}`}
                  width={44}
                  height={49}
                  alt={item.alt}
                />
                <p className="text-center text-t2 font-extrabold">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;

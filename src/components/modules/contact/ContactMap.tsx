import Image from "next/image";

const ContactMap = () => {
  return (
    <section>
      <div className="relative min-h-[80vh] max-w-[100vw] max-lg:min-h-[50vh] 2xl:min-h-[80vh]">
        {/* second image */}
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-map-cover.png`}
          className="absolute bottom-0 h-auto w-full"
          alt="Second Image"
          width={1920}
          height={442}
        />

        <div>
          {/* first image */}
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/map.png`}
            className="container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
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

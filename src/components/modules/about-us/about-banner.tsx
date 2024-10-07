import Image from "next/image";

export default function AboutBanner() {
  const banners = [
    {
      title: "Serve our customers and always deliver the customer service",
      description:
        "We provide a full range of front and mechanical repairs for all makes and models of cars, no matter the cause. This includes",
      bgColor: "bg-customColor-primary",
      //   image: "/placeholder.svg?height=300&width=400",
      image: "/images/about-banner-first.png",
    },
    {
      title: "To be the world's most leader in automotive business solutions.",
      description:
        "We provide a full range of front and mechanical repairs for all makes and models of cars, no matter the cause. This includes",
      bgColor: "bg-black",
      //   image: "/placeholder.svg?height=300&width=400",
      image: "/images/about-banner-second.png",
    },
    {
      title:
        "We value the service we provide and our loyal returning customers",
      description:
        "We provide a full range of front and mechanical repairs for all makes and models of cars, no matter the cause. This includes",
      bgColor: "bg-[#7443CA]",
      //   image: "/placeholder.svg?height=300&width=400",
      image: "/images/about-banner-third.png",
    },
  ];

  return (
    <div className="w-full">
      <section className="grid grid-cols-1 sm:grid-cols-3">
        {banners.map((banner, index) => (
          <div key={index} className="relative h-[400px] overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH + banner.image}`}
              alt={`Banner ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            <div
              className={`absolute inset-0 ${banner.bgColor} z-10 bg-opacity-70`}
            />
            <div className="relative z-20 flex h-full flex-col items-center justify-center p-8 text-white">
              <h4 className="max-w-[470px] text-h4 font-bold leading-tight max-2xl:text-h5 sm:max-md:text-h6">
                {banner.title}
              </h4>

              <p className="max-2xl:leading-2 mt-4 max-w-[470px] text-t2 font-semibold leading-tight text-customColor-steelGrey max-2xl:text-b2">
                {banner.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

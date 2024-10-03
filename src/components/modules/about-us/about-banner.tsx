import React from "react";
import Image from "next/image";

export default function AboutBanner() {
  const banners = [
    {
      title: "Serve our customers",
      subtitle: "and always deliver the customer service",
      description:
        "We provide a full range of front and mechanical repairs for all makes and models of cars, no matter the cause. This includes",
      bgColor: "bg-orange-500",
      //   image: "/placeholder.svg?height=300&width=400",
      image: "/images/about-banner-first.png",
    },
    {
      title: "To be the world's most",
      subtitle: "leader in automotive business solutions.",
      description:
        "We provide a full range of front and mechanical repairs for all makes and models of cars, no matter the cause. This includes",
      bgColor: "bg-black",
      //   image: "/placeholder.svg?height=300&width=400",
      image: "/images/about-banner-first.png",
    },
    {
      title: "We value the service we",
      subtitle: "provide and our loyal returning customers",
      description:
        "We provide a full range of front and mechanical repairs for all makes and models of cars, no matter the cause. This includes",
      bgColor: "bg-purple-600",
      //   image: "/placeholder.svg?height=300&width=400",
      image: "/images/about-banner-first.png",
    },
  ];

  return (
    <div className="w-full">
      <section className="grid grid-cols-1 sm:grid-cols-3">
        {banners.map((banner, index) => (
          <div key={index} className="relative overflow-hidden h-[400px]">
            <Image
              src={banner.image}
              alt={`Banner ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            <div
              className={`absolute inset-0 ${banner.bgColor} bg-opacity-70 z-10`}
            />
            <div className="relative z-20 p-8 h-full flex flex-col justify-center text-white">
              <h2 className="text-2xl font-bold mb-2">{banner.title}</h2>
              <h3 className="text-xl font-semibold mb-4">{banner.subtitle}</h3>
              <p className="text-sm">{banner.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

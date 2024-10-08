"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Card, CardContent } from "@/components/ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import customerViewData from "../../../json/customer-view.json";

const CustomerView = () => {
  const { heading, testimonials } = customerViewData;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move the carousel by two items at a time
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1,
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1,
    );
  };

  return (
    <section className="min-h-[100vh] max-w-[100vw] bg-gray-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <h3 className="mx-auto mb-12 max-w-[909px] text-center text-h3 font-bold">
          {heading}
        </h3>
        <div className="relative w-full overflow-hidden">
          {/* Carousel content */}
          <Carousel className="w-full">
            <CarouselContent
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="w-1/2 flex-none">
                  {/* Each item takes up 50% of the carousel width */}
                  <Card className="mx-auto min-h-[376px] max-w-[616px] rounded-sm border-none bg-white p-10 shadow-none">
                    <CardContent className="flex flex-col items-start justify-center gap-6 p-0">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH + testimonial.avatar}`}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-lg font-semibold">
                            {testimonial.name}
                          </p>
                          <p className="text-sm font-semibold text-gray-500">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                      <p className="text-lg font-semibold leading-9 text-gray-700">
                        {testimonial.content}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel navigation */}

            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={handlePrevious}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-colors duration-200 hover:bg-gray-100"
                aria-label="Previous slide"
              >
                <FaArrowLeftLong className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-black shadow-md transition-colors duration-200 hover:bg-gray-800"
                aria-label="Next slide"
              >
                <FaArrowRightLong className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="mt-8 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`h-1 w-5 transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-customColor-primary"
                      : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CustomerView;

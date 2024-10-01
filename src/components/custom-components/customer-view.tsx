"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import customerViewData from "../../json/customer-view.json";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const CustomerView = () => {
  const { heading, testimonials } = customerViewData;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move the carousel by two items at a time
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1
    );
  };

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 min-h-[100vh] max-w-[100vw]">
      <div className="container mx-auto max-w-7xl">
        <h3 className="text-h3 font-bold text-center mb-12 max-w-[909px] mx-auto">
          {heading}
        </h3>
        <div className="relative overflow-hidden w-full">
          {/* Carousel content */}
          <Carousel className="w-full">
            <CarouselContent
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="flex-none w-1/2">
                  {/* Each item takes up 50% of the carousel width */}
                  <Card className="max-w-[616px] min-h-[376px] border-none shadow-none bg-white p-10 rounded-sm mx-auto">
                    <CardContent className="flex flex-col justify-center items-start p-0 gap-6">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage
                            src={testimonial.avatar}
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
            {/* border border-red-700 */}
            <div className="flex justify-end gap-3 mt-4 ">
              {/* <button
                onClick={handlePrevious}
                className="bg-gray-700 text-white px-4 py-2 rounded"
              >
                Previous
              </button> */}
              {/* <button
                onClick={handleNext}
                className="bg-gray-700 text-white px-4 py-2 rounded"
              >
                Next
              </button> */}
              <span
                onClick={handlePrevious}
                className="flex items-center justify-center px-4 py-2 rounded bg-gray-100 text-black hover:bg-black hover:text-white transition-colors duration-200"
              >
                <BsFillArrowLeftCircleFill className="h-6 w-6" />
              </span>
              <span
                onClick={handleNext}
                className="flex items-center justify-center px-4 py-2 rounded bg-gray-100 text-black hover:bg-black hover:text-white transition-colors duration-200"
              >
                <BsFillArrowRightCircleFill className="h-6 w-6" />
              </span>

              {/* <span
                onClick={handleNext}
                className="flex items-center justify-center px-4 py-2 rounded bg-gray-100  hover:transition-colors duration-200"
              >
                <BsFillArrowRightCircleFill className="h-6 w-6" />
              </span> */}

              {/* \\\\\\\\\\\\\\\\\\\\\\ */}
              {/* <span
                onClick={handleNext}
                className="flex items-center justify-center px-4 py-2 rounded hover:transition-colors duration-200 text-customColor-secondary"
              >
                <BsFillArrowRightCircleFill
                  fill="white"
                  color="black"
                  className="h-6 w-6 text-black"
                />
              </span> */}
              {/* //////////////////////////// */}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`w-5 h-1  transition-all duration-200 ${
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

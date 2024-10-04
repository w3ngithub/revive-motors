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
import customerViewData from "../../../json/customer-view.json";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

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
              <button
                onClick={handlePrevious}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center transition-colors duration-200 hover:bg-gray-100"
                aria-label="Previous slide"
              >
                {/* <ChevronLeft className="w-6 h-6" /> */}
                <FaArrowLeftLong className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-black shadow-md flex items-center justify-center transition-colors duration-200 hover:bg-gray-800"
                aria-label="Next slide"
              >
                {/* <ChevronRight className="w-6 h-6 text-white" /> */}
                <FaArrowRightLong className="w-6 h-6 text-white" />
              </button>
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

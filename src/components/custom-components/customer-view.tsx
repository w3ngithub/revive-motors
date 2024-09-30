"use client";

import React from "react";
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

const CustomerView = () => {
  const { heading, testimonials } = customerViewData;
  // border border-red-500
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 min-h-[100vh] max-w-[100vw] ">
      <div className="container mx-auto max-w-7xl">
        <h3 className="text-h3 font-bold text-center mb-12 max-w-[909px] mx-auto">
          {heading}
        </h3>
        <div className="flex flex-col justify-between w-full h-full  border border-red-500">
          {/* Carousel content */}
          <Carousel className="w-full flex-grow">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <Card className="max-w-[616px] min-h-[376px] border-none shadow-none bg-white p-10 rounded-sm">
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
            <div className="flex justify-end space-x-4 mt-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default CustomerView;

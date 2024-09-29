import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FrequentQuestion = () => {
  return (
    <section className=" flex flex-col justify-center bg-customColor-steelGrey  min-h-[100vh] max-w-[100vw] border border-red-500">
      <div className="container flex flex-col justify-center   gap-5 border border-red-500 my-10 ">
        <div>
          <h3 className="text-h3 font-bold  text-center">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <Accordion
            type="single"
            collapsible
            className="w-[70%]   bg-customColor-white p-4"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-t2 font-semibold ">
                How long should a car repair take?
              </AccordionTrigger>
              <AccordionContent className="text-b1 text-customColor-grey  max-w-[701px] ">
                I have got my car repaired at Finsweet many times before, they
                are good at what they do. Not only did they repair my car I have
                got my car repaired at Finsweet I have got my car repaired at
                Finsweet
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="w-[70%]   bg-customColor-white p-4"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-t2 font-semibold ">
                How long should a car repair take?
              </AccordionTrigger>
              <AccordionContent className="text-b1 text-customColor-grey  max-w-[701px] ">
                I have got my car repaired at Finsweet many times before, they
                are good at what they do. Not only did they repair my car I have
                got my car repaired at Finsweet I have got my car repaired at
                Finsweet
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="w-[70%]   bg-customColor-white p-4"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-t2 font-semibold ">
                How long should a car repair take?
              </AccordionTrigger>
              <AccordionContent className="text-b1 text-customColor-grey  max-w-[701px] ">
                I have got my car repaired at Finsweet many times before, they
                are good at what they do. Not only did they repair my car I have
                got my car repaired at Finsweet I have got my car repaired at
                Finsweet
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="w-[70%]   bg-customColor-white p-4"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-t2 font-semibold ">
                How long should a car repair take?
              </AccordionTrigger>
              <AccordionContent className="text-b1 text-customColor-grey  max-w-[701px] ">
                I have got my car repaired at Finsweet many times before, they
                are good at what they do. Not only did they repair my car I have
                got my car repaired at Finsweet I have got my car repaired at
                Finsweet
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="w-[70%]   bg-customColor-white p-4"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-t2 font-semibold ">
                How long should a car repair take?
              </AccordionTrigger>
              <AccordionContent className="text-b1 text-customColor-grey  max-w-[701px] ">
                I have got my car repaired at Finsweet many times before, they
                are good at what they do. Not only did they repair my car I have
                got my car repaired at Finsweet I have got my car repaired at
                Finsweet
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FrequentQuestion;

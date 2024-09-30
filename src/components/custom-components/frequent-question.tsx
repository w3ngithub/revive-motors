import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import frequentQuestionData from "../../json/frequent-question.json";

const FrequentQuestion = () => {
  const { heading, questions } = frequentQuestionData;
  return (
    <section className=" flex flex-col justify-center bg-customColor-steelGrey  min-h-[100vh] max-w-[100vw]">
      <div className="container flex flex-col justify-center gap-11  my-10 ">
        <div>
          <h3 className="text-h3 font-bold  text-center">{heading}</h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          {questions.map((item) => {
            return (
              <Accordion
                type="single"
                collapsible
                className="w-[70%]   bg-customColor-white p-4 max-sm:w-[100%]"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-t2 font-semibold ">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-b1 text-customColor-grey  max-w-[701px] ">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FrequentQuestion;

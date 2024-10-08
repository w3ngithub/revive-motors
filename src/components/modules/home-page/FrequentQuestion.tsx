import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import frequentQuestionData from "../../../json/frequent-question.json";

const FrequentQuestion = () => {
  const { heading, questions } = frequentQuestionData;
  return (
    <section className="flex min-h-[100vh] max-w-[100vw] flex-col justify-center bg-customColor-steelGrey">
      <div className="container my-10 flex flex-col justify-center gap-11">
        <div>
          <h3 className="text-center text-h3 font-bold">{heading}</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          {questions.map((item, index) => {
            return (
              <Accordion
                key={index}
                type="single"
                collapsible
                className="w-[70%] bg-customColor-white p-4 max-sm:w-[100%]"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-t2 font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-[701px] text-b1 text-customColor-grey">
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

import * as React from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Underline from "@/assets/images/underline.svg";
import Image from "next/image";

interface FAQAccordionProps {
  title?: string;
  FAQs: { question: string; answer: string }[];
  width?: string;
}

export default function FAQAccordion({ FAQs, width, title = "Genaral" }: FAQAccordionProps) {
  return (
    <div className=" mx-auto px-4 py-12">
      <div className={`mb-8 `}>
        <h2 className="text-4xl font-semibold  border-gray-200  w-full">{title}</h2>
        <Image src={Underline} alt="underline" className={`h-full w-full ${width}`} width={300} height={5} />
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {FAQs?.map((item: { question: string; answer: string }, index: number) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-none">
            <AccordionTrigger className="bg-orange-500 px-8 pt-8 data-[state=closed]:pb-8 hover:bg-orange-600 text-white rounded-tl-lg data-[state=closed]:rounded-md data-[state=open]:pb-3 rounded-tr-lg flex justify-between items-center">
              <span className="text-2xl">{item?.question}</span>
              {/* <Plus className="h-6 w-6 shrink-0" /> */}
            </AccordionTrigger>
            <AccordionContent className="pt-4 px-4 pb-2 text-white bg-orange-500 rounded-b-lg">
              <span className="text-base">{item?.answer}</span>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {FAQs?.length === 0 && <p className="text-gray-600 text-center">No FAQ items available.</p>}
    </div>
  );
}

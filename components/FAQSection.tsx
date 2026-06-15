"use client";

import { useState } from "react";

const faqs = [
  {
    answer:
      "Budget depends on project scope, deliverables, and the level of brand or design system detail required.",
    question: "What is the estimated budget?",
  },
  {
    answer:
      "Timeline depends on scope and feedback speed. Smaller design tasks are faster, while complete brand or UI work takes longer.",
    question: "What is the estimated Time?",
  },
  {
    answer:
      "You receive daily progress updates while the project is active, so every step stays clear.",
    question: "What About daily Updates?",
  },
  {
    answer:
      "I use modern design tools for branding, UI/UX, visual systems, and presentation-ready assets.",
    question: "Software you use?",
  },
  {
    answer:
      "Revision count depends on the project scope and selected deliverables before work begins.",
    question: "How many revisions you give?",
  },
  {
    answer:
      "Yes, project assets can be sourced when needed and prepared for the final design direction.",
    question: "Do you source Assets?",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full space-y-2.5 xl:space-y-3" data-node-id="1:201">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            className="overflow-hidden rounded-[8px] bg-white text-[#838383] transition-all duration-300 xl:rounded-[12px]"
            key={faq.question}
          >
            <button
              className="flex min-h-[60px] w-full items-center justify-between gap-6 px-5 py-4 text-left xl:min-h-[76px] xl:px-6 xl:py-5"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
            >
              <span className="text-[14px] font-medium leading-[20px] tracking-[-0.56px] xl:text-[18px] xl:leading-[25.2px] xl:tracking-[-0.72px]">
                {faq.question}
              </span>
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-black text-white xl:size-7">
                <span
                  className={`h-2 w-2 rotate-45 border-b-[3px] border-r-[3px] border-white transition-transform duration-300 ${
                    isOpen ? "rotate-[225deg]" : ""
                  }`}
                />
              </span>
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[13px] leading-[19px] tracking-[-0.2px] text-[#5f5f5f] xl:px-6 xl:pb-6 xl:text-[16px] xl:leading-[22px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

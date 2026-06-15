import { FAQSection } from "./FAQSection";
import { PricingCard } from "./PricingCard";

const pricing = {
  features: [
    "Logo Suits",
    "Brand Direction",
    "Typography System",
    "Color Palette",
    "Brand Guidelines",
    "Visual Identity",
    "Mockups & Presentation",
  ],
  name: "Standard Plan",
  price: "$99 - $399+",
  service: "Logo & Branding",
  summary:
    "For businesses looking for a complete and scalable brand system,investment may increase based on requirements.For businesses looking for a complete and scalable brand.",
};

export function PricingSection() {
  return (
    <section id="pricing" className="bg-black py-14 text-white sm:py-16 lg:py-10">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[119px]">
        <div className="flex w-full max-w-[1202px] flex-col items-center">
          <div className="inline-flex rounded-full bg-white/10 p-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.45),inset_0_1px_2px_rgba(255,255,255,0.32),inset_0_-3px_8px_rgba(0,0,0,0.45)] backdrop-blur-[6px]">
            <div className="rounded-full bg-white px-5 py-2.5">
              <p className="text-[16px] font-bold leading-none text-black">
                Pricing & FAQ&apos;S
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid w-full max-w-[1202px] grid-cols-1 items-start gap-8 lg:mt-[42px] lg:grid-cols-[410px_457px] lg:justify-between xl:grid-cols-[517px_549px]">
          <PricingCard {...pricing} />
          <FAQSection />
        </div>
      </div>
    </section>
  );
}

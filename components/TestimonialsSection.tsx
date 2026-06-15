import { TestimonialCard } from "./TestimonialCard";

const topRowTestimonials = [
  {
    name: "Rachel Thompson",
    quote:
      "Our cold outreach is now completely automated and running smoothly .The inbox tools are the intuitive and delivery rates are top notch.",
    role: "Marketing Manager",
  },
  {
    name: "Farhan Tahir",
    quote:
      "Working with Faizan was smooth from start to finish.He understood our idea quickly and made it simple for users.",
    role: "Marketing Manager",
  },
  {
    name: "Sarah Khan",
    quote:
      "He has a strong eye for detail.Every screen felt well thought out and purposeful. Our product now feels much easier to use.",
    role: "Sales Incharge",
  },
  {
    name: "Rachel Thompson",
    quote:
      "Our cold outreach is now completely automated and running smoothly .The inbox tools are the intuitive and delivery rates are top notch.",
    role: "Marketing Manager",
  },
];

const bottomRowTestimonials = [
  {
    name: "Rachel Thompson",
    quote:
      "Our cold outreach is now completely automated and running smoothly .The inbox tools are the intuitive and delivery rates are top notch.",
    role: "Marketing Manager",
  },
  {
    name: "Ayesha Noor",
    quote:
      "The whole process was very easy with him.He listened carefully and delivered exactly what we needed.The design feels natural and clean.",
    role: "Brand Manager",
  },
  {
    name: "Fatima Sheikh",
    quote:
      "I liked how he focuses on user behavior.Every design decision had a clear reason behind it. It made the product more usable.",
    role: "UX Researcher",
  },
  {
    name: "Maham Tahir",
    quote:
      "Working with Faizan was smooth from start to finish.He understood our idea quickly and made it simple for users.",
    role: "Marketing Manager",
  },
];

function SectionPill() {
  return (
    <div className="inline-flex rounded-full bg-white/10 p-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.45),inset_0_1px_2px_rgba(255,255,255,0.32),inset_0_-3px_8px_rgba(0,0,0,0.45)] backdrop-blur-[6px]">
      <div className="rounded-full bg-white px-5 py-2.5">
        <p className="text-[16px] font-bold leading-none text-black">
          Testimonials
        </p>
      </div>
    </div>
  );
}

function TestimonialRow({
  direction = "left",
  items,
}: {
  direction?: "left" | "right";
  items: typeof topRowTestimonials;
}) {
  const repeatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-2.5 ${
          direction === "left"
            ? "animate-[testimonial-left_34s_linear_infinite]"
            : "animate-[testimonial-right_34s_linear_infinite]"
        }`}
      >
        {repeatedItems.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${testimonial.role}-${index}`}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-black py-14 text-white sm:py-16 lg:py-10">
      <style>{`
        @keyframes testimonial-left {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 5px)); }
        }

        @keyframes testimonial-right {
          from { transform: translateX(calc(-50% - 5px)); }
          to { transform: translateX(0); }
        }
      `}</style>

      <div className="mb-10 flex justify-center">
        <SectionPill />
      </div>

      <div className="space-y-[17px]">
        <TestimonialRow items={topRowTestimonials} />
        <TestimonialRow direction="right" items={bottomRowTestimonials} />
      </div>
    </section>
  );
}

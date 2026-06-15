type TestimonialCardProps = {
  name: string;
  quote: string;
  role: string;
  invertedAvatar?: boolean;
};

export function TestimonialCard({
  name,
  quote,
  role,
  invertedAvatar = false,
}: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <article className="flex h-[254px] w-[423px] shrink-0 flex-col items-start rounded-[32px] bg-[#323232] px-7 py-[30px] text-white">
      <div className="flex items-center gap-5">
        <div
          className={`grid size-[52px] place-items-center rounded-full text-[20px] font-semibold ${
            invertedAvatar ? "bg-[#323232] text-white" : "bg-white text-[#323232]"
          }`}
        >
          {initials}
        </div>
        <div className="flex w-[174px] flex-col gap-1.5">
          <h3 className="text-[20px] font-semibold leading-normal">{name}</h3>
          <p className="text-[16px] leading-normal">{role}</p>
        </div>
      </div>

      <div className="mt-9 text-[22px] leading-none tracking-[1px]">★★★★★</div>
      <p className="mt-[22px] text-[16px] leading-normal">{quote}</p>
    </article>
  );
}

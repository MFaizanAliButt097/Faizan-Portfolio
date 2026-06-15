type PricingCardProps = {
  features: string[];
  name: string;
  price: string;
  service: string;
  summary: string;
};

export function PricingCard({
  features,
  name,
  price,
  service,
  summary,
}: PricingCardProps) {
  return (
    <article
      className="w-full rounded-[28px] bg-white px-2 pb-1.5 pt-6 text-black lg:w-[410px] xl:w-[517px] xl:rounded-[33px] xl:px-[10px] xl:pt-8"
      data-node-id="1:246"
    >
      <h3 className="text-[20px] font-semibold leading-none tracking-[-0.15px] xl:text-[24px] xl:leading-[15px]">
        {name}
      </h3>

      <div className="mt-2.5 rounded-[24px] bg-[#323232] px-2.5 pb-3 pt-2.5 text-white xl:mt-[18px] xl:rounded-[32px] xl:px-3 xl:pb-4 xl:pt-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[#323232] xl:gap-[11px] xl:px-[14px] xl:py-3">
          <span className="size-3 rounded-full bg-[#323232] xl:size-[14px]" />
          <span className="text-[14px] font-bold leading-none tracking-[-0.15px] xl:text-[18px] xl:leading-[15px]">
            {service}
          </span>
        </div>

        <div className="mt-3 xl:mt-5">
          <div className="space-y-1.5 xl:space-y-2">
            <p className="text-[28px] font-bold leading-none tracking-[-0.64px] xl:text-[32px] xl:leading-8">
              {price}
            </p>
            <p className="max-w-[456px] text-[13px] leading-[15px] tracking-[-0.15px] xl:text-[16px] xl:leading-[19px]">
              {summary}
            </p>
          </div>

          <ul className="mt-3 space-y-1 xl:mt-[18px] xl:space-y-[7px]">
            {features.map((feature) => (
              <li
                className="flex items-center gap-2 text-[16px] font-medium leading-[18px] tracking-[-0.15px] xl:gap-[11px] xl:text-[20px] xl:leading-[19.5px]"
                key={feature}
              >
                <span className="grid size-[14px] shrink-0 place-items-center rounded-full bg-white text-[10px] font-bold text-[#323232] xl:size-[18px] xl:text-[12px]">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <a
          className="mt-4 flex w-full rounded-full bg-white/10 p-1.5 backdrop-blur-[6px] xl:mt-5"
          href="#contact"
        >
          <span className="flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 text-[16px] font-extrabold text-black xl:text-[20px]">
            Start Project
          </span>
        </a>
      </div>
    </article>
  );
}

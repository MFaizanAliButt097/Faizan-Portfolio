const skills = ["LOGO Design", "POST Design", "Branding", "Ui/Ux", "Meta ads"];

export function MarqueeStrip() {
  return (
    <div className="relative h-[106px] overflow-hidden bg-[#171717] text-white">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#171717] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#171717] to-transparent" />
      <div className="flex min-w-max animate-[scroll_22s_linear_infinite] items-center gap-8 py-8 text-[32px] font-semibold leading-[39px] uppercase tracking-normal text-zinc-200">
        {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
          <span className="flex items-center gap-8" key={`${skill}-${index}`}>
            {skill}
            <span className="text-[42px] leading-none text-white">+</span>
          </span>
        ))}
      </div>
    </div>
  );
}

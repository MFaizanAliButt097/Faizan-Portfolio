import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home", width: "w-[70px]" },
  { label: "about", href: "#about", width: "w-[62px]" },
  { label: "Services", href: "#services", width: "w-[82px]" },
  { label: "Projects", href: "#projects", width: "w-[82px]" },
  { label: "Pricing", href: "#pricing", width: "w-[67px]" },
];

function TopContactButton() {
  return (
    <div className="relative flex h-[51px] w-[162px] shrink-0 items-center justify-center rounded-full bg-[rgba(18,18,18,0.78)] px-2 py-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.45),inset_0_1px_2px_rgba(255,255,255,0.32),inset_0_-3px_8px_rgba(0,0,0,0.45)] ring-1 ring-white/25 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.025] hover:shadow-[0_16px_34px_rgba(0,0,0,0.48),inset_0_1px_2px_rgba(255,255,255,0.36),inset_0_-3px_8px_rgba(0,0,0,0.45)] active:translate-y-0 active:scale-[0.99]">
      <Link
        className="relative z-10 flex h-[39px] w-full items-center justify-center overflow-hidden rounded-full bg-[#fbfbfb] px-5 text-[16px] font-bold leading-none text-black shadow-[0_5px_12px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(0,0,0,0.07)]"
        href="/contact"
      >
        Contact Now
      </Link>
    </div>
  );
}

export function Navbar() {
  return (
    <div className="absolute left-[calc(50%+0.5px)] top-10 z-30 flex -translate-x-1/2 items-center justify-center gap-[259px]">
      <Link
        className="flex flex-col justify-center font-sora text-[32px] font-bold capitalize leading-6 text-white"
        href="/"
      >
        LOGO
      </Link>

      <nav className="group/nav relative flex h-[52px] w-[419px] shrink-0 items-start rounded-[1000px] border border-white bg-[rgba(255,255,255,0.10)] px-[18px] py-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.36),inset_0_1px_2px_rgba(255,255,255,0.20),inset_0_-2px_5px_rgba(0,0,0,0.32)] backdrop-blur-[6px]">
        <div className="flex h-8 w-[383px] items-center gap-[5px]">
          {navItems.map((item) =>
            item.label === "Home" ? (
              <Link
                className={`${item.width} flex h-8 shrink-0 items-center justify-center rounded-[100px] border-[0.7px] border-white/65 bg-white text-[16px] font-semibold capitalize leading-6 text-black transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/nav:border-transparent group-hover/nav:bg-transparent group-hover/nav:font-normal group-hover/nav:text-white hover:!border-white/65 hover:!bg-white hover:!font-semibold hover:!text-black hover:shadow-[0_5px_12px_rgba(0,0,0,0.18)]`}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                className={`${item.width} flex h-8 shrink-0 items-center justify-center rounded-[100px] whitespace-nowrap text-[16px] font-normal capitalize leading-6 text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white hover:font-semibold hover:text-black hover:shadow-[0_5px_12px_rgba(0,0,0,0.18)]`}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
      </nav>

      <TopContactButton />
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const imgRectangle73 =
  "http://localhost:3845/assets/557006c42886dc42f61d6f689608f658b497afd3.png";

const stats = [
  { value: 10, decimals: 0, label: "Done By Projects" },
  { value: 1.2, decimals: 1, label: "Years Of Experience" },
  { value: 4, decimals: 0, label: "Trusted By Companies" },
];

function GlassPill({
  children,
  className = "",
  innerClassName = "",
  href,
  download,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  href?: string;
  download?: string;
}) {
  const pillClassName = `group inline-flex items-center justify-center rounded-[100px] bg-[rgba(18,18,18,0.78)] px-2 py-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.45),inset_0_1px_2px_rgba(255,255,255,0.32),inset_0_-3px_8px_rgba(0,0,0,0.45)] ring-1 ring-white/25 backdrop-blur-xl ${className}`;
  const inner = (
    <div
      className={`relative z-10 flex h-[39px] items-center justify-center overflow-hidden rounded-[100px] bg-white px-5 text-[16px] font-bold leading-none text-black shadow-[0_5px_12px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(0,0,0,0.07)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_9px_8px,rgba(0,0,0,0.16)_0_0.8px,transparent_1.2px),radial-gradient(circle_at_24px_18px,rgba(0,0,0,0.12)_0_0.8px,transparent_1.2px)] before:bg-[length:42px_26px] before:opacity-25 before:content-[''] ${innerClassName}`}
    >
      <span className="relative z-10">{children}</span>
    </div>
  );

  if (href) {
    return (
      <a className={pillClassName} href={href} download={download}>
        {inner}
      </a>
    );
  }

  return (
    <div className={pillClassName}>{inner}</div>
  );
}

function StatCard({
  value,
  decimals,
  label,
}: {
  value: number;
  decimals: number;
  label: string;
}) {
  const displayValue = value.toFixed(decimals);

  return (
    <div
      className="relative flex h-[150px] w-full flex-col items-center justify-center overflow-hidden rounded-[27px] border-[1.3px] border-white/80 bg-[#111015] px-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_-10px_-8px_18px_rgba(0,0,0,0.38),0_16px_28px_rgba(0,0,0,0.34)] backdrop-blur-[3px] sm:h-[159px] lg:max-w-[194px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[27px] before:border before:border-white/10 before:content-[''] after:pointer-events-none after:absolute after:bottom-[-1px] after:right-[-1px] after:h-[78px] after:w-[78px] after:rounded-br-[27px] after:border-b after:border-r after:border-white/35 after:content-['']"
    >
      <p className="relative z-10 text-[42px] font-extrabold leading-none text-white sm:text-[48px]">
        {displayValue}+
      </p>
      <p className="relative z-10 mt-4 max-w-[105px] text-center text-[17px] font-normal leading-[18px] text-white">
        {label}
      </p>
    </div>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);
  const [animatedValues, setAnimatedValues] = useState(() => stats.map(() => 0));
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    const statsElement = sectionRef.current ?? statsRef.current;

    if (!statsElement) {
      return;
    }

    let animationFrame = 0;

    const startCountUp = () => {
      const duration = 1200;
      const startTime = performance.now();

      const tick = (time: number) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setAnimatedValues(
          stats.map((stat) => Number((stat.value * easedProgress).toFixed(stat.decimals))),
        );

        if (progress < 1) {
          animationFrame = requestAnimationFrame(tick);
        } else {
          setAnimatedValues(stats.map((stat) => stat.value));
        }
      };

      animationFrame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          startCountUp();
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -18% 0px", threshold: 0.22 },
    );

    observer.observe(statsElement);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-black py-16 text-white sm:py-20 lg:py-[104px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[96px]">
        <div className="mx-auto grid w-full max-w-[1304px] items-center gap-12 lg:grid-cols-[500px_minmax(0,1fr)] lg:gap-[48px] xl:gap-[54px]">
          <div
            className="relative mx-auto aspect-[500/550] w-full max-w-[500px] overflow-hidden rounded-[22px] bg-[#d9d9d9] shadow-[0_22px_44px_rgba(0,0,0,0.35)] lg:mx-0"
            data-node-id="1:78"
            data-name="Rectangle 73"
          >
            {imageFailed ? (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.92),rgba(217,217,217,0.95)_38%,rgba(185,185,185,0.9)_100%)]" />
            ) : (
              <img
                alt="About profile"
                className="absolute inset-0 h-full w-full object-cover object-[center_38%]"
                onError={() => setImageFailed(true)}
                src={imgRectangle73}
              />
            )}
          </div>

          <div
            className="flex min-w-0 flex-col items-start"
            data-node-id="1:39"
          >
            <GlassPill className="h-[51px] w-[105px]">
              About
            </GlassPill>

            <div className="mt-6 w-full">
              <h2 className="max-w-[650px] bg-gradient-to-b from-white from-[35.5%] to-[#989898] to-[127.5%] bg-clip-text text-[38px] font-extrabold leading-[1.05] text-transparent sm:text-[44px] lg:text-[48px] xl:text-[54px]">
                I Help <span className="text-white">Brands</span> with{" "}
                <span className="text-white">UI/UX </span>and Full{" "}
                <span className="text-white">Stack Projects</span>
              </h2>
              <p className="mt-5 max-w-[650px] text-[18px] font-normal leading-[1.22] text-white sm:text-[20px] lg:text-[21px]">
                A creative graphic designer with a love for visual storytelling and bold ideas. I thrive on challenges that push my creativity and enjoy blending design, emotion, and strategy to build visuals that truly speak to people. Always learning, evolving, and creating with purpose.
              </p>

              <div
                ref={statsRef}
                className="mt-8 grid w-full max-w-[650px] grid-cols-1 gap-5 sm:grid-cols-3 lg:gap-[33px]"
              >
                {stats.map((stat, index) => (
                  <StatCard
                    key={`${stat.value}-${stat.label}`}
                    {...stat}
                    value={animatedValues[index]}
                  />
                ))}
              </div>

              <GlassPill
                className="mt-6 h-[51px] w-[180px] cursor-pointer transition-all duration-500 ease-out hover:-translate-y-0.5 hover:scale-[1.015] hover:bg-[rgba(255,255,255,0.13)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.48),inset_0_1px_3px_rgba(255,255,255,0.36),inset_0_-3px_8px_rgba(0,0,0,0.46)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                innerClassName="w-full transition-all duration-500 ease-out group-hover:shadow-[0_6px_14px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.96),inset_0_-1px_0_rgba(0,0,0,0.08)]"
                href="/assets/Designify-CV.pdf"
                download="Designify-CV.pdf"
              >
                DOWNLOAD CV
              </GlassPill>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

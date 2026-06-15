const cards = [
  "from-fuchsia-500 via-violet-500 to-cyan-300",
  "from-sky-500 via-blue-600 to-white",
  "from-zinc-100 via-blue-300 to-zinc-900",
  "from-lime-300 via-emerald-500 to-slate-900",
  "from-white via-zinc-300 to-blue-800",
  "from-orange-400 via-yellow-200 to-zinc-950",
  "from-cyan-300 via-blue-700 to-black",
  "from-violet-400 via-blue-500 to-white",
  "from-zinc-900 via-zinc-700 to-rose-300",
];

export function ImageFan() {
  return (
    <div className="pointer-events-none relative mx-auto mt-12 h-[250px] w-full max-w-5xl sm:h-[330px] lg:h-[390px]">
      {cards.map((gradient, index) => {
        const offset = index - 4;
        const rotate = offset * 12;
        const translate = offset * 72;
        const zIndex = 20 - Math.abs(offset);

        return (
          <div
            className={`absolute left-1/2 top-8 h-52 w-36 origin-bottom overflow-hidden rounded-[28px] border border-white/20 bg-gradient-to-br ${gradient} shadow-2xl shadow-black/50 sm:h-72 sm:w-48`}
            key={gradient}
            style={{
              transform: `translateX(calc(-50% + ${translate}px)) rotate(${rotate}deg)`,
              zIndex,
            }}
          >
            <div className="absolute inset-3 rounded-2xl border border-white/30 bg-black/10" />
            <div className="absolute bottom-4 left-4 right-4 h-16 rounded-2xl bg-white/85" />
            <div className="absolute left-5 top-5 h-8 w-20 rounded-full bg-white/75" />
          </div>
        );
      })}
    </div>
  );
}

type StatsCardProps = {
  value: string;
  label: string;
};

export function StatsCard({ value, label }: StatsCardProps) {
  return (
    <div className="rounded-[28px] border border-white/80 bg-[#111015] px-6 py-8 text-center shadow-xl shadow-black/30 backdrop-blur">
      <strong className="block text-4xl font-extrabold text-white sm:text-5xl">{value}</strong>
      <span className="mt-5 block text-sm leading-5 text-zinc-200 sm:text-base">{label}</span>
    </div>
  );
}

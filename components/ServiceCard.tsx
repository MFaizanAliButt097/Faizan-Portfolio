type ServiceCardProps = {
  title: string;
  description: string;
  gradient: string;
};

export function ServiceCard({ title, description, gradient }: ServiceCardProps) {
  return (
    <article className="rounded-[28px] border border-white/40 bg-[#242424] p-4 text-white">
      <div className={`h-44 rounded-[20px] bg-gradient-to-br ${gradient}`} />
      <h3 className="mt-5 text-xl font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-300">{description}</p>
      <a className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold text-black" href="#contact">
        Get Service
      </a>
    </article>
  );
}

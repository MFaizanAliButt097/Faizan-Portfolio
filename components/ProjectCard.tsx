import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  nodeId: string;
  onOpen: () => void;
};

function ArrowButton({ title, onOpen }: { title: string; onOpen: () => void }) {
  return (
    <button
      aria-label={`Open ${title}`}
      className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_8px_16px_rgba(0,0,0,0.34)] sm:size-[52px] cursor-pointer "
      onClick={onOpen}
      type="button"
    >
      <span className="block text-[28px] font-extrabold leading-none text-black sm:text-[32px]">
        &#8599;
      </span>
    </button>
  );
}

export function ProjectCard({
  title,
  description,
  image,
  nodeId,
  onOpen,
}: ProjectCardProps) {
  return (
    <article
      className="flex w-full max-w-[590px] flex-col overflow-hidden rounded-[24px] border-[2.5px] border-white bg-[#111015]"
      data-node-id={nodeId}
    >
      <div className="relative aspect-[590/272.354] w-full shrink-0 overflow-hidden rounded-t-[21.5px] bg-[radial-gradient(circle_at_top,#27242f_0%,#111015_72%)]">
        <div className="relative h-full w-full overflow-hidden bg-black/20">
          <Image
            alt={`${title} project preview`}
            className="scale-[1.08] object-cover object-top transition-transform duration-300"
            fill
            sizes="(max-width: 1024px) 100vw, 590px"
            src={image}
          />
        </div>
      </div>

      <div className="rounded-b-[21.5px] bg-[#323232] px-5 pb-7 pt-5 text-white sm:px-8 sm:pb-8 sm:pt-6 xl:px-[32px] xl:pb-[28px] xl:pt-[24px]">
        <div className="flex items-start justify-between gap-5 sm:gap-6">
          <h3 className="max-w-[430px] text-[22px] font-bold leading-[1.12] text-white sm:text-[30px] xl:text-[32px]">
            {title}
          </h3>
          <ArrowButton title={title} onOpen={onOpen} />
        </div>

        <p className="mt-[14px] max-w-[485px] text-[13px] font-normal leading-[1.3] text-white sm:text-[18px] sm:leading-[1.35] xl:text-[20px]">
          {description}
        </p>
      </div>
    </article>
  );
}

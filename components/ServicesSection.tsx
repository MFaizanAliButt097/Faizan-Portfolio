const services = [
  {
    title: "LOGO Design",
    image: "/Services/Group%2084%20(1).png",
    imageClassName: "object-cover",
    cardNodeId: "1:85",
  },
  {
    title: "Social Media Post Design",
    image: "/Services/Group%2084%20(2).png",
    imageClassName: "object-cover object-center",
    cardNodeId: "1:94",
  },
  {
    title: "Ui/Ux Design",
    image: "/Services/Group%2084%20(3).png",
    imageClassName: "object-cover",
    cardNodeId: "1:103",
  },
  {
    title: "Branding & Identity",
    image: "/Services/Group%2084%20(4).png",
    imageClassName: "h-[142.97%] w-[99.98%] max-w-none object-fill left-0 top-[-0.98%]",
    cardNodeId: "1:113",
  },
  {
    title: "Meta Ad’s",
    image: "/Services/Group%2084%20(5).png",
    imageClassName: "object-cover",
    cardNodeId: "1:122",
  },
  {
    title: "Social Media Management",
    image: "/Services/Group%2084%20(6).png",
    imageClassName: "object-cover object-center",
    cardNodeId: "1:131",
  },
];

const description =
  "Complete cold email infrastructure management from domain setup to warmup email infrastructure";

function SectionPill() {
  return (
    <div
      className="inline-flex flex-col items-center justify-center rounded-[100px] bg-white/10 px-2 py-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.45),inset_0_1px_2px_rgba(255,255,255,0.32),inset_0_-3px_8px_rgba(0,0,0,0.45)] backdrop-blur-[6px]"
      data-node-id="1:79"
    >
      <div className="flex items-center justify-center rounded-[100px] bg-white px-5 py-2.5">
        <p className="text-[16px] font-bold leading-none text-black">Services</p>
      </div>
    </div>
  );
}

function GetStartedButton() {
  return (
    <a
      href="#contact"
      className="inline-flex flex-col items-center justify-center rounded-[100px] bg-white/10 px-2 py-1.5 shadow-[0_8px_20px_rgba(0,0,0,0.35),inset_0_1px_2px_rgba(255,255,255,0.25)] backdrop-blur-[6px]"
    >
      <span className="rounded-[100px] bg-white px-5 py-2.5 text-[16px] font-bold leading-none text-black">
        Get Started
      </span>
    </a>
  );
}

function ServiceCard({
  title,
  image,
  imageClassName,
  cardNodeId,
}: {
  title: string;
  image: string;
  imageClassName: string;
  cardNodeId: string;
}) {
  return (
    <article
      className="flex h-[424px] w-full max-w-[358px] items-center rounded-[32px] border-[1.5px] border-white/75 bg-[#242424] px-[26px] py-[22px] text-white shadow-[0_18px_34px_rgba(0,0,0,0.28)] lg:w-[358px] lg:max-w-none"
      data-node-id={cardNodeId}
    >
      <div className="flex h-full w-full flex-col items-center gap-4 lg:w-[305.953px]">
        <div className="relative h-[214.017px] w-full overflow-hidden rounded-[18px] bg-white lg:w-[305.953px]">
          <img
            alt=""
            className={`absolute inset-0 h-full w-full rounded-[18px] object-cover ${imageClassName}`}
            src={image}
          />
        </div>

        <div className="flex w-full flex-1 flex-col items-start gap-[18px] lg:w-[269px]">
          <div className="flex w-full flex-col items-start gap-1.5 text-white">
            <h3 className="w-full text-[20px] font-semibold leading-normal">{title}</h3>
            <p className="w-full text-[16px] font-normal leading-normal">{description}</p>
          </div>
          <div className="mt-auto">
            <GetStartedButton />
          </div>
        </div>
      </div>
    </article>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#171717] py-16 text-white sm:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[119px]">
        <div className="flex w-full max-w-[1202px] flex-col items-center">
          <SectionPill />

          <div className="mt-10 grid w-full justify-items-center gap-8 md:grid-cols-2 md:gap-10 lg:mt-16 lg:w-[1202px] lg:grid-cols-[358px_358px_358px] lg:justify-items-start lg:gap-x-16 lg:gap-y-16">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

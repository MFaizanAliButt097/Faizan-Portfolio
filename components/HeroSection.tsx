import Link from "next/link";
import { Navbar } from "./Navbar";

const imgHeroSection = "/bg-img.jpeg";
const imgImgCard1 = "/hero-images/img1.png";
const imgImgCard2 = "/hero-images/img2.png";
const imgImgCard3 = "/hero-images/img3.png";
const imgImgCard4 = "/hero-images/img4.png";
const imgImgCard5 = "/hero-images/img5.png";
const imgImgCard6 = "/hero-images/img6.png";
const imgImgCard7 = "/hero-images/img7.png";
const imgImgCard8 = "/hero-images/img8.png";
const imgImgCard9 = "/hero-images/Img9.png";
function GlassPill({
  children,
  className = "",
  innerClassName = "",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  href?: string;
}) {
 const content = (
  <div
    className={`relative z-10 overflow-hidden rounded-full bg-[#fbfbfb] font-bold text-black shadow-[0_5px_12px_rgba(0,0,0,0.18)] ${innerClassName}`}
  >
    <p className="relative z-10 whitespace-nowrap leading-normal">{children}</p>
  </div>
);
  const pillClassName = `absolute inline-flex rounded-full bg-[#121212] px-2 py-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.45)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.025] hover:shadow-[0_16px_34px_rgba(0,0,0,0.48)] active:translate-y-0 active:scale-[0.99] ${className}`;
  if (href) {
    return (
      <Link className={pillClassName} href={href}>
        {content}
      </Link>
    );
  }

  return <div className={pillClassName}>{content}</div>;
}

function ImageCard({
  src,
  className,
  imgClassName,
  name,
  offsetX = "0%",
  offsetY = "0%",
}: {
  src: string;
  className: string;
  imgClassName: string;
  name: string;
  offsetX?: string;
  offsetY?: string;
}) {
  return (
    <div
      className={`${className} cursor-pointer will-change-transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:scale-[1.008]`}
      data-name={name}
    >
      <img
        alt=""
        className={`absolute inset-0 h-full w-full max-w-none object-contain ${imgClassName}`}
        src={src}
        style={{ transform: `translate(${offsetX}, ${offsetY})` }}
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-[369px] overflow-hidden bg-black sm:h-[543px] md:h-[686px] lg:h-[850px] min-[1200px]:h-[901px] min-[1360px]:h-[968px] min-[1440px]:h-[1024px]"
      data-node-id="1:10"
      data-name="Hero Section"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <img
          alt=""
          className="absolute inset-0 w-full h-full max-w-none object-cover object-top opacity-90"
          src={imgHeroSection}
        />
        <div className="absolute inset-0 bg-[linear-gradient(125.10013916459542deg,rgba(17,16,21,0.1)_0.87976%,rgba(0,0,0,0.1)_98.628%)]" />
      </div>
      <div className="absolute left-1/2 top-0 h-[1024px] w-[1440px] origin-top -translate-x-1/2 scale-[0.36] sm:scale-[0.53] md:scale-[0.67] lg:scale-[0.83] min-[1200px]:scale-[0.88] min-[1360px]:scale-[0.945] min-[1440px]:scale-100">
        <div className="absolute left-[calc(58.33%+8.63px)] top-[-135px] flex h-[1383.952px] w-[947.02px] items-center justify-center">
          <div className="flex-none rotate-[19.97deg]">
            <div className="h-[1274.663px] w-[544.413px] " />
          </div>
        </div>
        <div className="absolute left-[-418px] top-[-121.77px] flex h-[1280.051px] w-[834.437px] items-center justify-center">
          <div className="-scale-y-100 flex-none rotate-[160.03deg]">
            <div className="h-[1197.446px] w-[452.688px] " />
          </div>
        </div>
        <div className="absolute left-[-44px] top-[-49px] flex h-[179px] w-[1582px] items-center justify-center">
          <div className="flex-none rotate-90">
            <div className="h-[1582px] w-[179px] rounded-[86px] bg-[rgba(49,49,49,0.32)] blur-[75px]" />
          </div>
        </div>

        <Navbar />

        <GlassPill
          className="left-[629px] top-[910px] h-[51px] w-[182px] items-center justify-center"
          href="https://calendly.com/app/scheduling/meeting_types/user/me"
          innerClassName="flex h-[39px] w-full items-center justify-center px-5 text-[16px] leading-none"
        >
          Start a Project
        </GlassPill>

        <div className="absolute bottom-[67px] contents left-[111px]">
          <div className="absolute bottom-[60px] left-[160px] flex h-[302.076px] w-[308.476px] items-center justify-center">
            <div className="flex-none">
              <ImageCard
                className="relative h-[259.375px] w-[172.930px] rounded-[29.89px]"
                imgClassName=""
                name="Img - Card 1"
                src={imgImgCard1}
              />
            </div>
          </div>
          <div className="absolute bottom-[62px] left-[calc(72%-65.85px)] flex h-[302.076px] w-[308.476px] items-center justify-center">
            <div className="flex-none">
              <ImageCard
                className="relative h-[259.391px] w-[172.927px] rounded-[29.89px]"
                imgClassName=""
                name="Img - Card 9"
                src={imgImgCard9}
              />
            </div>
          </div>
          <div className="absolute bottom-[116.63px] left-[calc(9.33%+101.29px)] flex h-[336.088px] w-[315.449px] items-center justify-center">
            <div className="flex-none">
              <ImageCard
                className="relative h-[279.869px] w-[186.579px] rounded-[29.89px]"
                imgClassName=""
                name="Img - Card 2"
                src={imgImgCard2}
              />
            </div>
          </div>
          <div className="absolute bottom-[116.64px] left-[calc(57.33%+63.89px)] flex h-[336.088px] w-[315.449px] items-center justify-center">
            <div className="flex-none">
              <ImageCard
                className="relative h-[279.869px] w-[186.579px] rounded-[29.89px]"
                imgClassName=""
                name="Img - Card 8"
                src={imgImgCard8}
              />
            </div>
          </div>
          <div className="absolute bottom-[163.65px] left-[calc(16.67%+100.23px)] flex h-[355.823px] w-[305.083px] items-center justify-center">
            <div className="flex-none">
              <ImageCard
                className="relative h-[300.347px] w-[200.232px] rounded-[29.89px]"
                imgClassName=""
                name="Img - Card 3"
                src={imgImgCard3}
              />
            </div>
          </div>
          <div className="absolute bottom-[163.65px] left-[calc(50%+75.31px)] flex h-[355.823px] w-[305.083px] items-center justify-center">
            <div className="flex-none">
              <ImageCard
                className="relative h-[300.347px] w-[200.232px] rounded-[29.89px]"
                imgClassName=""
                name="Img - Card 7"
                src={imgImgCard7}
              />
            </div>
          </div>
          <div className="absolute bottom-[196.55px] left-[calc(25%+108.59px)] flex h-[358.284px] w-[275.913px] items-center justify-center">
            <div className="flex-none">
              <ImageCard
                className="relative h-[320.826px] w-[213.884px] rounded-[29.89px]"
                imgClassName=""
                name="Img - Card 4"
                src={imgImgCard4}
              />
            </div>
          </div>
          <div className="absolute bottom-[196.56px] left-[calc(41.67%+96.12px)] flex h-[358.284px] w-[275.913px] items-center justify-center">
            <div className="flex-none">
              <ImageCard
                className="relative h-[320.826px] w-[213.884px] rounded-[29.89px]"
                imgClassName=""
                name="Img - Card 6"
                src={imgImgCard6}
              />
            </div>
          </div>
          <ImageCard
            className="absolute bottom-[216.42px] left-[calc(33.33%+126.55px)] h-[341.304px] w-[227.536px] rounded-[29.89px]"
            imgClassName=""
            name="Img - Card 5"
            src={imgImgCard5}
          />
        </div>

        <div className="absolute left-[190px] top-[220px] w-[1061px]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap bg-gradient-to-b from-white from-[29.167%] to-[#989898] to-[111.72%] bg-clip-text text-center text-[0px] font-extrabold leading-[0] text-transparent">
            <p className="mb-0 text-[82px]">
              <span className="leading-[1.2]">Full Stack </span>
              <span className="leading-[1.2] text-white">Designer</span>
            </p>
            <p className="text-[82px]">
              <span className="leading-[1.2]">For </span>
              <span className="leading-[1.2] text-white">Brand&rsquo;s</span>
              <span className="leading-[1.2]"> Ready to Scale</span>
            </p>
          </div>
        </div>

        <GlassPill
          className="left-[659px] top-[164px] h-[51px] w-[123px] items-center justify-center"
          innerClassName="flex h-[39px] w-full items-center justify-center px-5 text-[16px] leading-none"
        >
          Creative
        </GlassPill>
      </div>
    </section>
  );
}

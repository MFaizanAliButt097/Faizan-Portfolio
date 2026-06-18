import type { ReactNode } from "react";
import Image from "next/image";

type ProjectOverlayProps = {
  description: string;
  image: string;
  onClose: () => void;
  overlay?: ProjectOverlayData;
  title: string;
};

export type ProjectOverlayData =
  | BrandingOverlay
  | SocialPostsOverlay
  | WebsitePreviewOverlay
  | MetaAdsOverlay;

type BrandingOverlay = {
  type: "branding";
  nodeId: string;
  assets: {
    leftTop: string;
    logoStripA: string;
    logoStripB: string;
    logoStripC: string;
    logoStripD: string;
    leftBottom: string;
    rightTop: string;
    rightMiddle: string;
    rightBottom: string;
  };
};

type SocialPostsOverlay = {
  type: "socialPosts";
  nodeId: string;
  assets: string[];
};

type WebsitePreviewOverlay = {
  type: "websitePreview";
  nodeId: string;
  assets: string[];
};

type MetaAdsOverlay = {
  type: "metaAds";
  nodeId: string;
  assets: string[];
};

function OverlayShell({
  children,
  dataNodeId,
  description,
  image,
  title,
}: {
  children: ReactNode;
  dataNodeId?: string;
  description: string;
  image: string;
  title: string;
}) {
  return (
    <div
      className="w-full max-w-[1120px] overflow-hidden rounded-[28px] border border-white/20 bg-[#141319] text-white shadow-[0_24px_80px_rgba(0,0,0,0.65)]"
      data-node-id={dataNodeId}
    >
      <div className="max-h-[88vh] overflow-y-auto">
        <div className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(50,50,50,0.98)_0%,rgba(20,19,25,0.98)_100%)] px-5 pb-5 pt-6 sm:px-8 sm:pb-6 sm:pt-8">
          <h3 className="max-w-[760px] text-[26px] font-semibold leading-tight sm:text-[34px]">
            {title}
          </h3>
          <p className="mt-3 max-w-[860px] text-[15px] leading-normal text-white/82 sm:text-[18px]">
            {description}
          </p>
        </div>

        <div className="bg-[#111015] p-4 sm:p-6 lg:p-8">
          <div className="relative mb-5 aspect-[16/8.6] w-full overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_top,#24212d_0%,#0f0f13_78%)] sm:mb-6">
            <Image
              alt={`${title} cover preview`}
              className="object-cover object-top"
              fill
              priority={false}
              sizes="(max-width: 1280px) 100vw, 1120px"
              src={image}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_40%,rgba(0,0,0,0.28)_100%)]" />
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

function AssetFrame({
  alt,
  aspectClassName,
  fit = "contain",
  src,
}: {
  alt: string;
  aspectClassName: string;
  fit?: "contain" | "cover";
  src: string;
}) {
  return (
    <div
      className={`group relative w-full overflow-hidden rounded-[20px] border border-white/10 bg-[radial-gradient(circle_at_top,#24212d_0%,#0f0f13_78%)] ${aspectClassName}`}
    >
      <Image
        alt={alt}
        className={fit === "cover" ? "object-cover object-top" : "object-contain object-center"}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        src={src}
      />
    </div>
  );
}

function BrandingOverlayContent({ overlay, title }: { overlay: BrandingOverlay; title: string }) {
  const assets = [
    overlay.assets.leftTop,
    overlay.assets.leftBottom,
    overlay.assets.rightTop,
    overlay.assets.rightMiddle,
    overlay.assets.rightBottom,
  ];

  const logos = [
    overlay.assets.logoStripA,
    overlay.assets.logoStripB,
    overlay.assets.logoStripC,
    overlay.assets.logoStripD,
  ];

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-2">
        {assets.map((asset, index) => (
          <AssetFrame
            alt={`${title} branding sample ${index + 1}`}
            aspectClassName="aspect-[4/3]"
            fit="contain"
            key={asset}
            src={asset}
          />
        ))}
      </div>

      <div className="rounded-[24px] border border-white/10 bg-white px-4 py-5 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {logos.map((logo, index) => (
            <div
              className="relative aspect-square overflow-hidden rounded-[16px] bg-[#f4f4f4]"
              key={logo}
            >
              <Image
                alt={`${title} logo option ${index + 1}`}
                className="object-contain p-3"
                fill
                sizes="(max-width: 640px) 50vw, 160px"
                src={logo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialPostsOverlayContent({
  overlay,
  title,
}: {
  overlay: SocialPostsOverlay;
  title: string;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {overlay.assets.map((asset, index) => (
        <AssetFrame
          alt={`${title} social post ${index + 1}`}
          aspectClassName="aspect-[4/5]"
          fit="contain"
          key={asset}
          src={asset}
        />
      ))}
    </div>
  );
}

function WebsitePreviewOverlayContent({
  overlay,
  title,
}: {
  overlay: WebsitePreviewOverlay;
  title: string;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {overlay.assets.map((asset, index) => (
        <AssetFrame
          alt={`${title} screen ${index + 1}`}
          aspectClassName="aspect-[12/14]"
          fit="contain"
          key={asset}
          src={asset}
        />
      ))}
    </div>
  );
}

function MetaAdsOverlayContent({ overlay, title }: { overlay: MetaAdsOverlay; title: string }) {
  return (
    <div className="space-y-5">
      <div className="rounded-[22px] border border-white/10 bg-white/95 px-4 py-4 text-center text-[18px] font-semibold text-[#1e1e1e] sm:px-6 sm:py-5 sm:text-[24px]">
        Marketing Campaign Stats
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {overlay.assets.map((asset, index) => (
          <AssetFrame
            alt={`${title} campaign creative ${index + 1}`}
            aspectClassName="aspect-[4/3]"
            fit="contain"
            key={asset}
            src={asset}
          />
        ))}
      </div>
    </div>
  );
}

function DefaultOverlayContent({
  description,
  image,
  title,
}: {
  description: string;
  image: string;
  title: string;
}) {
  return (
    <OverlayShell description={description} image={image} title={title}>
      <AssetFrame
        alt={`${title} project preview`}
        aspectClassName="aspect-[16/10]"
        fit="contain"
        src={image}
      />
    </OverlayShell>
  );
}

export function ProjectOverlay({
  description,
  image,
  onClose,
  overlay,
  title,
}: ProjectOverlayProps) {
  let content: ReactNode;
  let dataNodeId: string | undefined;

  if (overlay?.type === "branding") {
    dataNodeId = overlay.nodeId;
    content = <BrandingOverlayContent overlay={overlay} title={title} />;
  } else if (overlay?.type === "socialPosts") {
    dataNodeId = overlay.nodeId;
    content = <SocialPostsOverlayContent overlay={overlay} title={title} />;
  } else if (overlay?.type === "websitePreview") {
    dataNodeId = overlay.nodeId;
    content = <WebsitePreviewOverlayContent overlay={overlay} title={title} />;
  } else if (overlay?.type === "metaAds") {
    dataNodeId = overlay.nodeId;
    content = <MetaAdsOverlayContent overlay={overlay} title={title} />;
  } else {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-3 py-4 backdrop-blur-sm transition-opacity duration-200"
        onClick={onClose}
        role="presentation"
      >
        <div aria-modal="true" className="relative w-full max-w-[1120px]" onClick={(event) => event.stopPropagation()} role="dialog">
          <button
            aria-label="Close project overlay"
            className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-white text-[28px] leading-none text-black shadow-lg sm:right-5 sm:top-5"
            onClick={onClose}
            type="button"
          >
            &times;
          </button>

          <DefaultOverlayContent description={description} image={image} title={title} />
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-3 py-4 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClose}
      role="presentation"
    >
      <div aria-modal="true" className="relative w-full max-w-[1120px]" onClick={(event) => event.stopPropagation()} role="dialog">
        <button
          aria-label="Close project overlay"
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-white text-[28px] leading-none text-black shadow-lg sm:right-5 sm:top-5"
          onClick={onClose}
          type="button"
        >
          &times;
        </button>

        <OverlayShell dataNodeId={dataNodeId} description={description} image={image} title={title}>
          {content}
        </OverlayShell>
      </div>
    </div>
  );
}

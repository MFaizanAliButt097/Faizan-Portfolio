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

function BrandingOverlayContent({ overlay }: { overlay: BrandingOverlay }) {
  const { assets } = overlay;

  return (
    <div
      className="relative aspect-[983/833] w-[min(983px,calc(100vw-24px))] overflow-hidden rounded-[32px] border-[3px] border-white bg-[rgba(74,74,74,0.92)] shadow-[0_24px_80px_rgba(0,0,0,0.65)]"
      data-node-id={overlay.nodeId}
    >
      <div className="absolute inset-0 rounded-[32px] bg-[rgba(74,74,74,0.92)] blur-[1px]" />

      <div className="absolute left-[5.9%] top-[7.68%] flex w-[42.93%] flex-col gap-[1.44%]">
        <img
          alt=""
          className="aspect-[4096/2782] w-full object-cover"
          src={assets.leftTop}
        />

        <div className="flex aspect-[422/109] items-center gap-[1.45%] bg-white px-[7.58%] py-[2.84%]">
          {[assets.logoStripA, assets.logoStripB, assets.logoStripC, assets.logoStripD].map(
            (logo) => (
              <img
                alt=""
                className="aspect-square w-[20.14%] rounded-[4px] object-cover"
                key={logo}
                src={logo}
              />
            ),
          )}
        </div>

        <img
          alt=""
          className="aspect-[4096/2779] w-full object-cover"
          src={assets.leftBottom}
        />
      </div>

      <div className="absolute left-[51.17%] top-[7.68%] flex w-[42.93%] flex-col gap-[2.04%]">
        <img
          alt=""
          className="aspect-[4096/2087] w-full object-cover"
          src={assets.rightTop}
        />
        <img
          alt=""
          className="aspect-[4096/2346] w-full object-cover"
          src={assets.rightMiddle}
        />
        <img
          alt=""
          className="aspect-[4096/2087] w-full object-cover"
          src={assets.rightBottom}
        />
      </div>
    </div>
  );
}

function SocialPostsOverlayContent({ overlay }: { overlay: SocialPostsOverlay }) {
  return (
    <div
      className="relative aspect-[983/833] w-[min(983px,calc(100vw-24px))] overflow-hidden rounded-[32px] border-[3px] border-white bg-[rgba(74,74,74,0.92)] shadow-[0_24px_80px_rgba(0,0,0,0.65)]"
      data-node-id={overlay.nodeId}
    >
      <div className="absolute inset-0 rounded-[32px] bg-[rgba(74,74,74,0.92)] blur-[1px]" />

      <div className="absolute left-[7.12%] top-[5.28%] grid w-[85.86%] grid-cols-4 gap-x-[4.27%] gap-y-[3.36%] backdrop-blur-[40.35px]">
        {overlay.assets.map((asset) => (
          <img
            alt=""
            className="aspect-[184/230] w-full rounded-[6px] object-cover"
            key={asset}
            src={asset}
          />
        ))}
      </div>
    </div>
  );
}

function WebsitePreviewOverlayContent({
  overlay,
}: {
  overlay: WebsitePreviewOverlay;
}) {
  const backgrounds = [
    "#105045",
    "#4694a1",
    "#192148",
    "#3d689d",
    "#125775",
    "#1a423b",
  ];

  return (
    <div
      className="relative aspect-[983/833] w-[min(983px,calc(100vw-24px))] overflow-hidden rounded-[32px] border-[3px] border-white bg-[rgba(74,74,74,0.92)] shadow-[0_24px_80px_rgba(0,0,0,0.65)]"
      data-node-id={overlay.nodeId}
    >
      <div className="absolute inset-0 rounded-[32px] bg-[rgba(74,74,74,0.92)] blur-[1px]" />

      <div className="absolute left-[9.14%] top-[4.92%] grid w-[81.79%] grid-cols-3 gap-x-[5.22%] gap-y-[3.84%]">
        {overlay.assets.map((asset, index) => (
          <div
            className="relative aspect-[240/360] overflow-hidden rounded-[6px]"
            key={asset}
            style={{ backgroundColor: backgrounds[index] }}
          >
            <img
              alt=""
              className="absolute left-[3.33%] top-[5.28%] h-[141.39%] w-[61.25%] rounded-[4px] border border-white/5 object-cover object-top"
              src={asset}
            />
            <img
              alt=""
              className="absolute bottom-0 left-[66.67%] h-[69.17%] w-[30%] rounded-t-[2px] border border-white/5 object-cover object-top"
              src={asset}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function MetaAdsOverlayContent({ overlay }: { overlay: MetaAdsOverlay }) {
  const cropClasses = [
    "h-[101.89%] w-[187.33%] left-[-23.58%] top-[-1.89%]",
    "h-[103.79%] w-full left-0 top-[-2.92%]",
    "h-[104.74%] w-[150.01%] left-[-1.38%] top-[-2.37%]",
    "h-full w-full inset-0 object-cover",
    "h-[162.29%] w-[106.3%] left-[-3%] top-[-43.68%]",
    "h-[123%] w-[118.51%] left-[-14.96%] top-[-21.95%]",
  ];

  return (
    <div
      className="relative aspect-[983/833] w-[min(983px,calc(100vw-24px))] overflow-hidden rounded-[32px] border-[3px] border-white bg-[rgba(74,74,74,0.92)] shadow-[0_24px_80px_rgba(0,0,0,0.65)]"
      data-node-id={overlay.nodeId}
    >
      <div className="absolute inset-0 rounded-[32px] bg-[rgba(74,74,74,0.92)] blur-[1px]" />

      <div className="absolute left-[6.21%] top-[7.2%] grid w-[87.49%] grid-cols-3 gap-x-[2.32%] gap-y-[29.31%] backdrop-blur-[3.9px]">
        {overlay.assets.map((asset, index) => (
          <div
            className="relative aspect-[274/264] overflow-hidden rounded-[16px] bg-[#d9d9d9]"
            key={asset}
          >
            <img
              alt=""
              className={`absolute max-w-none rounded-[16px] ${cropClasses[index]}`}
              src={asset}
            />
          </div>
        ))}
      </div>

      <div className="absolute left-[6.1%] top-[43.69%] flex h-[12.36%] w-[87.79%] items-center justify-center bg-white">
        <p className="text-center text-[clamp(18px,4.88vw,48px)] font-bold leading-none text-[#262626]">
          Marketing Campaign Stat&apos;s
        </p>
      </div>
    </div>
  );
}

export function ProjectOverlay({
  description,
  image,
  onClose,
  overlay,
  title,
}: ProjectOverlayProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-3 py-4 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClose}
      role="presentation"
    >
      <div aria-modal="true" className="relative" onClick={(event) => event.stopPropagation()} role="dialog">
        <button
          aria-label="Close project overlay"
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-white text-[28px] leading-none text-black shadow-lg sm:right-5 sm:top-5"
          onClick={onClose}
          type="button"
        >
          ×
        </button>

        {overlay?.type === "branding" ? (
          <div className="max-h-[92vh] overflow-auto rounded-[32px]">
            <BrandingOverlayContent overlay={overlay} />
          </div>
        ) : overlay?.type === "socialPosts" ? (
          <div className="max-h-[92vh] overflow-auto rounded-[32px]">
            <SocialPostsOverlayContent overlay={overlay} />
          </div>
        ) : overlay?.type === "websitePreview" ? (
          <div className="max-h-[92vh] overflow-auto rounded-[32px]">
            <WebsitePreviewOverlayContent overlay={overlay} />
          </div>
        ) : overlay?.type === "metaAds" ? (
          <div className="max-h-[92vh] overflow-auto rounded-[32px]">
            <MetaAdsOverlayContent overlay={overlay} />
          </div>
        ) : (
          <div className="w-full max-w-[1040px] overflow-hidden rounded-[24px] border border-white/30 bg-[#111015] text-white shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
            <div className="max-h-[82vh] overflow-y-auto">
              <div className="relative aspect-[590/450] w-full overflow-hidden bg-black">
                <img alt="" className="h-full w-full object-cover" src={image} />
              </div>

              <div className="bg-[#323232] px-6 py-5 sm:px-10 sm:py-7">
                <h3 className="max-w-[760px] text-[28px] font-semibold leading-tight sm:text-[34px]">
                  {title}
                </h3>
                <p className="mt-3 max-w-[860px] text-[16px] leading-normal text-white sm:text-[18px]">
                  {description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

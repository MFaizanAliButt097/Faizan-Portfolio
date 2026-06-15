"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectOverlay, type ProjectOverlayData } from "./ProjectOverlay";

type Project = {
  title: string;
  image: string;
  imageClassName: string;
  nodeId: string;
  overlay: ProjectOverlayData;
};

const projects: Project[] = [
  {
    title: "LOGO & Branding",
    image: "https://www.figma.com/api/mcp/asset/d573a979-ee29-4cf3-a7ff-08fe8febcf58",
    imageClassName: "h-[131.11%] w-full max-w-none top-[-0.07%] left-[-0.04%]",
    nodeId: "1:141",
    overlay: {
      type: "branding",
      nodeId: "1:461",
      assets: {
        leftTop: "https://www.figma.com/api/mcp/asset/246455bd-d398-46f1-af4e-08479e472e64",
        logoStripA: "https://www.figma.com/api/mcp/asset/2be8de81-72a7-488e-b95e-340bec3d4cf0",
        logoStripB: "https://www.figma.com/api/mcp/asset/f2b7a179-a2cd-4974-9682-e22d41dbab26",
        logoStripC: "https://www.figma.com/api/mcp/asset/9dc21bcc-b0a8-4dd2-b3bd-6e977740bef6",
        logoStripD: "https://www.figma.com/api/mcp/asset/28d190d9-b28a-4142-bf19-c0c706d915c9",
        leftBottom: "https://www.figma.com/api/mcp/asset/1b52fdcf-b04e-401d-82b2-3c532d509344",
        rightTop: "https://www.figma.com/api/mcp/asset/f659630b-ca1e-4e63-8795-889ca13be64c",
        rightMiddle: "https://www.figma.com/api/mcp/asset/ff0adc80-930b-4e9e-8363-fb4d8295b966",
        rightBottom: "https://www.figma.com/api/mcp/asset/e69efb7c-aa26-4958-a77c-a9ac968f0704",
      },
    },
  },
  {
    title: "Social Media Posts",
    image: "https://www.figma.com/api/mcp/asset/55c74eb5-3c25-4d69-b1d2-8899d61271ef",
    imageClassName: "h-[168.88%] w-[103.05%] max-w-none top-[-2.44%] left-[-1.52%]",
    nodeId: "1:151",
    overlay: {
      type: "socialPosts",
      nodeId: "1:443",
      assets: [
        "https://www.figma.com/api/mcp/asset/23644c62-1b66-4a30-8948-848d379d842f",
        "https://www.figma.com/api/mcp/asset/33db9873-683a-43c5-9ab6-18463a51f358",
        "https://www.figma.com/api/mcp/asset/9acb3d48-c520-4585-a7b8-228ab9f343a5",
        "https://www.figma.com/api/mcp/asset/42366781-e7e3-41c6-9d58-49dd1dc50a57",
        "https://www.figma.com/api/mcp/asset/c708459b-b062-4142-82e7-a23b997dd750",
        "https://www.figma.com/api/mcp/asset/932e21e6-987a-4bd8-9907-6a37581535f8",
        "https://www.figma.com/api/mcp/asset/002a4850-ff1c-4cf5-a712-1d9419ce29a7",
        "https://www.figma.com/api/mcp/asset/b2877216-1708-4093-9b24-dd317cda0a0f",
        "https://www.figma.com/api/mcp/asset/9aced2da-4f81-4e4e-8778-062847044772",
        "https://www.figma.com/api/mcp/asset/65bab626-dfca-4c4a-b4c2-88bbfd89dc1a",
        "https://www.figma.com/api/mcp/asset/709d74fe-3cf0-4682-9bb5-d844c0090a5a",
        "https://www.figma.com/api/mcp/asset/88cdfe85-e178-421b-bc77-6c5814484a5f",
      ],
    },
  },
  {
    title: "Ui/Ux Designing",
    image: "https://www.figma.com/api/mcp/asset/379908af-200f-49a8-9ce8-568def41174e",
    imageClassName: "h-[233.01%] w-full max-w-none top-[-3.53%] left-0",
    nodeId: "1:162",
    overlay: {
      type: "websitePreview",
      nodeId: "1:478",
      assets: [
        "https://www.figma.com/api/mcp/asset/8961270e-75a0-4c9a-a287-c6607c283732",
        "https://www.figma.com/api/mcp/asset/e79acf2e-3ad8-40d0-bf21-899d195f6666",
        "https://www.figma.com/api/mcp/asset/5cc17111-971e-441a-bd04-ff040a570b57",
        "https://www.figma.com/api/mcp/asset/3a9c1340-4325-4f59-8abc-4d5306432887",
        "https://www.figma.com/api/mcp/asset/8b0bfab8-7af8-48c2-92e4-b3e36b7912ff",
        "https://www.figma.com/api/mcp/asset/58df7c8c-59fd-4f08-ab11-8fa98159ad8e",
      ],
    },
  },
  {
    title: "Social Media Marketing",
    image: "https://www.figma.com/api/mcp/asset/81a840da-0c0e-4b9f-8fe5-dffaf757377b",
    imageClassName: "h-[131.11%] w-full max-w-none top-[-5.25%] left-[0.02%]",
    nodeId: "1:172",
    overlay: {
      type: "metaAds",
      nodeId: "1:504",
      assets: [
        "https://www.figma.com/api/mcp/asset/f70b4176-2db8-4a7c-bceb-387e3a7e7f2a",
        "https://www.figma.com/api/mcp/asset/2bd5d089-f043-4bfc-ba23-6929a979a2aa",
        "https://www.figma.com/api/mcp/asset/45545edb-3ba9-4879-b8d2-76dc023bc4f5",
        "https://www.figma.com/api/mcp/asset/e30ef406-a55b-41d3-8674-44fb4e2afb99",
        "https://www.figma.com/api/mcp/asset/68c4decf-82ad-4424-a717-d18d80c8a2cd",
        "https://www.figma.com/api/mcp/asset/d3efe859-9882-40b2-97a4-b0491346693a",
      ],
    },
  },
];

const description =
  "Complete cold email infrastructure management from domain setup to warmup email infrastructure Complete cold email infrastructure management from domain setup to warmup email infrastructure";

function SectionPill() {
  return (
    <div
      className="inline-flex flex-col items-center justify-center rounded-[100px] bg-white/10 px-2 py-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.45),inset_0_1px_2px_rgba(255,255,255,0.32),inset_0_-3px_8px_rgba(0,0,0,0.45)] backdrop-blur-[6px]"
      data-node-id="1:80"
    >
      <div className="flex items-center justify-center rounded-[100px] bg-white px-5 py-2.5">
        <p className="text-[16px] font-bold leading-none text-black">Projects</p>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const activeProject =
    activeProjectIndex === null ? null : projects[activeProjectIndex];

  return (
    <section id="projects" className="overflow-hidden bg-black py-14 text-white sm:py-16 lg:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[119px]">
        <div className="flex w-full max-w-[1202px] flex-col items-center">
          <SectionPill />

          <div className="mt-10 grid w-full grid-cols-1 justify-items-center gap-5 lg:mt-[42px] lg:grid-cols-2 xl:grid-cols-[minmax(0,590px)_minmax(0,590px)] xl:justify-items-start">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                description={description}
                onOpen={() => setActiveProjectIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {activeProject ? (
        <ProjectOverlay
          description={description}
          image={activeProject.image}
          onClose={() => setActiveProjectIndex(null)}
          overlay={activeProject.overlay}
          title={activeProject.title}
        />
      ) : null}
    </section>
  );
}

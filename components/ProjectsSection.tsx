"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectOverlay, type ProjectOverlayData } from "./ProjectOverlay";

type Project = {
  title: string;
  description: string;
  image: string;
  nodeId: string;
  overlay: ProjectOverlayData;
};

const projects: Project[] = [
  {
    title: "LOGO & Branding",
    description:
      "Logo systems, brand identity direction, and polished visual assets built to make each business feel memorable and consistent.",
    image: "/MARKETING/logoandbranding.png",
    nodeId: "1:141",
    overlay: {
      type: "branding",
      nodeId: "1:461",
      assets: {
        leftTop: "/Branding/Artboard%2024%40300x%202.png",
        logoStripA: "/Branding/Artboard%203%40300x%201%20(1).png",
        logoStripB: "/Branding/Artboard%205%40300x%201.png",
        logoStripC: "/Branding/Artboard%206%40300x%201.png",
        logoStripD: "/Branding/Artboard%2033%40300x%201.png",
        leftBottom: "/Branding/Artboard%2033%40300x%201.png",
        rightTop: "/Branding/Artboard%203%40300x%201%20(1).png",
        rightMiddle: "/Branding/Artboard%205%40300x%201.png",
        rightBottom: "/Branding/Artboard%206%40300x%201.png",
      },
    },
  },
  {
    title: "Social Media Posts",
    description:
      "Creative social post designs made for engagement, campaign consistency, and fast-moving brand communication across platforms.",
    image: "/MARKETING/socialMedia.jpg",
    nodeId: "1:151",
    overlay: {
      type: "socialPosts",
      nodeId: "1:443",
      assets: [
        "/Social%20Media%20Posts/Artboard%201%20copy%209%201.png",
        "/Social%20Media%20Posts/Artboard%2014%20copy%203%40300x%203.png",
        "/Social%20Media%20Posts/Artboard%2014%40300x%201.png",
        "/Social%20Media%20Posts/Artboard%2014%40300x%202.png",
        "/Social%20Media%20Posts/Artboard%202%40300x%201.png",
        "/Social%20Media%20Posts/Artboard%2032%20copy%40300x%201.png",
        "/Social%20Media%20Posts/Instagram%20post%20-%201%2013.png",
        "/Social%20Media%20Posts/Instagram%20post%20-%201%207.png",
        "/Social%20Media%20Posts/Post-1%201.png",
        "/Social%20Media%20Posts/poster%201.png",
        "/Social%20Media%20Posts/Poster%205%20(1)%201.png",
        "/Social%20Media%20Posts/Rectangle%20104.png",
      ],
    },
  },
  {
    title: "Ui/Ux Designing",
    description:
      "Modern UI/UX concepts focused on clean layouts, intuitive user flows, and interfaces that feel sharp on every screen.",
    image: "/MARKETING/uiux.jpg",
    nodeId: "1:162",
    overlay: {
      type: "websitePreview",
      nodeId: "1:478",
      assets: [
        "/MARKETING/uiux.jpg",
        "/SITES/Site%201.png",
        "/SITES/Site%202.png",
        "/SITES/Site%203.png",
        "/SITES/Site%204.png",
        "/SITES/Site%206.png",
        
      ],
    },
  },
  {
    title: "Social Media Marketing",
    description:
      "Meta ads and marketing creatives designed to support reach, conversion goals, and stronger performance across paid campaigns.",
    image: "/MARKETING/meta.jpg",
    nodeId: "1:172",
    overlay: {
      type: "metaAds",
      nodeId: "1:504",
      assets: [
        "/MARKETING/Rectangle%20110.png",
        "/MARKETING/Rectangle%20112.png",
        "/MARKETING/Rectangle%20113.png",
        "/MARKETING/Rectangle%20114.png",
        "/MARKETING/Rectangle%20115.png",
        "/MARKETING/Rectangle%20116.png",
      ],
    },
  },
];

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
                onOpen={() => setActiveProjectIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {activeProject ? (
        <ProjectOverlay
          description={activeProject.description}
          image={activeProject.image}
          onClose={() => setActiveProjectIndex(null)}
          overlay={activeProject.overlay}
          title={activeProject.title}
        />
      ) : null}
    </section>
  );
}

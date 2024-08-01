"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { BentoGrid, BentoGridItem } from "./bentoGrid";
import { projects } from "@/lib/data";

function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section
      ref={ref}
      id="projects"
      className="w-full flex flex-col justify-center  scroll-mt-28 mb-28"
    >
      <h2 className="text-4xl text-center mb-8">Main Projects</h2>
      <BentoGrid>
        {projects.map((project) => (
          <BentoGridItem
            key={project.name}
            title={project.name}
            description={project.description}
            projectLink={project.link}
            tech={project.tech}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Projects;

"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";

function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section
      ref={ref}
      id="projects"
      className="w-full flex flex-row justify-center h-screen "
    >
      <h2 className="text-4xl mb-8">Projects</h2>
    </section>
  );
}

export default Projects;

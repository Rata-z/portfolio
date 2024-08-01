import React, { useRef } from "react";
import { techLogos } from "@/lib/data";
import { useInView } from "react-intersection-observer";

function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="w-full flex flex-row gap-[1rem] justify-center flex-wrap">
      {techLogos.map((tech) => (
        <div
          key={tech.name}
          title={tech.name}
          className="text-[2rem] font-bold"
        >
          {tech.icon}
        </div>
      ))}
    </div>
  );
}

export default TechStack;

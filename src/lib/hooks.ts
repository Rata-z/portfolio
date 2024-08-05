"use client";
import { useCurrentSectionContext } from "@/context/currentSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/context/currentSectionContext";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setCurrentSection, timeOfLastClick } = useCurrentSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setCurrentSection(sectionName);
    }
  }, [inView, setCurrentSection, timeOfLastClick, sectionName]);

  return {
    ref,
    inView,
  };
}

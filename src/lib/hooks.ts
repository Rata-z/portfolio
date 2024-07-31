"use client";
import { useCurrentSectionContext } from "@/context/currentSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/context/currentSectionContext";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setCurrentSection } = useCurrentSectionContext();

  useEffect(() => {
    setCurrentSection(sectionName);
  }, [inView, setCurrentSection, sectionName]);

  return {
    ref,
  };
}

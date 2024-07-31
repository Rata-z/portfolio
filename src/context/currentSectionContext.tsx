"use client";
import React, { createContext, useContext, useState } from "react";
import { sections } from "@/components/nav";

export type SectionName = (typeof sections)[number]["name"];
type CurrentSectionContextType = {
  currentSection: SectionName;
  setCurrentSection: React.Dispatch<React.SetStateAction<SectionName>>;
};
export const CurrentSectionContext =
  createContext<CurrentSectionContextType | null>(null);

function CurrentSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentSection, setCurrentSection] = useState<SectionName>("Home");
  return (
    <CurrentSectionContext.Provider
      value={{
        currentSection,
        setCurrentSection,
      }}
    >
      {children}
    </CurrentSectionContext.Provider>
  );
}
export function useCurrentSectionContext() {
  const context = useContext(CurrentSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}

export default CurrentSectionContextProvider;

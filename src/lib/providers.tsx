"use client";

import CurrentSectionContextProvider from "@/context/currentSectionContext";
import { ParallaxProvider } from "react-scroll-parallax";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CurrentSectionContextProvider>
      <ParallaxProvider>{children}</ParallaxProvider>
    </CurrentSectionContextProvider>
  );
}

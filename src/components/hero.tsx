"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";

function Hero() {
  const { ref } = useSectionInView("Home");
  return (
    <section
      ref={ref}
      id="home"
      className="h-screen w-full flex justify-center relative flex-col items-center  "
    >
      <h1 className="text-7xl">Hello, I'm Maciek</h1>
      <span className="absolute bottom-0">arrow Down</span>
    </section>
  );
}

export default Hero;

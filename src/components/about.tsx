"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import TechStack from "./techStack";

function About() {
  const { ref } = useSectionInView("About");
  return (
    <section
      ref={ref}
      id="about"
      className="w-full flex justify-center scroll-mt-32  my-64"
    >
      <div className="flex flex-col gap-3  text-center w-full ">
        <p className="mb-40 text-[1.250rem]">
          I'm a passionate{" "}
          <span className="font-bold ">full-stack JavaScript Developer</span>{" "}
          with a Bachelor's degree in Information Technology. I specialize in
          building dynamic, responsive web and mobile applications using modern
          JavaScript frameworks and libraries. With a strong foundation in both
          front-end and back-end development, I'm dedicated to delivering
          high-quality code and seamless user experiences.
        </p>
        <h3>EXPERIENCE WITH</h3>
        <TechStack />
      </div>
    </section>
  );
}

export default About;

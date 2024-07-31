"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";

function About() {
  const { ref } = useSectionInView("About");
  return (
    <section ref={ref} id="about" className="w-full flex justify-center  ">
      <div className="flex flex-col gap-3 pt-20 text-center w-full h-screen">
        <h2 className="text-4xl mb-8">About Me</h2>
        <p className="mb-40">
          I'm a passionate{" "}
          <span className="font-bold ">full-stack JavaScript Developer</span>{" "}
          with a Bachelor's degree in Information Technology. I specialize in
          building dynamic, responsive web and mobile applications using modern
          JavaScript frameworks and libraries. With a strong foundation in both
          front-end and back-end development, I'm dedicated to delivering
          high-quality code and seamless user experiences.
        </p>
        <h3>Experience with</h3>
        <p>bunch of logos</p>
      </div>
    </section>
  );
}

export default About;

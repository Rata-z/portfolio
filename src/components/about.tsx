"use client";
import { useSectionInView } from "@/lib/hooks";
import React, { useEffect, useState } from "react";
import TechStack from "./techStack";
import { motion, useInView } from "framer-motion";

function About() {
  const { ref, inView } = useSectionInView("About");
  const [playedAnimation, setPlayedAnimation] = useState(false);
  useEffect(() => {
    if (inView) {
      setPlayedAnimation(true);
    }
  }, [inView]);
  return (
    <section
      ref={ref}
      id="about"
      className="w-full flex justify-center scroll-mt-32  my-40"
    >
      <div className="flex flex-col gap-3   text-center w-full ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 15 }}
          animate={playedAnimation ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl text-center mb-8">About Me</h2>
          <p className="mb-40 text-left text-[1.250rem]">
            I'm a passionate{" "}
            <span className="font-bold ">full-stack developer</span> with a
            Bachelor's degree in Information Technology. Since the start of
            2023, I have specialized in building dynamic, responsive web and
            mobile applications using modern JavaScript frameworks and
            libraries. With a strong foundation in both front-end and back-end
            development, I'm dedicated to delivering high-quality code and
            seamless user experiences.
          </p>
        </motion.div>
        <h3>EXPERIENCE WITH</h3>
        <TechStack />
      </div>
    </section>
  );
}

export default About;

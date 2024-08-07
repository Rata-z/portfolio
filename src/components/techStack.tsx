"use client";
import React, { useEffect, useRef, useState } from "react";
import { techLogos } from "@/lib/data";
import { motion } from "framer-motion";

const fadeAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

function TechStack() {
  return (
    <ul className="w-full flex flex-row gap-[0.5rem] justify-center flex-wrap">
      {techLogos.map((tech, index) => (
        <motion.li
          key={tech.name}
          title={tech.name}
          className="text-[2rem] font-bold p-1.5 rounded-full  hover:bg-sky-600 transition-colors "
          variants={fadeAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
        >
          {tech.icon}
        </motion.li>
      ))}
    </ul>
  );
}

export default TechStack;

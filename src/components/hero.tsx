"use client";
import { useSectionInView } from "@/lib/hooks";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import Canvas from "./canvas/canvas";

function Hero() {
  const { ref } = useSectionInView("Home");
  const arrowOpacityVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        duration: 1,
        delay: 2.5,
        when: "beforeChildren",
      },
    },
  };
  return (
    <section
      ref={ref}
      id="home"
      className="h-screen w-full flex justify-center relative flex-col bg-transparent items-center  "
    >
      <h1 className="text-7xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hello,
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I'm Maciej
        </motion.span>
      </h1>
      <motion.div
        className="absolute bottom-16 text-[2rem]"
        initial={{ y: 16 }}
        animate={{
          y: [30, 16, 30],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      >
        <motion.span
          variants={arrowOpacityVariants}
          initial="hidden"
          animate="visible"
        >
          <FaArrowDown />
        </motion.span>
      </motion.div>
    </section>
  );
}

export default Hero;

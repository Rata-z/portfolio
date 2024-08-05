"use client";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import {
  CurrentSectionContext,
  useCurrentSectionContext,
} from "@/context/currentSectionContext";

import { sections } from "@/lib/data";
import { motion } from "framer-motion";

function Nav() {
  const { currentSection, setCurrentSection, setTimeOfLastClick } =
    useCurrentSectionContext();
  return (
    <section className="z-[999] hidden lg:block relative">
      <motion.div
        className="fixed left-8 top-1/2 -translate-y-1/2 w-[3.6rem] h-[18rem] rounded-full border-opacity-70   border-white border-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <ul className="flex h-full flex-col flex-wrap justify-evenly items-center text-[0.75rem]">
          {sections.map((link) => (
            <li key={link.hash}>
              <Link
                className={clsx(
                  "text-gray-500 hover:text-gray-200 transition ",
                  { "text-white": currentSection === link.name }
                )}
                href={link.hash}
                onClick={() => {
                  setCurrentSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export default Nav;

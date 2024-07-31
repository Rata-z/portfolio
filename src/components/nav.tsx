"use client";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import {
  CurrentSectionContext,
  useCurrentSectionContext,
} from "@/context/currentSectionContext";

export const sections = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Contact", hash: "#contact" },
];

function Nav() {
  const { currentSection, setCurrentSection } = useCurrentSectionContext();
  return (
    <section className="z-[999] relative">
      <div className="fixed left-8 top-1/2 -translate-y-1/2 w-[3.6rem] h-[18rem] rounded-full bg-white">
        <ul className="flex h-full flex-col flex-wrap justify-evenly items-center text-[0.8rem]">
          {sections.map((link) => (
            <li key={link.hash}>
              <Link
                className={clsx(
                  "text-gray-600 hover:text-gray-900 transition ",
                  { "text-red-500": currentSection === link.name }
                )}
                href={link.hash}
                onClick={() => setCurrentSection(link.name)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Nav;

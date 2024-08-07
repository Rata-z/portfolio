"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Parallax, useParallax } from "react-scroll-parallax";
import Image from "next/image";
import bitmapa from "../../bitmapa.svg";

function Contact() {
  const { ref, inView } = useSectionInView("Contact");
  const [playedAnimation, setPlayedAnimation] = useState(false);
  useEffect(() => {
    if (inView) {
      setPlayedAnimation(true);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="contact"
      className="flex flex-col justify-center w-full h-[30rem]  pb-28"
    >
      {/* <Parallax
        speed={-100}
        className="absolute overflow-hidden w-full h-screen bg-red-100 flex justify-end left-0 bottom-100"
      >
        <Image
          src={bitmapa}
          alt="grass"
          className=" bg-red-300  overflow-hidden"
        />
      </Parallax> */}
      <h2 className="text-4xl text-center mb-8">Contact Me</h2>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 15 }}
        animate={playedAnimation ? { opacity: 1, y: 0 } : {}}
        className="flex flex-row w-full justify-center gap-10"
      >
        <Link href="mailto:maciekpaw309@gmail.com">
          <Button
            color="primary"
            variant="bordered"
            className="rounded-full p-7 text-lg "
            startContent={<CiMail className="mb-0.5" size={28} />}
          >
            Let's get in touch
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}

export default Contact;

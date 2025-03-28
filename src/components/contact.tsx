"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import bitmapa from "../../bitmapa.svg";
import grass2 from "../../grass2.svg";
import WindmillSvg from "./windmillSvg";

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
      className="flex flex-col justify-center w-full h-[45rem] pb-52"
    >
      <div className="absolute w-screen h-screen flex z-0 items-end justify-end bottom-0 left-0">
        <Image
          src={grass2}
          alt="grass"
          className=" w-full absolute left-0 bottom-[1px] "
        />
        <div className="size-[15%] absolute bottom-20 sm:bottom-32 left-[20%] md:bottom-48 lg:bottom-72 xl:bottom-[45%] 2xl:size-[12%] 2xl:bottom-[55%]">
          <WindmillSvg />
        </div>
        <Image
          src={bitmapa}
          alt="grass"
          className=" w-full absolute left-0 bottom-0 "
        />
      </div>

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
            Let's get in touch!
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}

export default Contact;

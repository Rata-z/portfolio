import { cn } from "@/lib/utils";
import Link from "next/link";
import { TiArrowRight } from "react-icons/ti";
import { techLogos } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[32rem] grid-cols-1  gap-32 max-w-3xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  projectLink,
  tech,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  projectLink?: string;
  tech?: string[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.23 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className={cn(
        "relative row-span-1 rounded-xl group/bento  p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="flex flex-col size-full justify-end gap-3">
        {icon}
        <div className="font-sans font-bold text-[2rem] text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-[1.5rem] dark:text-neutral-300">
          {description}
        </div>
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-row text-[1.5rem] gap-2">
            {tech?.map((techName) => {
              const logo = techLogos.find(
                (logo) => logo.name === techName
              )?.icon;
              return (
                <div key={techName} title={techName}>
                  {logo ? logo : <span>{techName}</span>}
                </div>
              );
            })}
          </div>
          <div className="text-[1rem] ">
            {projectLink && (
              <Link href={projectLink} className="flex-row flex items-center">
                Repository <TiArrowRight className="text-[1.5rem]" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoAngular,
  IoLogoSass,
  IoLogoGithub,
  IoLogoDocker,
  IoLogoFirebase,
} from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiExpo } from "react-icons/si";

type TechLogo = {
  name: string;
  icon: React.ReactElement;
};
type Section = {
  name: string;
  hash: string;
};
type Project = {
  name: string;
  description: string;
  link: string;
  tech: string[];
};

export const sections: Section[] = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Contact", hash: "#contact" },
];

export const techLogos: TechLogo[] = [
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "HTML5", icon: <IoLogoHtml5 /> },
  { name: "CSS", icon: <IoLogoCss3 /> },
  { name: "React", icon: <IoLogoReact /> },
  { name: "Node.js", icon: <IoLogoNodejs /> },
  { name: "Next.js", icon: <RiNextjsFill /> },
  { name: "Angular", icon: <IoLogoAngular /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  { name: "Sass", icon: <IoLogoSass /> },
  { name: "Git", icon: <IoLogoGithub /> },
  { name: "Firebase", icon: <IoLogoFirebase /> },
  { name: "MongoDB", icon: <BiLogoMongodb /> },
  { name: "MySQL", icon: <GrMysql /> },
  { name: "Docker", icon: <IoLogoDocker /> },
  { name: "Expo", icon: <SiExpo /> },
];

export const projects: Project[] = [
  {
    name: "Planter",
    description:
      "A mobile application created to help users track and manage the watering cycles of their plants.",
    link: "https://github.com/Rata-z/Planter",
    tech: ["React", "Firebase", "Expo"],
  },
  {
    name: "PlanterWeb",
    description:
      "A full-stack web application designed for plant enthusiasts to create, explore, and engage with a plant care oriented blogs.",
    link: "https://github.com/Rata-z/PlanterWeb",
    tech: ["Next.js", "Node.js", "MongoDB", "Docker"],
  },
];

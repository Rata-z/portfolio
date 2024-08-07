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
import { SiExpo, SiExpress, SiNestjs } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

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
  presentation: string;
  description: string;
  link: string;
  tech: string[];
  colors: string[];
};

export const sections: Section[] = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Contact", hash: "#contact" },
];

export const techLogos: TechLogo[] = [
  {
    name: "JavaScript",
    icon: <IoLogoJavascript />,
  },
  { name: "HTML5", icon: <IoLogoHtml5 /> },
  { name: "CSS", icon: <IoLogoCss3 /> },
  { name: "React", icon: <IoLogoReact /> },
  { name: "Node.js", icon: <IoLogoNodejs /> },
  { name: "Next.js", icon: <RiNextjsFill /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Nest.js", icon: <SiNestjs /> },
  { name: "Angular", icon: <IoLogoAngular /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  { name: "Sass", icon: <IoLogoSass /> },
  { name: "Git", icon: <IoLogoGithub /> },
  { name: "Firebase", icon: <IoLogoFirebase /> },
  { name: "MongoDB", icon: <BiLogoMongodb /> },
  { name: "MySQL", icon: <GrMysql /> },
  { name: "Docker", icon: <IoLogoDocker /> },
  { name: "Expo", icon: <SiExpo /> },
  { name: "Figma", icon: <FaFigma /> },
];

export const projects: Project[] = [
  {
    name: "Planter",
    presentation:
      "https://raw.githubusercontent.com/Rata-z/PlanterWeb/main/client/src/assets/icons/logoLong.svg",
    description:
      "A mobile application created to help users track and manage the watering cycles of their plants.",
    link: "https://github.com/Rata-z/Planter",
    tech: ["React", "Firebase", "Expo", "Figma"],
    colors: ["#FBA9CB", "#C2D982"],
  },
  {
    name: "PlanterWeb",
    presentation:
      "https://raw.githubusercontent.com/Rata-z/PlanterWeb/main/client/src/assets/icons/logoLongWeb.svg",
    description:
      "A full-stack web application designed for plant enthusiasts to create, explore, and engage with a plant care oriented blogs.",
    link: "https://github.com/Rata-z/PlanterWeb",
    tech: ["Next.js", "Node.js", "MongoDB", "Docker", "Express.js"],
    colors: ["#FBA9CB", "#6cdad3"],
  },
];

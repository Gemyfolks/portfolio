import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import genericImg from "public/generic-image.png";
import portfolioImg from "public/portfolio.png";
import TVNinjaImg from "public/tv-ninja.png";
import NPMImg from "public/npm-logo.png";
import { createElement } from "react";

export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const EXPERIENCE = [
  {
    title: "Computer Engineer",
    location:
      "Alexandria Higher Institute of Engineering and Technology. Alexandria, Egypt",
    description:
      "Graduated with a bachelor's degree in computer engineering. I learned about computer architecture, operating systems, data structures, algorithms, databases, networks, and more.",
    icon: createElement(LuGraduationCap),
    date: "2016 - 2021",
  },
  {
    title: "Software Engineer",
    location: "KasedKhair for general supplies and contracting",
    description:
      "I Worked as a software engineer for a construction company. I Developed an HR system using React, FastAPI, and PostgreSQL. I also developed a desktop app using PyQT, SQLite, and PostgreSQL to manage Company's Equipment in different construction sites.",
    icon: createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Software Engineer",
    location: "nWeave Development",
    description:
      "I'm currently leading a small team of engineers to build the most amazing and capable web apps in the real estate business.",
    icon: createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const PROJECTS = [
  {
    title: "TV Ninja",
    description: `a Discord bot enhancing the entertainment experience within the Discord platform, simplifying content
      discovery, keeping users updated with their favorite shows.`,
    tags: ["Python", "PostgreSQL", "Discord-Bot"],
    imageUrl: TVNinjaImg,
    projectRepo:
      "https://discord.com/oauth2/authorize?client_id=820862005904146463&permissions=139586825280&scope=bot%20applications.commands",
  },
  {
    title: "Easy SRT Creator",
    description: `a Desktop app to streamline SRT subtitle file creation and editing, enhancing subtitling
      efficiency with Undo/Redo capabilities.`,
    tags: ["Python", "PyQT", "PostgreSQL", "Desktop"],
    imageUrl: genericImg,
    projectRepo: "",
  },
  {
    title: "Personal Portfolio",
    description:
      "Welcome to my creative universe! My journey has been a thrilling exploration of innovation, design, and problem-solving.",
    tags: ["React", "Next.js 14", "Tailwind", "Framer Motion"],
    imageUrl: portfolioImg,
    projectRepo: "https://github.com/Gemyfolks/portfolio",
  },
  {
    title: "Orbix",
    description: `A modern utility library for typescript, with zero dependencies. It's a collection of useful functions and types that I use in my projects.`,
    tags: ["Typescript", "NPM", "WIP"],
    imageUrl: NPMImg,
    projectRepo: "https://www.npmjs.com/package/orbix",
  },
] as const;

export const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Solid.js",
  "Solid Start",
  "Svelte",
  "Svelte Kit",
  "Node.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Prisma",
  "Redux",
  "Zustand",
  "Express",
  "Nest.js",
  "PostgreSQL",
  "RabbitMQ",
  "Celery",
  "Python",
  "Django",
  "Fast API",
  "PyQT",
] as const;

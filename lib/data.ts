import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import genericImg from "public/generic-image.png";
import portfolioImg from "public/portfolio.png";
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
      "I Worked as a software engineer for a construction company. I Developed an HR system using React, FastAPI, and PostgreSQL. I also developed a desktop app using PYQT, SQLite, and PostgreSQL to manage Company's Equipment in different construction sites.",
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
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["Python", "PostgreSQL", "Discord-Bot", "TVMDB", "OOP"],
    imageUrl: genericImg,
    projectRepo: "",
  },
  {
    title: "Easy SRT Creator",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Python", "PYQT", "PostgreSQL", "Desktop"],
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
  "PYQT",
] as const;

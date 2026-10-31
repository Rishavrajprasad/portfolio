import React from "react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiDotnet,
  SiNodedotjs,
  SiAngular,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import { FaJava, FaPython, FaGitAlt } from "react-icons/fa6";
import { TbBrandAzure, TbChartBar, TbBrain } from "react-icons/tb";

export interface SkillItem {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Cloud & AI" | "Database" | "DevOps" | "Languages";
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  bgGradient: string; // Tailored squircle background gradient
  iconColor: string; // Icon fill color
  proficiency?: string;
}

// 18 Core Skills matching Rishav's Resume, arranged into 2 balanced rows
export const SKILLS_ROW_1: SkillItem[] = [
  {
    id: "react",
    name: "React.js",
    category: "Frontend",
    icon: SiReact,
    bgGradient: "from-sky-500 to-cyan-600",
    iconColor: "#ffffff",
    proficiency: "Advanced",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    icon: SiNextdotjs,
    bgGradient: "from-zinc-900 via-neutral-900 to-black",
    iconColor: "#ffffff",
    proficiency: "Advanced",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Languages",
    icon: SiTypescript,
    bgGradient: "from-blue-600 to-blue-700",
    iconColor: "#ffffff",
    proficiency: "Advanced",
  },
  {
    id: "python",
    name: "Python",
    category: "Languages",
    icon: FaPython,
    bgGradient: "from-sky-700 via-blue-800 to-amber-500",
    iconColor: "#ffd43b",
    proficiency: "Proficient",
  },
  {
    id: "dotnet",
    name: ".NET / C#",
    category: "Backend",
    icon: SiDotnet,
    bgGradient: "from-purple-700 to-indigo-800",
    iconColor: "#ffffff",
    proficiency: "Enterprise",
  },
  {
    id: "java",
    name: "Java",
    category: "Languages",
    icon: FaJava,
    bgGradient: "from-orange-600 to-red-700",
    iconColor: "#ffffff",
    proficiency: "Proficient",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    icon: SiNodedotjs,
    bgGradient: "from-emerald-600 to-green-700",
    iconColor: "#ffffff",
    proficiency: "Advanced",
  },
  {
    id: "angular",
    name: "Angular",
    category: "Frontend",
    icon: SiAngular,
    bgGradient: "from-rose-600 to-red-700",
    iconColor: "#ffffff",
    proficiency: "Proficient",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    icon: SiTailwindcss,
    bgGradient: "from-cyan-500 to-teal-600",
    iconColor: "#ffffff",
    proficiency: "Advanced",
  },
];

export const SKILLS_ROW_2: SkillItem[] = [
  {
    id: "agentic-ai",
    name: "Agentic AI / RAG",
    category: "Cloud & AI",
    icon: TbBrain,
    bgGradient: "from-violet-600 via-purple-700 to-fuchsia-700",
    iconColor: "#ffffff",
    proficiency: "Multi-Agent Systems",
  },
  {
    id: "fabric",
    name: "MS Fabric",
    category: "Cloud & AI",
    icon: TbChartBar,
    bgGradient: "from-sky-600 via-blue-700 to-indigo-700",
    iconColor: "#ffffff",
    proficiency: "Enterprise Pipelines",
  },
  {
    id: "azure",
    name: "MS Azure",
    category: "Cloud & AI",
    icon: TbBrandAzure,
    bgGradient: "from-blue-500 to-cyan-600",
    iconColor: "#ffffff",
    proficiency: "Cloud Solutions",
  },
  {
    id: "powerbi",
    name: "Power BI",
    category: "Cloud & AI",
    icon: TbChartBar,
    bgGradient: "from-amber-400 via-amber-500 to-yellow-600",
    iconColor: "#111827",
    proficiency: "10+ Dashboards",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    icon: SiMongodb,
    bgGradient: "from-emerald-500 to-green-600",
    iconColor: "#ffffff",
    proficiency: "Proficient",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Database",
    icon: SiPostgresql,
    bgGradient: "from-sky-700 to-slate-800",
    iconColor: "#ffffff",
    proficiency: "Proficient",
  },
  {
    id: "mysql",
    name: "MySQL / SQL",
    category: "Database",
    icon: SiMysql,
    bgGradient: "from-teal-600 via-sky-700 to-blue-800",
    iconColor: "#ffffff",
    proficiency: "Proficient",
  },
  {
    id: "springboot",
    name: "Spring Boot",
    category: "Backend",
    icon: SiSpringboot,
    bgGradient: "from-green-600 to-emerald-700",
    iconColor: "#ffffff",
    proficiency: "Proficient",
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "DevOps",
    icon: FaGitAlt,
    bgGradient: "from-orange-500 to-red-600",
    iconColor: "#ffffff",
    proficiency: "Daily Driver",
  },
];


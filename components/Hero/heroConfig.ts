export interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface FloatingItem {
  id: string;
  title: string;
  subtitle?: string;
  year?: string;
  category: "Education" | "Experience" | "Project" | "Current";
  iconType:
  | "education"
  | "person"
  | "code"
  | "rocket"
  | "sparkles"
  | "briefcase"
  | "folder";
  logo?: string;
  location?: string;
  highlights?: string[];
  skills?: string[];
  // Coordinates as exact percentages of the 1536x1024 scenic image (0-100)
  x: number; // percentage from left (desktop)
  y: number; // percentage from top (desktop)
  mobileX?: number; // percentage from left (mobile portrait)
  mobileY?: number; // percentage from top (mobile portrait)
  pulseColor?: string; // Hex for radar pin
  description?: string;
  link?: string;
  projects?: ProjectItem[];
  alignPopover?: "center" | "left" | "right";
  mobileVisible?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const HERO_CONFIG = {
  // Background Assets (Optimized modern WebP with 90% reduction from 2.6MB to 260KB)
  backgrounds: {
    dayDesktop: "/day-desktop.webp",
    nightDesktop: "/night-desktop.webp",
    dayMobile: "/day-mob.webp",
    nightMobile: "/night-mob.webp",
  },

  // Personal Info & Hero Copy
  personal: {
    name: "Rishav",
    avatar: "👨‍💻",
    greeting: "Hey, I'm Rishav",
    role: "Software Engineer",
    headingLines: [
      "Building softwares that",
      "feels effortless.",
    ],
    highlightPhrase: "feels effortless.",
    subtitle:
      "Software Engineer. Engineering The Future Through Code",
    resumeUrl: "/resume.pdf",
    location: "Ranchi, India",
    statusBadge: "OPEN TO WORK 2026",
  },

  // Top Bar elements configuration
  topBar: {
    showStatusBadge: true,
  },

  // Floating Landmark Pins & Badges on the scenic landscape
  floatingItems: [
    {
      id: "infosys",
      title: "Infosys",
      subtitle: "Specialist Programmer",
      year: "Currently Working",
      category: "Experience",
      iconType: "briefcase",
      logo: "/infosys.jpg",
      location: "Hyderabad",
      x: 60,
      y: 64,
      mobileX: 48,
      mobileY: 62,
      pulseColor: "#007cc3", // Infosys brand cyan/blue
      description:
        "Specialist Programmer building enterprise React + .NET solutions and automating data workflows with Microsoft Fabric & Multi-Agent AI.",
      skills: ["React", ".NET", "Fabric", "RAG"],
      link: "https://www.infosys.com",
      alignPopover: "center",
      mobileVisible: false,
    },
  ] as FloatingItem[],

  // Navigation Links
  navigation: [
    { label: "Home", href: "#hero", id: "home" },
    { label: "Journey", href: "#journey", id: "journey" },
    { label: "Project", href: "#project", id: "project" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Contact", href: "#contact", id: "contact" },
  ] as NavItem[],
};

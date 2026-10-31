export interface Project {
  id: string;
  title: string;
  headline: string;
  category: string;
  platformTag: string; // e.g. "2025 · Web · P2P"
  year: string;
  status: "Live" | "Open Source" | "Research" | "Production";
  shortSummary: string;
  description: string;
  metrics?: { label: string; value: string };
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  accentColor: string;
  visualType: "fileflow" | "loctrack" | "aivision" | "ecommerce";
  rotation: number;
  cardBg: string;
  cardBorder: string;
}

export const PROJECTS: Project[] = [
  {
    id: "fileflow",
    title: "FileFlow",
    headline: "Instant QR-Code File Sharing Engine",
    category: "Full Stack Web Platform",
    platformTag: "2025 · Web · P2P",
    year: "2025",
    status: "Live",
    shortSummary: "Instant QR-code file sharing engine without logins or size friction.",
    description:
      "A streamlined peer file transfer engine that converts uploads into instantaneous QR codes and temporary shareable links, enabling frictionless cross-device transfers without logins or installations.",
    metrics: { label: "Transfer Protocol", value: "Zero-friction P2P" },
    tech: ["React", "Node.js", "Express", "MongoDB", "Multer", "Tailwind CSS"],
    liveUrl: "https://fileflow-7qyv.onrender.com/",
    githubUrl: "https://github.com/Rishavrajprasad",
    accentColor: "#38bdf8",
    visualType: "fileflow",
    rotation: -2,
    cardBg: "bg-[#d8eaf8]",
    cardBorder: "border-[#bfdaf1]",
  },
  {
    id: "loctrack",
    title: "LocTrack",
    headline: "Low-Latency Real-Time Telemetry & GIS",
    category: "Real-Time Telemetry",
    platformTag: "2025 · Telemetry · Live",
    year: "2025",
    status: "Live",
    shortSummary: "Sub-20ms location streaming platform with dynamic map overlays.",
    description:
      "A high-frequency location streaming platform built for real-time tracking. Leverages bi-directional WebSockets to broadcast live geospatial coordinates onto dynamic map overlays with sub-20ms latency.",
    metrics: { label: "WebSocket Latency", value: "< 20ms Realtime" },
    tech: ["React", "Node.js", "Socket.io", "Leaflet Maps", "Tailwind CSS"],
    liveUrl: "https://realtime-loctrack.onrender.com/",
    githubUrl: "https://github.com/Rishavrajprasad",
    accentColor: "#f472b6",
    visualType: "loctrack",
    rotation: 1.5,
    cardBg: "bg-[#f9d7e5]",
    cardBorder: "border-[#f2bfd5]",
  },
  {
    id: "aivision",
    title: "CropGuard AI",
    headline: "Deep Learning Crop Pathology Classifier",
    category: "Computer Vision & AI",
    platformTag: "2024 · AI · Computer Vision",
    year: "2024",
    status: "Research",
    shortSummary: "Deep learning foliar pathology scanner with 94.8% validation accuracy.",
    description:
      "A computer vision pipeline utilizing a modified LeNet-5 convolutional neural network architecture to diagnose agricultural foliar diseases from raw leaf imagery, classifying plant pathogens with high validation accuracy.",
    metrics: { label: "Model Accuracy", value: "94.8% Validation" },
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask", "NumPy"],
    liveUrl:
      "https://www.kaggle.com/code/rishavrajprasad800/leaf-desease-detection",
    githubUrl: "https://github.com/Rishavrajprasad",
    accentColor: "#fb923c",
    visualType: "aivision",
    rotation: -1.2,
    cardBg: "bg-[#fde1cb]",
    cardBorder: "border-[#f7c8a6]",
  },
  {
    id: "ecommerce",
    title: "GlamHub",
    headline: "Multi-Vendor Salon & Beauty Marketplace",
    category: "Mobile Architecture & Commerce",
    platformTag: "2024 · Mobile · Flutter",
    year: "2024",
    status: "Open Source",
    shortSummary: "A multi-vendor salon appointment & booking system with Stripe payments.",
    description:
      "A cross-platform mobile marketplace application connecting clients with beauty salons. Features real-time appointment booking, vendor management portals, Google Maps salon discovery, and secure Stripe payments.",
    metrics: { label: "Architecture", value: "Multi-Tenant Cloud" },
    tech: ["Flutter", "Firebase", "Dart", "Stripe API", "Google Maps SDK"],
    liveUrl: "https://github.com/Rishavrajprasad/E-commerce-flutter",
    githubUrl: "https://github.com/Rishavrajprasad/E-commerce-flutter",
    accentColor: "#84cc16",
    visualType: "ecommerce",
    rotation: 2.2,
    cardBg: "bg-[#e2f3c9]",
    cardBorder: "border-[#cce7a3]",
  },
];

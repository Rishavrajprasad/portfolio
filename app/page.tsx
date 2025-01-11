"use client";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { RiTerminalBoxFill } from "react-icons/ri";
import MatrixRain from "@/components/MatrixRain";
import Typewriter from "@/components/Typewriter";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono relative overflow-hidden">
      {/* Animated Matrix Rain Background */}
      <div className="fixed inset-0 opacity-20 z-0">
        <MatrixRain />

        {/* <ParticleSystem /> */}
      </div>

      {/* Glitched Header */}
      <header className="fixed top-0 w-full z-50 border-b border-green-500/30 backdrop-blur-sm">
        <nav className="flex justify-between items-center p-4 text-sm glitch-text">
          <div className="flex items-center space-x-6">
            <span className="text-xl font-bold animate-pulse">[SYS:READY]</span>
            <div className="hidden md:flex space-x-4">
              {["ABOUT", "EDUCATION", "SKILLS", "PROJECTS", "CONTACT"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white hover:bg-green-500/20 px-3 py-1 rounded transition-all
                            relative group overflow-hidden"
                  >
                    <span className="relative z-10">{`> ${item}`}</span>
                    <div
                      className="absolute inset-0 w-0 group-hover:w-full transition-all duration-300 
                                bg-green-500/20"
                    ></div>
                  </a>
                )
              )}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="animate-blink">█</span>
            <span className="text-xs opacity-70">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </span>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20 container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative z-10">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center relative">
          <div className="w-full space-y-12">
            <div className="space-y-6 max-w-3xl">
              <div className="typewriter-effect space-y-4">
                <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter flex flex-wrap sm:flex-nowrap items-center">
                  <span className="text-white whitespace-nowrap">
                    &gt; IDENTIFY:{" "}
                  </span>
                  <Typewriter
                    text="RISHAV"
                    className="relative text-green-500 sm:ml-2 tracking-wider"
                  />
                </h1>
                <h2 className="text-base sm:text-2xl md:text-3xl text-green-400/80">
                  <Typewriter
                    text="FULL_STACK_DEVELOPER.initialize()"
                    delay={50}
                  />
                </h2>
              </div>

              <div className="space-y-4 terminal-text text-sm sm:text-lg border-l-2 border-green-500/50 pl-4">
                <p className="flex items-center space-x-4">
                  <span className="text-green-400 font-bold">[STATUS]</span>
                  <span className="typing-animation">
                    Building digital experiences
                  </span>
                </p>
                <p className="flex items-center space-x-4">
                  <span className="text-green-400 font-bold">[LOCATION]</span>
                  <span>RANCHI, JHARKHAND</span>
                </p>
                <p className="flex items-center space-x-4">
                  <span className="text-green-400 font-bold">[MISSION]</span>
                  <span>Transforming ideas into reality</span>
                </p>
              </div>

              <div className="flex flex-row gap-4 pt-6">
                <a
                  href="/resume.pdf"
                  download="Rishav_Resume.pdf"
                  className="group relative px-6 py-2 bg-transparent overflow-hidden border-2 border-green-500 hover:border-green-400 transition-colors rounded-full text-sm sm:text-base sm:px-8 sm:py-3"
                >
                  <div className="absolute inset-0 w-0 bg-green-500/20 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative font-bold text-green-500 group-hover:text-green-400">
                    DOWNLOAD_CV.exe
                  </span>
                </a>
                <button className="group relative px-6 py-2 bg-green-500 hover:bg-green-400 transition-colors rounded-full text-sm sm:text-base sm:px-8 sm:py-3">
                  <span
                    className="relative font-bold text-black"
                    onClick={() => (window.location.href = "#contact")}
                  >
                    INITIATE_CONTACT
                  </span>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/Rishavrajprasad"
                className="text-2xl hover:text-green-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rishavrajprasad/"
                className="text-2xl hover:text-green-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://leetcode.com/rishavrajprasad/"
                className="text-2xl hover:text-green-400 transition-colors"
              >
                <SiLeetcode />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="my-20">
          <div className="terminal-window border border-green-500/30 hover:border-green-500 transition-all duration-300">
            <div className="terminal-header">
              <div className="terminal-title">about.md</div>
              <div className="terminal-controls">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="terminal-body p-6">
              <div className="space-y-4 text-sm sm:text-base">
                <p className="typing-animation">
                  <span className="text-green-400">$</span> cat about.md
                </p>
                <div className="pl-4 space-y-4">
                  <p>
                    Greetings! I&apos;m a passionate Full Stack Developer with
                    expertise in modern web technologies.
                  </p>
                  <p>
                    With a strong foundation in both frontend and backend
                    development, I specialize in creating scalable and efficient
                    web applications.
                  </p>
                  <p>
                    My journey in tech began with a curiosity for
                    problem-solving and has evolved into a career focused on
                    delivering innovative solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent my-8" />

        {/* Skills Section */}
        <section id="skills" className="my-20">
          <div className="terminal-window border border-green-500/30 hover:border-green-500 transition-all duration-300">
            <div className="terminal-header">
              <div className="terminal-title">skills.sh</div>
              <div className="terminal-controls">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="terminal-body p-6">
              <div className="space-y-4">
                <p>
                  <span className="text-green-400">$</span> scanning_skills...
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "React",
                    "Node.js",
                    "TypeScript",
                    "Python",
                    "MongoDB",
                    "MySQL",
                    "AWS",
                    "Java",
                    "Next.js",
                    "Express",
                    "Git",
                    "REST APIs",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="border border-green-500/30 rounded px-4 py-2 text-center hover:bg-green-500 hover:text-black transition-all duration-300"
                    >
                      [ {skill} ]
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent my-8" />

        {/* Projects as Hacked Database Entries */}
        <section id="projects" className="my-20">
          <div className="grid gap-8">
            {[
              {
                title: "File-Flow A file sharing platform",
                description:
                  "A streamlined file sharing platform that generates instant QR codes and shareable links for uploaded files, making file sharing quick and effortless.",
                tech: [
                  "React",
                  "Node.js",
                  "MongoDB",
                  "Express",
                  "Tailwind",
                  "Multer",
                ],
                link: "https://fileflow-7qyv.onrender.com/",
              },
              {
                title: "Real Time Location Sharing",
                description:
                  "A real-time location sharing platform that allows users to share their current location with others in real-time.",
                tech: ["React", "Node.js", "Socket.io", "Tailwind"],
                link: "https://realtime-loctrack.onrender.com/",
              },
              {
                title: "Leaf Disease Detection using LeNet-5",
                description:
                  "A machine learning model that can detect the disease of a leaf and classify it into different categories using a LeNet-5 model.",
                tech: [
                  "Python",
                  "TensorFlow",
                  "Keras",
                  "Flask",
                  "OpenCV",
                  "Numpy",
                  "Pandas",
                  "Matplotlib",
                  "Seaborn",
                ],
                link: "https://www.kaggle.com/code/rishavrajprasad800/leaf-desease-detection",
              },
              {
                title: "A Multi-Vendor E-Commerce Saloon Application",
                description:
                  "A multi-vendor e-commerce salon application built with Flutter and Firebase that enables users to book beauty services and purchase products from multiple vendors. Features include real-time appointment scheduling, vendor management, and secure payments.",
                tech: ["Flutter", "Firebase", "Dart", "Stripe", "Google Maps"],
                link: "https://github.com/Rishavrajprasad/E-commerce-flutter",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="project-card p-4 sm:p-6 border border-green-500/30 hover:border-green-500 transition-all duration-300 relative rounded-lg"
              >
                <div className="glitch-overlay"></div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  {`[${project.title}]`}
                </h3>
                <p className="cyber-description mb-4 text-sm sm:text-base">
                  {project.description}
                </p>
                <div className="tech-stack flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="tech-tag px-2 py-1 border border-green-500/50 text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block hover:text-black hover:bg-green-500 transition-all duration-300 cursor-pointer px-4 py-2 border border-green-500/50 hover:border-green-500 relative z-10"
                >
                  <span className="flex items-center gap-2">
                    <RiTerminalBoxFill /> View Project
                  </span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent my-8" />

        {/* Education Section */}
        <section id="education" className="my-20">
          <div className="terminal-window border border-green-500/30 hover:border-green-500 transition-all duration-300">
            <div className="terminal-header">
              <div className="terminal-title">education.log</div>
              <div className="terminal-controls">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="terminal-body p-6">
              <div className="space-y-4">
                <p className="typing-animation">
                  <span className="text-green-400">$</span> cat education.log
                </p>
                <div className="pl-4 space-y-8">
                  {/* B.Tech Entry */}
                  <div className="education-entry border-l-2 border-green-500/50 pl-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-base sm:text-lg">
                        [2021 - 2025]
                      </span>
                      <span className="text-lg sm:text-xl font-bold">
                        Bachelor of Technology
                      </span>
                    </div>
                    <p className="text-green-400/80 text-sm sm:text-base">
                      Computer Science & Engineering
                    </p>
                    <p className="text-xs sm:text-sm opacity-70">
                      Birla Institute of Technology, Mesra
                    </p>
                    <div className="mt-3 space-y-2">
                      <p className="text-base">CGPA: 8.5/10</p>
                      <p className="text-sm opacity-80">Key Achievements:</p>
                      <ul className="list-disc pl-5 text-sm space-y-1 opacity-70">
                        <li>Data Structures & Algorithms</li>
                        <li>Object-Oriented Programming</li>
                        <li>Database Management Systems</li>
                        <li>Computer Networks</li>
                        <li>Operating Systems</li>
                      </ul>
                      <p className="text-sm opacity-80 mt-2">
                        Notable Projects:
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-1 opacity-70">
                        <li>Developed a full-stack e-commerce platform</li>
                        <li>Created a real-time chat application</li>
                        <li>
                          Implemented a machine learning model for image
                          classification
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Diploma */}
                  <div className="education-entry border-l-2 border-green-500/50 pl-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-base sm:text-lg">
                        [2018 - 2021]
                      </span>
                      <span className="text-lg sm:text-xl font-bold">
                        Diploma in Computer Science & Engineering
                      </span>
                    </div>
                    <p className="text-green-400/80 text-sm sm:text-base">
                      Computer Science & Engineering
                    </p>
                    <p className="text-xs sm:text-sm opacity-70">
                      Jharkhand University of Technology, Ranchi
                    </p>
                    <div className="mt-3 space-y-2">
                      <p className="text-base">Percentage: 85%</p>
                    </div>
                  </div>

                  {/* Class X Entry */}
                  <div className="education-entry border-l-2 border-green-500/50 pl-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-base sm:text-lg">
                        [2017 - 2018]
                      </span>
                      <span className="text-lg sm:text-xl font-bold">
                        Secondary Education (X)
                      </span>
                    </div>
                    <p className="text-green-400/80 text-sm sm:text-base">
                      ICSE Board
                    </p>
                    <p className="text-xs sm:text-sm opacity-70">
                      Don Bosco School, Ranchi
                    </p>
                    <div className="mt-3 space-y-2">
                      <p className="text-base">Percentage: 76.8%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent my-8" />

        {/* Contact Section */}
        <section id="contact" className="my-20 mb-32">
          <div className="terminal-window border border-green-500/30 hover:border-green-500 transition-all duration-300">
            <div className="terminal-header">
              <div className="terminal-title">connect.sh</div>
              <div className="terminal-controls">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="terminal-body p-6">
              <div className="space-y-6">
                <p className="typing-animation">
                  <span className="text-green-400">$</span>{" "}
                  ./initialize_connection.sh
                </p>

                <div className="space-y-8">
                  <h3 className="text-xl font-bold text-green-400">
                    [CONNECT_WITH_ME]
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href="https://github.com/Rishavrajprasad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 border border-green-500/30 hover:border-green-500 hover:bg-green-500 hover:text-black transition-all duration-300"
                    >
                      <FaGithub className="text-2xl" />
                      <div>
                        <p className="font-bold">GitHub</p>
                        <p className="text-sm opacity-70 group-hover:opacity-100">
                          Check out my repositories
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/rishavrajprasad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 border border-green-500/30 hover:border-green-500 hover:bg-green-500 hover:text-black transition-all duration-300"
                    >
                      <FaLinkedin className="text-2xl" />
                      <div>
                        <p className="font-bold">LinkedIn</p>
                        <p className="text-sm opacity-70 group-hover:opacity-100">
                          Let&apos;s connect professionally
                        </p>
                      </div>
                    </a>

                    <a
                      href="mailto:rishavrajprasad800@gmail.com"
                      className="flex items-center space-x-4 p-3 border border-green-500/30 hover:border-green-500 hover:bg-green-500 hover:text-black transition-all duration-300"
                    >
                      <FaEnvelope className="text-2xl" />
                      <div>
                        <p className="font-bold">Email</p>
                        <p className="text-sm opacity-70 group-hover:opacity-100">
                          rishavrajprasad800@gmail.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://leetcode.com/rishavrajprasad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 border border-green-500/30 hover:border-green-500 hover:bg-green-500 hover:text-black transition-all duration-300"
                    >
                      <SiLeetcode className="text-2xl" />
                      <div>
                        <p className="font-bold">LeetCode</p>
                        <p className="text-sm opacity-70 group-hover:opacity-100">
                          View my problem-solving skills
                        </p>
                      </div>
                    </a>
                  </div>

                  <p className="text-sm opacity-70 text-center pt-4">
                    Feel free to reach out through any of these platforms!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent my-8" />

        {/* Footer/Copyright Section */}
        <footer className="text-center py-8  ">
          <div className="space-y-2">
            <div className="text-sm">
              <span className="text-green-400">$</span> Made with ☕, 💻, and a
              touch of genius.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

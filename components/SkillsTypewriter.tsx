import { useState, useEffect } from "react";

interface SkillsTypewriterProps {
  skills: string[];
}

export default function SkillsTypewriter({ skills }: SkillsTypewriterProps) {
  const [displayedSkills, setDisplayedSkills] = useState<string[]>([]);
  const [scanning, setScanning] = useState("");

  useEffect(() => {
    const scanText = "$ scanning_skills...";
    let currentIndex = 0;

    // First type out "scanning_skills..."
    const scanningInterval = setInterval(() => {
      if (currentIndex < scanText.length) {
        setScanning((prev) => prev + scanText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(scanningInterval);
        // Start displaying skills
        let skillIndex = 0;
        const skillsInterval = setInterval(() => {
          if (skillIndex < skills.length) {
            setDisplayedSkills((prev) => [...prev, skills[skillIndex]]);
            skillIndex++;
          } else {
            clearInterval(skillsInterval);
          }
        }, 200); // Adjust timing between skills
      }
    }, 50); // Adjust typing speed

    return () => {
      clearInterval(scanningInterval);
    };
  }, [skills]);

  return (
    <div className="skill-output">
      <span className="text-green-400 text-sm sm:text-base">{scanning}</span>
      <div className="pl-4 mt-2 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 pb-4 pr-4">
        {displayedSkills.map((skill, index) => (
          <div
            key={index}
            className="skill-tag text-xs sm:text-sm hover:bg-green-500 hover:text-black transition-all duration-300 cursor-pointer p-2 rounded-md"
          >
            {`[ ${skill} ]`}
          </div>
        ))}
      </div>
    </div>
  );
}

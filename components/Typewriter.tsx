"use client";
import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
  className?: string;
}

export default function Typewriter({
  text,
  delay = 100,
  className = "",
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const type = async () => {
      for (let i = 0; i <= text.length; i++) {
        setDisplayText(text.substring(0, i));
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
      // Hide cursor after typing is complete
      setShowCursor(false);
    };

    type();

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span className="animate-blink">█</span>}
    </span>
  );
}

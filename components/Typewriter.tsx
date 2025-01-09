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

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      if (displayText.length < text.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
          type();
        }, delay);
      }
    };

    type();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, delay, displayText]);

  return <span className={className}>{displayText}</span>;
}

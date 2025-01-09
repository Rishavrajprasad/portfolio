"use client";
import { useEffect } from "react";

import { useRef } from "react";

export default function WavePattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let offset = 0;

    function draw() {
      ctx!.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      ctx!.beginPath();
      ctx!.strokeStyle = "#4a9eff";
      ctx!.lineWidth = 2;

      for (let i = 0; i < canvas!.width; i++) {
        const y = Math.sin(i * 0.02 + offset) * 50 + canvas!.height / 2;
        if (i === 0) {
          ctx!.moveTo(i, y);
        } else {
          ctx!.lineTo(i, y);
        }
      }

      ctx!.stroke();
      offset += 0.05;
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}

"use client";
import React, { useRef, useEffect } from "react";

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Star[] = [];
    const numStars = 200;

    class Star {
      x: number;
      y: number;
      z: number;

      constructor() {
        this.x = Math.random() * canvas!.width - canvas!.width / 2;
        this.y = Math.random() * canvas!.height - canvas!.height / 2;
        this.z = Math.random() * 1000;
      }

      update() {
        this.z -= 10;
        if (this.z <= 0) {
          this.z = 1000;
          this.x = Math.random() * canvas!.width - canvas!.width / 2;
          this.y = Math.random() * canvas!.height - canvas!.height / 2;
        }
      }

      draw() {
        const x = (this.x / this.z) * 100 + canvas!.width / 2;
        const y = (this.y / this.z) * 100 + canvas!.height / 2;
        const size = (1 - this.z / 1000) * 3;

        ctx!.beginPath();
        ctx!.fillStyle = "white";
        ctx!.arc(x, y, size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push(new Star());
    }

    function animate() {
      ctx!.fillStyle = "black";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}

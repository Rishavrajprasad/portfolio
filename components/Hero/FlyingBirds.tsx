"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface BirdAgent {
  x: number;
  y: number;
  vx: number;
  vy: number;
  speed: number;
  maxSpeed: number;
  heading: number; // in radians
  targetX: number;
  targetY: number;
  scale: number;
  wingPhase: number;
  wingSpeed: number;
  isGliding: boolean;
  glideCooldown: number;
  flapCooldown: number;
  changeTargetTimer: number;
}

export function FlyingBirds() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Resize handling with device pixel ratio for retina crispness
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Helper: Pick a random destination anywhere in the sky & mountain zone (upper 45% of screen)
    const getRandomSkyPoint = () => ({
      x: width * 0.05 + Math.random() * (width * 0.9),
      y: height * 0.06 + Math.random() * (height * 0.40),
    });

    // Create 5 autonomous bird agents with varied depths, speeds, and trajectories
    const BIRDS_CONFIG = [
      { scale: 1.15, maxSpeed: 1.8, altitudeFactor: 0.18 }, // Lead bird (closer, prominent)
      { scale: 0.95, maxSpeed: 2.1, altitudeFactor: 0.12 }, // Agile mid-altitude bird
      { scale: 0.85, maxSpeed: 1.6, altitudeFactor: 0.26 }, // Wandering explorer
      { scale: 0.75, maxSpeed: 2.3, altitudeFactor: 0.32 }, // Fast swooper near ridges
      { scale: 0.60, maxSpeed: 1.4, altitudeFactor: 0.09 }, // High thermal soaring distant bird
    ];

    const birds: BirdAgent[] = BIRDS_CONFIG.map((cfg, index) => {
      const initialPos = {
        x: width * (0.15 + (index * 0.18)),
        y: height * (cfg.altitudeFactor + (Math.random() * 0.08 - 0.04)),
      };
      const initialTarget = getRandomSkyPoint();
      const initialHeading = Math.random() * Math.PI * 2; // completely random initial direction!

      return {
        x: initialPos.x,
        y: initialPos.y,
        vx: Math.cos(initialHeading) * cfg.maxSpeed * 0.7,
        vy: Math.sin(initialHeading) * cfg.maxSpeed * 0.7,
        speed: cfg.maxSpeed * 0.8,
        maxSpeed: cfg.maxSpeed,
        heading: initialHeading,
        targetX: initialTarget.x,
        targetY: initialTarget.y,
        scale: cfg.scale,
        wingPhase: Math.random() * Math.PI * 2,
        wingSpeed: 0.14 + Math.random() * 0.06,
        isGliding: false,
        glideCooldown: 80 + Math.random() * 120,
        flapCooldown: 120 + Math.random() * 180,
        changeTargetTimer: 180 + Math.random() * 240,
      };
    });

    // Main animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark =
        document.documentElement.classList.contains("dark") ||
        resolvedTheme === "dark";

      // Aesthetic styling based on theme
      const birdColor = isDark ? "rgba(226, 232, 240, 0.75)" : "rgba(30, 41, 59, 0.82)";
      ctx.fillStyle = birdColor;
      if (isDark) {
        ctx.shadowColor = "rgba(255, 255, 255, 0.4)";
        ctx.shadowBlur = 5;
      } else {
        ctx.shadowColor = "rgba(0, 0, 0, 0.25)";
        ctx.shadowBlur = 3;
      }

      // Update and draw each autonomous bird
      for (let i = 0; i < birds.length; i++) {
        const b = birds[i];

        // 1. Unpredictable Target Selection & Wandering
        b.changeTargetTimer--;
        const distToTarget = Math.hypot(b.targetX - b.x, b.targetY - b.y);

        if (distToTarget < 90 || b.changeTargetTimer <= 0) {
          const nextTarget = getRandomSkyPoint();
          b.targetX = nextTarget.x;
          b.targetY = nextTarget.y;
          b.changeTargetTimer = 180 + Math.random() * 280; // change mind every 3-7 seconds
        }

        // Soft screen bounds enforcement (steer gently back inside sky arena)
        const minX = width * 0.02;
        const maxX = width * 0.98;
        const minY = height * 0.04;
        const maxY = height * 0.48;

        if (b.x < minX) b.targetX = width * 0.35 + Math.random() * 100;
        if (b.x > maxX) b.targetX = width * 0.65 - Math.random() * 100;
        if (b.y < minY) b.targetY = height * 0.20 + Math.random() * 50;
        if (b.y > maxY) b.targetY = height * 0.15 - Math.random() * 50;

        // 2. Smooth Organic Steering towards target (Boids/Steering behavior)
        const dx = b.targetX - b.x;
        const dy = b.targetY - b.y;
        const desiredHeading = Math.atan2(dy, dx);

        // Calculate shortest angular distance
        let angleDiff = desiredHeading - b.heading;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;

        // Natural smooth turning rate (birds turn gradually in graceful curves)
        const turnRate = 0.022;
        b.heading += angleDiff * turnRate;

        // Add subtle atmospheric wind jitter
        b.heading += (Math.sin(Date.now() * 0.001 + i * 2) * 0.003);

        // 3. Gliding vs Flapping Cadence
        if (b.isGliding) {
          b.glideCooldown--;
          if (b.glideCooldown <= 0) {
            b.isGliding = false;
            b.flapCooldown = 100 + Math.random() * 140; // Flap for 1.5 - 2.5s
          }
        } else {
          b.flapCooldown--;
          b.wingPhase += b.wingSpeed;
          if (b.flapCooldown <= 0) {
            b.isGliding = true;
            b.glideCooldown = 70 + Math.random() * 120; // Glide for 1.2 - 2.0s
          }
        }

        // Speed adjustment: slightly faster when flapping, gentle slowdown when gliding
        const targetSpeed = b.isGliding ? b.maxSpeed * 0.8 : b.maxSpeed * 1.05;
        b.speed += (targetSpeed - b.speed) * 0.05;

        // 4. Update Position
        b.vx = Math.cos(b.heading) * b.speed;
        b.vy = Math.sin(b.heading) * b.speed;
        b.x += b.vx;
        b.y += b.vy;

        // 5. Render Authentic Silhouette Vector
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(b.heading);
        ctx.scale(b.scale, b.scale);

        // Wing flap amplitude: sinusoidal when flapping, outstretched locked when gliding
        const flapAmp = b.isGliding ? 0.15 : Math.sin(b.wingPhase);

        ctx.beginPath();
        // Head and beak (pointing in direction of movement +X)
        ctx.moveTo(11, 0);

        // Left Wing (curved top arch down to tip, then trailing edge back to torso)
        const leftWingTipY = -14 + flapAmp * 8;
        const leftWingTipX = -2 - flapAmp * 3;
        ctx.quadraticCurveTo(3, -7, leftWingTipX, leftWingTipY);
        ctx.quadraticCurveTo(0, -6, -4, -1);

        // Tail feathers (narrow taper at rear -X)
        ctx.lineTo(-10, 0);

        // Right Wing (mirrored curved arch to tip and trailing edge)
        const rightWingTipY = 14 - flapAmp * 8;
        const rightWingTipX = -2 - flapAmp * 3;
        ctx.lineTo(-4, 1);
        ctx.quadraticCurveTo(0, 6, rightWingTipX, rightWingTipY);
        ctx.quadraticCurveTo(3, 7, 11, 0);

        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-10"
      aria-hidden="true"
    />
  );
}

"use client";

import { useEffect, useRef } from "react";

type Flake = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
  phase: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
};

const FLAKE_COUNT = 35;

function createFlake(width: number, height: number, startInView: boolean): Flake {
  return {
    x: Math.random() * width,
    y: startInView ? Math.random() * height : -12,
    radius: 2.5 + Math.random() * 3,
    speed: 10 + Math.random() * 13,
    drift: 5 + Math.random() * 10,
    phase: Math.random() * Math.PI * 2,
    rotation: Math.random() * Math.PI,
    rotationSpeed: (Math.random() - 0.5) * 0.3,
    opacity: 0.48 + Math.random() * 0.42,
  };
}

function drawCrystal(context: CanvasRenderingContext2D, flake: Flake) {
  context.save();
  context.translate(flake.x, flake.y);
  context.rotate(flake.rotation);
  context.strokeStyle = `rgba(255, 255, 255, ${flake.opacity})`;
  context.lineWidth = 0.8;
  context.lineCap = "round";
  context.shadowColor = "rgba(255, 255, 255, 0.7)";
  context.shadowBlur = 3;

  for (let arm = 0; arm < 6; arm += 1) {
    const angle = (arm * Math.PI) / 3;
    const endX = Math.cos(angle) * flake.radius;
    const endY = Math.sin(angle) * flake.radius;

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(endX, endY);
    context.stroke();

    for (const distance of [0.48, 0.72]) {
      const branchX = Math.cos(angle) * flake.radius * distance;
      const branchY = Math.sin(angle) * flake.radius * distance;
      const branchLength = flake.radius * 0.24;

      for (const side of [-1, 1]) {
        const branchAngle = angle + side * (Math.PI / 3);
        context.beginPath();
        context.moveTo(branchX, branchY);
        context.lineTo(
          branchX + Math.cos(branchAngle) * branchLength,
          branchY + Math.sin(branchAngle) * branchLength,
        );
        context.stroke();
      }
    }
  }

  context.restore();
}

export default function Snowfall() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let lastTime = 0;
    let frame = 0;
    let flakes: Flake[] = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      flakes = Array.from({ length: FLAKE_COUNT }, () => createFlake(width, height, true));

      if (reducedMotion) {
        draw();
      }
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      for (const flake of flakes) drawCrystal(context, flake);
    };

    const animate = (time: number) => {
      if (document.hidden) {
        frame = 0;
        return;
      }

      const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0;
      lastTime = time;
      context.clearRect(0, 0, width, height);

      for (const flake of flakes) {
        flake.y += flake.speed * delta;
        flake.x += Math.sin(time / 1800 + flake.phase) * flake.drift * delta;
        flake.rotation += flake.rotationSpeed * delta;

        if (flake.y > height + flake.radius) {
          Object.assign(flake, createFlake(width, height, false));
        }

        drawCrystal(context, flake);
      }

      frame = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (reducedMotion || document.hidden || frame) return;
      lastTime = 0;
      frame = window.requestAnimationFrame(animate);
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      } else {
        start();
      }
    };

    resize();
    start();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="snowfall" aria-hidden="true" />;
}

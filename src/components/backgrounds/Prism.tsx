"use client";

import React, { useRef, useEffect } from "react";

interface PrismProps {
  className?: string;
  colorPalette?: string[];
  animationSpeed?: number;
  noiseIntensity?: number;
  opacity?: number;
}

const Prism: React.FC<PrismProps> = ({
  className = "",
  colorPalette = ["#e0f7fa", "#b2ebf2", "#80deea", "#4dd0e1", "#26c6da"],
  animationSpeed = 1,
  noiseIntensity = 0.3,
  opacity = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 0, g: 0, b: 0 };
    };

    const colors = colorPalette.map(hexToRgb);

    const noise = (x: number, y: number, time: number): number => {
      const value =
        Math.sin(x * 0.01 + time) *
        Math.cos(y * 0.01 + time * 0.7) *
        Math.sin((x + y) * 0.005 + time * 0.5);
      return (value + 1) * 0.5;
    };

    let time = 0;

    const animate = () => {
      time += 0.005 * animationSpeed;

      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const n = noise(x, y, time);
          const noiseValue = (Math.random() - 0.5) * noiseIntensity * 255;

          const colorIndex = Math.floor(n * (colors.length - 1));
          const nextColorIndex = Math.min(colorIndex + 1, colors.length - 1);
          const blend = (n * (colors.length - 1)) % 1;

          const color1 = colors[colorIndex];
          const color2 = colors[nextColorIndex];

          const r = color1.r + (color2.r - color1.r) * blend + noiseValue;
          const g = color1.g + (color2.g - color1.g) * blend + noiseValue;
          const b = color1.b + (color2.b - color1.b) * blend + noiseValue;

          const i = (y * width + x) * 4;
          data[i] = Math.max(0, Math.min(255, r));
          data[i + 1] = Math.max(0, Math.min(255, g));
          data[i + 2] = Math.max(0, Math.min(255, b));
          data[i + 3] = 255 * opacity;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [colorPalette, animationSpeed, noiseIntensity, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: "block" }}
    />
  );
};

export default Prism;

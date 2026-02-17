"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
}

export default function DotFieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let dots: Dot[] = [];
    const mouse = { x: -1000, y: -1000 };
    
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
      initDots();
    };

    const initDots = () => {
      dots = [];
      const width = canvas.width;
      const height = canvas.height;
      
      // Calculate number of dots based on area, but denser on the right
      // We'll create a grid-like or random distribution but bias positions
      const count = Math.floor((width * height) / 8000); 

      for (let i = 0; i < count; i++) {
        // Bias x towards the right side (0.5 to 1.0 range has more dots)
        // Simple bias: random() ^ 0.5 pushes values towards 1? No, sqrt pushes to 1.
        // Let's just spawn more if random > 0.5
        let x = Math.random() * width;
        
        // Create a "shape" by increasing probability of spawning in certain areas
        // E.g. a curve on the right
        // For now, just uniform random with slight right bias logic if needed,
        // but user asked for "higher density to the right side".
        // Let's attempt to place 60% of dots in the right 40% of screen.
        if (Math.random() > 0.5) {
             x = width * 0.6 + Math.random() * (width * 0.4);
        } else {
             x = Math.random() * width;
        }

        const y = Math.random() * height;
        const size = Math.random() * 2 + 0.5; // 0.5px to 2.5px
        
        // Colors: calm blue/purple/teal/white-ish
        const colors = [
          "rgba(230, 237, 243, 0.6)", // Off-white
          "rgba(100, 149, 237, 0.6)", // Cornflower blue
          "rgba(147, 112, 219, 0.5)", // Medium purple
          "rgba(32, 178, 170, 0.5)"   // Light sea green
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Gentle drift speed
        const speedX = (Math.random() - 0.5) * 0.2;
        const speedY = (Math.random() - 0.5) * 0.2;

        dots.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size,
          color,
          speedX: prefersReducedMotion ? 0 : speedX,
          speedY: prefersReducedMotion ? 0 : speedY,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      dots.forEach((dot) => {
        // Movement
        if (!prefersReducedMotion) {
           dot.x += dot.speedX;
           dot.y += dot.speedY;

           // Wrap around edges
           if (dot.x < 0) dot.x = canvas.width;
           if (dot.x > canvas.width) dot.x = 0;
           if (dot.y < 0) dot.y = canvas.height;
           if (dot.y > canvas.height) dot.y = 0;
           
           // Slight mouse parallax
           // Distance from mouse
           const dx = mouse.x - dot.x;
           const dy = mouse.y - dot.y;
           const dist = Math.sqrt(dx * dx + dy * dy);
           const maxDist = 200;
           
           if (dist < maxDist) {
             const force = (maxDist - dist) / maxDist; // 0 to 1
             // Push away or pull? "Response" usually means push away slightly or subtle shift
             const directionX = dx / dist;
             const directionY = dy / dist;
             
             // Gentle push
             dot.x -= directionX * force * 0.5;
             dot.y -= directionY * force * 0.5;
           }
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    
    resize();
    draw();

    return () => {
       window.removeEventListener("resize", resize);
       window.removeEventListener("mousemove", handleMouseMove);
       cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

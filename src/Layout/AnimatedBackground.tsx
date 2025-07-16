import { useEffect, useRef } from "react";

const texts = [
  "{ ninja }",
  "<chakra />",
  "const jutsu = 'shadowClone';",
  "if (chakra > 9000) { execute(); }",
  "while (true) { run(); }",
  "function rasengan() {}",
  "const sharingan = true;",
];

type Particle = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedY: number;
  type: "text";
  content: string;
  life: number;
  maxLife: number;
  color: string;
};

const COLORS = ["#8a2be2", "#7fffd4", "#00bfff", "#ff69b4", "#ff6347"];

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const MAX_PARTICLES = isMobile
      ? Math.floor(height / 65) 
      : Math.floor(height / 40);
    const randomRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const createParticle = (index: number): Particle => ({
      x: randomRange(0, width),
      y: (index / MAX_PARTICLES) * height,
      size: randomRange(14, 26),
      opacity: 0,
      speedY: randomRange(0.1, 0.3),
      type: "text",
      content: texts[Math.floor(Math.random() * texts.length)],
      life: 0,
      maxLife: randomRange(1500, 2500),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    particles.current = Array.from({ length: MAX_PARTICLES }, (_, i) =>
      createParticle(i)
    );

    let animationFrameId: number;

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      particles.current.forEach((p) => {
        const fadeIn = 50;
        const fadeOut = 50;
        if (p.life < fadeIn) {
          p.opacity = (p.life / fadeIn) * 0.1;
        } else if (p.life > p.maxLife - fadeOut) {
          p.opacity = ((p.maxLife - p.life) / fadeOut) * 0.2;
        } else {
          p.opacity = 0.3;
        }

        ctx.save();
        ctx.globalAlpha = isMobile ? p.opacity * 0.4 : p.opacity;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.font = `${p.size}px 'Courier New', monospace`;
        ctx.fillText(p.content, p.x, p.y);
        ctx.restore();

        p.y -= p.speedY;
        p.life++;

        if (p.life >= p.maxLife || p.y < -p.size) {
          Object.assign(p, createParticle(Math.floor(Math.random() * MAX_PARTICLES)), {
            y: height + p.size,
          });
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        backgroundColor: "#0a0a0a",
        pointerEvents: "none",
        mixBlendMode: "soft-light",
      }}
    />
  );
}

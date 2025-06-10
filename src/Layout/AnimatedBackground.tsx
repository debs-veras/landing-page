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
};

const MAX_PARTICLES = 20;

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
    
    
    function randomRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    function createParticle(): Particle {
      return {
        x: randomRange(0, width),
        y: randomRange(100, height),
        size: randomRange(12, 24),
        opacity: 0,
        speedY: randomRange(0.1, 0.3),
        type: "text",
        content: texts[Math.floor(Math.random() * texts.length)],
        life: 0,
        maxLife: randomRange(400, 800),
      };
    }

    particles.current = Array.from({ length: MAX_PARTICLES }, () =>
      createParticle()
    );

    let animationFrameId: number;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      particles.current.forEach((p) => {
        if (p.life < 50) {
          p.opacity += 0.01;
        } else if (p.life > p.maxLife - 50) {
          p.opacity -= 0.01;
        }
        p.opacity = Math.min(Math.max(p.opacity, 0), 0.3);

        ctx.globalAlpha = p.opacity;

        ctx.fillStyle = "#8a2be2";
        ctx.font = `${p.size}px 'Courier New', monospace`;
        ctx.fillText(p.content, p.x, p.y);

        p.y -= p.speedY;
        p.life++;

        if (p.life >= p.maxLife || p.y < -p.size) {
          Object.assign(p, createParticle(), { y: height + p.size });
        }
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    function onResize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
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
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0a0a0a",
        pointerEvents: "none",
      }}
    />
  );
};
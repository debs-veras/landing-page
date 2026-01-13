import { useEffect, useRef } from "react";

const techTerms = [
  "React",
  "TS",
  "Next",
  "Node",
  "UI",
  "UX",
  "API",
  "CSS",
  "Git",
];

const symbols = ["{}", "()", "[]", "<>", "=>", "::", "&&", "||", "==="];

type Particle = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  type: "vertex" | "text" | "symbol";
  content?: string;
  life: number;
  maxLife: number;
  color: string;
  targetX: number;
  targetY: number;
};

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);
  const vertices = useRef<Array<{ x: number; y: number; size: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const getWidth = () => window.innerWidth;
    const getHeight = () => window.visualViewport?.height || window.innerHeight;

    let width = (canvas.width = getWidth());
    let height = (canvas.height = getHeight());

    const isMobile = width < 768;
    const VERTEX_COUNT = isMobile ? 20 : 36;
    const TEXT_COUNT = isMobile ? 6 : 14;
    const SYMBOL_COUNT = isMobile ? 10 : 18;
    const CONNECTION_DISTANCE = 180;

    const COLORS = [
      "rgba(99,102,241,0.7)",
      "rgba(139,92,246,0.7)",
      "rgba(6,182,212,0.7)",
      "rgba(59,130,246,0.7)",
    ];

    const rand = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    vertices.current = Array.from({ length: VERTEX_COUNT }, () => ({
      x: rand(40, width - 40),
      y: rand(40, height - 40),
      size: rand(2, 4),
    }));

    const createParticle = (type: Particle["type"]): Particle => {
      const x = rand(0, width);
      const y = rand(0, height);

      return {
        x,
        y,
        targetX: x,
        targetY: y,
        size:
          type === "vertex"
            ? rand(2, 4)
            : type === "text"
            ? rand(12, 16)
            : rand(10, 14),
        opacity: 0,
        speedX: rand(-0.15, 0.15),
        speedY: rand(-0.15, 0.15),
        type,
        content:
          type === "text"
            ? techTerms[Math.floor(Math.random() * techTerms.length)]
            : type === "symbol"
            ? symbols[Math.floor(Math.random() * symbols.length)]
            : undefined,
        life: 0,
        maxLife: type === "vertex" ? 99999 : rand(3000, 6000),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };
    };

    particles.current = [
      ...Array.from({ length: VERTEX_COUNT }, () => createParticle("vertex")),
      ...Array.from({ length: TEXT_COUNT }, () => createParticle("text")),
      ...Array.from({ length: SYMBOL_COUNT }, () => createParticle("symbol")),
    ];

    const drawConnections = () => {
      for (let i = 0; i < vertices.current.length; i++) {
        for (let j = i + 1; j < vertices.current.length; j++) {
          const a = vertices.current[i];
          const b = vertices.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < CONNECTION_DISTANCE) {
            ctx.strokeStyle = `rgba(99,102,241,${
              (1 - d / CONNECTION_DISTANCE) * 0.25
            })`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.fillStyle = "rgba(5,5,15,0.25)";
      ctx.fillRect(0, 0, width, height);

      vertices.current.forEach((v) => {
        v.x += rand(-0.3, 0.3);
        v.y += rand(-0.3, 0.3);
        v.x = Math.max(20, Math.min(width - 20, v.x));
        v.y = Math.max(20, Math.min(height - 20, v.y));
      });

      drawConnections();

      particles.current.forEach((p) => {
        const fade = 120;

        if (p.life < fade) p.opacity = p.life / fade;
        else if (p.life > p.maxLife - fade)
          p.opacity = (p.maxLife - p.life) / fade;
        else p.opacity = 1;

        p.x += p.speedX;
        p.y += p.speedY;
        p.life++;

        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0 || p.y > height) p.speedY *= -1;

        ctx.save();
        ctx.globalAlpha = p.opacity * 0.6;
        ctx.fillStyle = p.color;
        ctx.font = `${p.size}px 'JetBrains Mono', monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        if (p.content) ctx.fillText(p.content, p.x, p.y);
        else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

        if (p.life > p.maxLife && p.type !== "vertex") {
          Object.assign(p, createParticle(p.type));
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      width = canvas.width = getWidth();
      height = canvas.height = getHeight();
    };

    window.visualViewport?.addEventListener("resize", resize);

    return () => {
      window.visualViewport?.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{
        pointerEvents: "none",
        backgroundColor: "#05050f",
      }}
    />
  );
}

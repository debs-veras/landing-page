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
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  type: "vertex" | "text" | "symbol";
  content?: string;
  life: number;
  maxLife: number;
  color: string;
};

type Vertex = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);
  const vertices = useRef<Vertex[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;

    // 🔥 Limita DPR no mobile (grande ganho de performance)
    const dpr = isMobile
      ? Math.min(window.devicePixelRatio || 1, 1.5)
      : Math.min(window.devicePixelRatio || 1, 2);

    const getWidth = () => window.innerWidth;
    const getHeight = () => window.visualViewport?.height || window.innerHeight;

    let width = getWidth();
    let height = getHeight();

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = false;

    // 🔥 Quantidade reduzida no mobile
    const VERTEX_COUNT = isMobile ? 10 : 32;
    const TEXT_COUNT = isMobile ? 0 : 12;
    const SYMBOL_COUNT = isMobile ? 4 : 16;

    const CONNECTION_DISTANCE = isMobile ? 110 : 180;
    const CONNECTION_DISTANCE_SQ = CONNECTION_DISTANCE * CONNECTION_DISTANCE;

    const COLORS = [
      "rgba(99,102,241,0.7)",
      "rgba(139,92,246,0.7)",
      "rgba(6,182,212,0.7)",
      "rgba(59,130,246,0.7)",
    ];

    const rand = (min: number, max: number) =>
      min + Math.random() * (max - min);

    const createVertex = (): Vertex => ({
      x: rand(40, width - 40),
      y: rand(40, height - 40),
      vx: rand(-0.2, 0.2),
      vy: rand(-0.2, 0.2),
      size: rand(2, 4),
    });

    vertices.current = new Array(VERTEX_COUNT).fill(0).map(createVertex);

    const createParticle = (type: Particle["type"]): Particle => ({
      x: rand(0, width),
      y: rand(0, height),
      vx: rand(-0.15, 0.15),
      vy: rand(-0.15, 0.15),
      size:
        type === "vertex"
          ? rand(2, 4)
          : type === "text"
            ? rand(12, 16)
            : rand(10, 14),
      opacity: 0,
      type,
      content:
        type === "text"
          ? techTerms[Math.floor(Math.random() * techTerms.length)]
          : type === "symbol"
            ? symbols[Math.floor(Math.random() * symbols.length)]
            : undefined,
      life: 0,
      maxLife: type === "vertex" ? 999999 : rand(2500, 5000),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    particles.current = [
      ...new Array(VERTEX_COUNT).fill(0).map(() => createParticle("vertex")),
      ...new Array(TEXT_COUNT).fill(0).map(() => createParticle("text")),
      ...new Array(SYMBOL_COUNT).fill(0).map(() => createParticle("symbol")),
    ];

    const drawConnections = () => {
      const verts = vertices.current;

      for (let i = 0; i < verts.length; i++) {
        const a = verts[i];

        for (let j = i + 1; j < verts.length; j++) {
          const b = verts[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const distSq = dx * dx + dy * dy;

          if (distSq < CONNECTION_DISTANCE_SQ) {
            const alpha = 1 - distSq / CONNECTION_DISTANCE_SQ;

            ctx.strokeStyle = `rgba(99,102,241,${alpha * 0.25})`;
            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    // 🔥 FPS menor no mobile
    const FPS = isMobile ? 30 : 60;
    const frameTime = 1000 / FPS;
    let lastTime = 0;

    const animate = (time: number) => {
      if (time - lastTime < frameTime) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      const verts = vertices.current;

      for (let i = 0; i < verts.length; i++) {
        const v = verts[i];

        v.x += v.vx;
        v.y += v.vy;

        if (v.x < 20 || v.x > width - 20) v.vx *= -1;
        if (v.y < 20 || v.y > height - 20) v.vy *= -1;
      }

      drawConnections();

      const parts = particles.current;

      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];

        const fade = 100;

        if (p.life < fade) p.opacity = p.life / fade;
        else if (p.life > p.maxLife - fade)
          p.opacity = (p.maxLife - p.life) / fade;
        else p.opacity = 1;

        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.save();
        ctx.globalAlpha = p.opacity * 0.6;
        ctx.fillStyle = p.color;
        ctx.font = `${p.size}px monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        if (p.content) {
          ctx.fillText(p.content, p.x, p.y);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

        if (p.life > p.maxLife && p.type !== "vertex") {
          parts[i] = createParticle(p.type);
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    let resizeTimeout: any;

    const resize = () => {
      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        width = getWidth();
        height = getHeight();

        canvas.width = width * dpr;
        canvas.height = height * dpr;

        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        ctx.scale(dpr, dpr);
      }, 150);
    };

    window.visualViewport?.addEventListener("resize", resize);

    // 🔥 pausa animação quando aba não está visível
    const handleVisibility = () => {
      if (document.hidden) {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      } else {
        animate(performance.now());
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.visualViewport?.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{
        pointerEvents: "none",
        background: "#05050f",
      }}
    />
  );
}

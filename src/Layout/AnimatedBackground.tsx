import { motion } from "framer-motion";
import { useMemo } from "react";

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

type Item = {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  duration: number;
  delay: number;
  size: number;
  blur: number;
  opacity: number;
  content: string;
};

export default function AnimatedBackground() {
  const items = useMemo<Item[]>(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    const count = isMobile ? 16 : 40;

    return Array.from({ length: count }).map((_, i) => {
      const r = Math.random();
      let content = "•";

      if (r > 0.65) {
        content = techTerms[Math.floor(Math.random() * techTerms.length)];
      } else if (r > 0.35) {
        content = symbols[Math.floor(Math.random() * symbols.length)];
      }

      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        dx: (Math.random() - 0.5) * (isMobile ? 30 : 70),
        dy: (Math.random() - 0.5) * (isMobile ? 40 : 100),
        duration: 14 + Math.random() * 18,
        delay: Math.random() * -20,
        size: 12 + Math.random() * 14,
        blur: Math.random() * 1.5,
        opacity: 0.3 + Math.random() * 0.5,
        content,
      };
    });
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{
        zIndex: 0,
        background: "#05050f",
      }}
    >
      {/* glow radial estilo landing moderna */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(138,43,226,0.12), transparent 40%), radial-gradient(circle at 70% 70%, rgba(99,102,241,0.12), transparent 45%)",
        }}
      />

      {items.map((item) => (
        <motion.span
          key={item.id}
          className="absolute font-mono select-none text-indigo-400"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: item.size,
            opacity: item.opacity,
            filter: `blur(${item.blur}px)`,
            willChange: "transform, opacity",
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
          }}
          animate={{
            x: [0, item.dx, -item.dx],
            y: [0, item.dy, -item.dy * 1.2],
            opacity: [0, item.opacity, item.opacity, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "linear",
            delay: item.delay,
          }}
        >
          {item.content}
        </motion.span>
      ))}
    </div>
  );
}

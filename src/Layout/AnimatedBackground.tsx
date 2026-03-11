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
  content: string;
};

export default function AnimatedBackground() {
  const items = useMemo<Item[]>(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    const count = isMobile ? 14 : 36;

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
        dx: (Math.random() - 0.5) * (isMobile ? 40 : 80),
        dy: (Math.random() - 0.5) * (isMobile ? 60 : 120),
        duration: 12 + Math.random() * (isMobile ? 10 : 18),
        delay: Math.random() * -20,
        size: 10 + Math.random() * 12,
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
      {items.map((item) => (
        <motion.span
          key={item.id}
          className="absolute font-mono text-indigo-400/60 select-none"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: item.size,
            willChange: "transform, opacity",
          }}
          initial={{
            x: 0,
            y: 0,
            opacity: 0,
          }}
          animate={{
            x: [0, item.dx, -item.dx],
            y: [0, item.dy, -item.dy * 1.5],
            opacity: [0, 0.6, 0.6, 0],
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

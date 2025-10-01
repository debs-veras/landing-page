import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface Skill {
  name: string;
  icon: string;
}

interface CarouselProps {
  skills: Skill[];
}

const Carousel3D = ({ skills }: CarouselProps) => {
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [0, 5000], [0, 360], { clamp: false });

  useEffect(() => {
    const controls = animate(x, 5000, {
      repeat: Infinity,
      ease: "linear",
      duration: 20,
    });
    return () => controls.stop();
  }, [x]);

  return (
    <div className="relative w-full h-[50vw] sm:h-[45vw] md:h-[40vw] lg:h-[35vw] xl:h-[320px] mx-auto perspective-[1200px] md:perspective-[1600px] overflow-hidden">

      <motion.div
        className="absolute inset-0"
        style={{
          transformStyle: "preserve-3d",
          rotateY,
        }}
      >
        {skills.map((tech, index) => {
          const angle = (360 / skills.length) * index;

          return (
            <div
              key={tech.name}
              className="absolute top-1/5 left-1/2"
              style={{
                width: "clamp(70px, 16vw, 140px)",
                height: "clamp(70px, 16vw, 140px)",
                transform: `rotateY(${angle}deg) translateZ(clamp(160px, 30vw, 350px))`,
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="w-full h-full rounded-lg 
                bg-gradient-to-br from-gray-900/95 to-black/90
                border border-cyan-400/60 backdrop-blur-sm
                shadow-[0_0_25px_rgba(34,211,238,0.3)]
                flex items-center justify-center p-3
                relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent transform rotate-45 scale-150" />

                <div className="absolute inset-0 rounded-lg border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.2)]" />

                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-4/5 h-4/5 object-contain drop-shadow-[0_0_12px_rgba(34,211,238,0.6)] filter brightness-110 contrast-110"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Carousel3D;

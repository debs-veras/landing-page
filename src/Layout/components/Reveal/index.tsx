import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Reveal({
  children,
  id,
  disableAnimation = false,
}: {
  children: React.ReactNode;
  id: string;
  disableAnimation?: boolean;
}) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
    amount: 0.2,
  });

  if (disableAnimation) {
    return (
      <section ref={ref} id={id}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.section>
  );
}

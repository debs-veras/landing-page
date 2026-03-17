import { m, useInView } from "framer-motion";
import { useRef } from "react";

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
    margin: "-50px",
    amount: 0.1,
  });

  if (disableAnimation) {
    return (
      <section ref={ref} id={id}>
        {children}
      </section>
    );
  }

  return (
    <m.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        type: "spring", 
        bounce: 0.3, 
        opacity: { duration: 0.6, ease: "easeOut" } 
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </m.section>
  );
}

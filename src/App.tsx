import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import AnimatedBackground from "./Layout/AnimatedBackground";
import AboutMe from "./Layout/components/AboutMe";
import Contact from "./Layout/components/Contact";
import Header from "./Layout/components/Header";
import ProjectsSection from "./Layout/components/ProjectsSection";
import SoftSkills from "./Layout/components/SoftSkills";
import Terminal from "./Layout/components/Terminal";
import Footer from "./Layout/components/Footer";

export default function App() {
  return (
    <div className="flex flex-col text-light-gray font-fira-code">
      <Header />
      <main className="p-8 relative overflow-hidden">
        <AnimatedBackground />
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Terminal />
        </motion.section>

        <ScrollAnimation>
          <AboutMe />
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <SoftSkills />
        </ScrollAnimation>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <ProjectsSection />
        </motion.section>

        <ScrollAnimation delay={0.1}>
          <Contact />
        </ScrollAnimation>
      </main>
      
      <ScrollAnimation delay={0.2}>
        <Footer />
      </ScrollAnimation>
    </div>
  );
}

// Componente auxiliar para animação de scroll
function ScrollAnimation({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

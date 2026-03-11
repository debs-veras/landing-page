import { motion } from "framer-motion";
import AnimatedBackground from "../../Layout/AnimatedBackground";
import Header from "../../Layout/components/Header";
import Terminal from "../../Layout/components/Terminal";
import AboutMe from "../../Layout/components/AboutMe";
import SoftSkills from "../../Layout/components/SoftSkills";
import ProjectsSection from "../../Layout/components/ProjectsSection";
import Contact from "../../Layout/components/Contact";
import Footer from "../../Layout/components/Footer";
import Reveal from "../../Layout/components/Reveal";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      <AnimatedBackground />

      <div className="flex flex-col text-light-gray font-fira-code min-w-[340px]">
        <Header />

        <motion.main
          className="p-4 sm:p-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <Reveal id="inicio" disableAnimation={isMobile}>
            <Terminal />
          </Reveal>

          <Reveal id="sobre" disableAnimation={isMobile}>
            <AboutMe />
          </Reveal>

          <Reveal id="skills" disableAnimation={isMobile}>
            <SoftSkills />
          </Reveal>

          <Reveal id="projetos" disableAnimation={isMobile}>
            <ProjectsSection />
          </Reveal>

          <Reveal id="contato" disableAnimation={isMobile}>
            <Contact />
          </Reveal>

          <Reveal id="footer" disableAnimation={isMobile}>
            <Footer />
          </Reveal>
        </motion.main>
      </div>
    </>
  );
}

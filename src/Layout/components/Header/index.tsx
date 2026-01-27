import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const sections = [
    { name: "Início", ancor: "inicio" },
    { name: "Sobre", ancor: "sobre" },
    { name: "Skills", ancor: "skills" },
    { name: "Projetos", ancor: "projetos" },
    { name: "Contato", ancor: "contato" },
  ];
  const linkCurriculo =
    "https://drive.google.com/drive/folders/1HGV7bai2BA2r70w3GARw-8g2qMbD05Y1?usp=drive_link";
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "inicio";
      for (const section of sections) {
        const element = document.getElementById(section.ancor);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = section.ancor;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Scroll ultra suave para âncoras do menu
  useEffect(() => {
    function easeInOutQuad(t: number) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function animatedScrollTo(targetY: number, duration = 900) {
      const startY = window.scrollY;
      const diff = targetY - startY;
      let start: number | null = null;
      function step(timestamp: number) {
        if (start === null) start = timestamp;
        const elapsed = timestamp - (start as number);
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutQuad(progress);
        window.scrollTo(0, startY + diff * ease);
        if (elapsed < duration) {
          window.requestAnimationFrame(step);
        }
      }
      window.requestAnimationFrame(step);
    }

    const handleClick = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const hash = anchor.getAttribute("href");
      if (hash && hash.startsWith("#") && hash.length > 1) {
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          // Compensa o scroll-margin-top
          const rect = target.getBoundingClientRect();
          const scrollMargin = parseInt(
            getComputedStyle(target).scrollMarginTop || "0",
            10,
          );
          const targetY = window.scrollY + rect.top - scrollMargin;
          animatedScrollTo(targetY);
          history.pushState(null, "", hash);
        }
      }
    };
    const links = document.querySelectorAll('header a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleClick));
    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <header className="bg-[rgba(10,10,10,0.7)] backdrop-blur-sm border-b border-b-[rgba(138,43,226,0.3)] px-6 py-4 sticky top-0 z-[100] shadow-lg">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-2 flex-wrap">
        <a
          href="#inicio"
          className="flex items-center gap-2 font-medium text-[1.3rem]"
        >
          <span className="text-primary">{"{"}</span>
          <span className="text-light">debora_hellen</span>
          <span className="text-primary">{"}"}</span>
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-light text-2xl md:hidden"
          aria-label="Abrir/fechar menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex gap-6 text-light-gray">
            {sections.map((section, index) => (
              <motion.a
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.06,
                  ease: "easeInOut",
                  duration: 0.4,
                }}
                key={index}
                href={`#${section.ancor}`}
                className={`group gap-2 flex items-center hover:text-white transition-all relative tracking-wide ${
                  activeSection === section.ancor
                    ? "text-purple-400 font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-purple-500"
                    : ""
                }`}
              >
                <span className="text-code-comment text-[0.9rem] group-hover:text-purple-400">
                  //
                </span>
                {section.name}
              </motion.a>
            ))}
          </nav>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={linkCurriculo}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-gradient-to-r cursor-pointer from-purple-500 to-purple-700 text-white px-5 py-2 rounded-md shadow-md transition-all border border-transparent hover:shadow-purple-500/30"
          >
            Currículo
          </motion.a>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[64px] left-0 w-full bg-[rgba(10,10,10,0.95)] backdrop-blur-md z-[99] overflow-hidden md:hidden py-4 px-6 rounded-b-xl shadow-xl"
          >
            <div className="flex flex-col gap-6 items-center text-light-gray">
              {sections.map((section, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  href={`#${section.ancor}`}
                  onClick={() => setMenuOpen(false)}
                  className={`group gap-2 flex text-[1.1rem] transition-colors relative hover:text-white ${
                    activeSection === section.ancor
                      ? "text-purple-400 font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-purple-500"
                      : ""
                  }`}
                >
                  <span className="text-code-comment group-hover:text-purple-400">
                    //
                  </span>
                  {section.name}
                </motion.a>
              ))}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={linkCurriculo}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 bg-gradient-to-r cursor-pointer from-purple-500 to-purple-700 text-white px-5 py-2 rounded-md shadow-md transition-all border border-transparent hover:shadow-purple-500/30"
              >
                Currículo
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const sections = [
    { name: "Início", ancor: "inicio" },
    { name: "Sobre", ancor: "sobre" },
    { name: "Skills", ancor: "skills" },
    { name: "Projetos", ancor: "projetos" },
    { name: "Contato", ancor: "contato" },
  ];

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

  const handleDownloadCV = () => {
    const cvUrl = "Débora Veras_CV.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Débora Veras_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="bg-[rgba(10,10,10,0.7)] backdrop-blur-sm border-b border-b-[rgba(138,43,226,0.3)] px-6 py-4 sticky top-0 z-[100]">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-2 flex-wrap">
        <a
          href="#inicio"
          className="flex items-center gap-2 font-medium text-[1.3rem]"
        >
          <span className="text-primary">{"{"}</span>
          <span className="text-light">ninja_dev</span>
          <span className="text-primary">{"}"}</span>
        </a>

        {/* Botão menu mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-light text-2xl md:hidden"
          aria-label="Abrir/fechar menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 text-light-gray">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#${section.ancor}`}
                className={`group gap-2 flex hover:text-light transition-colors relative ${
                  activeSection === section.ancor
                    ? "text-purple-400 font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-purple-500"
                    : ""
                }`}
              >
                <span className="text-code-comment text-[0.9rem] group-hover:text-purple-400">
                  //
                </span>
                {section.name}
              </a>
            ))}
          </nav>
          <button
            onClick={handleDownloadCV}
            className="bg-primary hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors duration-300 border border-transparent hover:border-purple-300"
          >
            Baixar Curriculo
          </button>
        </div>
      </div>

      {/* Menu mobile com transição */}
      <div
        className={`md:hidden fixed top-[64px] left-0 w-full bg-[rgba(10,10,10,0.9)] backdrop-blur-md transition-all duration-300 z-[99] overflow-hidden
        ${menuOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"}`}
      >
        <div className="flex flex-col gap-4 items-center text-light-gray px-6">
          {sections.map((section, index) => (
            <a
              key={index}
              href={`#${section.ancor}`}
              onClick={() => setMenuOpen(false)}
              className={`group gap-2 flex text-lg hover:text-light transition-colors relative ${
                activeSection === section.ancor
                  ? "text-purple-400 font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-purple-500"
                  : ""
              }`}
            >
              <span className="text-code-comment group-hover:text-purple-400">
                //
              </span>
              {section.name}
            </a>
          ))}
          <button
            onClick={handleDownloadCV}
            className="bg-primary hover:bg-purple-600 text-white w-full max-w-[200px] px-4 py-2 rounded-md transition-colors duration-300 border border-transparent hover:border-purple-300"
          >
            Baixar Curriculo
          </button>
        </div>
      </div>
    </header>
  );
}

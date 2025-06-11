export default function Header() {
  const sections = [
    { name: "Início", ancor: "#inicio" },
    { name: "Sobre", ancor: "#sobre" },
    { name: "Skills", ancor: "#skills" },
    { name: "Projetos", ancor: "#projetos" },
    { name: "Contato", ancor: "#contato" },
  ];

  return (
    <header className="bg-[rgba(10,10,10,0.7)] backdrop-blur-sm border-b border-b-[rgba(138,43,226,0.3)] px-8 py-4 sticky top-0 z-[100]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-4 justify-between items-center md:flex-row">
        <a
          href="#inicio"
          className="flex items-center gap-2 font-medium text-[1.3rem] hover:text-light transition-colors"
        >
          <span className="text-primary">{"{"}</span>
          <span className="text-light">ninja_dev</span>
          <span className="text-primary">{"}"}</span>
        </a>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 md:flex-nowrap md:justify-start text-light-gray">
          {sections.map((section) => (
            <a
              href={section.ancor}
              className={`group gap-2 flex hover:text-light transition-colors duration-300 ease-in-out ${
                section.ancor === "#inicio" ? null : "relative"
              }`}
            >
              <span className="text-code-comment text-[0.9rem] group-hover:text-purple-400">
                //
              </span>
              {section.name}
              <span className="block w-0 group-hover:w-full h-0.5 bg-purple-500 absolute bottom-0 left-0 transition-all duration-300"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <header className="bg-[rgba(10,10,10,0.7)] backdrop-blur-sm border-b border-b-[rgba(138,43,226,0.3)] px-8 py-4 sticky top-0 z-[100]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-4 justify-between items-center md:flex-row ">
        <div className="flex items-center gap-2 font-medium text-[1.3rem]">
          <span className="text-primary">{"{"}</span>
          <span className="text-light">ninja_dev</span>
          <span className="text-primary">{"}"}</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 md:flex-nowrap md:justify-start text-light-gray no-underline">
          <a
            href="#inicio"
            className="gap-2 flex hover:text-light transition-colors duration-300 ease-in-out"
          >
            <span className="text-code-comment text-[0.9rem]">//</span> Início
          </a>
          <a
            href="#projetos"
            className="gap-2 flex hover:text-light transition-colors duration-300 ease-in-out"
          >
            <span className="text-code-comment text-[0.9rem]">//</span> Projetos
          </a>
          <a
            href="#sobre"
            className="gap-2 flex hover:text-light transition-colors duration-300 ease-in-out"
          >
            <span className="text-code-comment text-[0.9rem]">//</span> Sobre
          </a>
          <a
            href="#contato"
            className="gap-2 flex hover:text-light transition-colors duration-300 ease-in-out"
          >
            <span className="text-code-comment text-[0.9rem]">//</span> Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

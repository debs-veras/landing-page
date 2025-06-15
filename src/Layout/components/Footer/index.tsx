export default function Footer() {
  return (
    <footer className="bg-[rgba(10,10,10,0.7)] backdrop-blur-md border-t border-t-[rgba(138,43,226,0.2)] p-6 px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-4">
        <div className="flex gap-8">
          <a
            href="https://github.com/debs-veras"
            className="text-light-gray no-underline flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-light"
          >
            <span className="text-primary">{"</>"}</span>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/débora-hellen-veras-paiva-711955194"
            className="text-light-gray no-underline flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-light"
          >
            <span className="text-primary">{"{}"}</span>
            LinkedIn
          </a>
        </div>
        <div className="text-light-gray text-sm opacity-70">
          © {new Date().getFullYear()} NinjaDev - Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}

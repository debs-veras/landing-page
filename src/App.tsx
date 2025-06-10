import AnimatedBackground from "./Layout/AnimatedBackground";
import AboutMe from "./Layout/components/AboutMe";
import Contact from "./Layout/components/Contact";
import Header from "./Layout/components/Header";
import SoftSkills from "./Layout/components/SoftSkills";
import Terminal from "./Layout/components/Terminal";

export default function App() {
  return (
    <div className="flex flex-col text-light-gray font-fira-code">
      <Header />
      <main className="p-8">
      <AnimatedBackground />
        <Terminal />
        <AboutMe />
        <SoftSkills />
        <Contact />
      </main>

      {/* Footer Discreto */}
      <footer className="bg-[rgba(10,10,10,0.7)] backdrop-blur-md border-t border-t-[rgba(138,43,226,0.2)] p-6 px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-4">
          <div className="flex gap-8">
            <a
              href="#github"
              className="text-light-gray no-underline flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-light"
            >
              <span className="text-primary">{"</>"}</span>
              GitHub
            </a>
            <a
              href="#linkedin"
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
    </div>
  );
}
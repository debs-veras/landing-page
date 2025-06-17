export default function Terminal() {
  return (
    <div className="flex justify-center items-center mb-8">
      <div className="w-full max-w-[900px] bg-[rgba(20,20,30,0.85)] backdrop-blur-md rounded-lg border border-[rgba(138,43,226,0.2)] shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="flex flex-wrap justify-center items-center gap-4 px-6 py-3.5 bg-[rgba(15,15,25,0.9)] border-b border-b-[rgba(138,43,226,0.2)] md:flex-nowrap md:gap-0 md:justify-normal">
          <div className="flex gap-3 mr-4">
            <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="text-light-gray text-[0.9rem] grow order-1 text-center p-0 md:text-left md:px-4 md:order-none">
            portfolio_ninja_dev.tsx
          </div>
          <div className="flex gap-4">
            <button className="text-[0.85rem] font-fira-code">File</button>
            <button className="text-[0.85rem] font-fira-code">Edit</button>
            <button className="text-[0.85rem] font-fira-code">View</button>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-12">
            <p className="font-[1.05rem] typing-text leading-[1.8] italic text-code-comment ">
              // Bem-vindo ao meu terminal ninja-dev
            </p>
            <p className="font-[1.05rem] leading-[1.8]">
              <span className="text-code-keyword">interface</span>{" "}
              <span className="text-code-type">NinjaDev</span> {"{"}
            </p>
            <p className="font-[1.05rem] leading-[1.8] ml-6">
              <span className="text-code-property">name</span>:{" "}
              <span className="text-code-string">"Débora Hellen"</span>;
            </p>
            <p className="font-[1.05rem] leading-[1.8] ml-6">
              <span className="text-code-property">rank</span>:{" "}
              <span className="text-code-string">"Dev Junior"</span>;
            </p>
            <p className="font-[1.05rem] leading-[1.8] ml-6">
              <span className="text-code-property">main_skills</span>:{" "}
              <span className="text-code-type">Array</span>&lt;
              <span className="text-code-string">"React"</span> |{" "}
              <span className="text-code-string">"TypeScript"</span> |{" "}
              <span className="text-code-string">"Next.js"</span>&gt;;
            </p>

            <p className="font-[1.05rem] leading-[1.8]">{"}"}</p>
            <p className="mt-6 text-[1rem] text-light-gray leading-relaxed w-full">
              Sou uma desenvolvedora frontend apaixonada por{" "}
              <span className="text-purple-300">tecnologia</span> e{" "}
              <span className="text-orange-300">animes</span>. Este espaço une
              meu amor por frameworks e bibliotecas modernas como React e
              TypeScript com referências ao universo épico de histórias como{" "}
              <span className="text-orange-400">Naruto</span>.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-6 md:flex-row">
            <button
              className="px-[1.8rem] py-[0.9rem] rounded-[6px] font-fira-code font-medium flex items-center gap-3.5 cursor-pointer text-white transition-all duration-300 ease-in-out border-none bg-gradient-to-br from-[#8a2be2] to-[#9d4edd] hover:-translate-y-[2px] hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
              onClick={() => {
                document
                  .getElementById("projetos")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explorar Projetos
            </button>
            <button
              className="px-[1.8rem] py-[0.9rem] rounded-[6px] font-fira-code font-medium flex items-center gap-3.5 cursor-pointer  text-secondary border border-secondary transition-all duration-300 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] secondary"
              onClick={() => {
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Enviar Mensagem Secreta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

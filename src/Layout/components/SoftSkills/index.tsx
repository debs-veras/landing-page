export default function SoftSkills() {
  const skills = [
    {
      name: "React",
      color: "text-[#61DAFB]",
      icon: "/tecnologia/react.svg",
      description:
        "Biblioteca JavaScript para construção de interfaces de usuário reativas e componentizadas.",
    },
    {
      name: "TypeScript",
      color: "text-[#3178C6]",
      icon: "/tecnologia/typescript.png",
      description:
        "Superset tipado de JavaScript que melhora a qualidade e manutenibilidade do código.",
    },
    {
      name: "Next.js",
      color: "text-[#1d7d6d]",
      icon: "/tecnologia/next.png",
      description:
        "Framework React para aplicações server-side rendering e estáticas com excelente performance.",
    },
    {
      name: "JavaScript",
      color: "text-[#F7DF1E]",
      icon: "/tecnologia/js.png",
      description:
        "Linguagem de programação para web que permite interatividade e dinamismo em páginas.",
    },
    {
      name: "HTML5",
      color: "text-[#E34F26]",
      icon: "/tecnologia/html.png",
      description:
        "Linguagem de marcação para estruturação e exibição de conteúdo na web.",
    },
    {
      name: "CSS3",
      color: "text-[#1572B6]",
      icon: "/tecnologia/css.png",
      description:
        "Linguagem de estilo para design e layout de páginas web responsivas.",
    },
    {
      name: "Tailwind CSS",
      color: "text-[#38B2AC]",
      icon: "/tecnologia/tailwind.png",
      description:
        "Framework CSS utilitário para construção rápida de designs customizados.",
    },
    {
      name: "Git",
      color: "text-[#F05032]",
      icon: "/tecnologia/git.png",
      description:
        "Sistema de controle de versão distribuído para gerenciamento de código fonte.",
    },
  ];

  const learning = [
    {
      name: "NodeJs",
      icon: "/tecnologia/node.png",
      description:
        "Runtime JavaScript para construção de aplicações server-side escaláveis.",
    },
    {
      name: "Jest",
      icon: "/tecnologia/jest.png",
      description:
        "Framework de testes para JavaScript com foco em simplicidade e suporte a snapshots.",
    },
    {
      name: "Docker",
      icon: "/tecnologia/docker.png",
      description:
        "Plataforma para criação, deploy e execução de aplicações em containers isolados.",
    },
  ];

  return (
    <div className="py-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-light mb-4">
            <span className="text-primary">{"// "}</span>Jutsus Técnicos
          </h2>
          <p className="text-light-gray max-w-[700px] mx-auto">
            Meus conhecimentos em tecnologias modernas para criar aplicações web
            poderosas. Assim como um ninja domina diferentes técnicas, domino estas tecnologias
          </p>
        </div>

        {/* Seção de Habilidades Dominadas */}
        <div className="mb-12 bg-[rgba(20,20,30,0.85)] p-6 rounded-lg border border-[rgba(138,43,226,0.2)]">
          <h3 className="text-xl font-fira-code text-light mb-6">
            <span className="text-code-keyword">const</span>{" "}
            <span className="text-code-property">masteredJutsus</span>{" "}
            <span className="text-code-keyword">=</span>{" "}
            <span className="text-code-punctuation">{"["}</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((tech) => (
              <div
                key={tech.name}
                className={`group relative bg-[rgba(138,43,226,0.1)] hover:bg-[rgba(138,226,43,0.2)] 
                border border-[rgba(138,43,226,0.3)] transition-all duration-300 
                rounded-lg p-4 text-center cursor-default overflow-hidden`}
              >
                <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
                <span className={`font-fira-code ${tech.color} font-medium`}>
                  {tech.name}
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[rgba(138,43,226,0.1)]">
                  <div className="h-full w-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-700"></div>
                </div>
                <div className="absolute inset-0 bg-[rgba(20,20,30,0.9)] flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-light-gray">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-code-comment">// Jutsus dominados</p>
          <p className="text-code-punctuation">{" ]"};</p>
        </div>

        {/* Seção de Habilidades em Aprendizado */}
        <div className="bg-[rgba(20,20,30,0.85)] p-6 rounded-lg border border-[rgba(138,43,226,0.2)]">
          <h3 className="text-xl font-fira-code text-light mb-6">
            <span className="text-code-keyword">export default</span>{" "}
            <span className="text-code-function">trainingJutsus</span>
            <span className="text-code-punctuation">{"()"} </span>
            <span className="text-code-keyword"></span>{" "}
            <span className="text-code-punctuation">{"{"}</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {learning.map((tech) => (
              <div
                key={tech.name}
                className="group relative bg-[rgba(138,43,226,0.05)] hover:bg-[rgba(138,43,226,0.15)] 
                border border-dashed border-[rgba(138,43,226,0.3)] transition-colors 
                duration-300 rounded-lg p-4 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
                <span className="text-light-gray">{tech.name}</span>
                <div className="absolute inset-0 bg-[rgba(20,20,30,0.9)] flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-light-gray">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-code-comment">
            // Próximos jutsus em treinamento...
          </p>
          <p className="text-code-punctuation">{"}"}</p>
        </div>
      </div>
    </div>
  );
}

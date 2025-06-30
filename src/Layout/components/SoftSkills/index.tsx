export default function SoftSkills() {
  const frontendSkills = [
    {
      name: "React",
      color: "text-[#61DAFB]",
      icon: "/tecnologia/react.svg",
      description:
        "Biblioteca JavaScript para construção de interfaces de usuário reativas e componentizadas.",
    },
    {
      name: "Angular",
      color: "text-[#DD0031]",
      icon: "/tecnologia/angular.png",
      description:
        "Framework para construção de aplicações client-side robustas e escaláveis.",
    },
    {
      name: "Vue.js",
      color: "text-[#4FC08D]",
      icon: "/tecnologia/vue.png",
      description:
        "Framework progressivo para construção de interfaces de usuário interativas.",
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
  ];

  const backendSkills = [
    {
      name: "PHP",
      color: "text-[#6B7BA9]",
      icon: "/tecnologia/php.png",
      description:
        "Linguagem de programação focada no desenvolvimento web, amplamente usada para criar aplicações dinâmicas no lado do servidor.",
    },
    {
      name: "MySQL",
      color: "text-[#00758F]",
      icon: "/tecnologia/mysql.png",
      description:
        "Sistema de gerenciamento de banco de dados relacional de código aberto.",
    },
  ];

  const tools = [
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
      name: "Jest",
      icon: "/tecnologia/jest.png",
      description:
        "Framework de testes para JavaScript com foco em simplicidade e suporte a snapshots.",
    },
    {
      name: "Node.js",
      color: "text-[#68A063]",
      icon: "/tecnologia/node.png",
      description:
        "Runtime JavaScript para construção de aplicações server-side escaláveis.",
    },
    {
      name: "Docker",
      color: "text-[#2496ED]",
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
            poderosas. Assim como um ninja domina diferentes técnicas, domino
            estas tecnologias
          </p>
        </div>

        {/* Seção de Frontend */}
        <div className="mb-8 bg-[rgba(20,20,30,0.85)] p-6 rounded-lg border border-[rgba(138,43,226,0.2)]">
          <div className="font-fira-code text-light mb-6 text-md xs:text-xl">
            <p className="line-clamp-2">
              <span className="text-code-keyword">const</span>{" "}
              <span className="text-code-property">frontendJutsus</span>{" "}
              <span className="text-code-keyword">=</span>{" "}
              <span className="text-code-punctuation">{"["}</span>
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {frontendSkills.map((tech) => (
              <div
                key={tech.name}
                className={`group relative bg-[rgba(30,30,40,0.8)] hover:bg-[rgba(50,50,70,0.8)] 
                border border-[rgba(138,43,226,0.3)] transition-all duration-300 
                rounded-lg p-4 text-center cursor-default overflow-hidden`}
              >
                <div className="max-w-16 h-auto mx-auto mb-2 flex items-center justify-center">
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
          <p className="mt-4 text-code-comment">
            // Jutsus de frontend dominados
          </p>
          <p className="text-code-punctuation">{" ]"};</p>
        </div>

        {/* Seção de Backend */}
        <div className="mb-8 bg-[rgba(20,20,30,0.85)] p-6 rounded-lg border border-[rgba(138,43,226,0.2)]">
          <div className="font-fira-code text-light mb-6 text-md xs:text-xl">
            <p className="line-clamp-2">
              <span className="text-code-keyword">const</span>{" "}
              <span className="text-code-property">backendJutsus</span>{" "}
              <span className="text-code-keyword">=</span>{" "}
              <span className="text-code-punctuation">{"["}</span>
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {backendSkills.map((tech) => (
              <div
                key={tech.name}
                className={`group relative bg-[rgba(30,30,40,0.8)] hover:bg-[rgba(50,50,70,0.8)] 
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
                  <div className="h-full w-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-700"></div>
                </div>
                <div className="absolute inset-0 bg-[rgba(20,20,30,0.9)] flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-light-gray">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-code-comment">
            // Jutsus de backend dominados
          </p>
          <p className="text-code-punctuation">{" ]"};</p>
        </div>

        {/* Seção de Ferramentas */}
        <div className="mb-8 bg-[rgba(20,20,30,0.85)] p-6 rounded-lg border border-[rgba(138,43,226,0.2)]">
          <div className="font-fira-code text-light mb-6 text-md xs:text-xl">
            <p className="line-clamp-2">
              <span className="text-code-keyword">const</span>{" "}
              <span className="text-code-property">toolsJutsus</span>{" "}
              <span className="text-code-keyword">=</span>{" "}
              <span className="text-code-punctuation">{"["}</span>
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {tools.map((tech) => (
              <div
                key={tech.name}
                className={`group relative bg-[rgba(30,30,40,0.8)] hover:bg-[rgba(50,50,70,0.8)] 
                border border-[rgba(138,43,226,0.3)] transition-all duration-300 
                rounded-lg p-4 text-center cursor-default overflow-hidden`}
              >
                <div className="max-w-16 h-auto mx-auto mb-2 flex items-center justify-center">
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
                  <div className="h-full w-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-700"></div>
                </div>
                <div className="absolute inset-0 bg-[rgba(20,20,30,0.9)] flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-light-gray">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-code-comment">
            // Ferramentas de desenvolvimento
          </p>
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
                className={`group relative bg-[rgba(30,30,40,0.8)] hover:bg-[rgba(50,50,70,0.8)] 
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
                <span
                  className={`font-fira-code ${
                    tech.color || "text-light-gray"
                  } font-medium`}
                >
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
          <p className="mt-6 text-code-comment">
            // Próximos jutsus em treinamento...
          </p>
          <p className="text-code-punctuation">{"}"}</p>
        </div>
      </div>
    </div>
  );
}

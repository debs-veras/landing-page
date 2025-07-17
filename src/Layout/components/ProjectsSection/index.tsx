import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"web" | "faculdade" | "cursos">(
    "web"
  );
  const [visibleProjects, setVisibleProjects] = useState(2);
  const projectsPerLoad = 2;

  const projects = {
    web: [
      {
        title: "BoxChat",
        description:
          "Este projeto é um sistema de chat em tempo real que permite conversas entre usuários conectados. Foi desenvolvido usando React para o frontend e Socket.IO com Node.js para o backend.Uma Pokédex interativa desenvolvida para fins de aprendizado, exibindo informações de Pokémon de forma visual e organizada.",
        technologies: ["React/TypeScript", "Tailwind", "HTML", "CSS"],
        image: "/projetos/box-chat.png",
        github: "https://github.com/debs-veras/box_chat",
      },
      {
        title: "Landing page da empresa de tecnologia Box3",
        description:
          "Site da empresa Box3, desenvolvido com foco em apresentar soluções de software personalizadas para empresas. O site é responsivo, moderno e visa destacar os principais serviços, tecnologias utilizadas e canais de contato, respeitando as regras de SEO.",
        technologies: ["React/TypeScript", "Tailwind"],
        image: "/projetos/box3.png",
        link: "https://box3.work/",
      },
      {
        title: "Pokedex com Api",
        description:
          "Um componente interativo em React que exibe detalhes completos de um Pokémon em um modal animado, consumindo dados em tempo real da PokéAPI. Uma Pokédex interativa desenvolvida para fins de aprendizado",
        technologies: ["React", "Typescript", "Tailwind"],
        image: "/projetos/pokedex.png",
        link: "https://pokedex-orpin-chi-52.vercel.app/",
        github: "https://github.com/debs-veras/pokedex",
      },
      {
        title: "Site Educação Popular",
        description:
          "Este é um projeto digital que visa promover, divulgar e fortalecer práticas de Educação Popular em Saúde, alinhadas à participação social e às políticas públicas de base comunitária.",
        technologies: ["PHP", "Bootstrap", "CSS", "HTML"],
        image: "/projetos/educacao-popular.png",
        link: "https://epsaude.gpets.online",
      },
    ],
    faculdade: [
      {
        title: "Estrutura de Dados",
        description:
          "Atividades e implementações realizada na disciplina de estrutura de dados",
        technologies: [],
        image: null,
        link: null,
        github: "https://github.com/debs-veras/Estrutura-de-Dados",
      },
      {
        title: "Algoritmos para Grafos",
        description:
          "Atividades e implementações realizada na disciplina de algoritmo para grafos",
        technologies: [],
        image: null,
        link: null,
        github: "https://github.com/debs-veras/Algoritmos-para-Grafos",
      },
      {
        title: "Redes de Computadores",
        description:
          "Atividades e implementações realizada na disciplina de redes de computadores",
        technologies: [],
        image: null,
        link: null,
        github: "https://github.com/debs-veras/socket",
      },
    ],
    cursos: [
      {
        title: "Pokedex Map Dev Week",
        description:
          "Uma Pokédex interativa desenvolvida para fins de aprendizado, exibindo informações de Pokémon de forma visual e organizada.",
        technologies: ["HTML", "JavaScript", "CSS"],
        image: "/projetos/mapadev.png",
        link: "https://debs-veras.github.io/pokedex-mapadev/",
        github: "https://github.com/debs-veras/pokedex-mapadev",
      },
      {
        title: "Mata Mosquito",
        description:
          "Um jogo simples e divertido onde o objetivo é matar os mosquitos que aparecem na tela dentro de um certo tempo. O jogo possui múltiplos níveis de dificuldade e aumenta a velocidade conforme você progride.",
        technologies: ["HTML", "JavaScript", "CSS", "Bootstrap"],
        image: "/projetos/mata-mosquito.png",
        link: "https://debs-veras.github.io/game-mata-mosquito/",
        github: "https://github.com/debs-veras/game-mata-mosquito",
      },
      {
        title: "Museu Nacional",
        description:
          "Site fictício do Museu Nacional, desenvolvido exclusivamente para fins educacionais. O objetivo é praticar conceitos de desenvolvimento web utilizando HTML, CSS e JavaScript.",
        technologies: ["HTML", "CSS"],
        image: "/projetos/museu-nacional.png",
        link: "https://debs-veras.github.io/site-museu/",
        github: "https://github.com/debs-veras/site-museu",
      },
      {
        title: "Site de Notícia",
        description:
          "Projeto de estudo de um site de notícias simulado com layout de portal informativo.",
        technologies: ["HTML", "CSS"],
        image: "/projetos/blog-noticia.png",
        link: "https://debs-veras.github.io/blog-noticia/",
        github: "https://github.com/debs-veras/blog-noticia",
      },
      {
        title: "Organo",
        description:
          "Organo é uma aplicação web desenvolvida com fins educativos, que permite organizar pessoas e times de forma visual e intuitiva.",
        technologies: ["HTML", "CSS", "React"],
        image: "/projetos/organo.png",
        link: "https://organo-sage-omega.vercel.app/",
        github: "https://github.com/debs-veras/organo",
      },
    ],
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + projectsPerLoad);
  };

  return (
    <section className="py-10 px-4 rounded-lg bg-[rgba(10,10,20,0.9)] border border-[rgba(138,43,226,0.2)] xs:py-14">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center mb-7 xs:mb-12"
        >
          <div className="text-2xl font-bold text-light mb-4 xs:text-3xl">
            <span className="text-purple-400">//</span> Meus Projetos
          </div>
          <p className="text-light-gray mx-auto text-sm xs:text-base">
            Jutsus codificados que dominei em minha jornada como desenvolvedora
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-6 xs:mb-10">
          <div className="flex gap-2 bg-[rgba(20,20,30,0.8)] max-w-full p-1 rounded-md border border-[rgba(138,43,226,0.2)]">
            {["web", "faculdade", "cursos"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab as "web" | "faculdade" | "cursos");
                  setVisibleProjects(2);
                }}
                className={`xs:px-4 xs:py-2 px-2 py-1 rounded-md font-mono transition-all cursor-pointer text-xs xs:text-sm ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {"<" + tab.charAt(0).toUpperCase() + tab.slice(1) + ">"}
              </button>
            ))}
          </div>
        </div>

        {/* Projetos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects[activeTab].slice(0, visibleProjects).map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[rgba(20,20,30,0.8)] border border-[rgba(138,43,226,0.2)] rounded-xl overflow-hidden hover:border-purple-500 hover:shadow-[0_0_30px_rgba(138,43,226,0.2)] transition-all group"
            >
              <div className="relative h-60 overflow-hidden">
                {project.image && (
                  <img
                    loading="lazy"
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-6">
                  <h3 className="text-2xl text-white font-mono font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 h-full ">
                <p className="text-gray-300 text-sm mb-4 font-mono">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full border border-purple-800/50 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className={`grid gap-4 ${
                    project.link && project.github
                      ? "grid-cols-2"
                      : "grid-cols-1"
                  }`}
                >
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm:col-span-1 col-span-2 text-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:from-purple-700 hover:to-blue-700 transition-all text-sm sm:text-base"
                    >
                      Ver Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm:col-span-1 col-span-2 text-center px-4 py-2 border border-purple-500 text-purple-300 rounded-md hover:bg-purple-900/30 transition-all text-sm sm:text-base"
                    >
                      Código
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botão Ver Mais */}
        {visibleProjects < projects[activeTab].length && (
          <div className="text-center mt-10">
            <motion.button
              onClick={loadMoreProjects}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer px-6 py-3 border border-purple-500 text-purple-300 rounded-lg hover:bg-purple-900/30 transition-all font-mono text-sm"
            >
              {"<"}Ver mais projetos{">"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}

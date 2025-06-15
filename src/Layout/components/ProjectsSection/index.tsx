import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"web" | "faculdade">("web");
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
        title: "Pokedex Map Dev Week",
        description:
          "Uma Pokédex interativa desenvolvida para fins de aprendizado, exibindo informações de Pokémon de forma visual e organizada.",
        technologies: ["HTML", "JavaScript", "CSS"],
        image: "/projetos/mapadev.png",
        link: "https://debs-veras.github.io/pokedex-mapadev/",
        github: "https://github.com/debs-veras/pokedex-mapadev",
      },

      {
        title: "Site Educação Popular",
        description:
          "Este é um projeto digital que visa promover, divulgar e fortalecer práticas de **Educação Popular em Saúde**, alinhadas à participação social e às políticas públicas de base comunitária.",
        technologies: ["PHP", "Bootstrap", "CSS", "HTML"],
        image: "/projetos/educacao-popular.png",
        link: "https://observaaps.gpets.online/",
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
    ],
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + projectsPerLoad);
  };

  return (
    <section
      id="projetos"
      className="py-16 px-4 sm:px-6 bg-[rgba(10,10,20,0.9)] border-t border-b border-[rgba(138,43,226,0.2)]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            <span className="text-purple-400">#</span> Meus Projetos
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Jutsus codificados que dominei em minha jornada como desenvolvedora
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="bg-[rgba(20,20,30,0.8)] p-1 rounded-lg border border-[rgba(138,43,226,0.2)]">
            <button
              onClick={() => setActiveTab("web")}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === "web"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <span className="font-mono">
                {"<"}Web{">"}
              </span>
            </button>
            <button
              onClick={() => setActiveTab("faculdade")}
              className={`px-4 py-2 rounded-md transition-all ${
                activeTab === "faculdade"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <span className="font-mono">
                {"<"}Faculdade{">"}
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects[activeTab]
            .slice(0, visibleProjects)
            .map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[rgba(20,20,30,0.8)] border border-[rgba(138,43,226,0.2)] rounded-xl overflow-hidden transition-all hover:border-purple-500 hover:shadow-[0_0_30px_rgba(138,43,226,0.2)] group"
              >
                <div className="relative h-60 overflow-hidden">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white font-mono">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs sm:text-sm bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full border border-purple-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:from-purple-700 hover:to-blue-700 transition-all text-sm sm:text-base"
                      >
                        Ver Demo
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 border border-purple-500 text-purple-300 rounded-md hover:bg-purple-900/30 transition-all text-sm sm:text-base"
                      >
                        Código
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {visibleProjects < projects[activeTab].length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <button
              onClick={loadMoreProjects}
              className="px-6 cursor-pointer py-3 border border-purple-500 text-purple-300 rounded-lg hover:bg-purple-900/30 transition-all hover:shadow-[0_0_20px_rgba(138,43,226,0.2)]"
            >
              <span className="font-mono">
                {"<"}Ver mais projetos{">"}
              </span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

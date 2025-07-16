import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
  description: string;
  color?: string;
}

interface SectionProps {
  title: string;
  skills: Skill[];
  gradient: string;
  tag: string;
}

const SkillSection = ({ title, skills, gradient, tag }: SectionProps) => {
  return (
    <div className="mb-10 bg-[rgba(20,20,30,0.85)] p-6 rounded-lg border border-[rgba(138,43,226,0.2)]">
      <div className="font-fira-code text-light mb-6 text-md xs:text-xl">
        <p>
          <span className="text-code-keyword">const</span>{" "}
          <span className="text-code-property">{tag}</span>{" "}
          <span className="text-code-keyword">=</span>{" "}
          <span className="text-code-punctuation">{"["}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group relative bg-[rgba(30,30,40,0.85)] hover:bg-[rgba(50,50,70,0.85)]
              border border-[rgba(138,43,226,0.3)] transition-all duration-300 
              rounded-lg p-4 text-center cursor-default overflow-hidden shadow-md hover:shadow-purple-500/10"
          >
            <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
            <span
              className={`font-fira-code ${tech.color || "text-light"} font-medium`}
            >
              {tech.name}
            </span>

            {/* Barra animada */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[rgba(138,43,226,0.1)] overflow-hidden">
              <motion.div
                className={`h-full w-full ${gradient}`}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
            </div>

            {/* Tooltip animado */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[rgba(20,20,30,0.96)] flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <p className="text-sm text-light-gray">{tech.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <p className="mt-4 text-code-comment">// {title}</p>
      <p className="text-code-punctuation">{" ];"}</p>
    </div>
  );
};

export default function SoftSkills() {
  const frontendSkills: Skill[] = [
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

  const backendSkills: Skill[] = [
    {
      name: "PHP",
      color: "text-[#6B7BA9]",
      icon: "/tecnologia/php.png",
      description:
        "Linguagem para desenvolvimento web amplamente usada no back-end.",
    },
    {
      name: "MySQL",
      color: "text-[#00758F]",
      icon: "/tecnologia/mysql.png",
      description:
        "Banco de dados relacional amplamente usado em aplicações web.",
    },
  ];

  const tools: Skill[] = [
    {
      name: "Git",
      color: "text-[#F05032]",
      icon: "/tecnologia/git.png",
      description:
        "Controle de versão distribuído essencial para colaboração e versionamento.",
    },
  ];

  const learning: Skill[] = [
    {
      name: "Jest",
      icon: "/tecnologia/jest.png",
      description:
        "Framework de testes para aplicações JavaScript e TypeScript.",
    },
    {
      name: "Node.js",
      color: "text-[#68A063]",
      icon: "/tecnologia/node.png",
      description:
        "Ambiente de execução JavaScript para aplicações server-side.",
    },
    {
      name: "Docker",
      color: "text-[#2496ED]",
      icon: "/tecnologia/docker.png",
      description:
        "Plataforma de containers para empacotar, distribuir e executar aplicações.",
    },
  ];

  return (
    <div className="py-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-light mb-4">
            <span className="text-primary">// </span>Jutsus Técnicos
          </h2>
          <p className="text-light-gray max-w-[700px] mx-auto">
            Meus conhecimentos em tecnologias modernas para criar aplicações web
            poderosas. Assim como um ninja domina diferentes técnicas, domino
            estas tecnologias.
          </p>
        </div>

        <SkillSection
          title="Jutsus de frontend dominados"
          skills={frontendSkills}
          gradient="bg-gradient-to-r from-purple-500 to-blue-500"
          tag="frontendJutsus"
        />
        <SkillSection
          title="Jutsus de backend dominados"
          skills={backendSkills}
          gradient="bg-gradient-to-r from-blue-500 to-green-500"
          tag="backendJutsus"
        />
        <SkillSection
          title="Ferramentas de desenvolvimento"
          skills={tools}
          gradient="bg-gradient-to-r from-orange-500 to-pink-500"
          tag="toolsJutsus"
        />
        <SkillSection
          title="Jutsus em treinamento..."
          skills={learning}
          gradient="bg-gradient-to-r from-purple-500 to-indigo-500"
          tag="trainingJutsus"
        />
      </div>
    </div>
  );
}

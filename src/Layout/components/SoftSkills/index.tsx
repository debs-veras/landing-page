import { motion } from "framer-motion";
import Carousel3D from "../Carousel3D";

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
    <div className="mb-8 bg-[rgba(20,20,30,0.95)] p-6 rounded-lg border border-[rgba(138,43,226,0.3)] shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
      <div className="text-light mb-2 text-lg xs:text-xl">
        <p>
          <span className="text-code-keyword">const</span>{" "}
          <span className="text-code-property">{tag}</span>{" "}
          <span className="text-code-keyword">=</span>{" "}
          <span className="text-code-punctuation">{"["}</span>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.03 }}
            className="group relative bg-[rgba(30,30,50,0.8)] hover:bg-[rgba(50,50,80,0.9)]
              border border-[rgba(138,43,226,0.3)] transition-all duration-300 
              rounded-lg p-3 sm:p-4 text-center cursor-default overflow-hidden shadow-md hover:shadow-purple-500/20"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-3 flex items-center justify-center">
              <motion.img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain rounded-2xl transition-transform duration-300 group-hover:scale-110"
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <span
              className={`font-fira-code ${
                tech.color || "text-light"
              } font-medium text-xs sm:text-sm`}
            >
              {tech.name}
            </span>

            {/* Barra estática com gradiente */}
            <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
              <div className={`h-full w-full ${gradient}`} />
            </div>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-gradient-to-br from-[rgba(30,20,50,0.95)] to-[rgba(20,10,40,0.98)] flex items-center justify-center p-3 sm:p-4"
            >
              <p className="text-xs sm:text-sm text-light-gray font-fira-code leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="font-fira-code text-light mt-4 sm:mt-6 text-sm xs:text-md sm:text-lg">
        <p className="text-code-comment">// {title}</p>
        <p className="text-code-punctuation">{" ];"}</p>
      </div>
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
    <section className="py-10 xs:py-14">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-10"
        >
          <div className="text-2xl font-bold text-light mb-4 xs:text-3xl">
            <span className="text-primary">{"// "}</span>Jutsus Técnicos
          </div>
          <p className="text-light-gray mx-auto text-sm xs:text-base max-w-[700px]">
            Meus conhecimentos em tecnologias modernas para criar aplicações web
            poderosas. Assim como um ninja domina diferentes técnicas, domino
            estas tecnologias.
          </p>
        </motion.div>

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

      <Carousel3D skills={frontendSkills} />
    </section>
  );
}

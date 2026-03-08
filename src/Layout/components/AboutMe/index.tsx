import { LazyMotion, domAnimation, m } from "framer-motion";
import { FiTarget } from "react-icons/fi";
import { GiSparkles } from "react-icons/gi";

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind",
  "Framer Motion",
  "UI/UX",
];

const features = [
  {
    title: "Colaboração Técnica",
    text: "Trabalhar em times de produto para criar soluções escaláveis e inovadoras.",
  },
  {
    title: "Aprendizado Contínuo",
    text: "Evoluir constantemente com as melhores práticas e tecnologias emergentes.",
  },
  {
    title: "Impacto Real",
    text: "Desenvolver produtos que resolvem problemas reais e melhoram a vida das pessoas.",
  },
];

export default function AboutMe() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="sobre" className="relative overflow-hidden py-16 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* LEFT CARD */}
            <m.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition" />

              <div className="relative rounded-2xl bg-gradient-to-br from-gray-900/60 to-black/60 border border-white/10 p-8 backdrop-blur-xl h-full">
                <Header
                  icon={<GiSparkles className="w-5 h-5 text-purple-400" />}
                  title="Minha Jornada"
                  color="purple"
                />

                <h3 className="text-2xl font-bold text-white mb-4">
                  Desenvolvedora Frontend
                </h3>

                <p className="text-gray-300 leading-relaxed mb-8">
                  Estudante de Ciência da Computação com experiência prática no
                  desenvolvimento de aplicações web modernas há 3 anos.
                  Especializada em criar interfaces que combinam{" "}
                  <span className="text-purple-300 font-medium">
                    design intuitivo
                  </span>
                  ,{" "}
                  <span className="text-blue-300 font-medium">
                    performance excepcional
                  </span>{" "}
                  e{" "}
                  <span className="text-purple-300 font-medium">
                    código sustentável
                  </span>
                  .
                </p>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </m.div>

            {/* RIGHT CARD */}
            <m.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition" />

              <div className="relative rounded-2xl bg-gradient-to-br from-gray-900/60 to-black/60 border border-white/10 p-8 backdrop-blur-xl h-full">
                <Header
                  icon={<FiTarget className="w-5 h-5 text-blue-400" />}
                  title="Objetivo Profissional"
                  color="blue"
                />

                <h3 className="text-2xl font-bold text-white mb-6">
                  Impacto através da{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                    Excelência Técnica
                  </span>
                </h3>

                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <FeatureItem
                      key={feature.title}
                      index={index + 1}
                      title={feature.title}
                      text={feature.text}
                    />
                  ))}
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

/* COMPONENTS */

function Header({
  icon,
  title,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  color: "purple" | "blue";
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div
        className={`p-2 rounded-lg border ${
          color === "purple"
            ? "bg-purple-500/10 border-purple-500/20"
            : "bg-blue-500/10 border-blue-500/20"
        }`}
      >
        {icon}
      </div>

      <span
        className={`text-sm font-semibold uppercase tracking-wider ${
          color === "purple" ? "text-purple-400" : "text-blue-400"
        }`}
      >
        {title}
      </span>
    </div>
  );
}

function FeatureItem({
  index,
  title,
  text,
}: {
  index: number;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
        <span className="text-blue-400 font-bold">{index}</span>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        <p className="text-gray-300 text-sm">{text}</p>
      </div>
    </div>
  );
}

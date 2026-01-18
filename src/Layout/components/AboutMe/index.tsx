import { motion } from "framer-motion";
import { FiTarget } from "react-icons/fi";
import { GiSparkles } from "react-icons/gi";

export default function AboutMe() {
  return (
    <section id="sobre" className="relative overflow-hidden py-10 px-4">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Card - Enhanced with stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 p-8 backdrop-blur-xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <GiSparkles className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                  Minha Jornada
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Desenvolvedora Frontend
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8">
                Com formação em Ciência da Computação e experiência prática no
                desenvolvimento de aplicações web modernas, meu foco está em
                criar interfaces que unem{" "}
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
                . Foco em entregar experiências de usuário excepcionais através
                de código limpo e boas práticas de desenvolvimento.
              </p>

              {/* Skills Pill */}
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Tailwind",
                  "Framer Motion",
                  "UI/UX",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Card - Enhanced with features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 p-8 backdrop-blur-xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <FiTarget className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                  Objetivo Profissional
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Impacto através da{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  Excelência Técnica
                </span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <span className="text-blue-400 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Colaboração Técnica
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Trabalhar em times de produto para criar soluções
                      escaláveis e inovadoras.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <span className="text-blue-400 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Aprendizado Contínuo
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Evoluir constantemente com as melhores práticas e
                      tecnologias emergentes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <span className="text-blue-400 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Impacto Real
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Desenvolver produtos que resolvem problemas reais e
                      melhoram a vida das pessoas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

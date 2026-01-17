import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="sobre"
      className="relative rounded-lg py-16 px-6 bg-gradient-to-b from-[#0a0a14] to-[#0d0d18] border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-semibold text-white tracking-tight">
            <span className="text-purple-400">//</span> Sobre mim
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Card - Jornada */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-xl bg-white/5 border border-white/10 p-7 backdrop-blur-md"
          >
            <span className="text-sm text-purple-400 font-medium">
              Minha jornada
            </span>

            <h3 className="text-xl text-white font-semibold mt-2 mb-4">
              Construindo experiências digitais
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Sou desenvolvedora front-end com formação em Ciência da Computação
              e experiência prática no desenvolvimento de aplicações web
              modernas. Trabalho com foco em usabilidade, performance e código
              limpo, transformando requisitos complexos em interfaces claras e
              eficientes.
            </p>
          </motion.div>

          {/* Card - Objetivo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-xl bg-white/5 border border-white/10 p-7 backdrop-blur-md"
          >
            <span className="text-sm text-purple-400 font-medium">
              Objetivo profissional
            </span>

            <h3 className="text-xl text-white font-semibold mt-2 mb-4">
              Evoluir, colaborar e gerar impacto
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Busco oportunidades onde eu possa evoluir tecnicamente, colaborar
              com times de produto e engenharia, e contribuir na construção de
              soluções digitais que resolvam problemas reais, unindo estética,
              acessibilidade e performance.
            </p>
          </motion.div>
        </div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center text-gray-400 max-w-3xl mx-auto"
        >
          Curiosa por natureza e movida por aprendizado contínuo, encaro cada
          projeto como uma oportunidade de evoluir — tanto como desenvolvedora
          quanto como profissional.
        </motion.p>
      </div>
    </section>
  );
}

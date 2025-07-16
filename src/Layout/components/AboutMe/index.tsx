import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="py-16 bg-[rgba(10,10,20,0.9)] border-y border-[rgba(138,43,226,0.2)]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-light mb-4 font-fira-code">
            <span className="text-primary">{"// "}</span>Missão Ninja
          </h2>
          <p className="text-light-gray max-w-[700px] mx-auto font-fira-code">
            <span className="text-primary">"Dattebayo!"</span> Minha jornada como desenvolvedora
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="bg-[rgba(20,20,30,0.8)] w-full h-full border border-[rgba(138,43,226,0.2)] rounded-lg p-6 shadow-md hover:shadow-[0_0_20px_rgba(138,43,226,0.3)] transition-all duration-300 font-fira-code"
          >
            <div className="text-xl text-light mb-4">
              <span className="text-code-keyword">function</span>{" "}
              <span className="text-code-function">minhaJornada</span>() {"{"}
            </div>
            <p className="text-light-gray mb-4 leading-relaxed">
              Como desenvolvedora front-end júnior, combino minha formação acadêmica em Ciência da Computação com experiência prática em projetos reais. Minha paixão por criar interfaces funcionais e acessíveis me levou a dominar várias tecnologias.
            </p>
            <p className="text-code-punctuation">{"}"}</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="bg-[rgba(20,20,30,0.8)]  border border-[rgba(138,43,226,0.2)] rounded-lg p-6 shadow-md hover:shadow-[0_0_20px_rgba(138,43,226,0.3)] transition-all duration-300 font-fira-code"
          >
            <div className="text-xl text-light mb-4">
              <span className="text-code-keyword">export function</span>{" "}
              <span className="text-code-function">objetivo</span>() {"{"}
            </div>
            <p className="text-light-gray leading-relaxed">
              Busco oportunidades para crescer como desenvolvedora front-end, aplicando meus conhecimentos em projetos desafiadores que exigem criatividade e solução de problemas. Comprometida com aprendizado contínuo e desenvolvimento de interfaces que combinem beleza e funcionalidade.
            </p>
            <p className="text-code-punctuation mt-4">{"}"}</p>
          </motion.div>
        </div>

        {/* Frase final */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-light-gray text-center mt-12 text-base font-fira-code max-w-[800px] mx-auto leading-relaxed"
        >
          <span className="text-primary">“I never go back on my word!”</span> — Assim como Naruto, busco me tornar uma{" "}
          <span className="text-primary">desenvolvedora Hokage</span>, criando experiências web que impressionem tanto quanto um{" "}
          <span className="text-primary">Rasengan</span>!
        </motion.p>
      </div>
    </section>
  );
}

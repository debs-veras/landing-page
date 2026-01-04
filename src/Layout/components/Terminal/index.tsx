import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronRight, FaComments, FaRocket } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Terminal() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "// Olá! Bem-vindo(a) ao meu portfólio dev";
  const [command, setCommand] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setIsVisible(true);
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);
    return () => clearInterval(typingInterval);
  }, []);

  const handleCommand = () => {
    const anchors: { [key: string]: string } = {
      sobre: "sobre",
      skills: "skills",
      projetos: "projetos",
      contato: "contato",
    };
    const target = anchors[command.toLowerCase()];
    if (target) {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      setErrorMsg("");
    } else setErrorMsg(`Comando não encontrado: "${command}"`);
    setCommand("");
  };

  return (
    <motion.section
      className="flex justify-center items-center mb-16 py-10 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="w-full max-w-6xl bg-[rgba(20,20,30,0.97)] backdrop-blur-md rounded-xl border border-purple-900/50 shadow-2xl shadow-purple-900/20 overflow-hidden"
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Terminal Header */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 px-6 py-3.5 bg-[rgba(15,15,25,0.95)] border-b border-b-[rgba(138,43,226,0.3)] md:flex-nowrap md:gap-0 md:justify-normal"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex gap-3 mr-4">
            {["#ff5f56", "#ffbd2e", "#27c93f"].map((color, index) => (
              <motion.div
                key={index}
                className="w-3.5 h-3.5 rounded-full"
                style={{ backgroundColor: color }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 500,
                  damping: 15,
                }}
              />
            ))}
          </div>

          <motion.div
            className="flex flex-wrap items-center justify-center  text-light-gray text-xs xs:text-sm grow order-1 text-center p-0 sm:justify-start md:text-left md:px-4 md:order-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-purple-300 mr-2">~/dev-path/</div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              portfolio_dev.tsx
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Terminal Content */}
        <div className="p-6 md:p-8">
          <div className="mb-10 md:mb-12">
            <motion.p
              className="text-sm leading-[1.8] italic text-code-comment min-h-[1.8rem] xs:font-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {typedText}
              <motion.span
                className="ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  repeatDelay: 0.3,
                }}
              >
                |
              </motion.span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-sm xs:text-base"
            >
              <p className="leading-[1.8] mt-4">
                <span className="text-code-keyword">const</span>{" "}
                <span className="text-code-type">desenvolvedora</span>{" "}
                <span className="text-code-operator">=</span> {"{"}
              </p>
              <motion.p
                className=" leading-[1.8] ml-6"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-code-property">nome</span>:{" "}
                <span className="text-code-string">"Débora Veras"</span>;
              </motion.p>
              <motion.p
                className=" leading-[1.8] ml-6"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <span className="text-code-property">rank</span>:{" "}
                <span className="text-code-string">"Dev Junior"</span>;
              </motion.p>
              <motion.p
                className=" leading-[1.8] ml-6"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <span className="text-code-property">especialidades</span>: [
                <span className="text-code-string">"React"</span> |{" "}
                <span className="text-code-string">"TypeScript"</span> |{" "}
                <span className="text-code-string">"Next.js"</span>]
              </motion.p>
              <p className=" leading-[1.8]">{"}"}</p>
            </motion.div>

            <motion.p
              className="mt-6 text-sm xs:text-base text-light-gray leading-relaxed w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              Sou Desenvolvedora Frontend especializada em criar interfaces
              modernas, performáticas e acessíveis utilizando as mais recentes
              tecnologias web. Com experiência em{" "}
              <span className="text-blue-400 font-medium">React</span>,{" "}
              <span className="text-cyan-400 font-medium">TypeScript</span> e{" "}
              <span className="text-green-400 font-medium">Next.js</span>, foco
              em entregar experiências de usuário excepcionais através de código
              limpo e boas práticas de desenvolvimento. Transformo ideias em
              experiências digitais através de código criativo e atenção aos
              detalhes
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <motion.button
              className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 group cursor-pointer"
              onClick={() =>
                document
                  .getElementById("projetos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaRocket className="group-hover:rotate-12 transition-transform" />
              Explorar Meus Trabalhos
            </motion.button>
            <motion.button
              className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:from-orange-700 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/30 group cursor-pointer"
              onClick={() =>
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaComments className="group-hover:scale-110 transition-transform" />
              Conversar Comigo
            </motion.button>
          </motion.div>

          {/* Terminal funcional */}
          <motion.div
            className="border-t border-purple-900/50 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <div className="mb-4">
              <div className="flex items-center text-sm mb-2 md:flex-nowrap flex-wrap">
                <span className="text-green-400 font-medium">
                  debora@portfolio
                </span>
                <span className="text-purple-400 mx-1">~</span>
                <span className="text-orange-400">$</span>
                <div className="w-full ml-3 flex items-center bg-gray-900/50 rounded-lg px-3 py-3 border border-purple-900/30">
                  <FaChevronRight className="text-purple-500 mr-2" size={12} />
                  <input
                    className="bg-transparent outline-none text-gray-100 w-full placeholder-gray-500"
                    type="text"
                    placeholder="Digite um comando: sobre, skills, projetos, contato"
                    value={command}
                    onChange={(e) => {
                      setCommand(e.target.value);
                      setErrorMsg("");
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleCommand()}
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>
              </div>

              {errorMsg && (
                <motion.p
                  className="text-red-400 text-sm mt-2 flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span className="text-red-500">
                    <FaX />
                  </span>
                  {errorMsg}
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

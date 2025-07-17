import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Terminal() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "// Bem-vindo ao meu terminal ninja-dev";
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
    } else {
      setErrorMsg(`Comando não encontrado: "${command}"`);
    }
    setCommand("");
  };

  return (
    <motion.section
      className="flex justify-center items-center mb-10 xs:py-14"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="w-full max-w-[900px] bg-[rgba(20,20,30,0.95)] backdrop-blur-md rounded-lg border border-[rgba(138,43,226,0.3)] shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden"
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
            <div className="text-purple-300 mr-2">~/ninja-path/</div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              portfolio_ninja_dev.tsx
            </motion.div>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {["File", "Edit", "View"].map((item, index) => (
              <motion.button
                key={item}
                className="text-xs xs:text-sm hover:text-purple-300 transition-colors"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
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
              <p className=" leading-[1.8] mt-4">
                <span className="text-code-keyword">interface</span>{" "}
                <span className="text-code-type">NinjaDev</span> {"{"}
              </p>
              <motion.p
                className=" leading-[1.8] ml-6"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-code-property">name</span>:{" "}
                <span className="text-code-string">"Débora Hellen"</span>;
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
                <span className="text-code-property">main_skills</span>:{" "}
                <span className="text-code-type">Array</span>&lt;
                <span className="text-code-string">"React"</span> |{" "}
                <span className="text-code-string">"TypeScript"</span> |{" "}
                <span className="text-code-string">"Next.js"</span>&gt;;
              </motion.p>
              <p className=" leading-[1.8]">{"}"}</p>
            </motion.div>

            <motion.p
              className="mt-6 text-sm xs:text-base text-light-gray leading-relaxed w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              Sou uma desenvolvedora frontend apaixonada por{" "}
              <motion.span
                className="text-purple-300 font-medium"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1.2,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                tecnologia
              </motion.span>{" "}
              e{" "}
              <motion.span
                className="text-orange-300 font-medium"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1.3,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                animes
              </motion.span>
              . Este espaço une meu amor por frameworks e bibliotecas modernas
              como React e TypeScript com referências ao universo épico de
              histórias como{" "}
              <motion.span
                className="text-orange-400 font-medium"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1.4,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                Naruto
              </motion.span>
              .
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col justify-center text-sm gap-4 sm:gap-6 md:flex-row xs:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <motion.button
              className="px-6 py-3 sm:px-[1.8rem] sm:py-[0.9rem] rounded-[6px] font-medium flex items-center justify-center gap-3.5 cursor-pointer text-white transition-all duration-300 ease-in-out border-none bg-gradient-to-br from-[#8a2be2] to-[#9d4edd] hover:-translate-y-[2px] hover:shadow-[0_5px_15px_rgba(138,43,226,0.4)] "
              onClick={() => {
                document
                  .getElementById("projetos")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 1.6,
                type: "spring",
                stiffness: 400,
              }}
              whileHover={{
                y: -2,
                boxShadow: "0 5px 15px rgba(138, 43, 226, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Explorar Projetos
            </motion.button>
            <motion.button
              className="px-6 py-3 sm:px-[1.8rem] sm:py-[0.9rem] rounded-[6px] font-medium flex items-center justify-center gap-3.5 cursor-pointer text-secondary border border-secondary transition-all duration-300 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_5px_15px_rgba(255,165,0,0.3)] hover:text-orange-300 hover:border-orange-300"
              onClick={() => {
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 1.7,
                type: "spring",
                stiffness: 400,
              }}
              whileHover={{
                y: -2,
                boxShadow: "0 5px 15px rgba(255, 165, 0, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Mensagem Secreta
            </motion.button>
          </motion.div>

          {/* Terminal funcional */}
          <motion.div
            className="border-t border-purple-900 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <div className="flex flex-wrap items-center gap-2 text-light-gray mt-5">
              <span className="text-purple-300">ninja@dev</span>:
              <span className="text-purple-400">~</span>$
              <input
                className="bg-transparent outline-none text-white flex-1 min-w-[150px] ml-2"
                type="text"
                placeholder="Comando: sobre, skills, projetos, contato"
                value={command}
                onChange={(e) => {
                  setCommand(e.target.value);
                  if (errorMsg) setErrorMsg("");
                }}
                onKeyDown={(e) => e.key === "Enter" && handleCommand()}
                autoComplete="off"
                spellCheck={false}
              />
            </div>
            {errorMsg && (
              <motion.p
                className="mt-1 text-red-500 text-sm italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {errorMsg}
              </motion.p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

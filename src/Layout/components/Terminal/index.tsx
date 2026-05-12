import { LazyMotion, domAnimation, m, type Variants } from "framer-motion";
import { memo, useEffect, useState } from "react";
import { FaChevronRight, FaComments, FaRocket } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -12,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const TypingText = memo(() => {
  const fullText = "// Olá! Bem-vindo(a) ao meu portfólio dev";

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else clearInterval(typingInterval);
    }, 55);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <p className="text-sm leading-[1.8] italic text-code-comment min-h-[1.8rem]">
      {typedText}

      <span className="terminal-cursor ml-1">|</span>
    </p>
  );
});

TypingText.displayName = "TypingText";

const ActionButton = memo(
  ({
    icon,
    label,
    onClick,
    gradient,
  }: {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    gradient: string;
  }) => {
    return (
      <m.button
        onClick={onClick}
        whileHover={{
          y: -3,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.97,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 18,
        }}
        className={`flex-1 px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 text-white shadow-lg transform-gpu will-change-transform cursor-pointer ${gradient}`}
      >
        {icon}
        {label}
      </m.button>
    );
  },
);

ActionButton.displayName = "ActionButton";

const TerminalInput = memo(() => {
  const [command, setCommand] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleCommand = () => {
    const anchors: Record<string, string> = {
      sobre: "sobre",
      skills: "skills",
      projetos: "projetos",
      contato: "contato",
    };

    const target = anchors[command.toLowerCase().trim()];

    if (target) {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      setErrorMsg("");
    } else setErrorMsg(`Comando não encontrado: "${command}"`);
    setCommand("");
  };

  return (
    <div className="border-t border-purple-900/40 pt-6">
      <div className="flex items-center text-sm mb-2 flex-wrap md:flex-nowrap">
        <span className="text-green-400 font-medium">debora@portfolio</span>
        <span className="text-purple-400 mx-1">~</span>
        <span className="text-orange-400">$</span>
        <div className="w-full ml-3 flex items-center rounded-xl px-3 py-3 border border-purple-900/30 bg-black/30">
          <FaChevronRight className="text-purple-500 mr-2 shrink-0" size={12} />

          <input
            type="text"
            value={command}
            autoComplete="off"
            spellCheck={false}
            placeholder="Digite: sobre, skills, projetos, contato"
            className="bg-transparent outline-none text-gray-100 w-full placeholder-gray-500"
            onChange={(e) => {
              setCommand(e.target.value);
              setErrorMsg("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleCommand();
              }
            }}
          />
        </div>
      </div>

      {errorMsg && (
        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-400 text-sm mt-3 flex items-center gap-2"
        >
          <FaX className="text-red-500 shrink-0" />

          {errorMsg}
        </m.p>
      )}
    </div>
  );
});

TerminalInput.displayName = "TerminalInput";

export default function Terminal() {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="flex justify-center items-center pb-10 px-4 flex-col"
      >
        <m.div
          variants={fadeUp}
          className="
            w-full
            max-w-6xl
            overflow-hidden
            rounded-2xl
            border
            border-purple-900/40
            bg-[rgba(20,20,30,0.98)]
            shadow-2xl
            shadow-purple-900/10
          "
        >
          {/* HEADER */}
          <m.div
            variants={fadeUp}
            className="
              flex
              flex-wrap
              items-center
              gap-4
              border-b
              border-purple-900/30
              bg-[rgba(15,15,25,0.98)]
              px-6
              py-4
              md:flex-nowrap
            "
          >
            <div className="flex gap-3 mr-2">
              {["#ff5f56", "#ffbd2e", "#27c93f"].map((color, index) => (
                <m.div
                  key={index}
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 500,
                    damping: 18,
                  }}
                  className="w-3.5 h-3.5 rounded-full"
                  style={{
                    backgroundColor: color,
                  }}
                />
              ))}
            </div>

            <div className="flex items-center text-sm text-light-gray">
              <span className="text-purple-300 mr-2">~/dev-path/</span>

              <span className="text-gray-300">portfolio_dev.tsx</span>
            </div>
          </m.div>

          {/* CONTENT */}
          <div className="p-6 md:p-8">
            <m.div variants={containerVariants} initial="hidden" animate="show">
              <m.div variants={fadeUp}>
                <TypingText />
              </m.div>

              <m.div variants={fadeUp} className="mt-5 text-sm xs:text-base">
                <p className="leading-[1.8]">
                  <span className="text-code-keyword">const</span>{" "}
                  <span className="text-code-type">desenvolvedora</span>{" "}
                  <span className="text-code-operator">=</span> {"{"}
                </p>

                {[
                  {
                    property: "nome",
                    value: '"Débora Hellen"',
                  },
                  {
                    property: "atuação",
                    value: '"Desenvolvedora Front-End"',
                  },
                  {
                    property: "especialidades",
                    value: '[ "React" | "TypeScript" | "UI/UX" ]',
                  },
                ].map((item, index) => (
                  <m.p
                    key={item.property}
                    variants={fadeLeft}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="leading-[1.8] ml-6"
                  >
                    <span className="text-code-property">{item.property}</span>:{" "}
                    <span className="text-code-string">{item.value}</span>;
                  </m.p>
                ))}

                <p className="leading-[1.8]">{"}"}</p>
              </m.div>

              {/* BUTTONS */}
              <m.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4 mt-8 mb-8 text-sm"
              >
                <ActionButton
                  icon={<FaRocket />}
                  label="Meus Trabalhos"
                  gradient="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  onClick={() =>
                    document.getElementById("projetos")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                />

                <ActionButton
                  icon={<FaComments />}
                  label="Conversar Comigo"
                  gradient="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
                  onClick={() =>
                    document.getElementById("contato")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                />
              </m.div>

              {/* TERMINAL */}
              <m.div variants={fadeUp}>
                <TerminalInput />
              </m.div>
            </m.div>
          </div>
        </m.div>

        <style>{`
        .terminal-cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 0;
          }

          50% {
            opacity: 1;
          }
        }
      `}</style>
      </m.section>
    </LazyMotion>
  );
}

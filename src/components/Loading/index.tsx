import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0 },
};

export default function Loading() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#05050f] via-[#07071a] to-[#05050f] text-indigo-400 font-fira-code"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        variants={container}
        className="w-full max-w-sm px-6 text-left"
      >
        {/* Terminal header */}
        <motion.div
          variants={item}
          className="mb-4 flex items-center gap-2 text-xs text-indigo-300"
        >
          <span className="h-2 w-2 rounded-full bg-red-500" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <span className="ml-2">terminal</span>
        </motion.div>

        {/* Terminal body */}
        <div className="rounded-lg border border-indigo-500/20 bg-black/40 p-4 shadow-lg backdrop-blur">
          <motion.p variants={item}>
            <span className="text-indigo-500">$</span> boot portfolio
          </motion.p>

          <motion.p variants={item} className="text-indigo-300">
            Inicializando sistema...
          </motion.p>

          <motion.p variants={item} className="text-indigo-300">
            Carregando módulos
            <span className="animate-pulse">.</span>
            <span className="animate-pulse delay-150">.</span>
            <span className="animate-pulse delay-300">.</span>
          </motion.p>

          {/* Progress bar */}
          <motion.div
            variants={item}
            className="mt-4 h-1 w-full overflow-hidden rounded bg-indigo-900/30"
          >
            <motion.div
              className="h-full bg-indigo-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Cursor */}
          <motion.span
            className="mt-2 inline-block h-4 w-2 bg-indigo-400"
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          />
        </div>

        <motion.p
          variants={item}
          className="mt-4 text-center text-xs text-indigo-300"
        >
          portfolio.dev
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

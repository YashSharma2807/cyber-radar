import { motion } from "framer-motion";

export default function NewsCard({ title, summary, category, delayTime }) {
  return (
    <motion.div
      // The starting state (invisible and pushed down slightly)
      initial={{ opacity: 0, y: 50 }}
      // What happens when you scroll down to it
      whileInView={{ opacity: 1, y: 0 }}
      // How fast it animates
      transition={{ duration: 0.5, delay: delayTime }}
      // 'once: false' means it will animate every time you scroll past it!
      viewport={{ once: false, amount: 0.1 }}
      className="bg-gray-900 border border-green-500/20 p-6 rounded-lg shadow-lg hover:border-green-500 transition-colors"
    >
      <span className="text-xs font-mono text-green-400 bg-green-900/30 px-2 py-1 rounded">
        {category}
      </span>
      <h2 className="text-xl font-bold text-white mt-3 mb-2">{title}</h2>
      <p className="text-gray-400 text-sm mb-4">{summary}</p>
      <button className="text-green-500 font-mono text-sm hover:underline">
        Read Full Report &gt;&gt;
      </button>
    </motion.div>
  );
}

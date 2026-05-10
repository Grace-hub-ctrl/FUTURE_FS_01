import { motion } from 'motion/react';
import { ArrowDownRight, Github, Linkedin } from 'lucide-react';
import israelImg from './israel.jpg';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl space-y-8 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-500 dark:text-indigo-400 text-xs font-bold tracking-wider uppercase mb-2 shadow-sm"
        >
          Full-Stack Developer | AI Enthusiast | IoT Systems Architect
        </motion.div>

        <motion.h1 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[1.05]"
        >
          <span className="block overflow-hidden">
            {"Hi, this is ".split(" ").map((word, wordIndex, words) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap">
                {word.split("").map((char, charIndex) => {
                  const absoluteIndex = words.slice(0, wordIndex).join("").length + wordIndex + charIndex;
                  return (
                    <motion.span
                      key={charIndex}
                      variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      transition={{ duration: 0.3, delay: absoluteIndex * 0.03 }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  );
                })}
                {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
              </span>
            ))}
            <span className="text-gradient inline-block whitespace-nowrap">
              {"Israel".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            {".".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                transition={{ duration: 0.1, delay: 0.8 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden">
            {"Architecting the future.".split(" ").map((word, wordIndex, words) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap">
                {word.split("").map((char, charIndex) => {
                  // Calculate absolute index for delay
                  const absoluteIndex = words.slice(0, wordIndex).join("").length + wordIndex + charIndex;
                  return (
                    <motion.span
                      key={charIndex}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      transition={{ duration: 0.2, delay: 1.0 + absoluteIndex * 0.03 }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  );
                })}
                {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
              </span>
            ))}
          </span>
        </motion.h1>

        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1 text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
          >
            I architect high-performance web ecosystems focusing on scalability, clean engineering, and exceptional user experience across the full stack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: -3 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5, 
              type: 'spring',
              stiffness: 100 
            }}
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[4rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl relative group hover:rotate-0 transition-transform duration-500 shrink-0"
          >
            <img 
              src={israelImg} 
              alt="Israel" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[4rem]" />
          </motion.div>
        </div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 right-6 hidden lg:flex items-center gap-4 text-slate-500 uppercase tracking-widest text-[10px] font-bold"
      >
        <div className="flex bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full p-2 gap-4">
          {[Github, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="hover:text-indigo-500 transition-colors">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

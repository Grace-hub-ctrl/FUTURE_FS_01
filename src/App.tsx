import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ProjectCard } from './components/Cards';
import Contact from './components/Contact';
import { PROJECTS, SKILLS, EDUCATION, SOCIALS, CERTIFICATES } from './constants';
import { motion, useScroll, useSpring } from 'motion/react';
import { Github, Linkedin, Award, ExternalLink } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider>
      <div className="relative">
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-foreground z-[60] origin-left"
          style={{ scaleX }}
        />
        
        <Navbar />
        
        <main>
          <Hero />

          {/* Projects Section */}
          <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="text-6xl md:text-8xl font-extrabold tracking-tighter"
              >
                {"INNOVATION ".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.2, delay: i * 0.03 }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                <span className="text-gradient">
                  {"FOR IMPACT".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      transition={{ duration: 0.2, delay: 0.3 + i * 0.03 }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>

          {/* Education Section (Timeline) */}
          <section id="education" className="py-32 px-6 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
            <div className="text-center mb-20">
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100"
              >
                Education & <span className="text-gradient">Training</span>
              </motion.h2>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-indigo-500/20 hidden md:block" />
              
              <div className="space-y-12">
                {EDUCATION.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: edu.alignment === 'left' ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-8 ${edu.alignment === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${edu.alignment === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white dark:bg-slate-900 shadow-sleek border border-slate-100 dark:border-slate-800 p-8 rounded-3xl">
                        <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">{edu.institution}</h4>
                        <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">{edu.degree}</p>
                        <span className="inline-block mt-4 text-[10px] font-black text-indigo-500 uppercase tracking-widest bg-indigo-500/5 px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                    
                    <div className="relative flex items-center justify-center shrink-0 z-10 hidden md:flex">
                      <div className="w-8 h-8 rounded-full bg-background border-4 border-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.4)]" />
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-32 px-6 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
             <div className="grid lg:grid-cols-[1fr_2fr] gap-20">
               <div className="space-y-6">
                  <motion.h2 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-6xl md:text-8xl font-extrabold tracking-tighter"
                  >
                    {"SKILLS".split("").map((char, i) => (
                      <motion.span
                        key={i}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 }
                        }}
                        transition={{ duration: 0.1, delay: i * 0.05 }}
                        className="inline-block text-gradient"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.h2>
                 <p className="text-xl text-slate-500 dark:text-slate-400 max-w-sm font-medium">
                   A comprehensive stack ranging from low-level systems to high-level architecture.
                 </p>
               </div>
               
               <div className="space-y-16">
                 {SKILLS.map((skillGroup, i) => (
                   <div key={i} className="space-y-8 glass-card p-10 rounded-[2.5rem]">
                     <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-2">
                       {skillGroup.category}
                     </h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {skillGroup.items.map((skill, j) => (
                         <div 
                           key={j}
                           className="flex items-center gap-4 p-6 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl transform hover:scale-105 transition-transform cursor-pointer shadow-sleek"
                         >
                           <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 font-black text-xs">
                             {skill.name.split(' ')[0].slice(0, 2).toUpperCase()}
                           </div>
                           <span className="text-xs font-bold tracking-tight text-slate-600 dark:text-slate-300">{skill.name}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </section>
        </main>

        {/* Certificates Section */}
        <section id="certificates" className="py-32 px-6 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
          <div className="text-center mb-20">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100"
            >
              Professional <span className="text-gradient">Certifications</span>
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATES.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sleek hover:shadow-indigo-500/10 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
                    <Award size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-tight mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                </div>
                
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-800/50 px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-500 hover:text-indigo-600 transition-colors"
                      title="Verify Certificate"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 dark:border-slate-800">
          <Contact />
        </section>

        <footer className="py-20 px-6 border-t border-border bg-white dark:bg-neutral-900/40">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-10 h-10 bg-foreground flex items-center justify-center rounded-sm">
                <span className="text-background font-mono text-sm uppercase">ID</span>
              </div>
              <p className="text-sm font-medium opacity-60">
                Designed & Engineered with passion <br /> © 2026 Israel Dawit.
              </p>
            </div>

            <div className="flex gap-8">
               <a 
                 href={SOCIALS.github} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:bg-foreground hover:text-background transition-all shadow-sm"
                 title="GitHub"
               >
                 <Github size={18} />
               </a>
               <a 
                 href={SOCIALS.linkedin} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:bg-[#0A66C2] hover:text-white transition-all shadow-sm"
                 title="LinkedIn"
               >
                 <Linkedin size={18} />
               </a>
            </div>

            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest"
            >
              Back to top
              <motion.div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                ↑
              </motion.div>
            </button>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}


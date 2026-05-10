import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, MapPin, Phone, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { CONTACT_INFO } from '../constants';

export default function Contact() {
  const [showEnquiries, setShowEnquiries] = useState(false);

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none"
            >
              {"LET'S ".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <br />
              <span className="text-gradient">
                {"CO-CREATE".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.2, delay: 0.3 + i * 0.05 }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h2>
            <div className="space-y-8">
              <p className="text-xl text-slate-500 dark:text-slate-400 max-w-md font-medium leading-relaxed">
                Have an ambitious project in mind? Let&apos;s build the next generation of digital infrastructure together.
              </p>
              
              <button 
                onClick={() => setShowEnquiries(!showEnquiries)}
                className="group flex items-center gap-3 px-6 py-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-all shadow-sleek"
              >
                {showEnquiries ? <EyeOff size={16} /> : <Eye size={16} />}
                {showEnquiries ? 'Hide Enquiries' : 'Show Enquiries'}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {showEnquiries && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="space-y-8"
              >
                {[
                  { icon: Mail, label: 'Enquiries', value: CONTACT_INFO.enquiries },
                  { icon: MapPin, label: 'HQ', value: CONTACT_INFO.hq },
                  { icon: Phone, label: 'Line', value: CONTACT_INFO.line }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6"
                   >
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-indigo-500 shadow-sleek">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-1">{item.label}</p>
                      <p className="text-xl font-bold dark:text-slate-200">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.form 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          action="https://formspree.io/f/xdabpgdz"
          method="POST"
          className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-12 rounded-[3.5rem] space-y-8 shadow-sleek relative"
        >
          <div className="absolute top-0 right-12 w-24 h-24 bg-indigo-500/10 blur-[60px] rounded-full" />
          
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Identity</label>
              <input 
                name="name"
                type="text" 
                required
                placeholder="Name"
                className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-colors dark:text-slate-100" 
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Communication</label>
              <input 
                name="email"
                type="email" 
                required
                placeholder="Email Address"
                className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-colors dark:text-slate-100" 
              />
            </div>
          </div>
          
          <div className="space-y-3 relative z-10">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Manifesto</label>
            <textarea 
              name="message"
              rows={4}
              required
              placeholder="Tell me about your vision..."
              className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-colors resize-none dark:text-slate-100" 
            />
          </div>

          <button type="submit" className="w-full py-6 bg-indigo-600 text-white font-black uppercase tracking-[0.3em] text-xs rounded-2xl hover:bg-indigo-500 shadow-xl shadow-indigo-600/20 transition-all flex items-center justify-center gap-3 relative z-10">
            Transmit <Send size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

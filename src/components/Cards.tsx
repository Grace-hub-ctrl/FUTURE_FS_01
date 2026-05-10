import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 backdrop-blur-sm shadow-sleek transition-all duration-500 hover:shadow-indigo-500/10 flex flex-col h-full"
    >
      <div className="aspect-[16/10] overflow-hidden p-6 shrink-0">
        <div className="w-full h-full rounded-3xl overflow-hidden border border-slate-200/50 dark:border-slate-800/50 shadow-inner bg-slate-50 dark:bg-slate-800/50">
          <img 
            src={project.image} 
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>
      
      <div className="px-8 pb-8 space-y-6 flex-1 flex flex-col">
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-medium italic">
            {project.description}
          </p>
        </div>

        <div className="space-y-4 flex-1">
          {project.problem && (
            <div className="space-y-1">
              <h4 className="text-[11px] font-black uppercase tracking-wider text-indigo-500">The Problem:</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{project.problem}</p>
            </div>
          )}
          {project.solution && (
            <div className="space-y-1">
              <h4 className="text-[11px] font-black uppercase tracking-wider text-indigo-500">The Solution:</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{project.solution}</p>
            </div>
          )}
          {project.context && (
            <div className="space-y-1">
              <h4 className="text-[11px] font-black uppercase tracking-wider text-indigo-500">The Context:</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{project.context}</p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
          {project.tags.map(tag => (
            <span key={tag} className="text-[9px] uppercase tracking-[0.1em] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
            >
              <ExternalLink size={14} />
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-900 dark:hover:bg-white dark:hover:text-black hover:text-white transition-all shadow-sm"
              >
                <Github size={14} />
              </a>
            )}
          </div>
          <motion.span 
            whileHover={{ x: 5 }}
            className="text-[10px] uppercase font-black tracking-widest text-indigo-500 cursor-pointer"
          >
            Details →
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};


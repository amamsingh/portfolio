import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

export default function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card hover:bg-violet-900/50 rounded-xl transition-all duration-300 hover:-translate-y-2 flex flex-col group h-full border border-white/5 hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]"
        >
            <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                    <div className="text-neon-cyan group-hover:scale-110 transition-transform duration-300">
                        <Folder className="w-10 h-10" />
                    </div>
                    <div className="flex gap-4">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-light hover:text-neon-purple transition-colors transform hover:scale-110"
                            title="View Code"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-light hover:text-neon-cyan transition-colors transform hover:scale-110"
                            title="View Live Demo"
                        >
                            <ExternalLink className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                    {project.title}
                </h3>

                <p className="text-slate-light mb-6 text-sm leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-auto">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-mono text-neon-purple/80"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

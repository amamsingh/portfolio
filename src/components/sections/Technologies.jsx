import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
    "Java",
    "Spring Boot",
    "Hibernate",
    "Microservices",
    "J2EE",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "REST API",
    
    "Git",
    "Docker",
    "AWS",
    "React.js",
    "Tailwind CSS"
];

export default function Technologies() {
    return (
        <section id="technologies" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-[1px] w-12 bg-neon-purple"></div>
                    <h2 className="text-3xl font-bold text-white text-glow">
                        Technologies I Use
                    </h2>
                </div>

                <div className="flex flex-wrap gap-4">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="glass-card px-6 py-3 rounded-xl border border-white/5 text-slate-light font-mono text-sm hover:text-white hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 cursor-default"
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

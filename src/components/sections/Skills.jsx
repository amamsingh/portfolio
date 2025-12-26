import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Code, Server, Database, PenTool } from 'lucide-react';

const skillsData = [
    {
        category: "Backend",
        icon: <Server className="w-6 h-6" />,
        skills: ["Java", "Spring Boot", "Hibernate", "REST APIs", "Microservices", "J2EE"]
    },
    {
        category: "Frontend",
        icon: <Code className="w-6 h-6" />,
        skills: ["React.js", "JavaScript", "Tailwind CSS", "HTML", "CSS"]
    },
    {
        category: "Database",
        icon: <Database className="w-6 h-6" />,
        skills: ["MySQL", "PostgreSQL", "JDBC", "SQL"]
    },
    {
        category: "Tools & DevOps",
        icon: <PenTool className="w-6 h-6" />,
        skills: ["Git & GitHub", "Docker", "Postman", "IntelliJ IDEA", "VS Code"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-12 relative">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="Technical Skills" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 group hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="text-white bg-white/10 p-2 rounded-lg group-hover:bg-neon-purple group-hover:shadow-[0_0_15px_rgba(176,0,255,0.5)] transition-all duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                                    {category.category}
                                </h3>
                            </div>

                            <ul className="space-y-2">
                                {category.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="flex items-center text-slate-light font-mono text-sm before:content-['▹'] before:text-neon-purple before:mr-2"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

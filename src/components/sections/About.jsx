import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import heroAvatar from '../../assets/hero-avatar.jpg'; // Using the neon avatar

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="About Me" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 text-lg text-slate-light"
                    >
                        <p className="leading-relaxed">
                            I'm a software engineer passionate about building exceptional digital experiences. My journey in technology began with a curiosity about how systems work, which evolved into a love for <span className="text-neon-cyan">creating efficient, elegant solutions</span> to complex problems.
                        </p>
                        <p className="leading-relaxed">
                            With expertise in full-stack development, I specialize in creating scalable web applications using modern technologies. I'm particularly interested in optimizing <span className="text-neon-purple">backend systems</span> and building intuitive user interfaces that deliver outstanding experiences.
                        </p>
                        <p className="leading-relaxed">
                            I have pursued my Bachelor's in Information Technology at <span className="text-white font-medium">Chandigarh Group of Colleges</span>. While working with <span className="text-neon-cyan font-medium">The Skybrisk</span>, I'm constantly expanding my knowledge and skills. I enjoy tackling challenging problems and collaborating with teams to deliver innovative solutions.
                        </p>
                    </motion.div>

                    {/* Right Column: Avatar Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center md:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-purple to-neon-cyan blur-[50px] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                            <div className="relative w-full h-full rounded-full border-4 border-white/5 overflow-hidden shadow-2xl">
                                <img
                                    src={heroAvatar}
                                    alt="About Aman"
                                    className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-105"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

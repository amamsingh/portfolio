import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative mb-20">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent -z-10" />

            <div className="max-w-3xl mx-auto px-6 text-center">
                <p className="font-mono text-neon-purple mb-4"> What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow">
                    Get In Touch
                </h2>
                <p className="text-slate-light text-lg leading-relaxed mb-12">
                    I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <a
                    href="mailto:amansingh001r@gmail.com"
                    className="group relative inline-block px-10 py-5 bg-transparent overflow-hidden rounded-lg transition-transform hover:scale-105"
                >
                    {/* Background and Border effects */}
                    <div className="absolute inset-0 border border-neon-purple/50 rounded-lg group-hover:border-neon-cyan/50 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-neon-purple/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />

                    <span className="relative z-10 font-mono text-lg text-neon-purple group-hover:text-neon-cyan transition-colors duration-300 flex items-center gap-3">
                        Say Hello
                    </span>
                </a>
            </div>
        </section>
    );
}

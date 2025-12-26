import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative mb-20">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent -z-10" />

            <div className="max-w-3xl mx-auto px-6 text-center">
                <p className="font-mono text-neon-purple mb-4">05. What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow">
                    Get In Touch
                </h2>
                <p className="text-slate-light text-lg leading-relaxed mb-12">
                    I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <a
                    href="mailto:amansingh001r@gmail.com"
                    className="inline-block relative px-8 py-4 bg-violet-800/20 backdrop-blur-sm border border-neon-purple text-neon-purple font-mono text-sm rounded hover:bg-neon-purple/10 hover:shadow-[0_0_20px_rgba(176,0,255,0.4)] transition-all duration-300 group overflow-hidden"
                >
                    <span className="relative z-10">Say Hello</span>
                </a>
            </div>
        </section>
    );
}

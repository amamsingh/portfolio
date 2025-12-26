import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, FileText, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiCplusplus, SiSpringboot, SiC,
    SiHibernate, SiApachemaven, SiGradle, SiJunit5, SiApachetomcat
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import heroAvatar from '../../assets/hero-avatar.jpg';

// Reduced spread to keep icons closer to the avatar ("hidden behind" / "little view")
// Added more Java-related icons with CONFIRMED imports
const floatingIcons = [
    // Original set (tightened coordinates)
    { Icon: SiHtml5, color: "#E34F26", x: -90, y: -70, delay: 0 },
    { Icon: SiCss3, color: "#1572B6", x: 90, y: -60, delay: 0.2 },
    { Icon: SiJavascript, color: "#F7DF1E", x: -80, y: 40, delay: 0.4 },
    { Icon: SiReact, color: "#61DAFB", x: 80, y: 50, delay: 0.6 },

    // C/C++
    { Icon: SiCplusplus, color: "#00599C", x: -50, y: -100, delay: 0.8 },
    { Icon: SiC, color: "#A8B9CC", x: 50, y: 100, delay: 1.4 },

    // Java Ecosystem (More added)
    { Icon: FaJava, color: "#E76F00", x: 60, y: -100, delay: 1.0 },
    { Icon: SiSpringboot, color: "#6DB33F", x: -70, y: 80, delay: 1.2 },
    { Icon: SiHibernate, color: "#59666C", x: -110, y: 0, delay: 1.6 },
    { Icon: SiApachemaven, color: "#C71A36", x: 110, y: 10, delay: 1.8 },
    { Icon: SiGradle, color: "#02303A", x: -30, y: 120, delay: 2.0 },
    { Icon: SiJunit5, color: "#25A162", x: 30, y: -130, delay: 2.2 },
    { Icon: SiApachetomcat, color: "#F8DC75", x: 0, y: -140, delay: 2.4 }, // Top center
];

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-transparent">
            {/* Background decoration */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-violet-700/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[120px] -z-10 animate-pulse-slow delay-1000" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full flex flex-col items-center text-center">

                {/* Avatar with Glow & Floating Icons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="relative w-48 h-48 md:w-56 md:h-56 mb-10"
                >
                    {/* Floating Icons - Positioned to be partially behind/around the avatar */}
                    {floatingIcons.map(({ Icon, color, x, y, delay }, index) => (
                        <motion.div
                            key={index}
                            className="absolute z-0 bg-white/5 backdrop-blur-sm p-2 rounded-full border border-white/5 shadow-sm opacity-60"
                            initial={{ opacity: 0, x: 0, y: 0 }}
                            animate={{
                                opacity: 0.7, // Lower opacity to make them subtle ("little view")
                                x: x,
                                y: y,
                                translateY: [0, -10, 0],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                opacity: { duration: 0.5, delay: 0.5 + delay },
                                x: { duration: 0.8, delay: 0.5 + delay, type: "spring" },
                                y: { duration: 0.8, delay: 0.5 + delay, type: "spring" },
                                translateY: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: delay
                                },
                                rotate: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: delay
                                }
                            }}
                            style={{
                                top: '50%',
                                left: '50%',
                                marginTop: '-20px',
                                marginLeft: '-20px',
                                zIndex: -1 // Explicitly behind the avatar image
                            }}
                        >
                            <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color }} />
                        </motion.div>
                    ))}

                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-purple to-neon-cyan blur-lg opacity-75 animate-glow z-10"></div>
                    <img
                        src={heroAvatar}
                        alt="aman Singh"
                        className="relative w-full h-full object-cover rounded-full border-4 border-white/10 z-20"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-3xl"
                >
                    <h2 className="text-neon-cyan font-mono text-lg mb-6 tracking-wide">
                        Hi, I'm a Software Engineer
                    </h2>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight text-glow">
                        aman <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">Singh.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-light mb-10 leading-relaxed">
                        Building immersive digital experiences with modern technologies.
                        Focused on <span className="text-neon-purple font-medium">high-performance backends</span> and <span className="text-neon-cyan font-medium">fluid frontends</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="cursor-pointer group relative px-8 py-4 bg-violet-800/20 backdrop-blur-sm border border-neon-purple/50 text-white rounded font-mono text-sm overflow-hidden transition-all hover:border-neon-purple hover:shadow-[0_0_20px_rgba(176,0,255,0.4)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Checkout My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>

                        <div className="flex items-center gap-6">
                            <SocialLink href="https://github.com/amamsingh?tab=repositories" icon={<Github className="w-6 h-6" />} label="Github" />
                        </div>
                    </div>
                </motion.div>


            </div>
        </section>
    );
}

function SocialLink({ href, icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 rounded-full text-slate-light hover:text-white hover:bg-neon-purple/20 hover:shadow-[0_0_15px_rgba(176,0,255,0.4)] transition-all hover:-translate-y-1 backdrop-blur-sm border border-white/5"
            aria-label={label}
        >
            {icon}
        </a>
    );
}

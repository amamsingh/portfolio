import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'About', to: 'about', number: '01.' },
    { name: 'Experience', to: 'experience', number: '02.' },
    { name: 'Projects', to: 'projects', number: '03.' },
    { name: 'Skills', to: 'skills', number: '04.' },
    { name: 'Contact', to: 'contact', number: '05.' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav h-20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'bg-transparent h-24'}`}>
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="cursor-pointer group"
                >
                    <Link to="hero" smooth={true} duration={500}>
                        <div className="text-neon-purple font-mono font-bold text-xl border-2 border-neon-purple rounded-full px-2 py-1 group-hover:bg-neon-purple/10 group-hover:shadow-[0_0_15px_rgba(176,0,255,0.5)] transition-all duration-300">
                            &lt;as /&gt;
                        </div>
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <ol className="flex space-x-8">
                        {navItems.map((item, index) => (
                            <motion.li
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer font-mono text-sm text-slate-light hover:text-neon-cyan transition-colors group"
                                >
                                    <span className="text-neon-purple mr-1">{item.number}</span>
                                    <span className="group-hover:text-neon-cyan group-hover:drop-shadow-[0_0_5px_rgba(0,255,255,0.5)] transition-all">{item.name}</span>
                                </Link>
                            </motion.li>
                        ))}
                    </ol>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <a
                            href="https://drive.google.com/file/d/1qy6pWI4qf04pbbdaqWHHS3Rp48NkRct6/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border border-neon-purple text-neon-purple font-mono text-sm rounded hover:bg-neon-purple/10 hover:shadow-[0_0_15px_rgba(176,0,255,0.4)] transition-all duration-300"
                        >
                            Resume
                        </a>
                    </motion.div>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-neon-purple focus:outline-none"
                    >
                        {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 top-0 right-0 w-full h-screen bg-violet-900/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 z-40 md:hidden"
                    >
                        <ol className="flex flex-col items-center space-y-6">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="flex flex-col items-center cursor-pointer font-mono text-lg text-slate-light hover:text-neon-cyan"
                                    >
                                        <span className="text-neon-purple mb-2 text-sm">{item.number}</span>
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ol>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border border-neon-purple text-neon-purple font-mono text-lg rounded hover:bg-neon-purple/10 transition-colors"
                        >
                            Resume
                        </a>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-8 right-8 text-neon-purple"
                        >
                            <X className="h-8 w-8" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

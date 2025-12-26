import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 bg-transparent border-t border-white/5 relative z-10 glass-nav">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="flex space-x-6">
                        <a href="https://github.com/amamsingh" className="text-slate-light hover:text-neon-purple transition-colors transform hover:scale-110">
                            <span className="sr-only">GitHub</span>
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="https://linkedin.com/in/aman-singh-34a971249/" className="text-slate-light hover:text-neon-cyan transition-colors transform hover:scale-110">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href="mailto:amansingh001r@gmail.com" className="text-slate-light hover:text-neon-purple transition-colors transform hover:scale-110">
                            <span className="sr-only">Email</span>
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>
                    <p className="text-center text-sm text-slate-light font-mono">
                        &copy; {currentYear} Aman Singh. All rights reserved.
                    </p>
                    <p className="text-center text-xs text-slate-dark font-mono flex items-center gap-2">
                        Built with React, Tailwind CSS & <span className="text-neon-cyan">Coffee ☕</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, number }) {
    return (
        <div className="flex items-center mb-10 w-full">
            {number && (
                <span className="font-mono text-green text-xl mr-2 font-normal">
                    {number}.
                </span>
            )}
            <h2 className="text-3xl font-bold text-slate-lightest whitespace-nowrap">
                {title}
            </h2>
            <div className="h-px bg-navy-700 w-full ml-5 max-w-xs md:max-w-sm" />
        </div>
    );
}

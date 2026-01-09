"use client";

import React from 'react';
import { Zap } from 'lucide-react';

interface NewsTickerProps {
    items: string[];
}

export default function NewsTicker({ items }: NewsTickerProps) {
    // Duplicate items to ensure smooth infinite scroll
    const displayItems = [...items, ...items];

    return (
        <div className="border-b border-gray-300 bg-white dark:bg-white overflow-hidden relative">
            <div className="container mx-auto flex items-center h-10">
                {/* Fixed Label with higher index to appear over the scrolling text */}
                <div className="flex-shrink-0 bg-black text-white px-3 py-2.5 h-full flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider relative z-20">
                    <Zap size={12} className="fill-white text-yellow-500" />
                    Latest
                </div>

                {/* Ticker Content Wrapper */}
                <div className="flex-1 overflow-hidden relative z-10">
                    <div className="flex animate-marquee whitespace-nowrap py-2 h-full items-center">
                        {displayItems.map((item, index) => (
                            <React.Fragment key={index}>
                                <span className="text-xs font-semibold text-gray-700 cursor-pointer hover:underline hover:text-red-700 transition-colors px-4">
                                    {item}
                                </span>
                                {index !== displayItems.length - 1 && (
                                    <span className="text-gray-300">|</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                    display: flex;
                    width: max-content;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}

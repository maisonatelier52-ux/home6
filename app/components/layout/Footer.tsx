"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronUp } from 'lucide-react';

export default function Footer() {
    const tags = [
        "Financial News", "Market Analysis", "Stock Insights", "Investment", "Business", "Politics",
        "Quest for Profit", "Wealth Strategies", "Economics", "Tech Trends", "Global News", "Analysis"
    ];

    const hotNews = [
        {
            author: "Jessica Wu",
            title: "Generative AI: Moving Beyond the Hype to Enterprise Reality",
            slug: "generative-ai-the-next-frontier"
        },
        {
            author: "Sarah Jenkins",
            title: "Federal Reserve Signals Slower Rate Cuts for 2026",
            slug: "fed-interest-rate-outlook"
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-black text-white pt-12 pb-6">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* About Us */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-white text-md font-bold font-serif">About Us</h2>
                        <div className="flex flex-col gap-4 text-sm leading-relaxed text-gray-400">
                            <p>
                                <strong>The Quest for Profit</strong> is your ultimate source for the latest <strong>financial news</strong>, providing expert <strong>market analysis</strong> and deep <strong>insights</strong> into global economics.
                            </p>
                            <p>
                                Our <strong>quest</strong> is to deliver rigorously researched <strong>analysis</strong> and <strong>proven financial insights</strong> to help you navigate the path to <strong>profit</strong>.
                            </p>
                        </div>
                    </div>

                    {/* Tag Cloud */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-white text-md font-bold font-serif">Tag Cloud</h2>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <Link
                                    key={index}
                                    href={`/tag/${tag.toLowerCase().replace(/ /g, '-')}`}
                                    title={tag}
                                    className="px-3 py-1.5 border border-gray-800 text-[11px] uppercase tracking-wider hover:bg-white hover:text-black hover:border-white transition-all underline-offset-4 hover:underline"
                                >
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Hot News */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-white text-md font-bold font-serif">Hot News</h2>
                        <div className="flex flex-col divide-y divide-gray-800">
                            {hotNews.map((news, index) => (
                                <div key={index} className="flex gap-4 py-4 first:pt-0 group">
                                    <div className="text-[11px] text-gray-500 whitespace-nowrap min-w-[70px]">
                                        Written by:<br />
                                        <span className="text-gray-400 font-bold">{news.author}</span>
                                    </div>
                                    <div className="w-[1px] bg-gray-800 h-10 self-center"></div>
                                    <Link href={`/article/${news.slug}`} title={news.title}>
                                        <h3 className="text-sm font-bold leading-snug group-hover:underline text-gray-300 transition-colors">
                                            {news.title}
                                        </h3>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-white text-md font-bold font-serif"></h2>
                        <div className="flex flex-col divide-y divide-gray-800 text-sm">
                            <Link href="/about-us" title="About Us" className="py-3 flex items-center gap-2 hover:underline group">
                                <span className="text-gray-500 group-hover:text-white">»</span> About Us
                            </Link>
                            <Link href="/authors" title="Authors" className="py-3 flex items-center gap-2 hover:underline group">
                                <span className="text-gray-500 group-hover:text-white">»</span> Authors
                            </Link>
                            <Link href="/privacy-policy" title="Privacy Policy" className="py-3 flex items-center gap-2 hover:underline group">
                                <span className="text-gray-500 group-hover:text-white">»</span> Privacy Policy
                            </Link>
                            <Link href="/terms-conditions" title="Terms & Conditions" className="py-3 flex items-center gap-2 hover:underline group">
                                <span className="text-gray-500 group-hover:text-white">»</span> Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-2 text-sm font-bold">
                        <Link href="/category/finance" title="Finance" className="hover:underline hover:text-white">Finance</Link>
                        <Link href="/category/politics" title="Politics" className="hover:underline hover:text-white">Politics</Link>
                        <Link href="/category/wealth" title="Wealth" className="hover:underline hover:text-white">Wealth</Link>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <p className="text-[12px] text-gray-500">
                            © Copyright 2025 - The Quest for Profit. All Rights Reserved
                        </p>
                        <button
                            onClick={scrollToTop}
                            className="bg-gray-800 p-2 hover:bg-white hover:text-black transition-all flex items-center justify-center"
                        >
                            <ChevronUp size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronUp, Instagram, Youtube } from 'lucide-react';

export default function Footer() {


    const hotNews = [
        {
            author: "Jessica Wu",
            category: "Tech",
            title: "Intel Launches Arc G3 Chips for Handheld Gaming PCs",
            slug: "intel-arc-g3-handheld-gaming-pcs"
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

                        {/* Social Links */}
                        <div className="flex items-center gap-4 pt-2">
                            <Link href="https://www.instagram.com/thequestforprofit/" target="_blank" title="Follow us on Instagram" className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-all duration-300">
                                <Instagram size={16} />
                            </Link>
                            <Link href="https://substack.com/@tqfp45?utm_source=global-search " target="_blank" title="Follow us on Substack" className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#FF6719] hover:text-white hover:border-[#FF6719] transition-all duration-300">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                    <path d="M22.539 8.242H1.46V5.406h21.078v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.078V0z" />
                                </svg>
                            </Link>
                            <Link href="https://www.youtube.com/@TQFP-45 " target="_blank" title="Subscribe to our YouTube channel" className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all duration-300">
                                <Youtube size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-white text-md font-bold font-serif">Categories</h2>
                        <div className="flex flex-wrap gap-2">
                            {["Markets", "Wealth", "Business", "Finance", "Tech", "Politics", "Nature", "Culture"].map((category, index) => (
                                <Link
                                    key={index}
                                    href={`/${category.toLowerCase()}`}
                                    title={category}
                                    className="px-3 py-1.5 border border-gray-800 text-[11px] uppercase tracking-wider hover:bg-white hover:text-black hover:border-white transition-all underline-offset-4 hover:underline"
                                >
                                    {category}
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
                                    <Link href={`/${(news.category || 'news').toLowerCase()}/${news.slug}`} title={news.title}>
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
                <div className="pt-6 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 items-center gap-6">
                    <div className="hidden md:block"></div> {/* Spacer for centering balance */}

                    <p className="text-[12px] text-gray-500 text-center">
                        © Copyright 2026 - The Quest for Profit. All Rights Reserved
                    </p>

                    <div className="flex justify-center md:justify-end">
                        <button
                            onClick={scrollToTop}
                            className="bottom-0 bg-gray-800 p-2 hover:bg-white hover:text-black transition-all flex items-center justify-center"
                            title="Scroll to top"
                        >
                            <ChevronUp size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

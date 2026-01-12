"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronUp } from 'lucide-react';

export default function Footer() {
    const tags = [
        "Art and Culture", "best", "Best theme", "brunch", "Business", "Entertainment",
        "Magazine", "Mother Nature", "Musical", "NewsCommerce", "Newspaper", "Politics"
    ];

    const hotNews = [
        {
            author: "Maxin Dalton",
            title: "Heared Opposite Then Around But A Heinous Square Amphibisly",
            slug: "heared-opposite-around"
        },
        {
            author: "Maxin Dalton",
            title: "Excluding Well A Some Hummingbird Meticulous",
            slug: "excluding-well-some"
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
                        <h3 className="text-white text-md font-bold font-serif">About Us</h3>
                        <div className="flex flex-col gap-4 text-sm leading-relaxed text-gray-400">
                            <p>
                                Within spread beside the ouch sulky this wonderfully and as the well and where supply much hyena so tolerantly recast hawk darn woodpecker.
                            </p>
                            <p>
                                Within spread beside the ouch sulky and this wonderfully and as the well where supply much hyena so tolerantly recast hawk darn woodpecker.
                            </p>
                        </div>
                    </div>

                    {/* Tag Cloud */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-white text-md font-bold font-serif">Tag Cloud</h3>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <Link
                                    key={index}
                                    href={`/tag/${tag.toLowerCase().replace(/ /g, '-')}`}
                                    className="px-3 py-1.5 border border-gray-800 text-[11px] uppercase tracking-wider hover:bg-white hover:text-black hover:border-white transition-all underline-offset-4 hover:underline"
                                >
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Hot News */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-white text-md font-bold font-serif">Hot News</h3>
                        <div className="flex flex-col divide-y divide-gray-800">
                            {hotNews.map((news, index) => (
                                <div key={index} className="flex gap-4 py-4 first:pt-0 group">
                                    <div className="text-[11px] text-gray-500 whitespace-nowrap min-w-[70px]">
                                        Written by:<br />
                                        <span className="text-gray-400 font-bold">{news.author}</span>
                                    </div>
                                    <div className="w-[1px] bg-gray-800 h-10 self-center"></div>
                                    <Link href={`/post/${news.slug}`}>
                                        <h4 className="text-sm font-bold leading-snug group-hover:underline text-gray-300 transition-colors">
                                            {news.title}
                                        </h4>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-white text-md font-bold font-serif">Meta</h3>
                        <div className="flex flex-col divide-y divide-gray-800 text-sm">
                            <Link href="/login" className="py-3 flex items-center gap-2 hover:underline group">
                                <span className="text-gray-500 group-hover:text-white">»</span> Log in
                            </Link>
                            <Link href="/feed" className="py-3 flex items-center gap-2 hover:underline group">
                                <span className="text-gray-500 group-hover:text-white">»</span> Entries feed
                            </Link>
                            <Link href="/comments" className="py-3 flex items-center gap-2 hover:underline group">
                                <span className="text-gray-500 group-hover:text-white">»</span> Comments feed
                            </Link>
                            <Link href="https://wordpress.org" className="py-3 flex items-center gap-2 hover:underline group">
                                <span className="text-gray-500 group-hover:text-white">»</span> WordPress.org
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-2 text-sm font-bold">
                        <Link href="/horror" className="hover:underline hover:text-white">Horror</Link>
                        <Link href="/cultural" className="hover:underline hover:text-white">Cultural</Link>
                        <Link href="/illustrator" className="hover:underline hover:text-white">Illustrator</Link>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <p className="text-[12px] text-gray-500">
                            © Copyright 2022 - My Blog. All Rights Reserved
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

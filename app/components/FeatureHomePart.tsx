import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroArticle {
    id: number;
    image: string;
    category: string;
    author: string;
    date: string;
    views: string;
    readTime: string;
    title: string;
    slug: string;
    excerpt: string;
    excerptPart2: string;
    firstLetter: string;
}

interface SidebarItem {
    id: number;
    image: string;
    author: string;
    date: string;
    title: string;
    slug: string;
}

interface FeatureHomePartProps {
    hero: HeroArticle;
    sidebarItems: SidebarItem[];
}

export default function FeatureHomePart({ hero, sidebarItems }: FeatureHomePartProps) {
    // Fallback images if real ones aren't available
    const heroImageSrc = "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2670&auto=format&fit=crop";
    const sidebarImageSrc = "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=300&auto=format&fit=crop";

    return (
        <div className="w-full bg-white mb-8 border-b border-gray-300 lg:border-none pb-8 lg:pb-0">
            {/* 1. Full Width Hero Image Row */}
            <div className="w-full mb-8">
                <div className="relative w-full aspect-video md:aspect-[2/1.1] overflow-hidden group cursor-pointer">
                    <span className="absolute top-0 left-0 bg-[#e43b3b] text-white text-[10px] font-bold uppercase py-1 px-3 z-10 tracking-wider [writing-mode:vertical-rl] rotate-180">
                        {hero.category}
                    </span>
                    <img
                        src={heroImageSrc}
                        alt={hero.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[0.2]"
                    />
                </div>
            </div>

            {/* 2. Content Row (2 Columns Content + 1 Column Sidebar) */}
            <div className="flex flex-col lg:flex-row gap-10">

                {/* Left Side Content (Takes 2 of 3 columns) */}
                <div className="lg:w-2/3">
                    <div className="flex flex-wrap items-center gap-2 text-[10px] text-gray-400 font-bold uppercase mb-3 tracking-wide">
                        <span className="text-black">{hero.author}</span>
                        <span>ON {hero.date}</span>
                        <span className="px-1 text-gray-300">|</span>
                        <span>{hero.views} VIEWS</span>
                        <span className="px-1 text-gray-300">|</span>
                        <span>{hero.readTime}</span>
                    </div>

                    <h2 className="text-3xl md:text-3xl font-semibold font-weight-650 text-gray-900 mb-6 font-serif leading-tight">
                        {hero.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 leading-relaxed text-[15px]">
                        <div>
                            <p>
                                <span className="float-left text-5xl font-serif text-gray-400 leading-[0.8] mr-2 mt-[-6px]">
                                    {hero.firstLetter}
                                </span>
                                {hero.excerpt}
                            </p>
                        </div>
                        <div>
                            <p className="mb-4">{hero.excerptPart2}</p>
                            <Link
                                href={`/post/${hero.slug}`}
                                className="inline-flex items-center text-[11px] font-bold uppercase text-black hover:text-[#e43b3b] transition-colors mt-2"
                            >
                                Read the Post <span className="ml-1">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Side Sidebar (Takes 1 of 3 columns) */}
                <div className="lg:w-1/3">
                    <div className="flex flex-col">
                        {sidebarItems.map((item, index) => (
                            <Link
                                key={item.id}
                                href={`/post/${item.slug}`}
                                className={`group flex items-start gap-4 py-6 ${index !== 0 ? 'border-t border-gray-300' : ''}`}
                            >
                                <div className="w-[50px] h-[60px] flex-shrink-0 overflow-hidden bg-gray-100 relative">
                                    <img
                                        src={sidebarImageSrc}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-1 text-[11px] text-gray-400 mb-1.5">
                                        <span className="font-bold text-gray-600 group-hover:text-[#e43b3b] transition-colors">{item.author}</span>
                                        <span>on {item.date}</span>
                                    </div>
                                    <h3 className="text-sm font-bold leading-snug text-gray-900 font-serif group-hover:underline decoration-2 decoration-gray-900">
                                        {item.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

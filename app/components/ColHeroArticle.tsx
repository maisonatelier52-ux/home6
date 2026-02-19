import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
    data: {
        category: string;
        title: string;
        intro: string;
        author: string;
        role: string;
        date: string;
        contentLeft: string;
        contentRight: string;
        image: string;
        slug: string;
    };
    aspectRatio?: string;
    showItalicIntro?: boolean;
    titleSize?: string;
}

export default function ColHeroArticle({
    data,
    aspectRatio = "aspect-[4/3]",
    showItalicIntro = true,
    titleSize = "text-3xl"
}: HeroProps) {
    return (
        <div className="flex flex-col group">
            {/* Main Image */}
            <div className={`relative w-full ${aspectRatio} bg-gray-100 mb-6 overflow-hidden`}>
                <span className="absolute top-0 left-0 bg-[#e43b3b] text-white text-[10px] font-bold uppercase py-1 px-3 z-10 tracking-wider [writing-mode:vertical-rl] rotate-180">
                    {data.category}
                </span>
                <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale-[0.3] transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            {/* Title */}
            <h2 className={`${titleSize} font-bold font-serif leading-tight mb-4 text-gray-900 group-hover:underline cursor-pointer`}>
                <Link href={`/${(data.category || 'news').toLowerCase()}/${data.slug}`} className="hover:underline transition-colors">
                    {data.title}
                </Link>
            </h2>

            {/* Intro */}
            <p className={`text-gray-600 ${showItalicIntro ? 'italic' : ''} text-[15px] leading-relaxed mb-4`}>
                {data.intro}
            </p>

            {/* Meta */}
            <div className="text-[11px] font-bold uppercase text-gray-400 mb-8 pb-4 border-b border-gray-100">
                BY <Link href={`/authors#${(data.author || '').toLowerCase().replace(/\s+/g, '-')}`} className="text-black hover:text-red-600 transition-colors">
                    {data.author}
                </Link> / {data.role} ON {data.date}
            </div>

            {/* Two Column Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 text-[14px] leading-relaxed mb-6">
                <div>
                    <span className="float-left text-5xl font-serif text-gray-400 leading-[0.8] mr-2 mt-[-6px]">
                        {data.contentLeft.charAt(0)}
                    </span>
                    {data.contentLeft.slice(1)}
                </div>
                <div>
                    <p className="mb-4">{data.contentRight}</p>
                    <Link href={`/${(data.category || 'news').toLowerCase()}/${data.slug}`} title={data.title} className="text-[11px] font-bold uppercase hover:text-red-600 transition-colors mt-2 block">
                        Read the Post →
                    </Link>
                </div>
            </div>
        </div>
    );
}

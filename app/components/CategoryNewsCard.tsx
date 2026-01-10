import React from 'react';
import Link from 'next/link';

interface CategoryNewsCardProps {
    date: string;
    categories: string[];
    views: string;
    readTime: string;
    comments: number;
    title: string;
    image: string;
    excerpt: string;
    tags: string[];
}

export default function CategoryNewsCard({
    date,
    categories,
    views,
    readTime,
    comments,
    title,
    image,
    excerpt,
    tags
}: CategoryNewsCardProps) {
    return (
        <div className="bg-white border border-gray-100 p-6 mb-8 hover:shadow-sm transition-shadow duration-300">
            {/* Top Metadata */}
            <div className="flex flex-wrap items-center justify-between text-[11px] text-gray-400 mb-4 uppercase font-bold tracking-wider">
                <div className="flex items-center gap-2">
                    <span className="text-gray-400">{date}</span>
                    <div className="flex gap-1 ml-1">
                        {categories.map((cat, i) => (
                            <Link key={i} href={`/category/${cat.toLowerCase()}`} className="text-gray-800 hover:underline transition-all underline decoration-gray-300 underline-offset-2">
                                {cat}{i < categories.length - 1 ? ',' : ''}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-gray-400">
                    <span className="flex items-center gap-1">| {views} Views</span>
                    <span className="flex items-center gap-1">| {readTime}</span>
                    <span className="flex items-center gap-1">| <span className="text-gray-800 underline underline-offset-4">{comments}</span></span>
                </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 leading-tight hover:underline cursor-pointer transition-all duration-200">
                {title}
            </h2>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex-shrink-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 md:h-40 object-cover rounded-sm"
                    />
                </div>
                <div className="md:w-2/3">
                    <p className="text-gray-600 text-[14px] leading-relaxed mb-4">
                        {excerpt}
                    </p>
                </div>
            </div>

            {/* Bottom Tags */}
            <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2 text-[11px] text-gray-500 font-bold uppercase tracking-widest">
                    <span>Tags:</span>
                    {tags.map((tag, i) => (
                        <Link key={i} href="#" className="text-gray-800 hover:underline transition-colors">
                            {tag}{i < tags.length - 1 ? ',' : ''}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

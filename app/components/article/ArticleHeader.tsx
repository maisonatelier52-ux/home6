import React from 'react';
import Link from 'next/link';

interface ArticleHeaderProps {
    category: string;
    title: string;
    date: string;
    views: string;
    readTime: string;
    comments: number;
}

export default function ArticleHeader({
    category,
    title,
    date,
    views,
    readTime,
    comments
}: ArticleHeaderProps) {
    return (
        <div className="mb-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-6">
                <Link href="/" className="hover:text-red-600 transition-colors underline decoration-transparent hover:decoration-red-600 underline-offset-4">Home</Link>
                <span>&gt;</span>
                <Link href={`/category/${category.toLowerCase()}`} className="hover:text-red-600 transition-colors underline decoration-gray-300 hover:decoration-red-600 underline-offset-4 text-gray-800">
                    {category}
                </Link>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-serif font-bold text-gray-900 leading-tight mb-4">
                {title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center justify-between text-[11px] text-gray-400 uppercase font-bold tracking-wider border-b border-gray-200 pb-8">
                <div className="flex items-center gap-1">
                    <span>{date}</span>
                    <span className="text-gray-400 mx-1">In</span>
                    <Link href={`/category/${category.toLowerCase()}`} className="text-gray-800 hover:text-red-600 transition-colors">
                        {category}
                    </Link>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                    <span className="flex items-center gap-1">| {views} Views</span>
                    <span className="flex items-center gap-1">| {readTime}</span>
                    <span className="flex items-center gap-1">| <span className="text-gray-800 underline underline-offset-4">{comments} Comments</span></span>
                </div>
            </div>
        </div>
    );
}

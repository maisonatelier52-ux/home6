import React from 'react';
import Link from 'next/link';

import ArticleShare from './ArticleShare';

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
            <div className="flex items-center justify-between gap-2 text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-2">
                <div className="flex items-center gap-2">
                    <Link href="/" title="Return to Homepage" className="hover:text-red-600 transition-colors underline decoration-transparent hover:decoration-red-600 underline-offset-4">Home</Link>
                    <span>&gt;</span>
                    <Link href={`/${category.toLowerCase().replace(/ /g, '-')}`} title={`View all ${category} news`} className="hover:text-red-600 transition-colors underline decoration-gray-300 hover:decoration-red-600 underline-offset-4 text-gray-800">
                        {category}
                    </Link>
                </div>

            </div>


   
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 tracking-tight leading-tight mt-6 mb-6">
                {title}
            </h1>

            {/* Metadata & Share */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-sans text-gray-500 uppercase font-semibold tracking-wider border-b border-gray-200 pb-6">
                <div className="flex items-center gap-1">
                    <span>{date}</span>
                    <span className="text-gray-400 mx-1">In</span>
                    <Link href={`/${category.toLowerCase().replace(/ /g, '-')}`} title={`View all ${category} news`} className="text-gray-800 hover:text-red-600 transition-colors">
                        {category}
                    </Link>
                </div>

                <ArticleShare title={title} />
            </div>
        </div>
    );
}

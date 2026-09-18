import React from 'react';
import Link from 'next/link';

import ArticleShare from './ArticleShare';

interface ArticleHeaderProps {
    category: string;
    title: string;
    date: string;
    updatedDate?: string;
    readTime: string;
    author: string;
    excerpt?: string;
    articleType?: string;
}

export default function ArticleHeader({
    category,
    title,
    date,
    updatedDate,
    readTime,
    author,
    excerpt,
    articleType = "Essay"
}: ArticleHeaderProps) {
    return (
        <header className="mb-8">
            {/* Breadcrumb */}
            <div className="flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                <div className="flex items-center gap-2">
                    <Link href="/" title="Return to Homepage" className="hover:text-red-600 transition-colors underline decoration-transparent hover:decoration-red-600 underline-offset-4">Home</Link>
                    <span>&gt;</span>
                    <Link href={`/${category.toLowerCase().replace(/ /g, '-')}`} title={`View all ${category} posts`} className="hover:text-red-600 transition-colors underline decoration-gray-300 hover:decoration-red-600 underline-offset-4 text-gray-800">
                        {category}
                    </Link>
                </div>

            </div>


   
            {/* Title */}
            <div className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#a61f2d]">{articleType === "News analysis" ? "Essay & analysis" : articleType}</div>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl font-bold leading-[1.05] tracking-[-0.035em] text-slate-950 md:text-5xl lg:text-6xl">
                {title}
            </h1>

            {excerpt && (
                <p className="mt-6 max-w-3xl font-serif text-xl leading-8 text-slate-600 md:text-2xl md:leading-9">
                    {excerpt}
                </p>
            )}

            {/* Metadata & Share */}
            <div className="mt-7 flex flex-col justify-between gap-4 border-b border-slate-300 pb-6 font-sans text-sm text-slate-600 md:flex-row md:items-end">
                <div>
                    <p className="font-semibold text-slate-950">By {author}</p>
                    <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs uppercase tracking-[0.12em]">
                        <span>Published {date}</span>
                        {updatedDate && <span>• Reviewed {updatedDate}</span>}
                        <span>• {readTime}</span>
                    </p>
                </div>

                <ArticleShare title={title} />
            </div>
        </header>
    );
}

import React from 'react';
import Link from 'next/link';

interface SidebarArticle {
    category: string;
    title: string;
    excerpt: string;
    slug: string;
}

interface SidebarArticleListProps {
    title: { red: string; rest: string };
    articles: SidebarArticle[];
}

export default function SidebarArticleList({ title, articles }: SidebarArticleListProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-bold uppercase transition-colors">
                    <span className="text-red-600">{title.red}</span>
                    <span className="text-gray-400 ml-1">{title.rest}</span>
                </h2>
                <div className="flex-1 h-[1px] bg-gray-200 mt-1"></div>
            </div>

            <div className="flex flex-col gap-4">
                {articles.map((article, index) => (
                    <div
                        key={index}
                        className={`flex flex-col gap-2 pb-4 ${index !== articles.length - 1 ? 'border-b border-gray-300' : ''}`}
                    >
                        <span className="text-[10px] font-bold uppercase text-black">
                            {article.category}
                        </span>
                        <Link href={`/post/${article.slug}`}>
                            <h3 className="text-lg font-bold font-serif leading-tight hover:underline transition-colors">
                                {article.title}
                            </h3>
                        </Link>
                        <p className="text-gray-600 text-[14px] leading-relaxed">
                            {article.excerpt}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

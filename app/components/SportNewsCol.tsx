import React from 'react';
import Link from 'next/link';

interface Article {
    category: string;
    title: string;
    excerpt: string;
    slug: string;
}

interface SportNewsColProps {
    title: { red: string; rest: string };
    articles: Article[];
}

export default function SportNewsCol({ title, articles }: SportNewsColProps) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
                <h2 className="text-sm font-bold uppercase transition-colors whitespace-nowrap">
                    <span className="text-red-700">{title.red}</span>
                    <span className="text-gray-400 ml-1">{title.rest}</span>
                </h2>
                <div className="flex-1 h-[1px] bg-gray-200 mt-1"></div>
            </div>

            <div className="flex flex-col divide-y divide-gray-200">
                {articles.map((article, index) => (
                    <div key={index} className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0">
                        <span className="text-[10px] font-bold uppercase text-black">
                            {article.category}
                        </span>
                        <Link href={`/article/${article.slug}`}>
                            <h3 className="text-[18px] font-bold font-serif leading-tight hover:underline transition-colors">
                                {article.title}
                            </h3>
                        </Link>
                        <p className="text-gray-500 text-[14px] leading-relaxed">
                            {article.excerpt}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

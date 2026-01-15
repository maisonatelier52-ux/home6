import React from 'react';
import Link from 'next/link';

interface Article {
    category: string;
    title: string;
    image: string;
    slug: string;
}

interface HotWeekTopPeoplesProps {
    title: { red: string; rest: string };
    articles: Article[];
}

export default function HotWeekTopPeoples({ title, articles }: HotWeekTopPeoplesProps) {
    return (
        <div className="flex flex-col gap-2">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-bold uppercase tracking-wider whitespace-nowrap">
                    <span className="text-red-700">{title.red}</span>
                    <span className="text-gray-400 ml-1">{title.rest}</span>
                </h2>
                <div className="flex-1 h-[1px] bg-gray-200 mt-1"></div>
            </div>

            <div className="flex flex-col divide-y divide-gray-200">
                {articles.map((article, index) => (
                    <div key={index} className="flex gap-4 pb-4 first:pt-0 group">
                        <div className="flex-1 flex flex-col gap-2">
                            <span className="text-[10px] font-bold uppercase text-black">
                                {article.category}
                            </span>
                            <Link href={`/article/${article.slug}`}>
                                <h3 className="text-[15px] font-bold font-serif leading-tight group-hover:underline text-gray-900 transition-colors">
                                    {article.title}
                                </h3>
                            </Link>
                        </div>
                        <div className="w-24 h-24 flex-shrink-0 bg-gray-100 overflow-hidden mt-1">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

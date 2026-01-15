import React from 'react';
import Link from 'next/link';

interface TimelineItem {
    time: string;
    text: string;
}

interface CultureArticle {
    category: string;
    title: string;
    image?: string;
    excerpt?: string;
    slug: string;
}

interface CoronaCultureColProps {
    coroData: {
        title: { red: string; rest: string };
        description: string;
        timeline: TimelineItem[];
    };
    cultureData: {
        title: { red: string; rest: string };
        articles: CultureArticle[];
    };
}

export default function CoronaCultureCol({ coroData, cultureData }: CoronaCultureColProps) {
    return (
        <div className="flex flex-col gap-6">
            {/* Coronavirus Section */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-sm font-bold uppercase transition-colors whitespace-nowrap">
                        <span className="text-red-700">{coroData.title.red}</span>
                        <span className="text-gray-400 ml-1">{coroData.title.rest}</span>
                    </h2>
                    <div className="flex-1 h-[1px] bg-gray-200 mt-1"></div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-2">
                    {coroData.description}
                </p>

                <div className="relative border-l border-gray-200 ml-1 pl-6 space-y-6">
                    {coroData.timeline.map((item, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#e43b3b] ring-4 ring-white"></div>
                            <div className="flex flex-col">
                                <span className="text-gray-400 text-xs mb-1 font-bold">{item.time}</span>
                                <h4 className="text-gray-800 font-bold leading-snug hover:underline cursor-pointer transition-colors text-sm">
                                    {item.text}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Culture Section */}
            <div className="flex flex-col gap-6 pt-4">
                <div className="flex items-center gap-2 mb-0">
                    <h2 className="text-sm font-bold uppercase transition-colors whitespace-nowrap">
                        <span className="text-red-700">{cultureData.title.red}</span>
                        <span className="text-gray-400 ml-1">{cultureData.title.rest}</span>
                    </h2>
                    <div className="flex-1 h-[1px] bg-gray-200 mt-1"></div>
                </div>

                <div className="flex flex-col gap-4 ">
                    {cultureData.articles.map((article, index) => (
                        <div key={index} className="flex flex-col gap-3 border-b border-gray-300 pb-4">
                            <span className="text-[10px] font-bold uppercase text-black">
                                {article.category}
                            </span>
                            <Link href={`/article/${article.slug}`}>
                                <h3 className="text-[19px] font-bold font-serif leading-tight hover:underline transition-colors">
                                    {article.title}
                                </h3>
                            </Link>
                            {article.image && (
                                <div className="flex gap-4 items-start">
                                    <div className="w-15 h-15 flex-shrink-0 bg-gray-100 overflow-hidden">
                                        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                                    </div>
                                    <p className="text-gray-500 text-[13px] leading-relaxed">
                                        {article.excerpt}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

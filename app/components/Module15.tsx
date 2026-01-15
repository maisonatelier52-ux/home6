import React from 'react';
import Link from 'next/link';

interface Article {
    title: string;
    image: string;
    slug: string;
}

interface Module15Props {
    title: { red: string; rest: string };
    description: string;
    articles: Article[];
}

export default function Module15({ title, description, articles }: Module15Props) {
    return (
        <section className="w-full bg-white pt-8">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-bold uppercase tracking-wider">
                    <span className="text-red-700">{title.red}</span>
                    <span className="text-gray-400 ml-1">{title.rest}</span>
                </h2>
                <div className="flex-1 h-[1px] bg-gray-200"></div>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {description}
            </p>

            {/* Articles Grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Vertical Divider for Desktop */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-100 -translate-x-1/2"></div>

                {articles.map((article, index) => (
                    <div key={index} className="flex gap-4 group">
                        <div className="w-20 h-20 flex-shrink-0 bg-gray-100 overflow-hidden">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover grayscale-[0.2] transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                            />
                        </div>
                        <div className="flex-1">
                            <Link href={`/article/${article.slug}`}>
                                <h3 className="text-[15px] font-bold font-serif leading-snug hover:underline text-gray-900 transition-colors">
                                    {article.title}
                                </h3>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

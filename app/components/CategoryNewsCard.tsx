import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CategoryNewsCardProps {
    date: string;
    categories?: string[];
    category?: string;
    views: string;
    readTime: string;
    comments: number;
    title: string;
    slug: string;
    image: string;
    excerpt: string;
    tags: string[];
}

export default function CategoryNewsCard({
    date,
    categories,
    category,
    views,
    readTime,
    comments,
    title,
    slug,
    image,
    excerpt,
    tags
}: CategoryNewsCardProps) {
    const displayCategories = categories || (category ? [category] : []);

    return (
        <div className="bg-white border border-gray-300 p-6 mb-0 hover:shadow-sm transition-shadow duration-300">
            {/* Top Metadata */}
            <div className="flex flex-wrap items-center justify-between text-[11px] text-gray-400 mb-4 uppercase font-bold tracking-wider">
                <div className="flex items-center gap-2">
                    <span className="text-gray-400">{date}</span>
                    <div className="flex gap-1 ml-1">
                        {displayCategories.map((cat, i) => (
                            <Link key={i} href={`/${cat.toLowerCase()}`} className="text-gray-800 hover:underline transition-all underline decoration-gray-300 underline-offset-2">
                                {cat}{i < displayCategories.length - 1 ? ',' : ''}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 leading-tight hover:underline cursor-pointer transition-all duration-200">
                <Link href={`/${(displayCategories[0] || 'news').toLowerCase()}/${slug}`}>
                    {title}
                </Link>
            </h2>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex-shrink-0 relative h-48 md:h-40">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover rounded-sm"
                    />
                </div>
                <div className="md:w-2/3">
                    <p className="text-gray-600 text-[14px] leading-relaxed mb-4">
                        {excerpt}
                    </p>
                </div>
            </div>

            {/* Bottom Tags */}
            <div className="mt-6 pt-4 border-t border-gray-300">
                <div className="flex flex-wrap gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    <span>Tags:</span>
                    {tags.map((tag, i) => (
                        <div key={i} className="text-gray-800 transition-colors">
                            {tag}{i < tags.length - 1 ? ',' : ''}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

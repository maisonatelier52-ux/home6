import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CategoryNewsCardProps {
    date: string;
    categories?: string[];
    category?: string;
    readTime?: string;
    title: string;
    slug: string;
    image: string;
    excerpt: string;
    tags: string[];
    articleType?: string;
    author?: string;
}

export default function CategoryNewsCard({
    date,
    categories,
    category,
    readTime,
    title,
    slug,
    image,
    excerpt,
    tags,
    articleType,
    author,
}: CategoryNewsCardProps) {
    const displayCategories = categories || (category ? [category] : []);

    return (
        <article className="border-t border-slate-300 py-7 first:border-t-0 first:pt-0">
            {/* Top Metadata */}
            <div className="mb-4 flex flex-wrap items-center justify-between text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                <div className="flex items-center gap-2">
                    <span>{date}</span>
                    <div className="flex gap-1 ml-1">
                        {displayCategories.map((cat, i) => (
                            <Link key={i} href={`/${cat.toLowerCase()}`} title={`View all ${cat} posts`} className="text-[#a61f2d] hover:underline">
                                {cat}{i < displayCategories.length - 1 ? ',' : ''}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>

            {/* Title */}
            <h2 className="mb-4 font-serif text-2xl font-bold leading-tight tracking-tight text-slate-950 hover:underline md:text-3xl">
                <Link href={`/${(displayCategories[0] || 'news').toLowerCase()}/${slug}`} title={title}>
                    {title}
                </Link>
            </h2>

            {/* Content Section */}
            <div className="flex flex-col gap-6 md:flex-row">
                <div className="relative aspect-[4/3] flex-shrink-0 overflow-hidden bg-slate-100 md:w-1/3">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover"
                    />
                </div>
                <div className="md:w-2/3">
                    <p className="text-base leading-7 text-slate-600">
                        {excerpt}
                    </p>
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                        {articleType || 'Analysis'}{readTime ? ` • ${readTime}` : ''}{author ? ` • By ${author}` : ''}
                    </p>
                </div>
            </div>

        </article>
    );
}

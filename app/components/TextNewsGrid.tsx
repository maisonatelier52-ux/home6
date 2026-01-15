import React from 'react';
import Link from 'next/link';

interface TextNewsItem {
    id: string;
    categories: string[];
    title: string;
    slug: string;
}

interface TextNewsGridProps {
    items: TextNewsItem[];
}

export default function TextNewsGrid({ items }: TextNewsGridProps) {
    return (
        <section className="w-full border-b border-gray-300 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    {items.map((item) => (
                        <Link
                            key={item.id}
                            href={`/article/${item.slug}`}
                            className="group block py-6 px-0 md:px-6 first:pl-0 last:pr-0"
                        >
                            <div className="flex flex-col gap-2">
                                {/* Categories */}
                                <div className="flex flex-wrap items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-gray-800">
                                    {item.categories.map((cat, index) => (
                                        <span key={index}>
                                            {cat}
                                            {index < item.categories.length - 1 && <span className="ml-1 text-gray-400">,</span>}
                                        </span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h3 className="text-[15px] font-bold leading-snug text-gray-900 group-hover:underline decoration-2 decoration-gray-900 font-serif">
                                    {item.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

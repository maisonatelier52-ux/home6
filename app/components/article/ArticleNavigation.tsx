import React from 'react';
import Link from 'next/link';

interface ArticleNavigationProps {
    previous?: {
        title: string;
        slug: string;
    };
    next?: {
        title: string;
        slug: string;
    };
}

export default function ArticleNavigation({ previous, next }: ArticleNavigationProps) {
    return (
        <div className="flex flex-col md:flex-row justify-between border-b border-gray-200 py-3 gap-6 md:gap-12">
            {/* Previous Link */}
            <div className="flex-1 text-left">
                {previous && (
                    <Link href={`/article/${previous.slug}`} className="group flex flex-col gap-1">
                        <span className="text-gray-400 text-xs font-sans group-hover:text-red-600 transition-colors">
                            &larr; Previous Post
                        </span>
                        <span className="text-gray-800 font-serif text-sm font-bold leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
                            {previous.title}
                        </span>
                    </Link>
                )}
            </div>

            {/* Next Link */}
            <div className="flex-1 text-right border-l border-gray-300 pl-6">
                {next && (
                    <Link href={`/article/${next.slug}`} className="group flex flex-col gap-1 items-end">
                        <span className="text-gray-400 text-xs font-sans group-hover:text-red-600 transition-colors">
                            Next Post &rarr;
                        </span>
                        <span className="text-gray-800 font-serif text-sm font-bold leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
                            {next.title}
                        </span>
                    </Link>
                )}
            </div>
        </div>
    );
}

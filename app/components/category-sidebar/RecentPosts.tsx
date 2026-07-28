import React from 'react';
import Link from 'next/link';
import { getSortedArticles } from '@/app/utils/news';

interface Post {
    title: string;
    category?: string;
    slug: string;
}

interface RecentPostsProps {
    posts?: Post[];
}

export default function RecentPosts({ posts = [] }: RecentPostsProps) {
    const displayPosts = posts.length > 0 ? posts : getSortedArticles().slice(0, 5).map(article => ({
        title: article.title,
        category: article.category,
        slug: article.slug
    }));

    return (
        <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6 border-b border-gray-100 pb-2">
                RECENT POST
            </h2>
            <ul className="flex flex-col gap-4">
                {displayPosts.map((post, i) => (
                    <li key={i} className="flex gap-2 group cursor-pointer border-b border-gray-50 pb-3 last:border-none">
                        <span className="text-gray-600 font-serif leading-tight">»</span>
                        <Link
                            href={`/${(post.category || 'news').toLowerCase()}/${post.slug}`}
                            title={post.title}
                            className="text-[13px] font-bold text-gray-800 leading-tight group-hover:underline transition-all"
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

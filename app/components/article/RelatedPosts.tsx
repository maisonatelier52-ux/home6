import React from 'react';
import Link from 'next/link';

interface RelatedPost {
    title: string;
    slug: string;
    image: string;
    date: string;
    author?: string;
}

interface RelatedPostsProps {
    posts: RelatedPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
    if (!posts || posts.length === 0) return null;

    return (
        <div className="pt-4 border-t border-gray-200 mt-0">
            <h3 className="text-lg font-bold font-serif text-gray-900 mb-6">
                Related Post
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/article/${post.slug}`} className="group block">
                        <div className="relative aspect-[3/2] overflow-hidden mb-5">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <h4 className="font-serif font-bold text-md leading-tight text-gray-900 group-hover:text-red-600 transition-colors mb-4 line-clamp-3">
                            {post.title}
                        </h4>

                        <div className="text-xs text-gray-500 font-sans font-bold ">
                            <span className="text-black">{post.author || 'Maxin Dalton'}</span>
                            <span className="mx-1 text-gray-300">|</span>
                            <span>{post.date}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

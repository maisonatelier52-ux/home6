import React from 'react';
import { Facebook, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ArticleAuthorProps {
    name: string;
    bio: string;
    image: string;
    postsCount: number;
    role: string;
}

export default function ArticleAuthor({ name, bio, image, postsCount, role }: ArticleAuthorProps) {
    return (
        <div className="py-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
            {/* Author Image */}
            <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-100 relative group">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 96px, 128px"
                        className="object-cover group-hover:grayscale-0 transition-all duration-300"
                    />
                </div>
            </div>

            {/* Author Info */}
            <div className="flex-1 border-l border-gray-300 pl-4">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-400 text-xs font-bold tracking-wider">{role}</span>
                    <span className="text-gray-300">/</span>
                    <span className="text-gray-400 text-xs font-bold tracking-wider">Published posts: {postsCount}</span>
                </div>

                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3 cursor-pointer hover:text-red-700 transition-colors">
                    <Link href={`/authors#${name.toLowerCase().replace(/\s+/g, '-')}`}>
                        {name}
                    </Link>
                </h2>

                <p className="text-gray-600 font-serif text-sm text-base leading-relaxed mb-4">
                    {bio}
                </p>
            </div>
        </div>
    );
}

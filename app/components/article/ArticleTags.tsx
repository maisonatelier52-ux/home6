import React from 'react';
import Link from 'next/link';

interface ArticleTagsProps {
    tags: string[];
}

export default function ArticleTags({ tags }: ArticleTagsProps) {
    return (
        <div className="py-3 border-b border-t border-gray-200 text-xs font-sans">
            <span className="text-gray-500 mr-2">Tags:</span>
            <div className="inline-flex flex-wrap gap-1">
                {tags.map((tag, index) => (
                    <React.Fragment key={tag}>
                        <Link
                            href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-gray-900 font-semibold hover:text-red-600 transition-colors"
                        >
                            {tag}
                        </Link>
                        {index !== tags.length - 1 && <span className="text-gray-400">,</span>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

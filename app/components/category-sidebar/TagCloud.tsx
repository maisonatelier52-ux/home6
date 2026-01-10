import React from 'react';

interface TagCloudProps {
    tags?: string[];
}

export default function TagCloud({ tags = [] }: TagCloudProps) {
    // Default tags if none provided
    const displayTags = tags.length > 0 ? tags : [
        "Art and Culture", "best", "Best theme", "brunch", "Business",
        "Entertainment", "Magazine", "Mother Nature", "Musical",
        "NewsCommerce", "Newspaper"
    ];

    return (
        <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6 border-b border-gray-100 pb-2">
                TAG
            </h3>
            <div className="flex flex-wrap gap-2">
                {displayTags.map((tag, i) => (
                    <button key={i} className="px-3 py-1.5 border border-gray-300 text-[11px] font-bold text-gray-600 hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all duration-200 uppercase tracking-tighter">
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}

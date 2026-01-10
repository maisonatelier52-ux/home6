import React from 'react';

interface CategoryHeaderProps {
    title: string;
    count: number;
    description: string;
}

export default function CategoryHeader({ title, count, description }: CategoryHeaderProps) {
    return (
        <div className="w-full bg-white px-4 md:px-0 mt-8 md:mt-12">
            <div className="container mx-auto max-w-6xl bg-[#1a1a1a] text-white p-8 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    {/* Left Side: Title and Post Count */}
                    <div className="flex-1">
                        <span className="text-[11px] font-bold tracking-widest text-gray-400 block mb-2">
                            {count} Posts On This Category
                        </span>
                        <h1 className="text-5xl md:text-6xl font-serif font-medium tracking-tight mb-6 md:mb-0">
                            {title}
                        </h1>
                    </div>

                    {/* Right Side: Description */}
                    <div className="md:w-1/2 md:pl-12 md:border-l border-gray-700">
                        <h2 className="text-[11px] font-bold uppercase tracking-widest text-white mb-3">
                            About This Category
                        </h2>
                        <p className="text-gray-300 text-[14px] leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

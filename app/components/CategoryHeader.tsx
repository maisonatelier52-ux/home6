import React from 'react';

interface CategoryHeaderProps {
    title: string;
    count: number;
    description: string;
}

export default function CategoryHeader({ title, count, description }: CategoryHeaderProps) {
    return (
        <div className="mt-8 w-full bg-white px-4 md:mt-12 md:px-6 lg:px-0">
            <div className="container mx-auto max-w-6xl border-y-4 border-slate-950 py-8 text-slate-950 md:py-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    {/* Left Side: Title and Post Count */}
                    <div className="flex-1">
                        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#a61f2d]">
                            {count} essays and explainers
                        </span>
                        <h1 className="mb-6 font-serif text-5xl font-bold tracking-[-0.04em] md:mb-0 md:text-7xl">
                            {title}
                        </h1>
                    </div>

                    {/* Right Side: Description */}
                    <div className="md:w-1/2 md:border-l md:border-slate-300 md:pl-12">
                        <p className="font-serif text-lg leading-8 text-slate-600">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

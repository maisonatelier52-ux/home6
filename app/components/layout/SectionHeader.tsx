import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
    return (
        <div className="flex flex-col items-center mb-10">
            <div className="flex items-center w-full gap-4 mb-2">
                <div className="flex-1 h-[1px] bg-gray-300"></div>
                <h2 className="text-2xl font-bold font-serif text-[#e43b3b] whitespace-nowrap">
                    {title}
                </h2>
                <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>
            {subtitle && (
                <p className="text-gray-500 text-[14px] font-bold tracking-tight">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

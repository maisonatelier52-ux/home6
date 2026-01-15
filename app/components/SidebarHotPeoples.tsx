import React from 'react';
import Link from 'next/link';

interface HotPerson {
    category: string;
    title: string;
    image: string;
    slug: string;
}

interface SidebarHotPeoplesProps {
    items: HotPerson[];
}

export default function SidebarHotPeoples({ items }: SidebarHotPeoplesProps) {
    return (
        <div className="flex flex-col gap-0 mt-10">
            <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold uppercase whitespace-nowrap">
                    <span className="text-red-600">HOT</span>
                    <span className="text-gray-400 ml-1">TOP PEOPLES</span>
                </h2>
                <div className="flex-1 h-[1px] bg-gray-200 mt-1"></div>
            </div>

            <div className="flex flex-col pt-8">
                {items.map((item, index) => (
                    <Link
                        key={index}
                        href={`/article/${item.slug}`}
                        className={`group flex items-start gap-4 py-0 ${index !== 0 ? 'border-t border-gray-100' : ''}`}
                    >
                        <div className="flex-1">
                            <span className="text-[10px] font-bold text-black mb-1.5 block">{item.category}</span>
                            <h3 className="text-md font-bold leading-snug text-gray-900 font-serif group-hover:underline">
                                {item.title}
                            </h3>
                        </div>
                        <div className="w-20 h-35 flex-shrink-0 bg-gray-100 relative overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

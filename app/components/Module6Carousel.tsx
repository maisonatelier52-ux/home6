"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Article {
    id: number;
    author: string;
    date: string;
    title: string;
    slug: string;
}

interface Module6CarouselProps {
    title: { red: string; rest: string };
    articles: Article[];
}

export default function Module6Carousel({ title, articles }: Module6CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(articles.length / itemsPerPage);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, [totalPages]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    }, [totalPages]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [handleNext]);

    const visibleItems = articles.slice(
        currentIndex * itemsPerPage,
        (currentIndex + 1) * itemsPerPage
    );

    return (
        <section className="w-full bg-white py-8">
            <div className="container mx-auto px-0">
                {/* Section Title with Lines */}
                <div className="relative flex items-center justify-center mb-0">
                    <div className="absolute w-full h-[1px] bg-gray-300"></div>
                    <div className="relative bg-white px-4">
                        <h2 className="text-sm font-bold uppercase tracking-wider">
                            <span className="text-red-600">{title.red}</span>
                            <span className="text-gray-400 ml-1 font-normal">{title.rest}</span>
                        </h2>
                    </div>
                </div>

                <div className="relative border border-gray-300 mt-[-10px] pt-10 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-300">
                        {visibleItems.map((item, idx) => (
                            <div key={item.id} className="px-6 py-4 md:py-0">
                                <div className="text-[10px] font-bold uppercase tracking-wider mb-2">
                                    <span className="text-black">{item.author}</span>
                                    <span className="text-gray-400 ml-1 font-normal">ON {item.date}</span>
                                </div>
                                <Link href={`/post/${item.slug}`}>
                                    <h3 className="text-[15px] font-bold leading-snug text-gray-900 hover:text-red-600 transition-colors font-serif">
                                        {item.title}
                                    </h3>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                        <button
                            onClick={handlePrev}
                            className="w-8 h-8 bg-white border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors group"
                        >
                            <span className="text-[26px]">&laquo;</span>
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-8 h-8 bg-white border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors group"
                        >
                            <span className="text-[26px]">&raquo;</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

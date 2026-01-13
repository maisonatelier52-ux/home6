import React from 'react';
import CategoryNewsCard from './CategoryNewsCard';
import CategorySidebar from './CategorySidebar';
import StickyBox from './StickyBox';

interface CategoryMainGridProps {
    newsCards: Array<{
        date: string;
        categories?: string[];
        category?: string;
        views: string;
        readTime: string;
        comments: number;
        title: string;
        slug: string;
        image: string;
        excerpt: string;
        tags: string[];
    }>;
    recentPosts?: Array<{ title: string; slug: string }>;
    tags?: string[];
}

export default function CategoryMainGrid({ newsCards = [], recentPosts = [], tags = [] }: CategoryMainGridProps) {
    return (
        <section className="py-12 bg-gray-50/50">
            <div className="container mx-auto max-w-6xl px-4 md:px-0">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column (3/4) */}
                    <div className="lg:w-3/4">
                        <div className="flex flex-col gap-8">
                            {newsCards.length > 0 ? (
                                newsCards.map((card, index) => (
                                    <CategoryNewsCard
                                        key={index}
                                        {...card}
                                    />
                                ))
                            ) : (
                                <div className="bg-white p-20 text-center border border-gray-100 rounded-sm">
                                    <p className="text-gray-400">No articles found in this category.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column (1/4) - Smart Sticky Sidebar */}
                    <div className="lg:w-1/4">
                        <StickyBox offsetTop={30}>
                            <CategorySidebar recentPosts={recentPosts} tags={tags} />
                        </StickyBox>
                    </div>
                </div>
            </div>
        </section>
    );
}

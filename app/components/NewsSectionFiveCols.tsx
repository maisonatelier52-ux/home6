import React from 'react';
import SidebarArticleList from './SidebarArticleList';
import SectionHeader from './layout/SectionHeader';

interface NewsSectionFiveColsProps {
    data: {
        sectionHeader?: {
            title: string;
            subtitle: string;
        };
        columns: any[];
    };
}

export default function NewsSectionFiveCols({ data }: NewsSectionFiveColsProps) {
    return (
        <section className="w-full bg-white my-10 border-b border-gray-300">
            <div className="container mx-auto px-4 md:px-0">
                {/* Section Header */}
                <SectionHeader
                    title={data.sectionHeader?.title || "Corona Virus News"}
                    subtitle={data.sectionHeader?.subtitle}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:border-t border-gray-300">
                    {data.columns.map((col, index) => (
                        <div
                            key={index}
                            className={`px-4 py-4 ${index !== data.columns.length - 1 ? 'md:border-r border-gray-200' : ''}`}
                        >
                            {col.type === 'image' ? (
                                <div className="w-full h-full min-h-[300px] relative">
                                    <img
                                        src={col.image}
                                        alt="Feature Graphic"
                                        className="w-full h-full object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                                    />
                                </div>
                            ) : (
                                <SidebarArticleList
                                    title={col.header}
                                    articles={col.articles}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

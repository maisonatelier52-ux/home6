import React from 'react';
import Link from 'next/link';
import SidebarArticleList from './SidebarArticleList';
import ColHeroArticle from './ColHeroArticle';
import SectionHeader from './layout/SectionHeader';

interface NewsSectionV2Props {
    data: {
        sectionHeader?: {
            title: string;
            subtitle: string;
        };
        col1: any;
        col2: {
            hero: any;
            bullets: { title: string; slug: string }[];
        };
        col3: {
            hero: any;
        };
    };
}

export default function NewsSectionV2({ data }: NewsSectionV2Props) {
    return (
        <section className="w-full bg-white my-10 border-b border-gray-300">
            <div className="container mx-auto px-4 md:px-0">
                {/* Section Header */}
                <SectionHeader
                    title={data.sectionHeader?.title || "Corona Virus News"}
                    subtitle={data.sectionHeader?.subtitle}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

                    {/* First Column (1/4 width - col-span-3) */}
                    <div className="lg:col-span-3 md:border-r border-gray-300 pr-0 lg:pr-8">
                        <SidebarArticleList
                            title={data.col1.title}
                            articles={data.col1.articles}
                        />
                    </div>

                    {/* Second Column (2/4 width - col-span-6) */}
                    <div className="lg:col-span-6 border-r border-gray-300 pr-0 lg:pr-8">
                        <ColHeroArticle
                            data={data.col2.hero}
                            aspectRatio="aspect-[2/1.1]"
                            showItalicIntro={false}
                            titleSize="text-4xl"
                        />

                        {/* Bullet Points */}
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <ul className="flex flex-col gap-3">
                                {data.col2.bullets.map((bullet: any, index: number) => (
                                    <li key={index} className="flex items-start gap-2 group">
                                        <span className="text-black text-xs mt-1">•</span>
                                        <Link href={`/post/${bullet.slug}`}>
                                            <h4 className="text-[16px] font-bold text-gray-900 group-hover:underline transition-colors tracking-tight">
                                                {bullet.title}
                                            </h4>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Third Column (1/4 width - col-span-3) */}
                    <div className="lg:col-span-3">
                        <ColHeroArticle
                            data={data.col3.hero}
                            aspectRatio="aspect-[3/4]"
                            showItalicIntro={true}
                            titleSize="text-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

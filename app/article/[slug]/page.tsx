import React from 'react';
import { notFound } from 'next/navigation';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ArticleHeader from '../../components/article/ArticleHeader';
import ArticleContent from '../../components/article/ArticleContent';
import StickyBox from '../../components/StickyBox';
import CategorySidebar from '../../components/CategorySidebar';

import recentPostsData from '@/public/data/recentPosts.json';
import tagsData from '@/public/data/tags.json';

interface ArticlePageProps {
    params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    let article;

    try {
        const articleData = await import(`@/public/data/articles/${slug}.json`);
        article = articleData.default;
    } catch (error) {
        notFound();
    }

    if (!article) {
        notFound();
    }

    // Reuse sidebar data
    const recentPosts = recentPostsData;
    const tags = tagsData;

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
            <Header />
            <main className="container mx-auto max-w-6xl px-4 md:px-0 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content Column (2/3 width) */}
                    <div className="w-full lg:w-[66%]">
                        <ArticleHeader
                            category={article.category}
                            title={article.title}
                            date={article.date}
                            views={article.views}
                            readTime={article.readTime}
                            comments={article.comments}
                        />

                        <ArticleContent
                            image={article.image}
                            content={article.content}
                        />
                    </div>

                    {/* Sidebar Column (1/3 width) */}
                    <div className="w-full lg:w-[34%]">
                        <StickyBox offsetTop={100} offsetBottom={20}>
                            <div className="pl-0 lg:pl-8">
                                <CategorySidebar
                                    recentPosts={recentPosts}
                                    tags={tags}
                                />
                            </div>
                        </StickyBox>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export async function generateStaticParams() {
    const fs = await import('fs');
    const path = await import('path');
    const articlesDirectory = path.join(process.cwd(), 'public/data/articles');
    const filenames = fs.readdirSync(articlesDirectory);

    return filenames.map((filename) => ({
        slug: filename.replace(/\.json$/, ''),
    }));
}

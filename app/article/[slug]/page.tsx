import React from 'react';
import { notFound } from 'next/navigation';
import Header from '../../components/layout/Header';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ArticleHeader from '../../components/article/ArticleHeader';
import ArticleContent from '../../components/article/ArticleContent';
import ArticleTags from '../../components/article/ArticleTags';
import ArticleNavigation from '../../components/article/ArticleNavigation';
import ArticleAuthor from '../../components/article/ArticleAuthor';
import StickyBox from '../../components/StickyBox';
import CategorySidebar from '../../components/CategorySidebar';

import recentPostsData from '@/public/data/recentPosts.json';
import tagsData from '@/public/data/tags.json';
import RelatedPosts from '../../components/article/RelatedPosts';

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

    // Fetch articles for the same category dynamically
    let categoryArticles = [];
    try {
        const categorySlug = article.category.toLowerCase();
        const categoryData = await import(`@/public/data/categoryNews/${categorySlug}.json`);
        categoryArticles = categoryData.default || [];
    } catch (error) {
        // Fallback or ignore if category file doesn't exist
        console.warn(`Could not load category articles for ${article.category}`);
    }

    // Determine Previous and Next Articles
    const curIndex = categoryArticles.findIndex((p: any) => p.slug === slug);
    const prevArticle = curIndex > 0 ? categoryArticles[curIndex - 1] : null;
    const nextArticle = curIndex !== -1 && curIndex < categoryArticles.length - 1 ? categoryArticles[curIndex + 1] : null;

    // Get Related Posts (Exclude current, limit to 5)
    const relatedArticles = categoryArticles
        .filter((p: any) => p.slug !== slug)
        .slice(0, 4);

    // Fallback author if not present in JSON
    const author = article.author || {
        name: "Maxin Dalton",
        role: "Editor",
        postsCount: 23,
        image: "/images/author-placeholder.jpg",
        bio: "Standard editor bio placeholder."
    };

    return (
        <div className="bg-white min-h-screen transition-colors duration-300">
            <Header />
            <Navbar />
            <main className="container mx-auto max-w-6xl px-4 md:px-0 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content Column (2/3 width) */}
                    <div className="w-full lg:w-3/4">
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

                        {/* Article Footer Elements */}
                        <div className="mt-8">
                            <ArticleTags tags={article.tags || []} />

                            <ArticleNavigation
                                previous={prevArticle ? {
                                    title: prevArticle.title,
                                    slug: prevArticle.slug
                                } : undefined}
                                next={nextArticle ? {
                                    title: nextArticle.title,
                                    slug: nextArticle.slug
                                } : undefined}
                            />

                            <ArticleAuthor
                                name={author.name}
                                role={author.role}
                                postsCount={author.postsCount}
                                image={author.image}
                                bio={author.bio}
                            />

                            <RelatedPosts posts={relatedArticles} />
                        </div>
                    </div>

                    {/* Sidebar Column (1/3 width) */}
                    <div className="w-full lg:w-1/4">
                        <StickyBox offsetTop={50}>
                            <CategorySidebar
                                recentPosts={recentPosts}
                                tags={tags}
                            />
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

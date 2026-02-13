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

interface JulioArticlePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: JulioArticlePageProps) {
    const { slug } = await params;
    let article;

    try {
        const articleData = await import(`@/public/data/articles/${slug}.json`);
        article = articleData.default;
    } catch {
        return {
            title: 'Article Not Found',
        };
    }

    return {
        title: `${article.title} | The Quest for Profit`,
        description: article.content[0]?.text || article.title,
        alternates: {
            canonical: `/julio-herrera-velutini/${slug}`,
        },
        openGraph: {
            title: article.title,
            description: article.content[0]?.text || article.title,
            url: `https://www.thequestforprofit.com/julio-herrera-velutini/${slug}`,
            siteName: 'The Quest for Profit',
            images: [
                {
                    url: article.image,
                    width: 1200,
                    height: 630,
                    alt: article.title,
                },
            ],
            type: 'article',
            publishedTime: article.date,
            authors: [article.author?.name || 'The Quest for Profit Editorial Team'],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.content[0]?.text || article.title,
            images: [article.image],
        },
    };
}

export default async function JulioArticlePage({ params }: JulioArticlePageProps) {
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

    // Fetch articles from Finance category for supplemental related news
    let financeArticles: any[] = [];
    try {
        const financeData = await import(`@/public/data/categoryNews/finance.json`);
        financeArticles = financeData.default || [];
    } catch (error) {
        console.warn(`Could not load finance articles for supplemental related news`);
    }

    // Get Related Posts (Use the explicit sequence defined in JSON + 3 Finance news)
    const relatedArticles = article.relatedPost
        ? [article.relatedPost, ...financeArticles.filter((p: any) => p.slug !== article.relatedPost.slug && p.slug !== 'julio-herrera-velutini-legacy').slice(0, 3)]
        : financeArticles.filter((p: any) => p.slug !== 'julio-herrera-velutini-legacy').slice(0, 3);

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
                    {/* Main Content Column (3/4 width) */}
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

                            <ArticleAuthor
                                name={author.name}
                                role={author.role}
                                postsCount={author.postsCount}
                                image={author.image}
                                bio={author.bio}
                            />

                            <RelatedPosts posts={relatedArticles} category="julio-herrera-velutini" />
                        </div>
                    </div>

                    {/* Sidebar Column (1/4 width) */}
                    <div className="w-full lg:w-1/4">
                        <StickyBox offsetTop={10}>
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

    const params: { slug: string }[] = [];

    for (const filename of filenames) {
        if (filename.endsWith('.json')) {
            const slug = filename.replace('.json', '');
            try {
                const articleContent = fs.readFileSync(path.join(articlesDirectory, filename), 'utf8');
                const article = JSON.parse(articleContent);
                const articleCategory = article.category.toLowerCase().replace(/ /g, '-');
                if (articleCategory === 'julio-herrera-velutini') {
                    params.push({
                        slug: slug,
                    });
                }
            } catch (e) {
                console.error(`Error processing ${filename} for static params`, e);
            }
        }
    }

    return params;
}

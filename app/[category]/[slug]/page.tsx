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
import StructuredData from '../../components/StructuredData';
import { ArticleKeyPoints, ArticleReferenceDesk } from '../../components/article/ArticleAuthority';

interface ArticlePageProps {
    params: Promise<{ category: string; slug: string }>;
}

function getAuthorProfile(article: any) {
    return {
        name: 'The Quest for Profit',
        role: 'Independent editorial blog',
        image: undefined,
        bio: 'This post was reviewed by The Quest for Profit for clarity, sourcing and useful context. Read how the blog handles evidence, updates and corrections.',
    };
}

export async function generateMetadata({ params }: ArticlePageProps) {
    const { category, slug } = await params;
    let article;

    try {
        const articleData = await import(`@/public/data/articles/${slug}.json`);
        article = articleData.default;
    } catch {
        return {
            title: 'Article Not Found',
        };
    }

    const title = article.seoTitle || article.title;
    const description = article.seoDescription || article.excerpt || (Array.isArray(article.content) ? article.content[0]?.text : '') || article.title;
    const keywords = article.keywords || article.tags || [];

    return {
        title: title,
        description: description,
        keywords: keywords,
        alternates: {
            canonical: `https://www.thequestforprofit.com/${category}/${slug}`,
        },
        openGraph: {
            title: title,
            description: description,
            url: `https://www.thequestforprofit.com/${category}/${slug}`,
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
            publishedTime: article.datePublished,
            modifiedTime: article.dateModified,
            authors: [typeof article.author === 'string' ? article.author : article.author?.name || 'The Quest for Profit Editorial Team'],
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: [article.image],
        },
    };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { category, slug } = await params;
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
    let categoryArticles: any[] = [];
    try {
        const categorySlug = category.toLowerCase();
        const categoryData = await import(`@/public/data/categoryNews/${categorySlug}.json`);
        categoryArticles = categoryData.default || [];
    } catch (error) {
        // Fallback or ignore if category file doesn't exist
        console.warn(`Could not load category articles for ${category}`);
    }

    // Determine Previous and Next Articles
    const curIndex = categoryArticles.findIndex((p: any) => p.slug === slug);
    const prevArticle = curIndex > 0 ? categoryArticles[curIndex - 1] : null;
    const nextArticle = curIndex !== -1 && curIndex < categoryArticles.length - 1 ? categoryArticles[curIndex + 1] : null;

    // Get Related Posts (Exclude current, limit to 4)
    let relatedArticles = (article.relatedArticles && article.relatedArticles.length > 0)
        ? article.relatedArticles
        : article.relatedPost
        ? [article.relatedPost, ...categoryArticles.filter((p: any) => p.slug !== slug && p.slug !== article.relatedPost.slug).slice(0, 3)]
        : categoryArticles.filter((p: any) => p.slug !== slug).slice(0, 4);

    const author = getAuthorProfile(article);

    return (
        <div className="bg-white min-h-screen transition-colors duration-300">
            <StructuredData data={{
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "BlogPosting",
                        "headline": article.title,
                        "image": [
                            `https://www.thequestforprofit.com${article.image}`
                        ],
                        "datePublished": article.datePublished || article.date,
                        "dateModified": article.dateModified || article.datePublished || article.date,
                        "author": [{
                            "@type": "Organization",
                            "name": author.name,
                            "url": "https://www.thequestforprofit.com/authors"
                        }],
                        "publisher": {
                            "@type": "Organization",
                            "name": "The Quest for Profit",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.thequestforprofit.com/images/logo-TQFP.svg"
                            }
                        },
                        "description": article.excerpt || (Array.isArray(article.content) ? article.content[0]?.text : '') || article.title
                    },
                    {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.thequestforprofit.com"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": article.category,
                                "item": `https://www.thequestforprofit.com/${category}`
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": article.title,
                                "item": `https://www.thequestforprofit.com/${category}/${slug}`
                            }
                        ]
                    }
                ]
            }} />
            <Header />
            <Navbar />
            <main className="container mx-auto max-w-6xl px-4 md:px-0 py-12">
                <div className="flex flex-col gap-12 lg:flex-row">
                    {/* Main Content Column (3/4 width) */}
                    <div className="w-full lg:w-3/4">
                        <ArticleHeader
                            category={article.category}
                            title={article.title}
                            date={article.date}
                            updatedDate={article.dateModified}
                            readTime={article.readTime}
                            author={author.name}
                            excerpt={article.excerpt}
                            articleType={article.articleType}
                        />

                        <ArticleKeyPoints points={article.keyPoints || []} />

                        <ArticleContent
                            image={article.image}
                            content={article.content}
                            imageAlt={article.title}
                        />

                        <ArticleReferenceDesk
                            references={article.referenceDesk || []}
                            note={article.editorialNote}
                        />

                        {/* Article Footer Elements */}
                        <div className="mt-8">
                            <ArticleTags tags={article.tags || []} />

                            <ArticleNavigation
                                previous={prevArticle ? {
                                    title: prevArticle.title,
                                    slug: prevArticle.slug,
                                    category: category
                                } : undefined}
                                next={nextArticle ? {
                                    title: nextArticle.title,
                                    slug: nextArticle.slug,
                                    category: category
                                } : undefined}
                            />

                            <ArticleAuthor
                                name={author.name}
                                role={author.role}
                                image={author.image}
                                bio={author.bio}
                            />

                            <RelatedPosts posts={relatedArticles} category={category} />
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

    const params: { category: string; slug: string }[] = [];

    for (const filename of filenames) {
        if (filename.endsWith('.json')) {
            const slug = filename.replace('.json', '');
            try {
                const articleContent = fs.readFileSync(path.join(articlesDirectory, filename), 'utf8');
                const article = JSON.parse(articleContent);
                const articleCategory = article.category.toLowerCase().replace(/ /g, '-');


                params.push({
                    category: article.category.toLowerCase(),
                    slug: slug,
                });
            } catch (e) {
                console.error(`Error processing ${filename} for static params`, e);
            }
        }
    }

    return params;
}

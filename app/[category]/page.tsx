import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CategoryHeader from "../components/CategoryHeader";
import CategoryMainGrid from "../components/CategoryMainGrid";
import categoriesData from "@/public/data/categories.json";
import { notFound } from "next/navigation";
import StructuredData from "../components/StructuredData";

interface CategoryPageProps {
    params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
    const { category: categorySlug } = await params;
    const lowerSlug = categorySlug.toLowerCase();

    const categories = categoriesData as Record<string, { title: string; count: number; description: string }>;
    const category = categories[lowerSlug];

    if (!category) {
        return {
            title: 'Category Not Found | TQFP',
        };
    }

    const categoryImage = `/images/news/${lowerSlug}-1.webp`;

    return {
        title: `${category.title} News | TQFP`,
        description: category.description,
        keywords: [category.title.toLowerCase(), "news", "analysis", "insights", "TQFP"],
        openGraph: {
            title: `${category.title} News | TQFP`,
            description: category.description,
            url: `https://www.thequestforprofit.com/${lowerSlug}`,
            siteName: 'The Quest for Profit',
            images: [
                {
                    url: categoryImage,
                    width: 1200,
                    height: 630,
                    alt: `${category.title} Financial News`,
                }
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${category.title} News | TQFP`,
            description: category.description,
            images: [categoryImage],
        },
    };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { category: categorySlug } = await params;
    const lowerSlug = categorySlug.toLowerCase();

    // Load category metadata
    const categories = categoriesData as Record<string, { title: string; count: number; description: string }>;
    const category = categories[lowerSlug];

    if (!category) {
        notFound();
    }

    // Load dynamic data from JSON files
    let newsCards: any[] = [];
    let recentPosts: { title: string; slug: string }[] = [];
    let tags: string[] = [];

    try {
        const newsData = await import(`@/public/data/categoryNews/${lowerSlug}.json`);
        newsCards = newsData.default;
    } catch (error) {
        console.warn(`No news data found for category: ${lowerSlug}`);
    }

    try {
        const recentData = await import(`@/public/data/recentPosts.json`);
        recentPosts = recentData.default;
    } catch (error) {
        console.warn(`No recent posts data found`);
    }

    try {
        const tagsData = await import(`@/public/data/tags.json`);
        tags = tagsData.default;
    } catch (error) {
        console.warn(`No tags data found`);
    }

    return (
        <div className="min-h-screen bg-white">
            <StructuredData data={{
                "@context": "https://schema.org",
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
                        "name": category.title,
                        "item": `https://www.thequestforprofit.com/${lowerSlug}`
                    }
                ]
            }} />
            <Header />
            <Navbar />

            <main className="mx-auto">
                <CategoryHeader
                    title={category.title}
                    count={category.count}
                    description={category.description}
                />

                <CategoryMainGrid
                    newsCards={newsCards}
                    recentPosts={recentPosts}
                    tags={tags}
                />
            </main>

            <Footer />
        </div>
    );
}

// Generate static params for all defined categories
export async function generateStaticParams() {
    const categories = Object.keys(categoriesData);
    return categories.map((category) => ({
        category: category,
    }));
}

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import CategoryHeader from "../../components/CategoryHeader";
import CategoryMainGrid from "../../components/CategoryMainGrid";
import categoriesData from "@/public/data/categories.json";
import { notFound } from "next/navigation";

interface CategoryPageProps {
    params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params;
    const lowerSlug = slug.toLowerCase();

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
            <Header />

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
    return categories.map((slug) => ({
        slug: slug,
    }));
}

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

    // Attempt to load the news data for this category
    let newsCards = [];
    try {
        // We use a dynamic import for the specific category JSON
        // Note: For this to work efficiently, the files must exist in the expected path
        const data = await import(`@/public/data/categoryNews/${lowerSlug}.json`);
        newsCards = data.default;
    } catch (error) {
        console.warn(`No news data found for category: ${lowerSlug}`);
        newsCards = []; // Fallback to empty if file doesn't exist
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

                <CategoryMainGrid newsCards={newsCards} />
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

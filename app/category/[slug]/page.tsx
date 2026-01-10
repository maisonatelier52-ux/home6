import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import CategoryHeader from "../../components/CategoryHeader";
import categoriesData from "@/public/data/categories.json";
import { notFound } from "next/navigation";

interface CategoryPageProps {
    params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params;

    // Cast categoriesData to a type that can be indexed by string
    const categories = categoriesData as Record<string, { title: string; count: number; description: string }>;
    const category = categories[slug.toLowerCase()];

    if (!category) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="max-w-6xl mx-auto px-4 md:px-0">
                <CategoryHeader
                    title={category.title}
                    count={category.count}
                    description={category.description}
                />

                {/* Placeholder for Category Content (Grid/List of articles) */}
                <div className="py-20 text-center border-2 border-dashed border-gray-100 rounded-lg">
                    <p className="text-gray-400">Content for {category.title} category will go here.</p>
                </div>
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

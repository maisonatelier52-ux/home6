import { Metadata } from "next";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Our Authors | TQFP",
    description: "Meet the expert journalists and contributors behind The Quest for Profit's in-depth financial analysis and market insights.",
};

const authors = [
    {
        name: "Jessica Wu",
        role: "Lead Tech Strategist",
        bio: "Jessica spans the gap between complex algorithms and business outcomes, focusing on the real-world deployment of Agentic AI and emerging technologies.",
        image: "/images/authors/jessica.jpg",
        postsCount: 310,
    },
    {
        name: "Sarah Jenkins",
        role: "Senior Political Analyst",
        bio: "Sarah brings decades of experience covering global politics and economic policy, with a focus on central banking and fiscal strategy.",
        image: "/images/authors/sarah.jpg",
        postsCount: 245,
    },
    {
        name: "Michael Chen",
        role: "Economic Correspondent",
        bio: "Michael specializes in Asian markets and global trade dynamics, providing insights into the shifting economic landscape of the 21st century.",
        image: "/images/authors/michael.jpg",
        postsCount: 198,
    },
    {
        name: "Robert Miller",
        role: "Political Columnist",
        bio: "Robert delivers sharp analysis on political developments and their market implications, with expertise in regulatory frameworks and policy impact.",
        image: "/images/authors/robert.jpg",
        postsCount: 167,
    },
    {
        name: "Alex Thorne",
        role: "Tech Strategist",
        bio: "Alex covers the intersection of technology and finance, from fintech disruption to cryptocurrency regulation and digital transformation.",
        image: "/images/authors/alex.jpg",
        postsCount: 142,
    },
    {
        name: "James O'Connor",
        role: "Wealth Management Specialist",
        bio: "James advises some of the world's most successful families on transition and growth, covering family offices and high-net-worth strategies.",
        image: "/images/authors/james.jpg",
        postsCount: 89,
    },
    {
        name: "Maria Sanchez",
        role: "Real Estate Analyst",
        bio: "Maria provides expert coverage of global real estate markets, luxury property trends, and investment strategies for high-value assets.",
        image: "/images/authors/maria.jpg",
        postsCount: 76,
    },
    {
        name: "David Smith",
        role: "Senior Policy Analyst",
        bio: "David covers regulatory developments and their impact on markets, with deep expertise in government policy and international relations.",
        image: "/images/authors/david.jpg",
        postsCount: 64,
    },
    {
        name: "Emily Rodriguez",
        role: "Business Correspondent",
        bio: "Emily reports on corporate strategy, mergers and acquisitions, and the evolving landscape of global business operations.",
        image: "/images/authors/emily.jpg",
        postsCount: 52,
    },
];

export default function AuthorsPage() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Header />
                <Navbar />

                <section className="py-12 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center gap-2 mb-12">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Our Authors</h1>
                            <span className="text-gray-500 text-lg">›</span>
                        </div>

                        <div className="space-y-16">
                            {authors.map((author, index) => (
                                <div
                                    key={author.name}
                                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        } gap-8 items-center bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow`}
                                >
                                    <div className="w-full md:w-1/3">
                                        <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gray-200">
                                            <Image
                                                src={author.image}
                                                alt={author.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-2/3 text-center md:text-left">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                            {author.name}
                                        </h2>
                                        <p className="text-red-600 font-semibold mb-2">{author.role}</p>
                                        <p className="text-sm text-gray-500 mb-4">{author.postsCount} Posts</p>
                                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                            {author.bio}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}

import { Metadata } from "next";
import { BookOpen, CheckCircle2, Compass, Scale, Search, Shield } from "lucide-react";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
    title: "About the Blog | The Quest for Profit",
    description: "The Quest for Profit is an independent editorial blog about markets, business, technology and the ideas shaping public life.",
    openGraph: {
        title: "About the Blog | The Quest for Profit",
        description: "An independent editorial blog for thoughtful essays, explainers and analysis.",
        url: "https://www.thequestforprofit.com/about-us",
        siteName: "The Quest for Profit",
        images: [{
            url: "/images/news/markets-1.webp",
            width: 1200,
            height: 630,
            alt: "About The Quest for Profit blog",
        }],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About the Blog | The Quest for Profit",
        description: "An independent editorial blog for thoughtful essays, explainers and analysis.",
        images: ["/images/news/markets-1.webp"],
    },
};

const principles = [
    {
        title: "Accuracy",
        text: "Claims should be checkable, sources should be visible and mistakes should be corrected clearly.",
        icon: CheckCircle2,
        iconClass: "text-green-700",
        bgClass: "bg-green-50",
    },
    {
        title: "Perspective",
        text: "Analysis is labeled as analysis. A point of view should sharpen the evidence, not replace it.",
        icon: Scale,
        iconClass: "text-amber-700",
        bgClass: "bg-amber-50",
    },
    {
        title: "Independence",
        text: "Editorial choices are kept separate from sponsors, affiliates and outside pressure.",
        icon: Search,
        iconClass: "text-purple-700",
        bgClass: "bg-purple-50",
    },
    {
        title: "Accountability",
        text: "Readers can question a claim, request a correction and see how our standards work.",
        icon: Shield,
        iconClass: "text-blue-700",
        bgClass: "bg-blue-50",
    },
];

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Navbar />

            <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-0">
                <section className="border-y-4 border-slate-950 py-10 md:py-14">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a61f2d]">About the blog</p>
                    <h1 className="mt-4 max-w-4xl font-serif text-5xl font-bold tracking-[-0.04em] text-slate-950 md:text-7xl">
                        Ideas are more useful when the evidence stays in view.
                    </h1>
                    <div className="mt-8 grid gap-8 text-lg leading-8 text-slate-700 md:grid-cols-2">
                        <p>
                            The Quest for Profit is an independent editorial blog about markets, business, finance, technology, politics, nature and culture. We publish essays and explainers for readers who want more than a headline but less noise than a constant news feed.
                        </p>
                        <p>
                            Posts may interpret events, test an argument or connect developments across fields. Where a piece makes factual claims, we aim to show the underlying documents, data and credible sources so readers can examine the reasoning for themselves.
                        </p>
                    </div>
                </section>

                <section className="grid gap-8 py-12 md:grid-cols-2">
                    <article className="border border-slate-300 p-8">
                        <BookOpen className="h-9 w-9 text-[#a61f2d]" aria-hidden="true" />
                        <h2 className="mt-5 font-serif text-3xl font-bold text-slate-950">What we publish</h2>
                        <p className="mt-4 text-base leading-7 text-slate-700">
                            Long-form essays, practical explainers, commentary and analysis. The goal is not to be first; it is to leave the reader with a clearer model of the subject and useful questions to carry forward.
                        </p>
                    </article>
                    <article className="border border-slate-300 p-8">
                        <Compass className="h-9 w-9 text-[#a61f2d]" aria-hidden="true" />
                        <h2 className="mt-5 font-serif text-3xl font-bold text-slate-950">How to read it</h2>
                        <p className="mt-4 text-base leading-7 text-slate-700">
                            Each post identifies its author, publication date and reading time. Source links and editorial notes help distinguish verifiable facts from interpretation, while corrections remain attached to the original post.
                        </p>
                    </article>
                </section>

                <section className="border-t-4 border-slate-950 pt-8">
                    <h2 className="font-serif text-4xl font-bold tracking-tight text-slate-950">Editorial principles</h2>
                    <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {principles.map(({ title, text, icon: Icon, iconClass, bgClass }) => (
                            <article key={title} className="border border-slate-300 p-6">
                                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${bgClass}`}>
                                    <Icon className={`h-6 w-6 ${iconClass}`} aria-hidden="true" />
                                </div>
                                <h3 className="mt-5 font-serif text-2xl font-bold text-slate-950">{title}</h3>
                                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

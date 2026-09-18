import { Metadata } from "next";
import Link from "next/link";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
    title: "How We Write | The Quest for Profit",
    description: "How The Quest for Profit researches, reviews and updates its essays and analysis.",
    openGraph: {
        title: "How We Write | The Quest for Profit",
        description: "How The Quest for Profit researches, reviews and updates its essays and analysis.",
        url: "https://www.thequestforprofit.com/authors",
        siteName: "The Quest for Profit",
        type: "website",
    },
};

const standards = [
    {
        title: "A transparent byline",
        text: "Posts are currently published under The Quest for Profit rather than invented contributor profiles. When a named contributor is added, the byline will identify a real person and link to a verifiable biography.",
    },
    {
        title: "Claims tied to records",
        text: "Time-sensitive posts link to relevant filings, judgments, official releases, datasets or product documentation. Broader essays point readers to credible institutions for further research.",
    },
    {
        title: "Analysis clearly labelled",
        text: "We distinguish explainers from analysis and avoid presenting forecasts, market reactions or allegations as settled facts. Material uncertainty belongs in the article, not in fine print.",
    },
    {
        title: "Visible review dates",
        text: "Every article shows when it was published and when it was last reviewed. Substantive corrections follow the process described in our corrections policy.",
    },
];

export default function AuthorsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Navbar />
            <main className="mx-auto max-w-5xl px-6 py-14 md:py-20">
                <div className="max-w-3xl">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a61f2d]">Editorial transparency</p>
                    <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">How we write</h1>
                    <p className="mt-6 font-serif text-xl leading-8 text-slate-600 md:text-2xl md:leading-9">
                        The Quest for Profit is an independent blog. Until verified contributor profiles are available, the publication itself takes responsibility for every byline.
                    </p>
                </div>

                <section className="mt-14 grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-2" aria-label="Writing standards">
                    {standards.map((standard) => (
                        <article key={standard.title} className="bg-white p-7 md:p-9">
                            <h2 className="font-serif text-2xl font-bold text-slate-950">{standard.title}</h2>
                            <p className="mt-4 text-base leading-7 text-slate-600">{standard.text}</p>
                        </article>
                    ))}
                </section>

                <section className="mt-14 border-y border-slate-300 py-9">
                    <h2 className="font-serif text-3xl font-bold text-slate-950">Question a claim</h2>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                        If a passage appears inaccurate, unsupported or out of date, send the article URL, the specific passage and the strongest source you have. We review correction requests against the underlying record.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                        <Link href="/contact-us" className="text-[#a61f2d] underline decoration-slate-300 underline-offset-4 hover:decoration-[#a61f2d]">Contact the editor</Link>
                        <Link href="/source-methodology" className="text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-[#a61f2d]">Read our source methodology</Link>
                        <Link href="/corrections-policy" className="text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-[#a61f2d]">Corrections policy</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

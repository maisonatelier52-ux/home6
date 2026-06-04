import { Metadata } from "next";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Check, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Editorial Policy | The Quest for Profit",
    description: "Read the editorial policy of The Quest for Profit. Our editorial guidelines are designed to establish trust with our audience and detail the integrity behind our content creation.",
    openGraph: {
        title: "Editorial Policy | The Quest for Profit",
        description: "Read the editorial policy of The Quest for Profit. Our editorial guidelines are designed to establish trust with our audience and detail the integrity behind our content creation.",
        url: "https://www.thequestforprofit.com/editorial-policy",
        siteName: "The Quest for Profit",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Editorial Policy | The Quest for Profit",
        description: "Read the editorial policy of The Quest for Profit. Our editorial guidelines are designed to establish trust with our audience and detail the integrity behind our content creation.",
    },
};

export default function EditorialPolicyPage() {
    return (
        <div className="min-h-screen text-gray-900 bg-white">
            <Header />
            <Navbar />

            <main className="py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    
                    <h1 className="text-4xl md:text-5xl text-center mb-10 font-serif font-medium">
                        <span className="border-b-[1.5px] border-black pb-2">Editorial Policy</span>
                    </h1>

                    <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-12 text-center">
                        The Quest for Profit is an independent publication dedicated to delivering accurate, clear, and reliable economic and financial analysis. Our editorial guidelines are designed to establish trust with our audience and detail the integrity behind our content creation.
                    </p>

                    <div className="space-y-12">
                        {/* Editorial Independence */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Editorial Independence
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                Our coverage is never for sale. We reject any compensation, privileges, or third-party pressure aimed at shaping our reporting. The decisions of our editors and contributors are completely autonomous, insulated from governmental, corporate, or partisan interference. Partnerships, sponsorships, and advertisements do not influence or dictate our content.
                            </p>
                        </section>

                        {/* Accuracy and Verification */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Accuracy and Verification
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800 space-y-4">
                                We prioritize precision over timeliness. Our team substantiates facts using verified documentation, trusted experts, and direct citations. If key details cannot be fully validated, we explicitly declare that limitation to our readers. When mistakes happen, we address them openly through our <Link href="/corrections-policy" className="text-red-600 hover:underline">Corrections Policy</Link>. Any coverage involving sensitive allegations, complex financial transactions, or regulatory actions undergoes rigorous scrutiny and, when possible, outreach to the affected parties prior to publishing.
                            </p>
                        </section>

                        {/* Fairness and Balance */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Fairness and Balance
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                We present multiple, constructive viewpoints on complicated economic trends without giving equal weight to unsubstantiated assertions. Every claim we examine is judged solely by its empirical evidence and reliability, free from political or ideological bias.
                            </p>
                        </section>

                        {/* Transparency */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Transparency
                            </h2>
                            <p className="text-base md:text-lg text-gray-800 mb-6">
                                Public trust depends on clear editorial practices. To ensure complete clarity, we commit to the following:
                            </p>
                            <ul className="space-y-4 mb-6 text-gray-800 text-base md:text-lg">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-1 text-green-600 flex-shrink-0" />
                                    <span>Strictly separating breaking news, commentary, and market analysis.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-1 text-green-600 flex-shrink-0" />
                                    <span>Attributing articles to the specific writer behind the piece.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-1 text-green-600 flex-shrink-0" />
                                    <span>Using a &quot;The Quest for Profit Desk&quot; byline for team-based or corporate reporting.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-1 text-green-600 flex-shrink-0" />
                                    <span>Plainly identifying sponsored posts, affiliate links, and promotional articles so they are never confused with independent journalism.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Disclosure and Labeling */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Disclosure and Labeling
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                We believe in highlighting potential conflicts of interest. Any financial associations, including advertisements, affiliate revenue, or promotional material, will be explicitly labeled and kept structurally separate from our core news output.
                            </p>
                        </section>

                        {/* Ethical Standards */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Ethical Standards
                            </h2>
                            <div className="space-y-6">
                                <div className="border-l-4 border-red-600 pl-4 py-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Conflict Disclosure</h3>
                                    <p className="text-base text-gray-700">Writers must declare any personal, investment, or family stakes in the companies or markets they cover.</p>
                                </div>
                                <div className="border-l-4 border-red-600 pl-4 py-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">No Hidden Promotion</h3>
                                    <p className="text-base text-gray-700">Sponsored topics or paid collaborations are clearly marked and segregated from regular posts.</p>
                                </div>
                                <div className="border-l-4 border-red-600 pl-4 py-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Privacy & Respect</h3>
                                    <p className="text-base text-gray-700">We respect personal boundaries, balancing the public interest of financial disclosure with individual dignity.</p>
                                </div>
                            </div>
                        </section>

                        {/* Reader Feedback and Accountability */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Reader Feedback and Accountability
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-6">
                                Healthy reporting thrives on active communication. We welcome reader input, queries, and editorial corrections.
                            </p>
                            <div className="flex items-center gap-2 text-gray-800 text-base md:text-lg">
                                <Mail className="w-5 h-5 text-red-600" />
                                <a href="mailto:editorial@thequestforprofit.com" className="hover:underline">editorial@thequestforprofit.com</a>
                            </div>
                        </section>

                        {/* Footer Banner */}
                        <section className="pt-6">
                            <hr className="border-t border-gray-300 mb-8" />
                            
                            <p className="text-center text-gray-800 italic text-base md:text-lg mb-8">
                                Our mission is to deliver objective, fact-based financial insight—focused on clarity, accountability, and evidence.
                            </p>
                            
                            <p className="text-center text-xs text-gray-500 italic">
                                Last Updated: June 4, 2026
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

import { Metadata } from "next";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Check, Mail } from "lucide-react";

export const metadata: Metadata = {
    title: "Source Methodology | The Quest for Profit",
    description: "Learn about the source methodology of The Quest for Profit. We aim to show readers how articles are built.",
};

export default function SourceMethodologyPage() {
    return (
        <div className="min-h-screen text-gray-900 bg-white">
            <Header />
            <Navbar />

            <main className="py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    
                    <h1 className="text-4xl md:text-5xl text-center mb-10 font-serif font-medium">
                        <span className="border-b-[1.5px] border-black pb-2">Source Methodology</span>
                    </h1>

                    <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-12 text-center max-w-2xl mx-auto">
                        At The Quest for Profit, we believe readers have a right to know how our reporting is constructed. This methodology outlines how we identify, verify, and cite our sources to ensure our financial intelligence remains rigorous and objective.
                    </p>

                    <div className="space-y-12">
                        {/* How reporting begins */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                How Reporting Begins
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800 space-y-4">
                                Our goal is to base every article on primary, verifiable information rather than repeating aggregated summaries. This includes regulatory filings (such as SEC disclosures), official corporate statements, legal filings, direct interviews, and vetted public databases. When direct verification is not fully complete, our writers are instructed to qualify their wording to reflect exactly what is confirmed.
                            </p>
                        </section>

                        {/* Source hierarchy and verification */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Source Hierarchy and Verification
                            </h2>
                            <div className="text-base md:text-lg leading-relaxed text-gray-800 space-y-4">
                                <p>
                                    We prioritize original records and direct, on-the-record quotes over secondary summaries. Public documentation and eyewitness accounts carry far more weight than rumor or unsourced aggregation.
                                </p>
                                <ul className="space-y-3 pl-4">
                                    <li className="list-disc">Primary documents and original interviews are always our first choice.</li>
                                    <li className="list-disc">Secondary reporting is clearly attributed, but we avoid repeating assertions if the core facts are still subject to dispute.</li>
                                    <li className="list-disc">Figures, dates, and legal details are cross-referenced with official archives or original documents before publication.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Anonymous sources and background information */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Anonymous Sources and Background Information
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800 space-y-4">
                                Anonymity is never used for convenience. When a source is granted anonymity, we must fully understand their identity, access, and motivation. We commit to providing our readers with as much context as possible about why the source is anonymous, without compromising their safety or identity.
                            </p>
                        </section>

                        {/* Documents, media, and data */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Documents, Media, and Data
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800 space-y-4">
                                Digital assets, data tables, and spreadsheets are analyzed thoroughly. We distinguish between a document existing and a document proving a broad claim. Our focus is to present data in its proper context without exaggeration.
                            </p>
                        </section>

                        {/* Source notes, attribution, and links */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Source Notes, Attribution, and Links
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800 space-y-4">
                                To ensure transparency, we link directly to primary records, filings, or data sources referenced in our coverage. This allows our audience to inspect the source material and draw their own conclusions.
                            </p>
                        </section>

                        {/* How we treat uncertainty and change */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                How We Treat Uncertainty and Change
                            </h2>
                            <ul className="space-y-4 text-gray-800 text-base md:text-lg">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-1 text-red-600 flex-shrink-0" />
                                    <span>We do not transform nuance or uncertainty into sensationalized headlines.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-1 text-red-600 flex-shrink-0" />
                                    <span>We keep objective analysis clearly distinct from assertion or opinion.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-1 text-red-600 flex-shrink-0" />
                                    <span>We update published articles transparently as better sources or facts emerge.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-1 text-red-600 flex-shrink-0" />
                                    <span>If a claim remains unverified or disputed, we state that explicitly.</span>
                                </li>
                            </ul>
                        </section>

                        {/* What this policy does not mean */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                What This Policy Does Not Mean
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                This transparency does not require us to reveal confidential sources or internal journalistic drafts. It does mean that we provide an honest, accurate representation of the evidence backing our work.
                            </p>
                        </section>

                        {/* Contact Box (bottom) */}
                        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact</h3>
                            <div className="space-y-3 text-sm text-gray-700">
                                <div>
                                    <span className="font-semibold block text-gray-900">EDITORIAL Desk:</span>
                                    <a href="mailto:editorial@thequestforprofit.com" className="hover:underline flex items-center gap-1.5 mt-1">
                                        <Mail className="w-4 h-4 text-red-600" /> editorial@thequestforprofit.com
                                    </a>
                                </div>
                                <div>
                                    <span className="font-semibold block text-gray-900">CORRECTIONS & Transparency:</span>
                                    <a href="mailto:corrections@thequestforprofit.com" className="hover:underline flex items-center gap-1.5 mt-1">
                                        <Mail className="w-4 h-4 text-red-600" /> corrections@thequestforprofit.com
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Last Updated */}
                        <section className="pt-6">
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

import { Metadata } from "next";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
    title: "Legal & Compliance | The Quest for Profit",
    description: "Read the legal policy and compliance guidelines for The Quest for Profit.",
};

export default function LegalPage() {
    return (
        <div className="min-h-screen text-gray-900 bg-white">
            <Header />
            <Navbar />

            <main className="py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    
                    <h1 className="text-4xl md:text-5xl text-center mb-10 font-serif font-medium">
                        <span className="border-b-[1.5px] border-black pb-2">Legal</span>
                    </h1>

                    <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-12 text-center max-w-2xl mx-auto">
                        This page provides a plain-language overview of the legal, copyright, and compliance topics relevant to accessing and utilizing content from The Quest for Profit.
                    </p>

                    <div className="space-y-12">
                        {/* Informational use of content */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Informational Use of Our Content
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800 space-y-4">
                                The Quest for Profit publishes financial journalism, market analyses, and informational overviews. While our articles adhere to strict journalistic standards, they are provided for educational and general informational purposes only. Nothing on this website constitutes professional legal, financial, tax, or investment advice. Readers are responsible for consulting qualified professionals before making any personal financial or legal decisions.
                            </p>
                        </section>

                        {/* Copyright, quotation, and reuse */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Copyright, Quotation, and Reuse
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800 space-y-4">
                                You are welcome to link to our reporting or quote brief excerpts with explicit, clear attribution to The Quest for Profit. Full republication, bulk reproduction, systematic scraping, or commercial utilization of our content is prohibited without prior written licensing agreements. For syndication or reproduction inquiries, please contact our administrative desk.
                            </p>
                        </section>

                        {/* Complaints about accuracy, rights, or fairness */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Complaints About Accuracy, Rights, or Fairness
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                If you believe our reporting contains a material error, infringes intellectual property, or raises a serious ethical concern, please contact us immediately. We review factual disputes through our Corrections or Right of Reply policies, while copyright or privacy concerns are handled through a dedicated review process.
                            </p>
                        </section>

                        {/* What to include in a formal request */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                What to Include in a Formal Request
                            </h2>
                            <div className="text-base md:text-lg leading-relaxed text-gray-800 space-y-4">
                                <p>
                                    To help us address your inquiry or request efficiently, please include:
                                </p>
                                <ul className="space-y-3 pl-4">
                                    <li className="list-disc">The exact URL or headline of the article in question.</li>
                                    <li className="list-disc">A detailed description of the statement, graphic, or material you are addressing.</li>
                                    <li className="list-disc">The factual or legal basis for your request, with supporting documents where applicable.</li>
                                    <li className="list-disc">Your name, organizational affiliation, and reliable contact details.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Removal, restriction, and update requests */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Removal and Update Requests
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                We take requests for editorial adjustments, clarifications, or article removals seriously. Submitting a request does not guarantee depublication or content removal. We evaluate every claim against the public interest, editorial standards, and applicable legal frameworks to determine if a correction, update note, or clarification is the appropriate remedy.
                            </p>
                        </section>

                        {/* Links to third-party material */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Links to Third-Party Material
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                Our articles may include outbound links to third-party sites, official databases, or regulatory archives. These external sites operate under their own terms and policies. A link to an external platform does not imply an endorsement of all content or viewpoints hosted on that site.
                            </p>
                        </section>

                        {/* Formal notices and requests */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Formal Notices and Requests
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                All legal correspondence, rights complaints, or licensing inquiries must be sent directly to our newsroom so they can be routed to the appropriate compliance reviewer. We handle all compliance correspondence electronically via our designated public email channels.
                            </p>
                        </section>

                        {/* Contact Box (bottom) */}
                        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact</h3>
                            <div className="space-y-3 text-sm text-gray-700">
                                <div>
                                    <span className="font-semibold block text-gray-900">GENERAL LEGAL CONTACT:</span>
                                    <a href="mailto:editorial@thequestforprofit.com" className="hover:underline flex items-center gap-1.5 mt-1">
                                        <Mail className="w-4 h-4 text-red-600" /> editorial@thequestforprofit.com
                                    </a>
                                </div>
                                <div>
                                    <span className="font-semibold block text-gray-900">CORRECTIONS & FACTUAL CONCERNS:</span>
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

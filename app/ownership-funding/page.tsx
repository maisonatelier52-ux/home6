import { Metadata } from "next";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
    title: "Ownership and Funding | The Quest for Profit",
    description: "Learn about the ownership, funding, and editorial control of The Quest for Profit.",
};

export default function OwnershipFundingPage() {
    return (
        <div className="min-h-screen text-gray-900 bg-white">
            <Header />
            <Navbar />

            <main className="py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    
                    <h1 className="text-4xl md:text-5xl text-center mb-10 font-serif font-medium">
                        <span className="border-b-[1.5px] border-black pb-2">Ownership & Funding</span>
                    </h1>

                    <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-12 text-center max-w-2xl mx-auto">
                        This document details the governing structure of The Quest for Profit, outlining how we separate commercial relationships from our newsroom operations to protect our editorial independence.
                    </p>

                    <div className="space-y-12">
                        {/* What this page covers */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                What This Page Covers
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                The Quest for Profit operates as an independent digital news platform. This page is designed for our readers to understand our policies regarding corporate funding, advertisement boundaries, conflict-of-interest management, and our commitment to autonomous financial journalism.
                            </p>
                        </section>

                        {/* Editorial control and decision-making */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Editorial Control and Decision-Making
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800 space-y-4">
                                Our editorial team maintains absolute control over our coverage decisions, headlines, timing, and topic selections. We do not sell editorial content, nor do we allow advertisers, sponsors, or political actors to preview or approve stories. Any partnership or commercial arrangement that threatens to compromise this independence is rejected immediately.
                            </p>
                        </section>

                        {/* How The Quest for Profit is funded */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                How The Quest for Profit Is Funded
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800 space-y-4">
                                Our platform generates revenue through programmatic advertising, direct sponsorships, affiliate partnerships, and general publishing-related arrangements. We ensure that these revenue streams remain structurally separated from our editorial team to prevent any conflict of interest. If any strategic funding relationship is established, it will be disclosed transparently on this page.
                            </p>
                        </section>

                        {/* Conflicts of interest and recusals */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Conflicts of Interest and Recusals
                            </h2>
                            <div className="text-base md:text-lg leading-relaxed text-gray-800 space-y-4">
                                <p>
                                    Our editors and writers are required to disclose any personal, family, or financial interests that could potentially bias their reporting. If a conflict exists, the assignment is reassigned to another writer or disclosed prominently in the text.
                                </p>
                                <ul className="space-y-3 pl-4">
                                    <li className="list-disc">Relevant financial ties or investments must be declared internally before writing.</li>
                                    <li className="list-disc">We do not accept gifts, free travel, or special corporate access that could undermine our reporting integrity.</li>
                                    <li className="list-disc">Writers are barred from engaging in outside consulting, advocacy, or projects that conflict with their reporting role.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Commercial support does not buy coverage */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Commercial Support Does Not Buy Coverage
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800 space-y-4">
                                Commercial partnerships or advertising deals do not guarantee favorable reporting or protect companies from critical analysis. All paid content, native ads, or affiliate links are clearly marked with disclosures so readers can easily distinguish them from independent reporting.
                            </p>
                        </section>

                        {/* Political, governmental, and advocacy influence */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Political, Governmental, and Advocacy Influence
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                The Quest for Profit does not accept funding or editorial input from political campaigns, governments, or state-funded entities. We maintain strict boundaries to ensure that our coverage of public policy and global markets remains completely objective.
                            </p>
                        </section>

                        {/* Changes to ownership or material support */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Changes to Ownership or Material Support
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                If The Quest for Profit undergoes a change in corporate ownership, major funding structure, or leadership, this page will be updated immediately to keep our audience fully informed of the new governance structure.
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

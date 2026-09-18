import { Metadata } from "next";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
    title: "Right of Reply Policy | The Quest for Profit",
    description: "Read the Right of Reply policy of The Quest for Profit. We seek to give individuals and organizations a fair opportunity to respond.",
};

export default function RightOfReplyPage() {
    return (
        <div className="min-h-screen text-gray-900 bg-white">
            <Header />
            <Navbar />

            <main className="py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    
                    <h1 className="text-4xl md:text-5xl text-center mb-10 font-serif font-medium">
                        <span className="border-b-[1.5px] border-black pb-2">Right of Reply</span>
                    </h1>

                    <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-12 text-center max-w-2xl mx-auto">
                        The Quest for Profit is committed to fairness and precision. When a post includes significant allegations, criticism, or disputed factual points about a person or organization, we seek to provide a fair opportunity for response.
                    </p>

                    <div className="space-y-12">
                        {/* When we seek a response */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                When We Seek a Response
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                If a draft features direct criticism, allegations of wrongdoing, or adverse factual claims about a person or institution, our writers make reasonable efforts to contact them before publication. This helps us verify information and present a fair, complete perspective.
                            </p>
                        </section>

                        {/* How outreach is usually handled */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                How Outreach Is Handled
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                Our editorial team may make contact by email, phone, official channels, or through legal representation. The response window depends on the complexity of the issue and the planned publication time. For time-sensitive subjects, that window may be shorter.
                            </p>
                        </section>

                        {/* What to send if you are seeking a reply or correction */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Submitting a Reply or Clarification
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                If you or your organization are mentioned in our coverage and wish to submit a response, clarification, or correction request, please provide the article headline or URL, the specific passage you dispute, a factual explanation supporting your statement, and your direct contact information.
                            </p>
                        </section>

                        {/* Post-publication responses */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Post-Publication Responses
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                If a subject contacts us after a post is published to offer missing context or challenge facts, our editors review the submission. We may update the post, add a clarification, publish a follow-up, or make no change when the original work remains accurate and complete.
                            </p>
                        </section>

                        {/* What this policy does not guarantee */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                What This Policy Does Not Guarantee
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                This policy does not grant external organizations prior approval of our articles, nor does it guarantee the publication of unedited statements or the retraction of accurate, verified facts. Our editorial board evaluates all requests against independent evidence to maintain our journalistic standards.
                            </p>
                        </section>

                        {/* Urgent matters and legal sensitivity */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Urgent Matters and Legal Sensitivity
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                For matters involving active litigation, regulatory actions, or corporate audits, we document pre-publication outreach carefully. Right-of-reply requests are meant to improve accuracy and balance and cannot be used to stall or suppress independent editorial work.
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
                                    <span className="font-semibold block text-gray-900">CORRECTIONS & Clarifications:</span>
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

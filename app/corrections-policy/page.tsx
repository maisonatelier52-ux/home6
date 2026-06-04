import { Metadata } from "next";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { CheckCircle2, Mail, Edit3, HelpCircle, FileText } from "lucide-react";

export const metadata: Metadata = {
    title: "Corrections Policy | The Quest for Profit",
    description: "Read the corrections policy of The Quest for Profit. We correct mistakes transparently, promptly, and visibly.",
};

export default function CorrectionsPolicyPage() {
    return (
        <div className="min-h-screen text-gray-900 bg-white">
            <Header />
            <Navbar />

            <main className="py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    
                    <h1 className="text-4xl md:text-5xl text-center mb-10 font-serif font-medium">
                        <span className="border-b-[1.5px] border-black pb-2">Corrections Policy</span>
                    </h1>

                    <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-12 text-center max-w-2xl mx-auto">
                        Precision is the foundation of The Quest for Profit&apos;s financial journalism. While our editorial team rigorously verifies all data and reports before they are published, errors can happen. When discrepancies occur, we address and correct them openly, quickly, and clearly.
                    </p>

                    <div className="space-y-12">
                        {/* How We Handle Mistakes */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                How We Handle Mistakes
                            </h2>
                            <p className="text-base text-gray-600 mb-6">
                                Different types of inaccuracies require distinct editorial responses:
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="bg-gray-100 p-2 rounded flex-shrink-0 mt-1">
                                        <Edit3 className="w-5 h-5 text-gray-700" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Minor Slip-ups</h3>
                                        <p className="text-base text-gray-700">
                                            Spelling issues, grammatical slip-ups, or formatting typos that do not change the core facts or meaning of an article are corrected immediately without a separate correction notice.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="bg-gray-100 p-2 rounded flex-shrink-0 mt-1">
                                        <FileText className="w-5 h-5 text-gray-700" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Factual Inaccuracies</h3>
                                        <p className="text-base text-gray-700">
                                            Errors involving figures, names, historical dates, or core facts are amended directly in the article text. We add a clearly labeled editor&apos;s note at the bottom of the article detailing what was corrected and when.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="bg-gray-100 p-2 rounded flex-shrink-0 mt-1">
                                        <HelpCircle className="w-5 h-5 text-gray-700" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Evolving Coverage</h3>
                                        <p className="text-base text-gray-700">
                                            For active, developing news stories, content may be continuously updated as new details are confirmed. These updates are appended with a timestamp so readers can track how the story developed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Where Corrections Appear */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Where Corrections Appear
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                All updates and corrections are applied directly to the original article page. We do not bury corrections or place them in hard-to-find sections. Transparency means the correction remains attached to the reporting itself, enabling any reader of the piece to see what changes were made.
                            </p>
                        </section>

                        {/* What a Correction Request Should Include */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                What a Correction Request Should Include
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                To help us investigate and process correction requests efficiently, please include the specific article headline or URL, the precise passage or data point you believe is incorrect, and the verifiable facts or sources that support your request.
                            </p>
                        </section>

                        {/* Reader Submissions */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Reader Submissions
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-6">
                                Our readers are vital in helping us maintain the absolute accuracy of our financial journalism. If you spot an error, please reach out to our editorial desk immediately:
                            </p>
                            <div className="flex items-center gap-2 text-gray-800 text-base md:text-lg">
                                <Mail className="w-5 h-5 text-red-600" />
                                <a href="mailto:corrections@thequestforprofit.com" className="hover:underline">corrections@thequestforprofit.com</a>
                            </div>
                        </section>

                        {/* Our Commitment to Transparency */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Our Commitment to Transparency
                            </h2>
                            <ul className="space-y-4 mb-6 text-gray-800 text-base md:text-lg">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 mt-1 text-red-600 flex-shrink-0" />
                                    <span>We do not silently delete or hide factual errors.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 mt-1 text-red-600 flex-shrink-0" />
                                    <span>Material updates are clearly called out and explained to our readers.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 mt-1 text-red-600 flex-shrink-0" />
                                    <span>Every correction submission is evaluated with care, respect, and objectivity.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 mt-1 text-red-600 flex-shrink-0" />
                                    <span>We avoid stealth editing that alters the context of an article without disclosing the change.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Why This Matters */}
                        <section className="pt-6">
                            <hr className="border-t border-gray-300 mb-8" />
                            
                            <h3 className="text-xl font-serif font-bold text-center mb-4 text-gray-900">Why This Matters</h3>
                            <p className="text-center text-gray-800 italic text-base md:text-lg mb-8 max-w-2xl mx-auto">
                                Trust is built through accountability. By admitting and correcting our mistakes transparently, we strive to build a financial publication that our audience can rely on unconditionally.
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

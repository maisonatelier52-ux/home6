import { Metadata } from "next";
import Link from "next/link";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Mail, Copy } from "lucide-react";

export const metadata: Metadata = {
    title: "Terms & Conditions | Mirror Standard",
    description: "Terms and conditions for Mirror Standard.",
};

export default function TermsConditionsPage() {
    return (
        <div className="min-h-screen bg-[#F5F4F0] text-gray-900 font-sans">
            <Header />
            <Navbar />

            <main className="py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-3xl mx-auto">
                    
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-black">
                            Terms & Conditions
                        </h1>
                        <div className="w-10 h-[1px] bg-black mx-auto"></div>
                    </div>

                    <p className="text-[14px] leading-relaxed mb-12 text-gray-700 font-medium">
                        By accessing Mirror Standard, you agree to the following terms. We aim to keep these straightforward and transparent so readers understand how our journalism may be used.
                    </p>

                    <div className="space-y-10">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-xl font-serif mb-2 text-black">
                                Using Our Content
                            </h2>
                            <div className="h-[1px] w-full bg-black mb-4"></div>
                            <div className="space-y-4 text-[14px] leading-relaxed text-gray-600">
                                <p>
                                    All original content published by Mirror Standard is protected by copyright. Readers may share links and quote brief excerpts with proper attribution. Republishing full articles without permission is not permitted.
                                </p>
                                <p>
                                    For permissions or republication inquiries, contact:
                                </p>
                                <div className="flex items-center gap-2 text-black font-medium">
                                    <Mail className="w-4 h-4" />
                                    <span>editorial@mirrorstandard.com</span>
                                    <Copy className="w-4 h-4 cursor-pointer text-gray-400 hover:text-black transition-colors" />
                                </div>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-xl font-serif mb-2 text-black">
                                Accuracy and Updates
                            </h2>
                            <div className="h-[1px] w-full bg-black mb-4"></div>
                            <p className="text-[14px] leading-relaxed text-gray-600">
                                We strive for accuracy and timely updates, but news evolves. Information may change after publication. Errors are corrected transparently in accordance with our <Link href="/corrections-policy" className="text-blue-500 hover:underline">Corrections Policy</Link>.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-xl font-serif mb-2 text-black">
                                Opinion and Analysis
                            </h2>
                            <div className="h-[1px] w-full bg-black mb-4"></div>
                            <p className="text-[14px] leading-relaxed text-gray-600">
                                Opinion and analysis articles are clearly labeled and reflect the views of the author, not necessarily those of Mirror Standard as a whole.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-xl font-serif mb-2 text-black">
                                External Links
                            </h2>
                            <div className="h-[1px] w-full bg-black mb-4"></div>
                            <p className="text-[14px] leading-relaxed text-gray-600">
                                Our reporting may include links to external websites for reference. We are not responsible for the content or privacy practices of third-party sites.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-xl font-serif mb-2 text-black">
                                Limitation of Responsibility
                            </h2>
                            <div className="h-[1px] w-full bg-black mb-4"></div>
                            <p className="text-[14px] leading-relaxed text-gray-600">
                                Mirror Standard provides journalism for general informational purposes. Content should not be considered legal, medical, or financial advice.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-xl font-serif mb-2 text-black">
                                Reader Contributions
                            </h2>
                            <div className="h-[1px] w-full bg-black mb-4"></div>
                            <p className="text-[14px] leading-relaxed text-gray-600">
                                If reader comments or submissions are enabled, participants are expected to engage respectfully. Content that violates laws or community standards may be removed.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section>
                            <h2 className="text-xl font-serif mb-2 text-black">
                                Updates to These Terms
                            </h2>
                            <div className="h-[1px] w-full bg-black mb-4"></div>
                            <p className="text-[14px] leading-relaxed text-gray-600">
                                These Terms may be updated periodically. Changes will be posted on this page with a revised effective date.
                            </p>
                        </section>

                        {/* Questions Section */}
                        <section className="text-center pt-8">
                            <h2 className="text-xl font-serif mb-4 text-black">
                                Questions?
                            </h2>
                            <p className="text-[14px] leading-relaxed text-gray-600 mb-4">
                                If you have questions about these Terms, contact us:
                            </p>
                            <div className="flex items-center justify-center gap-2 text-black font-medium mb-12">
                                <Mail className="w-4 h-4" />
                                <span>editorial@mirrorstandard.com</span>
                                <Copy className="w-4 h-4 cursor-pointer text-gray-400 hover:text-black transition-colors" />
                            </div>
                            
                            <div className="h-[1px] w-full bg-gray-300 mb-8"></div>
                            
                            <p className="text-center text-gray-600 text-[13px] mb-12 max-w-[300px] mx-auto">
                                Mirror Standard encourages responsible sharing, proper attribution, and informed readership.
                            </p>
                            
                            <p className="text-center text-[11px] text-gray-400 italic">
                                Last Updated: May 21, 2026
                            </p>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

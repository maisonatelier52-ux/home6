import { Metadata } from "next";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { CheckCircle2, Mail } from "lucide-react";

export const metadata: Metadata = {
    title: "Privacy Policy | The Quest for Profit",
    description: "Learn how The Quest for Profit collects, uses, and protects your personal information.",
    openGraph: {
        title: "Privacy Policy | The Quest for Profit",
        description: "Learn how The Quest for Profit collects, uses, and protects your personal information.",
        url: "https://www.thequestforprofit.com/privacy-policy",
        siteName: "The Quest for Profit",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Privacy Policy | The Quest for Profit",
        description: "Learn how The Quest for Profit collects, uses, and protects your personal information.",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <div className=" min-h-screen text-gray-900">
            <Header />
            <Navbar />

            <main className="py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    
                    <h1 className="text-4xl md:text-5xl text-center mb-10 font-medium">
                        <span className="border-b-[1.5px] border-black pb-2">Privacy Policy</span>
                    </h1>

                    <p className="text-base md:text-lg leading-relaxed mb-12">
                        The Quest for Profit values reader trust. We collect only limited information necessary to operate our newsroom, communicate with readers, and improve our journalism. This policy explains what we collect, why we collect it, and how we protect it.
                    </p>

                    <div className="space-y-12">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-medium border-b border-black pb-2 mb-6">
                                Information We Collect
                            </h2>
                            <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-800">
                                <p>
                                    When you visit our website, basic technical data such as pages viewed, device type, and browser information may be collected automatically. This information helps us understand readership patterns and improve site performance.
                                </p>
                                <p>
                                    If you contact us directly — for tips, corrections, or inquiries — we collect only the information you choose to provide, such as your name and email address.
                                </p>
                                <p>
                                    We do not collect unnecessary personal data, and we do not sell or trade user information.
                                </p>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-medium border-b border-black pb-2 mb-6">
                                How Information Is Used
                            </h2>
                            <ul className="space-y-3 mb-6 text-gray-800 text-base md:text-lg">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" />
                                    <span>To keep the website operating smoothly and securely.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" />
                                    <span>To understand which stories resonate with readers.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" />
                                    <span>To respond to messages, tips, or correction requests.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" />
                                    <span>To provide updates when readers request them.</span>
                                </li>
                            </ul>
                            <p className="text-gray-800 text-base md:text-lg">
                                We do not use personal data for advertising sales, profiling, or promotional targeting.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-medium border-b border-black pb-2 mb-6">
                                Cookies and Analytics
                            </h2>
                            <div className="space-y-4 text-gray-800 text-base md:text-lg leading-relaxed">
                                <p>
                                    We use cookies and analytics tools to understand how readers interact with our content. You may disable cookies in your browser without affecting access to our reporting.
                                </p>
                                <p>
                                    Third-party analytics services may process anonymized data under their own privacy policies.
                                </p>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-medium border-b border-black pb-2 mb-6">
                                Your Rights and Choices
                            </h2>
                            <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4">
                                Depending on your jurisdiction, you may have rights to access, correct, or request deletion of personal data. Requests can be submitted using the contact below.
                            </p>
                            <div className="flex items-center gap-2 text-gray-800 text-base md:text-lg">
                                <Mail className="w-5 h-5" />
                                <span>editorial@thequestforprofit.com</span>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-medium border-b border-black pb-2 mb-6">
                                Data Protection
                            </h2>
                            <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-12">
                                We take reasonable technical and organizational measures to protect information from unauthorized access. Because we limit the data we collect, we also limit exposure and risk.
                            </p>

                            <hr className="border-t border-gray-300 mb-8" />
                            
                            <p className="text-center text-gray-700 text-base md:text-lg mb-8">
                                The Quest for Profit collects as little information as possible, uses it only to support journalism, and never sells personal data.
                            </p>
                            
                            <p className="text-center text-xs text-gray-500 italic">
                                Last Updated: May 25, 2026
                            </p>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

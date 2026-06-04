import { Metadata } from "next";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Mail, Send, AlertTriangle, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contact Us | The Quest for Profit",
    description: "Get in touch with The Quest for Profit. We welcome news tips, corrections, and general inquiries.",
};

export default function ContactUsPage() {
    return (
        <div className="min-h-screen text-gray-900 bg-white flex flex-col justify-between">
            <div>
                <Header />
                <Navbar />

                <main className="py-16 px-6 md:px-12 lg:px-24">
                    <div className="max-w-4xl mx-auto">
                        
                        <h1 className="text-4xl md:text-5xl text-center mb-6 font-serif font-medium">
                            <span className="border-b-[1.5px] border-black pb-2">Get in Touch</span>
                        </h1>

                        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-12 text-center max-w-2xl mx-auto">
                            The Quest for Profit is an independent news platform. We welcome news tips, corrections, and inquiries from readers, journalists, and partner organizations responding to our coverage.
                        </p>

                        <div className="space-y-6 max-w-2xl mx-auto mb-12">
                            {/* Card 1 */}
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex gap-4 items-start">
                                <div className="bg-white p-2.5 rounded-full border border-gray-200 text-gray-700 flex-shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-gray-900 mb-1">Editorial & General Contact</h3>
                                    <p className="text-sm text-gray-600">Questions about our reporting, coverage ideas, or editorial matters.</p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex gap-4 items-start">
                                <div className="bg-white p-2.5 rounded-full border border-gray-200 text-gray-700 flex-shrink-0">
                                    <Send className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-gray-900 mb-1">Confidential News Tips</h3>
                                    <p className="text-sm text-gray-600">Share information that you believe should be investigated or reported.</p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex gap-4 items-start">
                                <div className="bg-white p-2.5 rounded-full border border-gray-200 text-gray-700 flex-shrink-0">
                                    <AlertTriangle className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-gray-900 mb-1">Corrections</h3>
                                    <p className="text-sm text-gray-600">If you believe we made an error, please notify us so we can correct it promptly.</p>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex gap-4 items-start">
                                <div className="bg-white p-2.5 rounded-full border border-gray-200 text-gray-700 flex-shrink-0">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-gray-900 mb-1">Media & Press Inquiries</h3>
                                    <p className="text-sm text-gray-600">Journalists, researchers, or organizations seeking collaboration.</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact details box */}
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-2xl mx-auto mb-12">
                            <p className="text-sm text-gray-600 mb-6 text-center leading-relaxed">
                                Contact our newsroom using the address that best matches your request. If you are reporting an error, challenging a factual claim, requesting a reply, or sending a permissions or legal concern, please include the specific article URL and detail the issue so it can be routed quickly.
                            </p>
                            <div className="space-y-4 text-sm text-gray-800">
                                <div className="flex justify-between flex-wrap gap-2 border-b border-gray-200 pb-2">
                                    <span className="font-bold">Editorial:</span>
                                    <a href="mailto:editorial@thequestforprofit.com" className="text-red-600 hover:underline">editorial@thequestforprofit.com</a>
                                </div>
                                <div className="flex justify-between flex-wrap gap-2 border-b border-gray-200 pb-2">
                                    <span className="font-bold">Tips:</span>
                                    <a href="mailto:tips@thequestforprofit.com" className="text-red-600 hover:underline">tips@thequestforprofit.com</a>
                                </div>
                                <div className="flex justify-between flex-wrap gap-2 border-b border-gray-200 pb-2">
                                    <span className="font-bold">Corrections:</span>
                                    <a href="mailto:corrections@thequestforprofit.com" className="text-red-600 hover:underline">corrections@thequestforprofit.com</a>
                                </div>
                                <div className="flex justify-between flex-wrap gap-2 pb-1">
                                    <span className="font-bold">Rights, permissions & formal notices:</span>
                                    <a href="mailto:editorial@thequestforprofit.com" className="text-red-600 hover:underline">editorial@thequestforprofit.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Stay Connected */}
                        <div className="text-center mb-12">
                            <h3 className="text-lg font-serif font-bold text-gray-900 mb-6">Stay Connected</h3>
                            <div className="flex justify-center gap-6 text-sm text-gray-600 font-medium">
                                <Link href="https://x.com" target="_blank" className="hover:text-black transition-colors">X (Twitter)</Link>
                                <Link href="https://www.instagram.com/thequestforprofit/" target="_blank" className="hover:text-black transition-colors">Instagram</Link>
                                <Link href="https://www.youtube.com/@TQFP-45" target="_blank" className="hover:text-black transition-colors">YouTube</Link>
                                <Link href="https://substack.com/@tqfp45?utm_source=global-search" target="_blank" className="hover:text-black transition-colors">Substack</Link>
                            </div>
                        </div>

                        {/* Footer statement */}
                        <div className="pt-6 border-t border-gray-200 text-center max-w-2xl mx-auto">
                            <p className="text-xs text-gray-500 leading-relaxed mb-6">
                                The Quest for Profit is an independent digital publication operated by a distributed editorial team based in the United States.
                            </p>
                            <p className="text-center text-xs text-gray-400 italic">
                                Last Updated: June 4, 2026
                            </p>
                        </div>

                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}

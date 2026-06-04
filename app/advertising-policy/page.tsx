import { Metadata } from "next";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Mail, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Advertising and Sponsored Content Policy | The Quest for Profit",
    description: "Read the advertising policy of The Quest for Profit. We separate commercial material from editorial reporting.",
};

export default function AdvertisingPolicyPage() {
    return (
        <div className="min-h-screen text-gray-900 bg-white">
            <Header />
            <Navbar />

            <main className="py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto">
                    
                    <h1 className="text-4xl md:text-5xl text-center mb-10 font-serif font-medium">
                        <span className="border-b-[1.5px] border-black pb-2">Advertising Policy</span>
                    </h1>

                    <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-12 text-center max-w-2xl mx-auto">
                        The Quest for Profit separates commercial activity from independent reporting. We are committed to ensuring that all advertisements, sponsored placements, and affiliate relationships are clearly identified for our readers.
                    </p>

                    <div className="space-y-12">
                        {/* Editorial separation */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Editorial Separation
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                Commercial partnerships do not grant editorial influence. Our story assignments, headlines, angles, source selections, and publishing schedules are determined solely by our editorial desk and are never sold. We maintain a strict visual separation to ensure that paid content is never confused with independent financial journalism.
                            </p>
                        </section>

                        {/* How paid material is labeled */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                How Paid Material Is Labeled
                            </h2>
                            <div className="text-base md:text-lg leading-relaxed text-gray-800 space-y-4">
                                <p>
                                    All sponsored content, advertisements, or partnerships carry clear labels to ensure complete clarity:
                                </p>
                                <ul className="space-y-3 pl-4">
                                    <li className="list-disc">We use explicit labels such as &quot;Sponsor Content,&quot; &quot;Paid Advertisement,&quot; or &quot;Sponsored Placement.&quot;</li>
                                    <li className="list-disc">Disclosures are placed near the top of the article or layout so readers notice them immediately before reading the content.</li>
                                    <li className="list-disc">Paid placements are styled distinctively and do not use standard newsroom bylines.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Native, branded, and partner content */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Native, Branded, and Partner Content
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                Paid articles, partner-funded segments, or custom branded campaigns must feature a plain-language disclosure visible across all screen sizes. Advertisers do not receive regular journalist bylines and cannot influence the surrounding editorial environment.
                            </p>
                        </section>

                        {/* Affiliate links, commerce, and material connections */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Affiliate Links and Commerce
                            </h2>
                            <div className="text-base md:text-lg leading-relaxed text-gray-800 space-y-4">
                                <p>
                                    Some of our articles may contain affiliate links, where we earn a commission if you make a purchase. When affiliate tracking is present, we include a clear disclosure on the page:
                                </p>
                                <ul className="space-y-3 pl-4">
                                    <li className="list-disc">Affiliate disclosures are presented in clear, easy-to-read text near the product link or reference.</li>
                                    <li className="list-disc">Disclosures are displayed contextually on the page rather than being hidden in terms pages.</li>
                                    <li className="list-disc">Our product recommendations remain completely independent and are never based solely on commission rates.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Newsletters, video, audio, and social distribution */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Multi-Platform Distribution
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                These disclosure standards apply uniformly across all our channels, including email newsletters, podcast episodes, video channels, and social media platforms. Any paid segment or mention is clearly labeled during playback or in print.
                            </p>
                        </section>

                        {/* Political and issue advertising */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Political and Issue Advertising
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-800">
                                Any political campaign or advocacy advertising accepted must carry an explicit disclaimer showing who paid for the placement. Acceptance of an ad does not represent an endorsement of the campaign or candidate by The Quest for Profit.
                            </p>
                        </section>

                        {/* Practices we do not use */}
                        <section>
                            <h2 className="text-2xl font-serif font-semibold border-b border-gray-300 pb-2 mb-6">
                                Prohibited Practices
                            </h2>
                            <ul className="space-y-4 text-gray-800 text-base md:text-lg">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 mt-1 text-red-600 flex-shrink-0" />
                                    <span>Selling positive editorial coverage or reviews in exchange for payment.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 mt-1 text-red-600 flex-shrink-0" />
                                    <span>Disguising commercial placements under standard newsroom bylines.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 mt-1 text-red-600 flex-shrink-0" />
                                    <span>Allowing commercial sponsors to veto or influence independent news coverage.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 mt-1 text-red-600 flex-shrink-0" />
                                    <span>Concealing affiliate links or corporate associations in small print.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Contact Box (bottom) */}
                        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact</h3>
                            <div className="space-y-3 text-sm text-gray-700">
                                <div>
                                    <span className="font-semibold block text-gray-900">ADVERTISING & Partnerships:</span>
                                    <a href="mailto:advertising@thequestforprofit.com" className="hover:underline flex items-center gap-1.5 mt-1">
                                        <Mail className="w-4 h-4 text-red-600" /> advertising@thequestforprofit.com
                                    </a>
                                </div>
                                <div>
                                    <span className="font-semibold block text-gray-900">READER Concerns:</span>
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

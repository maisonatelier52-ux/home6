import { Metadata } from "next";
import { Newspaper, Globe, CheckCircle2, Scale, Search, Shield } from "lucide-react";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
    title: "About Us | TQFP",
    description: "Learn about The Quest for Profit - your premier source for global economic analysis, market intelligence, and wealth management strategies.",
};

export default function AboutUsPage() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Header />
                <Navbar />

                {/* Main Content - Our Story */}
                <section className="py-12 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-12">
                            <div className="flex items-center gap-2 mb-8">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h1>
                                <span className="text-gray-500 text-lg">›</span>
                            </div>
                            <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700">
                                <p>
                                    Founded in 2025, The Quest for Profit was born from a simple yet powerful belief: that quality financial journalism matters. In an era of information overload and clickbait headlines, we set out to create a news platform dedicated to accuracy, integrity, and in-depth reporting on markets, finance, and wealth.
                                </p>
                                <p>
                                    What began as a small team of passionate financial journalists working from a modest office has evolved into a respected news source serving millions of readers worldwide. Our commitment to investigative journalism and unbiased reporting has earned us numerous awards and, more importantly, the trust of our readers.
                                </p>
                                <p>
                                    Through market upheavals, global crises, and technological revolutions, we've remained steadfast in our mission: to inform and empower our audience with reliable, well-researched journalism that cuts through the noise.
                                </p>
                                <p className="text-lg md:text-xl font-semibold text-red-600 pt-4">
                                    At TQFP, we don't just report the news — we help you understand what it means for your money, your future, and the world economy.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Cards */}
                <section className="py-8 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Our Mission */}
                            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
                                <div className="flex justify-center mb-6">
                                    <div className="bg-red-100 rounded-full p-4">
                                        <Newspaper className="w-10 h-10 text-red-600" />
                                    </div>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900">Our Mission</h2>
                                <p className="text-base md:text-lg leading-relaxed text-gray-700 text-center">
                                    To deliver accurate, unbiased, and timely financial news that empowers our readers to make informed decisions.
                                    We are committed to investigative journalism that holds power accountable and gives voice to the voiceless,
                                    while maintaining the highest standards of editorial integrity.
                                </p>
                            </div>

                            {/* Our Vision */}
                            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
                                <div className="flex justify-center mb-6">
                                    <div className="bg-red-100 rounded-full p-4">
                                        <Globe className="w-10 h-10 text-red-600" />
                                    </div>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900">Our Vision</h2>
                                <p className="text-base md:text-lg leading-relaxed text-gray-700 text-center">
                                    To be the most trusted and respected financial news source globally, recognized for our commitment to truth,
                                    journalistic excellence, and positive impact on society. We envision a world where quality journalism thrives
                                    and informed citizens shape a better future.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Editorial Principles */}
                <section className="py-12 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center gap-2 mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Editorial Principles</h2>
                            <span className="text-gray-500 text-lg">›</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Accuracy */}
                            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                                <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Accuracy</h3>
                                <p className="text-sm leading-relaxed text-gray-600">
                                    Every fact is verified, every source is checked. We correct errors promptly and transparently.
                                </p>
                            </div>

                            {/* Impartiality */}
                            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                                <div className="bg-yellow-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                    <Scale className="w-10 h-10 text-yellow-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Impartiality</h3>
                                <p className="text-sm leading-relaxed text-gray-600">
                                    We report without bias, presenting all sides of a story fairly and objectively.
                                </p>
                            </div>

                            {/* Independence */}
                            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                                <div className="bg-purple-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                    <Search className="w-10 h-10 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Independence</h3>
                                <p className="text-sm leading-relaxed text-gray-600">
                                    Our editorial decisions are free from political, commercial, or personal influence.
                                </p>
                            </div>

                            {/* Accountability */}
                            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                                <div className="bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                    <Shield className="w-10 h-10 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Accountability</h3>
                                <p className="text-sm leading-relaxed text-gray-600">
                                    We hold ourselves to the same standards we apply to those we cover, admitting and correcting mistakes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Banner */}
                <section className="py-12 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-12 shadow-sm">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                <div>
                                    <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">1+</div>
                                    <p className="text-gray-600 text-sm md:text-base">
                                        Years of Quality<br />Journalism
                                    </p>
                                </div>
                                <div>
                                    <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">10M+</div>
                                    <p className="text-gray-600 text-sm md:text-base">
                                        Monthly Readers
                                    </p>
                                </div>
                                <div>
                                    <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">9</div>
                                    <p className="text-gray-600 text-sm md:text-base">
                                        Expert Journalists &<br />Contributors
                                    </p>
                                </div>
                                <div>
                                    <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">50+</div>
                                    <p className="text-gray-600 text-sm md:text-base">
                                        Awards Won
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}

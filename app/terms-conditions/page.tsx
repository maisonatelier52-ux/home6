import { Metadata } from "next";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
    title: "Terms & Conditions | TQFP",
    description: "Read the terms and conditions for using The Quest for Profit website and services.",
};

export default function TermsConditionsPage() {
    return (
        <>
            <div className="bg-white min-h-screen">
                <Header />
                <Navbar />

                <section className="py-12 px-6">
                    <div className="max-w-6xl mx-auto space-y-12 border border-gray-200 rounded-lg p-8">
                        {/* Introduction */}
                        <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                            <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                Your use of this website and services is subject to these Terms & Conditions. By accessing or using The Quest for Profit, you agree to be bound by these terms.
                                If you do not agree with any part of these terms, you must not use our website or services.
                            </p>
                        </div>

                        {/* 1. Acceptance of Terms */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">1. Acceptance of Terms</h2>
                                <span className="text-gray-500 text-lg">›</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                By accessing and using this news website, you accept and agree to be bound by these terms and conditions.
                                These terms apply to all visitors, readers, and others who access or use our news service.
                            </p>
                        </div>

                        {/* 2. Content Usage and Copyright */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">2. Content Usage and Copyright</h2>
                                <span className="text-gray-500 text-lg">›</span>
                            </div>

                            <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Our Content Rights</h3>
                            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                                All news articles, photographs, videos, graphics, and other content published on this news website are
                                protected by copyright laws and are owned by us or our content contributors. Unauthorized reproduction,
                                distribution, or modification of our content is strictly prohibited.
                            </p>

                            <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Personal Use License</h3>
                            <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                You may access and read our news content for personal, non-commercial purposes. This limited license allows you to:
                            </p>
                            <ul className="list-disc pl-8 mt-4 space-y-2 text-base md:text-lg text-gray-700">
                                <li>Read and view articles on your personal devices</li>
                                <li>Share articles using our designated sharing tools</li>
                                <li>Print articles for personal reference</li>
                            </ul>
                            <p className="text-base md:text-lg leading-relaxed mt-6 text-gray-700">
                                You may NOT:
                            </p>
                            <ul className="list-disc pl-8 mt-4 space-y-2 text-base md:text-lg text-gray-700">
                                <li>Reproduce, republish, or redistribute our content without permission</li>
                                <li>Use our content for commercial purposes</li>
                                <li>Remove copyright notices or watermarks</li>
                                <li>Create derivative works from our content</li>
                                <li>Use automated tools to scrape or download content</li>
                            </ul>
                        </div>

                        {/* 3. User Registration and Accounts */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">3. User Registration and Accounts</h2>
                                <span className="text-gray-500 text-lg">›</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                                Some features of our news website may require registration. When creating an account, you agree to:
                            </p>
                            <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700">
                                <li>Provide accurate, current, and complete information</li>
                                <li>Maintain and update your information to keep it accurate</li>
                                <li>Maintain the security of your password and account</li>
                                <li>Accept responsibility for all activities under your account</li>
                                <li>Notify us immediately of any unauthorized use of your account</li>
                            </ul>
                            <p className="text-base md:text-lg leading-relaxed mt-6 text-gray-700">
                                We reserve the right to suspend or terminate accounts that violate these terms or engage in prohibited activities.
                            </p>
                        </div>

                        {/* 4. User Comments and Submissions */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">4. User Comments and Submissions</h2>
                                <span className="text-gray-500 text-lg">›</span>
                            </div>

                            <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Comment Policy</h3>
                            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                                We welcome reader comments and discussions. By posting comments, you agree that:
                            </p>
                            <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700">
                                <li>Your comments do not contain illegal, defamatory, or offensive content</li>
                                <li>You will not impersonate others or misrepresent your affiliation</li>
                                <li>You grant us a non-exclusive license to use, modify, and display your comments</li>
                                <li>You are responsible for the content of your submissions</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">Prohibited Content</h3>
                            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                                Comments and submissions must not contain:
                            </p>
                            <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700">
                                <li>Hate speech, harassment, or discriminatory content</li>
                                <li>False or misleading information</li>
                                <li>Spam, advertising, or promotional content</li>
                                <li>Personal attacks or abusive language</li>
                                <li>Violations of privacy or confidentiality</li>
                                <li>Content that infringes intellectual property rights</li>
                            </ul>
                            <p className="text-base md:text-lg leading-relaxed mt-6 text-gray-700">
                                We reserve the right to remove any comments that violate this policy without notice.
                            </p>
                        </div>

                        {/* 5. Journalistic Standards and Accuracy */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">5. Journalistic Standards and Accuracy</h2>
                                <span className="text-gray-500 text-lg">›</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                                We strive to provide accurate, fair, and balanced news coverage. However:
                            </p>
                            <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700">
                                <li>News content may be updated or corrected as new information becomes available</li>
                                <li>Opinions expressed in opinion pieces are those of the authors, not necessarily TQFP</li>
                                <li>We make reasonable efforts to verify information but cannot guarantee absolute accuracy</li>
                                <li>Breaking news may contain preliminary information subject to change</li>
                            </ul>
                            <div className="bg-yellow-50 border border-yellow-200 p-6 mt-8 rounded-lg">
                                <p className="text-base md:text-lg font-semibold text-gray-900">
                                    Corrections Policy: If you believe we have published inaccurate information, please contact our editorial team.
                                    We take accuracy seriously and will investigate and correct errors promptly.
                                </p>
                            </div>
                        </div>

                        {/* 6. Third-Party Content and Links */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">6. Third-Party Content and Links</h2>
                                <span className="text-gray-500 text-lg">›</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                                Our website may contain links to third-party websites, advertisements, or embedded content. We are not responsible for:
                            </p>
                            <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700">
                                <li>The content, accuracy, or opinions expressed in third-party materials</li>
                                <li>The privacy practices of external websites</li>
                                <li>Products or services advertised by third parties</li>
                            </ul>
                            <p className="text-base md:text-lg leading-relaxed mt-6 text-gray-700">
                                Links to external sites do not constitute endorsement of those sites or their content.
                            </p>
                        </div>

                        {/* 7. Disclaimer of Warranties */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">7. Disclaimer of Warranties</h2>
                                <span className="text-gray-500 text-lg">›</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                                Our news website and content are provided "as is" without warranties of any kind. We do not warrant that:
                            </p>
                            <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700">
                                <li>The website will be uninterrupted or error-free</li>
                                <li>All content is completely accurate or current</li>
                                <li>The website is free from viruses or harmful components</li>
                                <li>Defects will be corrected immediately</li>
                            </ul>
                        </div>

                        {/* 8. Limitation of Liability */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">8. Limitation of Liability</h2>
                                <span className="text-gray-500 text-lg">›</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                                To the fullest extent permitted by law, we shall not be liable for any damages arising from:
                            </p>
                            <ul className="list-disc pl-8 space-y-2 text-base md:text-lg text-gray-700">
                                <li>Use of or inability to use our website</li>
                                <li>Reliance on any content published on our website</li>
                                <li>Errors, omissions, or inaccuracies in our content</li>
                                <li>Unauthorized access to your account or data</li>
                                <li>Third-party content or advertisements</li>
                            </ul>
                        </div>

                        {/* 9. Changes to Terms */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">9. Changes to Terms</h2>
                                <span className="text-gray-500 text-lg">›</span>
                            </div>
                            <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated "Last Updated" date.
                                Your continued use of the website after changes are posted constitutes acceptance of the modified terms.
                            </p>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}

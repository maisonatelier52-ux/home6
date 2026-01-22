import React from 'react';
import { Facebook, Youtube, Phone } from 'lucide-react';
import Link from 'next/link';

import NewsTicker from './NewsTicker';
import CurrentDate from './CurrentDate';

export default function Header() {
    const tickerItems = [
        { title: "Generative AI: Moving Beyond the Hype to Enterprise Reality", category: "Tech", slug: "generative-ai-the-next-frontier" },
        { title: "Trade Policy Shifts: Impact on Asian Markets", category: "Politics", slug: "trade-policy-shifts-asia" },
        { title: "Federal Reserve Signals Slower Rate Cuts for 2026", category: "Finance", slug: "fed-interest-rate-outlook" },
        { title: "Tech Stocks Rally as AI Adoption Accelerates", category: "Markets", slug: "tech-stocks-rally-ai" },
        { title: "Quantum Computing Breakthrough: IBM and Google Race Ahead", category: "Tech", slug: "quantum-computing-breakthrough-google-ibm" },
        { title: "Sustainable Supply Chains: The New Corporate Mandate", category: "Business", slug: "sustainable-supply-chain-leaders" },
        { title: "Global Summit Addresses Rising Inflation Concerns", category: "Politics", slug: "global-summit-inflation-concerns" }
    ];

    return (
        <header className="w-full flex flex-col bg-white text-black font-sans max-w-6xl mx-auto">
            {/* News Ticker Section */}
            <NewsTicker items={tickerItems} />

            {/* Main Header Area */}
            <div className="container mx-auto px-0 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Left Controls */}
                    <div className="hidden md:flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
                        <CurrentDate />
                    </div>

                    {/* Center Logo */}
                    <div className="flex-1 text-center">

                        <Link href="/" title="The Quest for Profit Home" className="inline-block py-0">
                            <img
                                src="/images/logo-TQFP.svg"
                                alt="The Quest for Profit"
                                className="h-8 md:h-9 w-auto "
                            />
                        </Link>
                    </div>

                    {/* Right Socials */}
                    <div className="hidden md:flex items-center gap-3 w-full md:w-auto justify-center md:justify-end">
                        <SocialButton icon={<Phone size={16} />} />
                        <SocialButton icon={<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M22.539 8.242H1.46V5.406h21.078v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.078V0z" />
                        </svg>} href="https://substack.com/@tqfp45?utm_source=global-search " />
                        <SocialButton icon={<Youtube size={20} />} href="https://www.youtube.com/@TQFP-45 " />
                        <SocialButton icon={<Facebook size={16} />} href="https://www.facebook.com/profile.php?id=61586756528283" />
                    </div>
                </div>
            </div>
        </header>
    );
}

function SocialButton({ icon, href }: { icon: React.ReactNode; href?: string }) {
    const className = "h-8 w-8 rounded-full border border-gray-900 flex items-center justify-center text-gray-600 hover:border-black hover:bg-black hover:text-white transition-all duration-200";

    if (href) {
        return (
            <Link
                href={href}
                className={className}
                target="_blank"
                rel="noopener noreferrer"
            >
                {icon}
            </Link>
        );
    }

    return (
        <button className={className}>
            {icon}
        </button>
    );
}

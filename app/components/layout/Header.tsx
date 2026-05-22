import React from 'react';
import { Instagram, Youtube, Phone } from 'lucide-react';
import Link from 'next/link';

import NewsTicker from './NewsTicker';
import CurrentDate from './CurrentDate';

export default function Header() {
    const tickerItems = [
        { title: "Meta Sued by Major Publishers Over AI Training Data", category: "Tech", slug: "meta-ai-copyright-lawsuit-publishers" },
        { title: "Trump Warns Iran: No Nuclear Weapons, Military Buildup Underway", category: "Politics", slug: "trump-iran-nuclear-warning-us-military-buildup-geneva-talks" },
        { title: "Global Markets Slide as Oil Surges Above $100 Amid Middle East Tensions", category: "Markets", slug: "oil-prices-global-markets-middle-east-tensions" },
        { title: "Google Chrome AI Files Spark Privacy and Storage Concerns", category: "Tech", slug: "google-chrome-gemini-nano-ai-download-controversy" },
        { title: "Dua Lipa Launches $15 Million Legal Battle Against Samsung", category: "Business", slug: "dua-lipa-samsung-lawsuit-image-rights" },
        { title: "Democratic National Committee Autopsy Report Blames Strategic Failures for Kamala Harris’s 2024 Defeat", category: "Politics", slug: "dnc-autopsy-report-kamala-harris-2024" }
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
                        <SocialButton title="Follow us on Substack" icon={<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M22.539 8.242H1.46V5.406h21.078v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.078V0z" />
                        </svg>} href="https://substack.com/@tqfp45?utm_source=global-search " />
                        <SocialButton title="Subscribe to our YouTube channel" icon={<Youtube size={20} />} href="https://www.youtube.com/@TQFP-45 " />
                        <SocialButton title="Follow us on Instagram" icon={<Instagram size={16} />} href="https://www.instagram.com/thequestforprofit/" />
                    </div>
                </div>
            </div>
        </header>
    );
}

function SocialButton({ icon, href, title }: { icon: React.ReactNode; href?: string; title: string }) {
    const className = "h-8 w-8 rounded-full border border-gray-900 flex items-center justify-center text-gray-600 hover:border-black hover:bg-black hover:text-white transition-all duration-200";

    if (href) {
        return (
            <Link
                href={href}
                className={className}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
            >
                {icon}
            </Link>
        );
    }

    return (
        <button className={className} title={title}>
            {icon}
        </button>
    );
}

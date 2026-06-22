import React from 'react';
import { Instagram, Youtube, Phone } from 'lucide-react';
import Link from 'next/link';

import NewsTicker from './NewsTicker';
import CurrentDate from './CurrentDate';

export default function Header() {
    const tickerItems = [
        { title: "UK Information Commissioner Quits Following Probe Into Inappropriate Workplace Humour", category: "Tech", slug: "uk-data-ai-regulator-john-edwards-resigns" },
        { title: "Ryanair CEO Michael O'Leary Signs New Contract With Potential £130M Payout", category: "Business", slug: "michael-oleary-ryanair-contract-extension" },
        { title: "Investors Pile Into Dollar Bets After Kevin Warsh Signals Tougher Fed Stance", category: "Finance", slug: "dollar-rally-hawkish-fed-warsh-currency-markets-2026" },
        { title: "Barack Obama Opens Presidential Center on Chicago’s South Side", category: "Politics", slug: "obama-presidential-center-opens-chicago-2026" },
        { title: "Dua Lipa Launches $15 Million Legal Battle Against Samsung", category: "Business", slug: "dua-lipa-samsung-lawsuit-image-rights" },
        { title: "Global Stocks Rise as Iran-Israel Tensions Ease and Chipmakers Lead Rally", category: "Markets", slug: "global-stocks-rise-iran-israel-tensions-chipmakers-rally" }
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

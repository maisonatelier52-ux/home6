import React from 'react';
import { Menu, Sun, Moon, Zap, Facebook, Twitter, Globe, Phone } from 'lucide-react';
import Link from 'next/link';

import NewsTicker from './NewsTicker';

export default function Header() {
    const tickerItems = [
        "Timmediately quail was inverse much so remade dimly...",
        "Unanimous haltered loud one trod trigly style four",
        "Incongruous jeepers jellyfish one far Well",
        "Hoically quizzical far impala heroic a passably and through",
        "Direct trade ihil adipisicin thundercats viral helvetica"
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
                        <button className="h-6 w-10 border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors duration-200">
                            <Menu size={16} />
                        </button>

                        <div className="h-6 border border-gray-300 flex items-center">
                            <button className="h-full w-10 flex items-center justify-center border-r border-gray-300 text-gray-400 hover:text-black transition-colors">
                                <Sun size={16} />
                            </button>
                            <button className="h-full w-10 flex items-center justify-center bg-black text-white">
                                <Moon size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Center Logo */}
                    <div className="flex-1 text-center">

                        <Link href="/" className="inline-block py-0">
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
                        <SocialButton icon={<Globe size={16} />} />
                        <SocialButton icon={<Twitter size={16} />} />
                        <SocialButton icon={<Facebook size={16} />} />
                    </div>
                </div>
            </div>
        </header>
    );
}

function SocialButton({ icon }: { icon: React.ReactNode }) {
    return (
        <button className="h-8 w-8 rounded-full border border-gray-900 flex items-center justify-center text-gray-600 hover:border-black hover:bg-black hover:text-white transition-all duration-200">
            {icon}
        </button>
    );
}

import React from 'react';
import { Menu, Sun, Moon, Zap, Facebook, Twitter, Globe, Phone } from 'lucide-react';
import Link from 'next/link';
import Navbar from './Navbar';

export default function Header() {
    return (
        <header className="w-full flex flex-col bg-white text-black font-sans dark:bg-white dark:text-black">
            {/* Top Bar - Ticker */}
            <div className="border-b border-gray-300">
                <div className="container mx-auto flex items-center h-10 overflow-hidden">
                    {/* Label */}
                    <div className="flex-shrink-0 bg-black text-white px-3 py-2.5 h-full flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider">
                        <Zap size={12} className="fill-white" />
                        Latest
                    </div>

                    {/* Ticker Content */}
                    <div className="flex-1 px-4 text-xs font-semibold text-gray-700 whitespace-nowrap overflow-hidden">
                        <div className="flex items-center gap-4">
                            <span className="cursor-pointer hover:underline">Timmediately quail was inverse much so remade dimly...</span>
                            <span className="text-gray-300">|</span>
                            <span className="cursor-pointer hover:underline">Unanimous haltered loud one trod trigly style four</span>
                            <span className="text-gray-300">|</span>
                            <span className="cursor-pointer hover:underline">Incongruous jeepers jellyfish one far Well</span>
                            <span className="text-gray-300">|</span>
                            <span className="cursor-pointer hover:underline">Timmediately quail was inverse much so remade dimly...</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header Area */}
            <div className="container mx-auto px-0 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Left Controls */}
                    <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
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
                        {/* Using text representation since I don't have the logo asset. 
                 The image shows 'javapaper.wpbromo.com' which looks like a logo image but I'll emulate it with text. */}
                        <Link href="/" className="inline-block">
                            <span className="text-2xl md:text-3xl font-bold tracking-tight text-slate-800">
                                javapaper.wpbromo.com
                            </span>
                        </Link>
                    </div>

                    {/* Right Socials */}
                    <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-end">
                        <SocialButton icon={<Phone size={16} />} />
                        <SocialButton icon={<Globe size={16} />} />
                        <SocialButton icon={<Twitter size={16} />} />
                        <SocialButton icon={<Facebook size={16} />} />
                    </div>
                </div>
            </div>
            <Navbar />
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

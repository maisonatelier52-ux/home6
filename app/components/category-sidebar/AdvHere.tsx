import React from 'react';
import Link from 'next/link';

export default function AdvHere() {
    return (
        <Link
            href="/about-us"
            title="About The Quest for Profit blog"
            className="block border border-slate-300 bg-slate-950 p-6 text-white transition hover:bg-[#a61f2d]"
        >
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-300">Independent editorial blog</p>
            <h2 className="mt-3 font-serif text-2xl font-bold leading-7">Follow ideas, not the feed.</h2>
            <p className="mt-4 text-sm leading-6 text-slate-200">Read how the blog approaches evidence, analysis and corrections.</p>
            <span className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.14em]">About the blog →</span>
        </Link>
    );
}

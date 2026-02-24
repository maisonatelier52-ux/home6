import React from 'react';
import Link from 'next/link';

export default function AdvHere() {
    return (
        <div>
            <Link href="https://www.theopenknowledge.com/" title="Visit The Open Knowledge" className="bg-gray-100 w-full aspect-[5/3] flex items-center justify-center overflow-hidden">
                <img
                    src="/images/adv4444.svg"
                    alt="Advertisement"
                    className="w-full h-full object-cover"
                />
            </Link>
        </div>
    );
}

'use client';

import React, { useEffect, useState } from 'react';

export default function CurrentDate() {
    const [date, setDate] = useState<Date | null>(null);

    useEffect(() => {
        setDate(new Date());

        // Update every minute just in case, though usually date doesn't change fast. 
        // If we displayed time, we'd need seconds. For just date/time, every minute is fine.
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000 * 60);

        return () => clearInterval(timer);
    }, []);

    // Prevent hydration mismatch by rendering nothing until client-side date is available
    if (!date) {
        return <div className="h-6 w-32 bg-gray-100 animate-pulse rounded"></div>;
    }

    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const fullDate = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    const time = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    return (
        <div className="flex flex-col items-start justify-center border-black gap-1 py-1 px-3 rounded">
            <div className="flex items-center gap-2 leading-tight">
                <span className="font-serif text-[9px] font-bold tracking-[0.2em] text-gray-900">
                    {dayName}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-900">
                    {time}
                </span>
            </div>
            <span className="text-xs font-serif font-bold text-gray-1000 leading-tight whitespace-nowrap">
                {fullDate}
            </span>
        </div>
    );
}

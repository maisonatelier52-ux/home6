"use client";

import React, { useEffect, useRef, useState } from 'react';

interface StickyBoxProps {
    children: React.ReactNode;
    offsetTop?: number;
    offsetBottom?: number;
}

export default function StickyBox({ children, offsetTop = 20, offsetBottom = 20 }: StickyBoxProps) {
    const scrollPaneRef = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState<React.CSSProperties>({
        position: 'sticky',
        top: `${offsetTop}px`,
        alignSelf: 'start'
    });

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (!scrollPaneRef.current) return;

            const scrollY = window.scrollY;
            const sidebarHeight = scrollPaneRef.current.offsetHeight;
            const viewportHeight = window.innerHeight;

            // If sidebar is shorter than the viewport, standard top sticky is fine
            if (sidebarHeight + offsetTop + offsetBottom < viewportHeight) {
                setStyle({
                    position: 'sticky',
                    top: `${offsetTop}px`,
                    alignSelf: 'start'
                });
            } else {
                // Taller than viewport - Smart Sticky logic
                if (scrollY > lastScrollY) {
                    // Scrolling down: Stick to the bottom
                    setStyle({
                        position: 'sticky',
                        top: `${viewportHeight - sidebarHeight - offsetBottom}px`,
                        alignSelf: 'start'
                    });
                } else {
                    // Scrolling up: Stick to the top
                    setStyle({
                        position: 'sticky',
                        top: `${offsetTop}px`,
                        alignSelf: 'start'
                    });
                }
            }

            lastScrollY = scrollY;
        };

        // Listen to scroll and resize
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);

        // Use a small delay to ensure height is calculated correctly after layout
        const timer = setTimeout(handleScroll, 100);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            clearTimeout(timer);
        };
    }, [offsetTop, offsetBottom]);

    return (
        <div
            ref={scrollPaneRef}
            style={style}
            className="will-change-transform" /* Optimize for transforms/sticky */
        >
            {children}
        </div>
    );
}

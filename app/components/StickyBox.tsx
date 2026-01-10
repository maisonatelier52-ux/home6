"use client";

import React, { useEffect, useRef, useState } from 'react';

interface StickyBoxProps {
    children: React.ReactNode;
    offsetTop?: number;
    offsetBottom?: number;
}

export default function StickyBox({ children, offsetTop = 30, offsetBottom = 20 }: StickyBoxProps) {
    const scrollPaneRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const [style, setStyle] = useState<React.CSSProperties>({
        position: 'sticky',
        top: `${offsetTop}px`,
        alignSelf: 'start',
        width: '100%'
    });

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let mode: 'top' | 'bottom' | 'relative' = 'top';
        let relativeTop = 0;

        const handleScroll = () => {
            if (!scrollPaneRef.current || !containerRef.current) return;

            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const sidebarHeight = scrollPaneRef.current.offsetHeight;
            const containerRect = containerRef.current.getBoundingClientRect();
            const sidebarRect = scrollPaneRef.current.getBoundingClientRect();

            const isTaller = sidebarHeight + offsetTop + offsetBottom > viewportHeight;

            if (!isTaller) {
                // Simple sticky behavior if sidebar is shorter than viewport
                setStyle({
                    position: 'sticky',
                    top: `${offsetTop}px`,
                    alignSelf: 'start',
                    width: '100%'
                });
            } else {
                // Complex sticky behavior for taller sidebars
                if (scrollY > lastScrollY) {
                    // Scrolling Down
                    if (mode === 'top') {
                        mode = 'relative';
                        relativeTop = sidebarRect.top - containerRect.top;
                        setStyle({
                            position: 'relative',
                            top: `${relativeTop}px`,
                            width: '100%'
                        });
                    } else if (mode === 'relative') {
                        if (sidebarRect.bottom <= viewportHeight - offsetBottom) {
                            mode = 'bottom';
                            setStyle({
                                position: 'sticky',
                                top: `${viewportHeight - sidebarHeight - offsetBottom}px`,
                                alignSelf: 'start',
                                width: '100%'
                            });
                        }
                    }
                } else if (scrollY < lastScrollY) {
                    // Scrolling Up
                    if (mode === 'bottom') {
                        mode = 'relative';
                        relativeTop = sidebarRect.top - containerRect.top;
                        setStyle({
                            position: 'relative',
                            top: `${relativeTop}px`,
                            width: '100%'
                        });
                    } else if (mode === 'relative') {
                        if (sidebarRect.top >= offsetTop) {
                            mode = 'top';
                            setStyle({
                                position: 'sticky',
                                top: `${offsetTop}px`,
                                alignSelf: 'start',
                                width: '100%'
                            });
                        }
                    }
                }
            }

            lastScrollY = scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);

        // Initial check
        const timer = setTimeout(handleScroll, 100);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            clearTimeout(timer);
        };
    }, [offsetTop, offsetBottom]);

    return (
        <div ref={containerRef} className="h-full w-full">
            <div ref={scrollPaneRef} style={style}>
                {children}
            </div>
        </div>
    );
}

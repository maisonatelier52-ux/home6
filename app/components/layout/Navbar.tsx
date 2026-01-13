"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ChevronDown, Menu, X } from 'lucide-react';

interface DropdownItem {
    label: string;
    href: string;
}

interface NavItem {
    label: string;
    href: string;
    color?: string;
    hasDropdown?: boolean;
    dropdownItems?: DropdownItem[];
}

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) setActiveDropdown(null);
    };

    const toggleDropdown = (index: number) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    const navItems: NavItem[] = [
        {
            label: 'HOME',
            href: '/',
        },
        {
            label: 'CATEGORY',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                { label: 'POLITICS', href: '/category/politics' },
                { label: 'MARKETS', href: '/category/markets' },
                { label: 'BUSINESS', href: '/category/business' },
                { label: 'FINANCE', href: '/category/finance' },
                { label: 'TECH', href: '/category/tech' },
                { label: 'WEALTH', href: '/category/wealth' },
            ]
        },
        {
            label: 'TAGS LAYOUT',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                { label: 'TAG LIST', href: '#' },
                { label: 'TAG CLOUD', href: '#' },
            ]
        },
        {
            label: 'POST STYLES',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                { label: 'STANDARD POST', href: '#' },
                { label: 'VIDEO POST', href: '#' },
                { label: 'AUDIO POST', href: '#' },
                { label: 'GALLERY POST', href: '#' },
            ]
        },
        { label: 'MODULE', href: '#' },
        {
            label: 'CPT',
            href: '#',
            hasDropdown: true,
            dropdownItems: [
                { label: 'OUR TEAM', href: '#' },
                { label: 'TESTIMONIALS', href: '#' },
                { label: 'SERVICES', href: '#' },
            ]
        },
        { label: '404', href: '#' },
    ];

    // Helper to check if a main nav item or any of its dropdown items is active
    const isItemActive = (item: NavItem) => {
        if (item.href !== '#' && pathname === item.href) return true;
        if (item.dropdownItems) {
            return item.dropdownItems.some(drop => drop.href === pathname);
        }
        return false;
    };

    return (
        <nav className="w-full border-t border-b border-gray-300 bg-white sticky top-0 z-[100]">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-[40px] lg:h-[40px]">

                    {/* Hamburger Button (Mobile Only) */}
                    <div className="lg:hidden flex items-center h-full">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 hover:text-red-600 focus:outline-none flex items-center gap-1 text-[12px] font-bold uppercase tracking-wider"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            <span>Menu</span>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center h-full gap-8 text-[12px] font-bold uppercase tracking-wider relative z-50">
                        {navItems.map((item, index) => {
                            const active = isItemActive(item);
                            return (
                                <li
                                    key={index}
                                    className={`flex items-center h-full group relative cursor-pointer ${active ? 'text-red-600' : 'text-gray-800'}`}
                                >
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-1 hover:text-red-600 transition-colors duration-200"
                                    >
                                        {item.label}
                                        {item.hasDropdown && (
                                            <ChevronDown size={14} className={`mt-[-2px] opacity-70 ${active ? 'text-red-600' : ''}`} strokeWidth={2.5} />
                                        )}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {item.hasDropdown && item.dropdownItems && (
                                        <div className="absolute top-full left-0 w-48 bg-white border border-gray-300 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                                            <div className="h-0.5 w-full bg-red-600 top-0 absolute"></div>
                                            <ul className="flex flex-col py-2">
                                                {item.dropdownItems.map((dropItem, dropIndex) => (
                                                    <li key={dropIndex}>
                                                        <Link
                                                            href={dropItem.href}
                                                            className={`block px-4 py-2 hover:bg-gray-50 hover:text-red-600 transition-colors text-[11px] font-bold ${pathname === dropItem.href ? 'text-red-600' : 'text-gray-600'}`}
                                                        >
                                                            {dropItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    {/* Search Icon */}
                    <div className="flex items-center h-full pl-4 lg:ml-4">
                        <button className="h-7 w-7 bg-[#e5e5e5] flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors duration-200">
                            <Search size={16} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-200 py-2 pb-6 absolute left-0 right-0 shadow-xl z-[90] max-h-[80vh] overflow-y-auto">
                        <ul className="flex flex-col text-[12px] font-bold uppercase tracking-wider">
                            {navItems.map((item, index) => {
                                const active = isItemActive(item);
                                return (
                                    <li key={index} className="border-b border-gray-50 last:border-none">
                                        <div className="flex items-center justify-between px-4 py-3">
                                            <Link
                                                href={item.href}
                                                className={`flex-1 hover:text-red-600 transition-colors ${active ? 'text-red-600' : 'text-gray-800'}`}
                                                onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                            {item.hasDropdown && (
                                                <button
                                                    onClick={() => toggleDropdown(index)}
                                                    className="p-1 hover:bg-gray-100 rounded"
                                                >
                                                    <ChevronDown
                                                        size={18}
                                                        className={`transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''} ${active ? 'text-red-600' : ''}`}
                                                    />
                                                </button>
                                            )}
                                        </div>

                                        {/* Mobile Dropdown Items */}
                                        {item.hasDropdown && item.dropdownItems && activeDropdown === index && (
                                            <ul className="bg-gray-50 py-2 border-t border-gray-100">
                                                {item.dropdownItems.map((dropItem, dropIndex) => (
                                                    <li key={dropIndex}>
                                                        <Link
                                                            href={dropItem.href}
                                                            className={`block px-8 py-2 hover:text-red-600 text-[11px] font-bold ${pathname === dropItem.href ? 'text-red-600' : 'text-gray-600'}`}
                                                            onClick={() => setIsMenuOpen(false)}
                                                        >
                                                            {dropItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

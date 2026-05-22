"use client";

import React, { useState, useEffect } from 'react';
import { Facebook, Linkedin, Link as LinkIcon, Check, Mail } from 'lucide-react';

interface ArticleShareProps {
    title: string;
}

export default function ArticleShare({ title }: ArticleShareProps) {
    const [baseUrl, setBaseUrl] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setBaseUrl(window.location.href); 
    }, []);

    const shareLinks = {
        whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ": " + baseUrl)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(baseUrl)}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(baseUrl)}&title=${encodeURIComponent(title)}`,
        email: `mailto:?subject=${encodeURIComponent(title)}&body=Check out this article: ${encodeURIComponent(baseUrl)}`
    };

    const copyToClipboard = async () => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(baseUrl);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } else {
                // Fallback for non-secure contexts
                const textArea = document.createElement("textarea");
                textArea.value = baseUrl;
                textArea.style.position = "fixed";
                textArea.style.left = "-9999px";
                textArea.style.top = "0";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                    document.execCommand('copy');
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                } catch (err) {
                    console.error('Fallback copy failed', err);
                }
                document.body.removeChild(textArea);
            }
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const handleShare = (platform: keyof typeof shareLinks) => {
        if (platform === 'email') {
            window.location.href = shareLinks[platform];
        } else {
            window.open(shareLinks[platform], '_blank', 'width=600,height=400');
        }
    };

    return (
        <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mr-2">Share:</span>

            <button
                onClick={() => handleShare('whatsapp')}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 group"
                title="Share on WhatsApp"
            >
                <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="currentColor"
                    className="group-hover:scale-110 transition-transform"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </button>

            <button
                onClick={() => handleShare('facebook')}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#4267B2] hover:text-white hover:border-[#4267B2] transition-all duration-300 group"
                title="Share on Facebook"
            >
                <Facebook size={14} className="group-hover:scale-110 transition-transform" />
            </button>

            <button
                onClick={() => handleShare('linkedin')}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 group"
                title="Share on LinkedIn"
            >
                <Linkedin size={14} className="group-hover:scale-110 transition-transform" />
            </button>

            <button
                onClick={() => handleShare('email')}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 group"
                title="Share via Email"
            >
                <Mail size={14} className="group-hover:scale-110 transition-transform" />
            </button>

            <button
                onClick={copyToClipboard}
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 group ${copied ? 'bg-green-500 text-white border-green-500' : 'border-gray-200 text-gray-500 hover:bg-black hover:text-white hover:border-black'}`}
                title={copied ? "Copied!" : "Copy Link"}
            >
                {copied ? <Check size={14} /> : <LinkIcon size={14} className="group-hover:scale-110 transition-transform" />}
            </button>
        </div>
    );
}

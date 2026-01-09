import React from 'react';
import Link from 'next/link';
import { Twitter, Facebook, Youtube } from 'lucide-react';

interface Module7Article {
    category: string;
    title: string;
    excerpt: string;
    slug: string;
}

interface Module10Post {
    title: string;
    date: string;
    image: string;
    slug: string;
}

interface FeatureModulesProps {
    module7: {
        title: string;
        subtitle: string;
        articles: Module7Article[];
    };
    module10: {
        title: string;
        subtitle: string;
        editor: {
            name: string;
            posts: string;
            bio: string;
            image: string;
            social: { platform: string; url: string }[];
        };
        recentPosts: Module10Post[];
    };
}

export default function FeatureModules({ module7, module10 }: FeatureModulesProps) {
    return (
        <div className="flex flex-col gap-12 mt-8 w-full">
            {/* Module 7 Section */}
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2 pb-0">
                    <h2 className="text-md font-bold uppercase">
                        <span className="text-red-600">{module7.title}</span>
                        <span className="text-gray-400 ml-2 font-light">{module7.subtitle}</span>
                    </h2>
                    <div className="flex-1 h-[1px] bg-gray-100 mt-1"></div>
                </div>

                <div className="flex flex-col gap-10">
                    {module7.articles.map((article, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            <div className="md:col-span-2">
                                <span className="text-[10px] font-bold uppercase text-black mb-2 block">{article.category}</span>
                                <Link href={`/post/${article.slug}`}>
                                    <h3 className="text-md md:text-lg font-bold font-serif leading-tight hover:underline">
                                        {article.title}
                                    </h3>
                                </Link>
                                <Link href={`/post/${article.slug}`} className="text-[11px] font-bold uppercase mt-4 block hover:text-red-600">
                                    See all Posts →
                                </Link>
                            </div>
                            <div className="md:col-span-3">
                                <p className="text-gray-600 text-[14px] leading-relaxed whitespace-pre-line">
                                    {article.excerpt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Module 10 Section */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                    <h2 className="text-md font-bold uppercase">
                        <span className="text-red-600">{module10.title}</span>
                        <span className="text-gray-400 ml-2 font-light">{module10.subtitle}</span>
                    </h2>
                    <div className="flex-1 h-[1px] bg-gray-100 mt-1"></div>
                </div>

                <div className="bg-[#1a1a1a] p-4 text-white">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-34 h-38 flex-shrink-0">
                            <img
                                src={module10.editor.image}
                                alt={module10.editor.name}
                                className="w-full h-full object-cover filter grayscale"
                            />
                        </div>
                        <div className="flex-1">
                            <span className="text-[10px] font-bold uppercase text-gray-400 mb-2 block">EDITOR</span>
                            <div className="flex items-baseline gap-2 mb-4">
                                <h3 className="text-xl font-bold font-serif">{module10.editor.name}</h3>
                                <span className="text-gray-400 font-serif italic text-sm">{module10.editor.posts}</span>
                            </div>
                            <p className="text-gray-300 text-[14px] leading-relaxed mb-6">
                                {module10.editor.bio}
                            </p>
                            <div className="flex gap-4">
                                {module10.editor.social.map((s, i) => (
                                    <Link key={i} href={s.url} className="text-white hover:text-red-600 transition-colors">
                                        {s.platform === 'twitter' && <Twitter size={18} fill="currentColor" />}
                                        {s.platform === 'facebook' && <Facebook size={18} fill="currentColor" />}
                                        {s.platform === 'youtube' && <Youtube size={18} />}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mt-2 pt-2 border-t border-gray-800">
                        {module10.recentPosts.map((post, index) => (
                            <Link key={index} href={`/post/${post.slug}`} className="group flex gap-4 items-start">
                                <div className="w-20 h-20 flex-shrink-0 bg-gray-800">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover filter grayscale"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[14px] font-bold font-serif leading-snug group-hover:underline">
                                        {post.title}
                                    </h4>
                                    <span className="text-[10px] text-gray-500 mt-2 block">{post.date}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

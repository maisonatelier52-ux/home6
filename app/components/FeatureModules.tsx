import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Facebook, Youtube } from 'lucide-react';
import SidebarHotPeoples from './SidebarHotPeoples';

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
    category: string;
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
    hotPeoples: any[];
}

export default function FeatureModules({ module7, module10, hotPeoples }: FeatureModulesProps) {
    return (
        <div className="flex flex-col lg:flex-row gap-4 w-full mt-8">
            {/* Left Modules (Takes 2/3 width) */}
            <div className="lg:w-2/3 flex flex-col gap-8">
                {/* Module 7 Section */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2 pb-0">
                        <h2 className="text-md font-bold uppercase">
                            <span className="text-red-600">{module7.title}</span>
                            <span className="text-gray-400 ml-2 font-light">{module7.subtitle}</span>
                        </h2>
                        <div className="flex-1 h-[1px] bg-gray-100 mt-1"></div>
                    </div>

                    <div className="flex flex-col gap-6">
                        {module7.articles.map((article, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-300 pb-4">
                                <div className="md:col-span-2">
                                    <span className="text-[10px] font-bold uppercase text-black mb-2 block">{article.category}</span>
                                    <Link href={`/${(article.category || 'news').toLowerCase()}/${article.slug}`} title={article.title}>
                                        <h3 className="text-md md:text-lg text-gray-900 font-bold font-serif leading-tight hover:underline">
                                            {article.title}
                                        </h3>
                                    </Link>
                                    <Link href={`/${(article.category || 'news').toLowerCase()}/`} title={`View all ${article.category} posts`} className="text-[11px] font-bold uppercase mt-4 block hover:text-red-600">
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
                    <div className="flex items-center gap-2 pb-2">
                        <h2 className="text-md font-bold uppercase">
                            <span className="text-red-600">{module10.title}</span>
                            <span className="text-gray-400 ml-2 font-light">{module10.subtitle}</span>
                        </h2>
                        <div className="flex-1 h-[1px] bg-gray-300 mt-1"></div>
                    </div>

                    <div className="bg-[#1a1a1a] p-4 text-white">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-34 h-38 flex-shrink-0 relative w-[136px] h-[152px]">
                                <Image
                                    src={module10.editor.image}
                                    alt={module10.editor.name}
                                    fill
                                    sizes="136px"
                                    className="object-cover filter"
                                />
                            </div>
                            <div className="flex-1">
                                <span className="text-[10px] font-bold uppercase text-gray-400 mb-2 block">EDITOR</span>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <Link href={`/authors#${(module10.editor.name || '').toLowerCase().replace(/\s+/g, '-')}`}>
                                        <h3 className="text-xl font-bold font-serif hover:text-red-600 transition-colors cursor-pointer">
                                            {module10.editor.name}
                                        </h3>
                                    </Link>
                                </div>
                                <p className="text-gray-300 text-[14px] leading-relaxed mb-6">
                                    {module10.editor.bio}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mt-2 pt-2 border-t border-gray-800">
                            {module10.recentPosts.map((post, index) => (
                                <Link key={index} href={`/${(post.category || 'tech').toLowerCase()}/${post.slug}`} title={post.title} className="group flex gap-4 items-start">
                                    <div className="w-20 h-20 flex-shrink-0 bg-gray-800 relative">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            sizes="80px"
                                            className="object-cover filter"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-[14px] font-bold font-serif leading-snug group-hover:underline">
                                            {post.title}
                                        </h3>
                                        <span className="text-[10px] text-gray-500 mt-2 block">{post.date}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Sidebar (Takes 1/3 width) */}
            <div className="lg:w-1/3">
                <div className='md:border-l border-gray-300 pl-0 md:pl-4 h-full'>
                    {/* Advertisement */}
                    <div>
                        <Link href="https://www.venturecapi.com/" className="w-full mb-8 overflow-hidden group cursor-pointer">
                            <img
                                src="/images/adv333.svg"
                                alt="Advertisement"
                                className="w-full h-auto"
                            />
                        </Link>
                    </div>

                    {/* Hot Peoples */}
                    <SidebarHotPeoples items={hotPeoples} />
                </div>
            </div>
        </div>
    );
}

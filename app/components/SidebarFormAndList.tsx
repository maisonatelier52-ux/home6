import React from 'react';
import SidebarArticleList from './SidebarArticleList';

interface ModuleItem {
    id: number;
    date: string;
    title: string;
}

interface SidebarFormAndListProps {
    moduleData: {
        moduleTitle: { red: string; rest: string };
        description: string;
        items: ModuleItem[];
        articleList?: {
            title: { red: string; rest: string };
            articles: any[];
        };
    };
    hotPeoples?: any[];
}

export default function SidebarFormAndList({ moduleData, hotPeoples }: SidebarFormAndListProps) {
    return (
        <div className="w-full flex flex-col gap-8">

            {/* 1. Contact Form */}
            <div className="bg-[#f0f0f0] p-5">
                <form className="flex flex-col gap-4">
                    <div>
                        <label className="block text-[#888888] text-sm mb-0">Your name</label>
                        <input
                            type="text"
                            className="w-full bg-[#e6e6e6] border-none h-8 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-300"
                        />
                    </div>
                    <div>
                        <label className="block text-[#888888] text-sm mb-0">Your email</label>
                        <input
                            type="email"
                            className="w-full bg-[#e6e6e6] border-none h-8 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-300"
                        />
                    </div>
                    <div>
                        <label className="block text-[#888888] text-sm mb-0">Subject</label>
                        <input
                            type="text"
                            className="w-full bg-[#e6e6e6] border-none h-8 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-300"
                        />
                    </div>
                    <div>
                        <label className="block text-[#888888] text-sm mb-0">Your message (optional)</label>
                        <textarea
                            rows={6}
                            className="w-full bg-[#e6e6e6] border-none p-3 text-gray-700 resize-none focus:outline-none focus:ring-1 focus:ring-gray-300 relative"
                        />
                        {/* The little resize handle icon is typically standard browser behavior or custom, ignoring for now as standard textarea usually has it */}
                    </div>

                    <button
                        type="submit"
                        className="bg-[#1a1a1a] text-white py-1 px-6 text-sm font-medium hover:bg-black transition-colors w-full mt-0"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* 2. Module Enambelas */}
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-sm font-bold ">
                        <span className="text-red-600">{moduleData.moduleTitle.red}</span>
                        <span className="text-gray-600 ml-1 uppercase">{moduleData.moduleTitle.rest}</span>
                    </h2>
                    <div className="flex-1 h-[1px] bg-gray-200 mt-1"></div>
                </div>

                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {moduleData.description}
                </p>

                <div className="relative border-l border-gray-300 ml-1 pl-6 space-y-6">
                    {moduleData.items.map((item) => (
                        <div key={item.id} className="relative">
                            {/* Red Dot on Timeline */}
                            <div className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#e43b3b] ring-4 ring-white"></div>

                            <div className="flex flex-col">
                                <span className="text-gray-400 text-xs mb-1">{item.date}</span>
                                <h4 className="text-gray-800 font-bold leading-snug hover:text-[#e43b3b] cursor-pointer transition-colors">
                                    {item.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. Article List Module (from image) */}
            {moduleData.articleList && (
                <SidebarArticleList
                    title={moduleData.articleList.title}
                    articles={moduleData.articleList.articles}
                />
            )}



        </div>
    );
}

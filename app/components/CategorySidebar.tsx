import React from 'react';

export default function CategorySidebar() {
    return (
        <div className="flex flex-col gap-10">
            <SearchBar />
            <RecentPosts />
            <AdvHere />
            <TagCloud />
        </div>
    );
}

function SearchBar() {
    return (
        <div className="flex w-full">
            <input
                type="text"
                className="flex-1 border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-gray-500"
            />
            <button className="bg-[#1a1a1a] text-white px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-black transition-colors">
                Search
            </button>
        </div>
    );
}

function RecentPosts() {
    const posts = [
        "Incongruous jeepers jellyfish one far Well known",
        "This nudged jeepers while much the less",
        "This nudged jeepers ded sesulky oite ten around style3",
        "Timmediately quail was inverse much so remade dimly salmon"
    ];

    return (
        <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6 border-b border-gray-100 pb-2">
                RECENT POST
            </h3>
            <ul className="flex flex-col gap-4">
                {posts.map((post, i) => (
                    <li key={i} className="flex gap-2 group cursor-pointer border-b border-gray-50 pb-3 last:border-none">
                        <span className="text-gray-600 font-serif leading-tight">»</span>
                        <span className="text-[13px] font-bold text-gray-800 leading-tight group-hover:underline transition-all">
                            {post}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function AdvHere() {
    return (
        <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6 border-b border-gray-100 pb-2">
                ADV HERE
            </h3>
            <div className="bg-gray-100 w-full aspect-[4/5] flex items-center justify-center overflow-hidden">
                <img
                    src="/ad_placeholder.png"
                    alt="Advertisement"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

function TagCloud() {
    const tags = [
        "Art and Culture", "best", "Best theme", "brunch", "Business",
        "Entertainment", "Magazine", "Mother Nature", "Musical",
        "NewsCommerce", "Newspaper"
    ];

    return (
        <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6 border-b border-gray-100 pb-2">
                TAG
            </h3>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                    <button key={i} className="px-3 py-1.5 border border-gray-300 text-[11px] font-bold text-gray-600 hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all duration-200 uppercase tracking-tighter">
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}

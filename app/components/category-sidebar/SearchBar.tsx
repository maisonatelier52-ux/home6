import React from 'react';

export default function SearchBar() {
    return (
        <div className="flex w-full">
            <input
                type="text"
                className="flex-1 border border-gray-300 px-4 py-2 text-xs focus:outline-none focus:border-gray-500"
            />
            <button className="bg-[#1a1a1a] text-white px-3 py-2 text-xs  tracking-widest hover:bg-black transition-colors">
                Search
            </button>
        </div>
    );
}

import React from 'react';
import SearchBar from './category-sidebar/SearchBar';
import RecentPosts from './category-sidebar/RecentPosts';
import AdvHere from './category-sidebar/AdvHere';
import TagCloud from './category-sidebar/TagCloud';

interface CategorySidebarProps {
    recentPosts?: Array<{ title: string; slug: string }>;
    tags?: string[];
}

export default function CategorySidebar({ recentPosts = [], tags = [] }: CategorySidebarProps) {
    return (
        <div className="flex flex-col gap-10">
            <SearchBar />
            <RecentPosts posts={recentPosts} />
            <AdvHere />
            <TagCloud tags={tags} />
        </div>
    );
}

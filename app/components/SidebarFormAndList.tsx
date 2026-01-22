import Link from 'next/link';
import SidebarArticleList from './SidebarArticleList';

interface ModuleItem {
    id: string;
    date: string;
    title: string;
    slug?: string;
    category?: string;
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


            {/* 1. Advertisement */}
            <div className="w-full overflow-hidden group cursor-pointer">
                <img
                    src="/images/add3-svg.svg"
                    alt="Advertisement"
                    className="w-full h-auto"
                />
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
                                {item.slug ? (
                                    <Link href={`/${(item.category || 'news').toLowerCase()}/${item.slug}`} title={item.title}>
                                        <h3 className="text-gray-800 font-bold leading-snug hover:text-[#e43b3b] transition-colors cursor-pointer">
                                            {item.title}
                                        </h3>
                                    </Link>
                                ) : (
                                    <h3 className="text-gray-800 font-bold leading-snug hover:text-[#e43b3b] transition-colors">
                                        {item.title}
                                    </h3>
                                )}
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

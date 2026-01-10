import Link from 'next/link';
import ColHeroArticle from './ColHeroArticle';
import SportNewsCol from './SportNewsCol';
import CoronaCultureCol from './CoronaCultureCol';
import Module15 from './Module15';
import HotWeekTopPeoples from './HotWeekTopPeoples';

interface NewsSectionThreeColsProps {
    data: {
        hero: any;
        sportNews: any;
        coronavirus: any;
        culture: any;
        module15: any;
        hotWeek: any;
    };
}

export default function NewsSectionThreeCols({ data }: NewsSectionThreeColsProps) {
    return (
        <section className="w-full bg-white border-b border-gray-300">
            <div className="container mx-auto px-4 md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    {/* First Column (2/4 width) */}
                    <div className="lg:col-span-6 md:border-r border-gray-300 pr-0 md:pr-4">
                        <ColHeroArticle data={data.hero} />
                        <div className="mt-12 pt-8 border-t border-gray-300">
                            <Module15
                                title={data.module15.title}
                                description={data.module15.description}
                                articles={data.module15.articles}
                            />
                        </div>
                    </div>

                    {/* Second Column (1/4 width) */}
                    <div className="lg:col-span-3 md:border-r border-gray-300 pr-0 md:pr-10">
                        <SportNewsCol
                            title={data.sportNews.title}
                            articles={data.sportNews.articles}
                        />
                        <div className="mt-8 pt-8 border-t border-gray-300">
                            <HotWeekTopPeoples
                                title={data.hotWeek.title}
                                articles={data.hotWeek.articles}
                            />
                        </div>
                    </div>

                    {/* Third Column (1/4 width) */}
                    <div className="lg:col-span-3">
                        <CoronaCultureCol
                            coroData={data.coronavirus}
                            cultureData={data.culture}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import ColHeroArticle from './ColHeroArticle';
import SportNewsCol from './SportNewsCol';
import CoronaCultureCol from './CoronaCultureCol';

interface NewsSectionThreeColsProps {
    data: {
        hero: any;
        sportNews: any;
        coronavirus: any;
        culture: any;
    };
}

export default function NewsSectionThreeCols({ data }: NewsSectionThreeColsProps) {
    return (
        <section className="w-full bg-white py-6">
            <div className="container mx-auto px-4 md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    {/* First Column (2/4 width) */}
                    <div className="lg:col-span-6 border-r border-gray-300 pr-0 md:pr-4">
                        <ColHeroArticle data={data.hero} />
                    </div>

                    {/* Second Column (1/4 width) */}
                    <div className="lg:col-span-3 border-r border-gray-300 pr-0 md:pr-10">
                        <SportNewsCol
                            title={data.sportNews.title}
                            articles={data.sportNews.articles}
                        />
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

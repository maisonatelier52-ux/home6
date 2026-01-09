import React from 'react';
import FeatureHomePart from './FeatureHomePart';
import SidebarFormAndList from './SidebarFormAndList';

interface FeatureWithSidebarProps {
    hero: any;
    sidebarItems: any[];
    sidebarModuleData: any;
    module7: any;
    module10: any;
    hotPeoples: any[];
}

export default function FeatureWithSidebar({
    hero,
    sidebarItems,
    sidebarModuleData,
    module7,
    module10,
    hotPeoples
}: FeatureWithSidebarProps) {
    return (
        <section className="w-full  border-b border-gray-300 bg-white">
            <div className="container mx-auto px-0 ">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Main Feature Area (Takes 3 columns) */}
                    <div className="lg:col-span-3 pr-4 border-r border-gray-300 py-8">
                        <FeatureHomePart
                            hero={hero}
                            sidebarItems={sidebarItems}
                            module7={module7}
                            module10={module10}
                            hotPeoples={hotPeoples}
                        />
                    </div>

                    {/* Right Sidebar Form/List (Takes 1 column) */}
                    <div className="lg:col-span-1 border-l border-gray-300 pl-4 lg:pl-0 lg:border-none py-8">
                        <SidebarFormAndList
                            moduleData={sidebarModuleData}                           
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

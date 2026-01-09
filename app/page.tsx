import Header from "./components/layout/Header";
import TextNewsGrid from "./components/TextNewsGrid";
import FeatureWithSidebar from "./components/FeatureWithSidebar";
import textNewsData from "@/public/data/homePage/text-news-grid.json";
import featureHomeData from "@/public/data/homePage/feature-home-part.json";
import sidebarModuleData from "@/public/data/homePage/sidebar-module.json";
import module6Data from "@/public/data/homePage/module-6.json";
import threeColData from "@/public/data/homePage/three-col-section.json";
import Module6Carousel from "./components/Module6Carousel";
import NewsSectionThreeCols from "./components/NewsSectionThreeCols";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TextNewsGrid items={textNewsData.textNews} />

      <FeatureWithSidebar
        hero={featureHomeData.hero}
        sidebarItems={featureHomeData.sidebar}
        sidebarModuleData={sidebarModuleData}
        module7={featureHomeData.module7}
        module10={featureHomeData.module10}
        hotPeoples={featureHomeData.hotPeoples}
      />

      <Module6Carousel
        title={module6Data.title}
        articles={module6Data.articles}
      />

      <NewsSectionThreeCols data={threeColData} />

    </div>
  );
}

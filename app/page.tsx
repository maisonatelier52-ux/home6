import { Metadata } from "next";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import TextNewsGrid from "./components/TextNewsGrid";
import FeatureWithSidebar from "./components/FeatureWithSidebar";
import textNewsData from "@/public/data/homePage/text-news-grid.json";
import featureHomeData from "@/public/data/homePage/feature-home-part.json";
import sidebarModuleData from "@/public/data/homePage/sidebar-module.json";
import module6Data from "@/public/data/homePage/module-6.json";
import threeColData from "@/public/data/homePage/three-col-section.json";
import newsV2Data from "@/public/data/homePage/news-section-v2.json";
import newsFiveColData from "@/public/data/homePage/five-col-section.json";
import Module6Carousel from "./components/Module6Carousel";
import NewsSectionThreeCols from "./components/NewsSectionThreeCols";
import NewsSectionV2 from "./components/NewsSectionV2";
import NewsSectionFiveCols from "./components/NewsSectionFiveCols";
import Footer from "./components/layout/Footer";
import StructuredData from "./components/StructuredData";

export const metadata: Metadata = {
  title: "TQFP | Financial News, Market Analysis & Investment Insights",
  description: "Your premier source for global economic analysis, market intelligence, and wealth management strategies. Get expert insights on finance, politics, technology, and business trends.",
  keywords: ["financial news", "market analysis", "investment insights", "economic analysis", "wealth management", "business news", "tech news", "politics"],
  openGraph: {
    title: "TQFP | Financial News & Market Analysis",
    description: "Expert insights on finance, markets, technology, and global economics.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TQFP | Financial News & Market Analysis",
    description: "Expert insights on finance, markets, technology, and global economics.",
  },
};
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData />
      <Header />
      <Navbar />

      <div className="max-w-6xl mx-auto">
        <TextNewsGrid items={textNewsData.textNews} />

        <FeatureWithSidebar
          hero={featureHomeData.hero}
          sidebarItems={featureHomeData.sidebar}
          sidebarModuleData={sidebarModuleData}
          module7={featureHomeData.module7}
          module10={featureHomeData.module10}
          hotPeoples={featureHomeData.hotPeoples}
        />
        <div className="my-6">
          <Module6Carousel
            title={module6Data.title}
            articles={module6Data.articles}
          />
        </div>

        <NewsSectionThreeCols data={threeColData} />

        <NewsSectionV2 data={newsV2Data} />

        <NewsSectionFiveCols data={newsFiveColData} />
      </div>

      <Footer />

    </div>
  );
}

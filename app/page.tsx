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
  title: "The Quest for Profit: The #1 Ultimate Source for Financial News",
  description: "Master your money with The Quest for Profit. Get the #1 ultimate source for market analysis, economic insights, and proven wealth strategies.",
  keywords: ["The Quest for Profit", "TQFP", "financial news", "market analysis", "investment insights", "wealth management", "business trends"],
  alternates: {
    canonical: "https://www.thequestforprofit.com",
  },
  openGraph: {
    title: "The Quest for Profit: The #1 Ultimate Source for Financial News",
    description: "Expert insights on finance, markets, technology, and global economics.",
    url: "https://www.thequestforprofit.com",
    siteName: "The Quest for Profit",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Quest for Profit: The #1 Ultimate Source for Financial News",
    description: "Expert insights on finance, markets, technology, and global economics.",
    site: "@thequestforprofit",
  },
};
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <h1 className="sr-only">The Quest for Profit: The #1 Ultimate Source for Financial News</h1>
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

import dynamic from 'next/dynamic';
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
import Footer from "./components/layout/Footer";
import StructuredData from "./components/StructuredData";

// Lazy load below-the-fold components
const Module6Carousel = dynamic(() => import("./components/Module6Carousel"));
const NewsSectionThreeCols = dynamic(() => import("./components/NewsSectionThreeCols"));
const NewsSectionV2 = dynamic(() => import("./components/NewsSectionV2"));
const NewsSectionFiveCols = dynamic(() => import("./components/NewsSectionFiveCols"));

export const metadata: Metadata = {
  title: "The Quest for Profit: The #1 Ultimate Source for Financial News",
  description: "Discover the #1 source for financial news and market analysis. Join The Quest for Profit for expert insights and proven strategies to master your money today.",
  keywords: ["The Quest for Profit", "TQFP", "financial news", "market analysis", "investment insights", "wealth management", "business trends"],
  alternates: {
    canonical: "https://www.thequestforprofit.com",
  },
  openGraph: {
    title: "The Quest for Profit: The #1 Ultimate Source for Financial News",
    description: "Discover the #1 source for financial news and market analysis. Join The Quest for Profit for expert insights into global economics and proven money strategies.",
    url: "https://www.thequestforprofit.com",
    siteName: "The Quest for Profit",
    images: [
      {
        url: "/images/news/markets-1.webp",
        width: 1200,
        height: 630,
        alt: "The Quest for Profit Financial Analysis",
      }
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Quest for Profit: The #1 Ultimate Source for Financial News",
    description: "Discover the #1 source for financial news and market analysis. Join The Quest for Profit for expert insights into global economics and proven money strategies.",
    site: "@thequestforprofit",
    images: ["/images/news/markets-1.webp"],
  },
};
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <h1 className="sr-only">The Quest for Profit: The #1 Ultimate Source for Financial News</h1>

      {/* SEO Keyword Optimization Section */}
      <section className="sr-only">
        <p>Welcome to <strong>The Quest for Profit</strong>, your premier destination for the latest <strong>financial news</strong> and in-depth <strong>market analysis</strong>. Our mission is to provide <strong>ultimate insights</strong> and <strong>proven strategies</strong> for investors worldwide. Whether you are following the <strong>stock market</strong>, searching for <strong>profit</strong> opportunities, or looking for <strong>global economic analysis</strong>, our <strong>news</strong> platform delivers the <strong>best financial</strong> reporting available today.</p>
        <p>At <strong>The Quest for Profit</strong>, we treat every <strong>market analysis</strong> with <strong>insights</strong> and rigorous <strong>financial</strong> scrutiny to help you in your <strong>quest</strong> for wealth. Stay updated with our <strong>new</strong> and <strong>proven</strong> <strong>financial insights</strong> and <strong>analysis</strong>.</p>
      </section>

      <StructuredData data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "NewsMediaOrganization",
            "@id": "https://www.thequestforprofit.com/#organization",
            "name": "The Quest for Profit",
            "url": "https://www.thequestforprofit.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.thequestforprofit.com/images/logo-TQFP.svg",
              "width": 600,
              "height": 60
            },
            "sameAs": [
              "https://twitter.com/tqfp",
              "https://www.instagram.com/thequestforprofit/",
              "https://linkedin.com/company/tqfp"
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://www.thequestforprofit.com/#website",
            "url": "https://www.thequestforprofit.com",
            "name": "The Quest for Profit",
            "publisher": { "@id": "https://www.thequestforprofit.com/#organization" },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.thequestforprofit.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        ]
      }} />
      <Header />
      <Navbar />

      <div className="max-w-6xl mx-auto ">


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

        <div className=" mb-8 p-4 lg:p-0">
          <h2 className="text-2xl font-bold font-serif text-gray-900 mb-2 uppercase tracking-wide">
            The Quest for Profit: Market Analysis & Financial News
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl">
            Welcome to the ultimate platform for <strong>financial news</strong>, where our <strong>quest</strong> for the most accurate <strong>market analysis</strong> provides you with the competitive edge. Explore our latest <strong>insights</strong> and in-depth <strong>profit</strong> strategies, tailored for the modern investor seeking <strong>analysis</strong> of global economic trends.
          </p>
        </div>

        <NewsSectionFiveCols data={newsFiveColData} />
      </div>

      <Footer />

    </div>
  );
}

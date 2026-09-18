import dynamic from "next/dynamic";
import type { Metadata } from "next";
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
import { getAutomatedHomeData } from "./utils/news";

const Module6Carousel = dynamic(() => import("./components/Module6Carousel"));
const NewsSectionThreeCols = dynamic(() => import("./components/NewsSectionThreeCols"));
const NewsSectionV2 = dynamic(() => import("./components/NewsSectionV2"));
const NewsSectionFiveCols = dynamic(() => import("./components/NewsSectionFiveCols"));

export const metadata: Metadata = {
  title: "The Quest for Profit | Essays, Ideas and Useful Context",
  description:
    "An independent editorial blog exploring markets, business, finance, technology, politics, nature and culture.",
  alternates: { canonical: "https://www.thequestforprofit.com" },
  openGraph: {
    title: "The Quest for Profit | Essays, Ideas and Useful Context",
    description:
      "An independent blog with thoughtful analysis of markets, ideas and public life.",
    url: "https://www.thequestforprofit.com",
    siteName: "The Quest for Profit",
    images: [
      {
        url: "/images/news/markets-1.webp",
        width: 1200,
        height: 630,
        alt: "The Quest for Profit editorial blog",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Quest for Profit | Essays, Ideas and Useful Context",
    description:
      "An independent blog with thoughtful analysis of markets, ideas and public life.",
    images: ["/images/news/markets-1.webp"],
  },
};

export default function Home() {
  const dynamicData = getAutomatedHomeData();
  const featureHome = dynamicData?.featureHome || featureHomeData;
  const sidebarModule = dynamicData?.sidebarModule || sidebarModuleData;

  return (
    <div className="min-h-screen bg-white">
      <h1 className="sr-only">
        The Quest for Profit: Essays, Ideas and Useful Context
      </h1>

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.thequestforprofit.com/#organization",
              name: "The Quest for Profit",
              url: "https://www.thequestforprofit.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.thequestforprofit.com/images/logo-TQFP.svg",
                width: 600,
                height: 60,
              },
              sameAs: [
                "https://twitter.com/tqfp",
                "https://www.instagram.com/thequestforprofit/",
                "https://linkedin.com/company/tqfp",
              ],
            },
            {
              "@type": "Blog",
              "@id": "https://www.thequestforprofit.com/#blog",
              url: "https://www.thequestforprofit.com",
              name: "The Quest for Profit",
              publisher: {
                "@id": "https://www.thequestforprofit.com/#organization",
              },
            },
          ],
        }}
      />

      <Header />
      <Navbar />

      <main id="main-content" className="mx-auto max-w-6xl">
        <TextNewsGrid items={dynamicData?.textNews || textNewsData.textNews} />

        <FeatureWithSidebar
          hero={featureHome.hero}
          sidebarItems={featureHome.sidebar}
          sidebarModuleData={sidebarModule}
          module7={featureHome.module7}
          module10={featureHome.module10}
          hotPeoples={featureHome.hotPeoples}
        />

        <div className="my-6">
          <Module6Carousel
            title={dynamicData?.module6?.title || module6Data.title}
            articles={dynamicData?.module6?.articles || module6Data.articles}
          />
        </div>

        <NewsSectionThreeCols data={dynamicData?.threeCol || threeColData} />
        <NewsSectionV2 data={dynamicData?.newsV2 || newsV2Data} />

        <div className="mb-8 p-4 lg:p-0">
          <h2 className="mb-2 font-serif text-2xl font-bold uppercase tracking-wide text-gray-900">
            The Quest for Profit: Essays, Analysis &amp; Useful Context
          </h2>
          <p className="max-w-4xl leading-relaxed text-gray-600">
            Explore independent essays and analysis across markets, business,
            finance, technology and public life. Each post is written to add
            context, identify the evidence and explain why the subject matters.
          </p>
        </div>

        <NewsSectionFiveCols
          data={dynamicData?.newsFiveCol || newsFiveColData}
        />
      </main>

      <Footer />
    </div>
  );
}

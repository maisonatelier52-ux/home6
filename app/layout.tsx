import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thequestforprofit.com'),
  title: {
    default: "The Quest for Profit | Financial Insights & Market Analysis",
    template: "%s | The Quest for Profit"
  },
  description: "Your ultimate destination for business, finance, and wealth management insights. High-authority news for the modern investor.",
  keywords: ["The Quest for Profit", "TQFP", "financial news", "market analysis", "investment", "business", "finance", "wealth management"],
  authors: [{ name: "The Quest for Profit Editorial Team" }],
  creator: "The Quest for Profit",
  publisher: "The Quest for Profit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/favicon-TQFP2.svg",
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.thequestforprofit.com',
    siteName: 'The Quest for Profit',
    title: 'The Quest for Profit | Financial Insights & Market Analysis',
    description: 'Your ultimate destination for business, finance, and wealth management insights.',
    images: [
      {
        url: '/images/news/markets-1.webp',
        width: 1200,
        height: 630,
        alt: 'The Quest for Profit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Quest for Profit | Financial Insights & Market Analysis',
    description: 'Your ultimate destination for business, finance, and wealth management insights.',
    creator: '@thequestforprofit',
    images: ['/images/news/markets-1.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'IxXuwusxSuAshz73Q5eNTi4-XfSDRLA_v3O9BKUGFi8',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

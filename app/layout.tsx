import type { Metadata } from "next";
import "./globals.css";
const geistSans = { variable: "font-sans" };
const geistMono = { variable: "font-mono" };

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thequestforprofit.com'),
  title: {
    default: "The Quest for Profit | Essays, Ideas and Useful Context",
    template: "%s | The Quest for Profit"
  },
  description: "An independent editorial blog exploring markets, business, finance, technology, politics, nature and culture.",
  keywords: ["The Quest for Profit", "TQFP", "financial blog", "market analysis", "essays", "business", "finance", "technology"],
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
    title: 'The Quest for Profit | Essays, Ideas and Useful Context',
    description: 'An independent blog with thoughtful analysis of markets, ideas and public life.',
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
    title: 'The Quest for Profit | Essays, Ideas and Useful Context',
    description: 'An independent blog with thoughtful analysis of markets, ideas and public life.',
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
    google: '6bsEyutmbJm7aN4Kh12NhDe_zpk0BpjDhn_2BlG59OU',
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

import "./global.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { montserrat } from "./lib/fonts";
import { Navbar } from "@/app/components/nav";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "eduard lupu",
    template: "%s | eduard lupu",
  },
  description:
    "eduard lupu is a software engineer building data-rich tools for the music industry and beyond.",
  keywords: [
    "eduard lupu",
    "software engineer",
    "portfolio",
    "music technology",
    "next.js developer",
    "data engineering",
    "cluj-napoca",
    "eduard adrian lupu",
    "adrian lupu",
    "programator",
    "ubb",
  ],
  authors: [
    {
      name: "eduard lupu",
      url: baseUrl,
    },
  ],
  creator: "eduard lupu",
  publisher: "eduard lupu",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "eduard lupu",
    description:
      "eduard lupu is a software engineer building data-rich tools for the music industry and beyond.",
    url: baseUrl,
    siteName: "eduard lupu",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/favicon-96x96.png`,
        width: 96,
        height: 96,
        alt: "eduard lupu logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eduard lupu",
    description:
      "Software engineer focused on the intersection of software, data, and the music industry.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className} suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="eduard lupu" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "eduard lupu",
              url: baseUrl,
              image: `${baseUrl}/favicon-96x96.png`,
              jobTitle: "Software Engineer",
              description:
                "Software engineer building data-rich tools for the music industry and beyond.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cluj-Napoca",
                addressCountry: "RO",
              },
              sameAs: [
                "https://github.com/EduardLupu",
                "https://www.linkedin.com/in/eduard-lupu/",
                "https://www.facebook.com/eduard.adrian.lupu",
                "https://www.instagram.com/edi.lupu/",
                "https://www.tiktok.com/@edi.lupu",
                "https://open.spotify.com/user/4du8lsn1mzt54xlh66ajmvont",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased bg-background text-foreground transition-colors overflow-y-scroll">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <div className="mx-auto w-full max-w-4xl flex-1 px-6">
              <Navbar />
              <main className="py-8">{children}</main>
              <Footer />
            </div>
          </div>
        </Providers>
        <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      </body>
    </html>
  );
}

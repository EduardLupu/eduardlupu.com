import "./global.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { montserrat } from "./lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "eduard lupu",
    template: "%s | portfolio",
  },
  description:
    "eduard lupu`s page. he is a developer who loves working with anything related to music industry.",
  openGraph: {
    title: "eduard lupu",
    description:
      "eduard lupu`s page. he is a developer who loves working with anything related to music industry.",
    url: baseUrl,
    siteName: "eduard lupu",
    locale: "en_US",
    type: "website",
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
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },

      // Apple icons
      {
        rel: "apple-touch-icon",
        url: "/apple-icon.png",
        sizes: "unknown",
        type: "image/png",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        rel: "apple-icon-precomposed",
        url: "/apple-icon-precomposed.png",
        sizes: "unknown",
        type: "image/png",
      },

      // Favicons
      {
        rel: "icon",
        url: "/favicon.ico",
        sizes: "unknown",
        type: "image/x-icon",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },

      // Microsoft icons
      {
        rel: "icon",
        url: "/ms-icon-70x70.png",
        sizes: "70x70",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/ms-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/ms-icon-150x150.png",
        sizes: "150x150",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/ms-icon-310x310.png",
        sizes: "310x310",
        type: "image/png",
      },
    ],
    shortcut: { url: "/favicon.ico" },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        montserrat.className,
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    </html>
  );
}

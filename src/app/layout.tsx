import "./global.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { montserrat } from "./lib/fonts";
import { SpotifyProvider } from "../contexts/currently-playing-context";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "eduard lupu",
    template: "%s | eduard lupu",
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
      <body
        className="antialiased max-w-xl mx-4 mt-6 lg:mx-auto
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none]:hidden [scrollbar-width:none]:hidden
      "
      >
        <SpotifyProvider>
          <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0 min-h-[96vh]">
            <Navbar />
            {children}
            <Footer />
          </main>
        </SpotifyProvider>
      </body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    </html>
  );
}

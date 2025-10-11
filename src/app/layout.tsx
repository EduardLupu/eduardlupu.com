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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground transition-colors">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <div className="mx-auto w-full max-w-4xl flex-1 px-4">
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

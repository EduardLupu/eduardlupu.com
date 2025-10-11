"use client";

import { ThemeProvider } from "next-themes";
import { SpotifyProvider } from "@/contexts/currently-playing-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      <SpotifyProvider>{children}</SpotifyProvider>
    </ThemeProvider>
  );
}

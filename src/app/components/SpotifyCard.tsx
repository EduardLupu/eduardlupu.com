// components/SpotifyCard.tsx
"use client";

import { motion } from "framer-motion";
import { Music2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSpotify } from "@/contexts/currently-playing-context";

export type SpotifyCardProps = {
  className?: string;
  compactOnMobile?: boolean;
};

export default function SpotifyCard({
  className,
  compactOnMobile = true,
}: SpotifyCardProps) {
  const { isPlaying, title, artist, albumImageUrl, songUrl, explicit } =
    useSpotify();

  return (
    <div
      className={cn(
        "relative group",
        "rounded-2xl p-[1px]",
        "bg-gradient-to-br from-emerald-400/15 via-emerald-500/10 to-emerald-300/15 dark:from-emerald-400/60 dark:via-emerald-500/30 dark:to-emerald-300/60",
        "shadow-[0_0_0_1px_rgba(16,185,129,0.08),0_8px_24px_rgba(16,185,129,0.08)] dark:shadow-[0_0_0_1px_rgba(16,185,129,0.15),0_8px_30px_rgba(16,185,129,0.15)]",
        className,
      )}
    >
      <div
        className={cn(
          // Use theme tokens for surfaces so it blends with your light/dark toggler
          "rounded-2xl backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/80",
          "border border-border",
          compactOnMobile
            ? "flex items-center gap-4 sm:gap-5 p-3 sm:p-4"
            : "p-4 sm:p-5",
        )}
      >
        {/* Cover */}
        <div
          className={cn(
            "relative shrink-0",
            compactOnMobile
              ? "w-14 h-14 sm:w-16 sm:h-16"
              : "w-16 h-16 sm:w-20 sm:h-20",
          )}
        >
          {albumImageUrl ? (
            <img
              src={albumImageUrl}
              alt="Album cover"
              className="rounded-xl object-cover w-full h-full"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="w-full h-full rounded-xl bg-muted flex items-center justify-center">
              <Music2 className="h-6 w-6 opacity-60" />
            </div>
          )}

          {/* Live glow ring when playing */}
          {isPlaying && (
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -inset-1 rounded-[14px] bg-emerald-400/20 dark:bg-emerald-400/30 blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            />
          )}
        </div>

        {/* Text + meta */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <LiveEQ isPlaying={isPlaying} />
            <span className="text-xs uppercase tracking-wide text-emerald-600/90 dark:text-emerald-500/90">
              {isPlaying ? "now playing" : "recently played"}
            </span>
          </div>

          <a
            href={songUrl || undefined}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "group/title inline-flex items-center gap-1 max-w-full",
              songUrl
                ? "hover:underline underline-offset-4"
                : "pointer-events-none",
            )}
            title={title || "Spotify"}
            aria-label={title ? `Open ${title} on Spotify` : "Open on Spotify"}
          >
            <h3 className="font-semibold text-foreground text-sm sm:text-base truncate">
              {title || "Spotify"}
            </h3>
          </a>

          {/* Artist row + Explicit badge */}
          <div className="flex items-center gap-2 mt-0.5 min-w-0">
            {explicit && <ExplicitBadge />}
            <p className="text-xs sm:text-sm text-muted-foreground truncate">
              {artist || ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LiveEQ({ isPlaying }: { isPlaying: boolean }) {
  const bars = [6, 10, 8, 12];
  return (
    <div className="flex items-end gap-[3px] h-3.5" aria-hidden>
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-sm bg-emerald-600/80 dark:bg-emerald-400/80"
          style={{ height: h }}
          animate={{ height: isPlaying ? [6, h, 4, h * 0.6, h] : h }}
          transition={{
            duration: 1 + i * 0.15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function ExplicitBadge() {
  // Uses theme tokens so it always contrasts: foreground on background.
  return (
    <span
      title="Explicit"
      aria-label="Explicit"
      className={cn(
        "inline-flex items-center justify-center select-none",
        "h-4 min-w-4 px-1 rounded-[3px] text-[10px] font-semibold leading-none",
        // Foreground on background guarantees contrast in both themes
        "bg-foreground text-background",
        // Subtle border to match the UI
        "border border-foreground/20",
        // Keep it slightly muted so it doesn't overpower
        "opacity-90",
      )}
    >
      E
    </span>
  );
}

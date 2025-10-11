"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const pseudoRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const sparkles = Array.from({ length: 36 }, (_, index) => {
  const top = pseudoRandom(index + 1) * 100;
  const left = pseudoRandom(index + 41) * 100;
  const size = 2 + pseudoRandom(index + 101) * 4;
  const delay = pseudoRandom(index + 151) * 6;

  return {
    id: index,
    style: {
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
    },
    delay,
  };
});

const pathSet = Array.from({ length: 22 }, (_, index) => {
  const offset = index * 18;

  return {
    id: index,
    d: `M${-360 + offset} ${-220 - offset * 0.3} C ${
      -180 + offset * 0.4
    } ${-140 - offset * 0.8} ${220 - offset * 0.2} ${
      220 + offset * 0.6
    } ${560 - offset * 0.3} ${260 + offset * 0.45}`,
    strokeWidth: 0.45 + index * 0.045,
    opacity: 0.04 + index * 0.02,
    duration: 28 + index * 1.4,
  };
});

function SwirlPaths({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <motion.svg
      aria-hidden="true"
      className="absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 text-sky-600/45 opacity-80 dark:text-sky-300/25"
      viewBox="-420 -320 1280 960"
      fill="none"
      style={{ scaleX: mirrored ? -1 : 1, transformOrigin: "50% 50%" }}
      initial={{ rotate: mirrored ? 210 : 0, opacity: 0.72 }}
      animate={{ rotate: mirrored ? 360 : 140, opacity: [0.6, 0.85, 0.6] }}
      transition={{
        duration: 65,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <title>Animated flowing lines</title>
      {pathSet.map((path) => (
        <motion.path
          key={`${mirrored ? "mirrored" : "default"}-${path.id}`}
          d={path.d}
          stroke="currentColor"
          strokeWidth={path.strokeWidth}
          strokeOpacity={path.opacity}
          initial={{ pathLength: 0.4, opacity: 0.4 }}
          animate={{
            pathLength: 1,
            pathOffset: [0, 1, 0],
            opacity: [0.4, 0.75, 0.4],
          }}
          transition={{
            duration: path.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.svg>
  );
}

type LandingBackgroundProps = {
  variant?: "page" | "layout";
  className?: string;
};

export function LandingBackground({
  variant = "page",
  className,
}: LandingBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none inset-0 overflow-hidden",
        variant === "layout" ? "fixed -z-30" : "absolute -z-10",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/80 via-sky-50/20 to-indigo-100/60 dark:from-transparent dark:via-transparent dark:to-transparent" />
      <motion.div
        className="absolute -top-32 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.52),rgba(14,165,233,0.32),transparent_70%)] blur-3xl dark:bg-[radial-gradient(circle_at_30%_30%,rgba(129,140,248,0.4),rgba(236,72,153,0.24),transparent_70%)]"
        initial={{ opacity: 0.5, scale: 0.85 }}
        animate={{
          opacity: [0.45, 0.75, 0.5],
          scale: [0.95, 1.05, 0.9],
          x: [-40, 20, -30],
          y: [0, 30, -20],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[-15%] top-40 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.38),rgba(14,165,233,0.28),transparent_70%)] blur-3xl dark:bg-[radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.35),rgba(34,197,94,0.22),transparent_75%)]"
        initial={{ opacity: 0.45, scale: 0.8 }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [0.85, 1.05, 0.9],
          x: [0, -60, 10],
          y: [0, -40, 20],
        }}
        transition={{
          duration: 36,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[-20%] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_40%_70%,rgba(14,116,144,0.34),rgba(8,47,73,0.28),transparent_70%)] blur-3xl dark:bg-[radial-gradient(circle_at_40%_70%,rgba(45,212,191,0.3),rgba(59,130,246,0.28),transparent_75%)]"
        initial={{ opacity: 0.35, scale: 0.85 }}
        animate={{
          opacity: [0.35, 0.65, 0.35],
          scale: [0.8, 1.1, 0.85],
          x: [0, 40, -20],
          y: [0, 20, -20],
        }}
        transition={{
          duration: 40,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <SwirlPaths />
      <SwirlPaths mirrored />

      <div className="absolute inset-0">
        {sparkles.map((sparkle) => (
          <motion.span
            key={sparkle.id}
            className="absolute rounded-full bg-sky-400/70 blur-[2px] shadow-[0_0_14px_rgba(59,130,246,0.6)] dark:bg-white/50 dark:shadow-[0_0_14px_rgba(148,163,184,0.6)]"
            style={sparkle.style}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.6, 0.1], scale: [0.8, 1.15, 0.75] }}
            transition={{
              duration: 3 + sparkle.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: sparkle.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}

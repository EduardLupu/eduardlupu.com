import Link from "next/link";
import { ArrowRight, Compass, Home } from "lucide-react";

import { LandingBackground } from "@/app/background";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-background/70 p-10 text-center shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:p-14 md:p-20">
      <LandingBackground variant="page" className="-inset-16 opacity-80" />
      <GridPattern
        width={48}
        height={48}
        strokeDasharray="14 10"
        className="absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)] dark:opacity-40"
      />
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-8">
        <span className="inline-flex items-center rounded-full border border-border/70 bg-background/80 px-4 py-1 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground/80 shadow-sm">
          Lost in the waveform
        </span>
        <div className="space-y-3">
          <h1 className="text-5xl font-semibold tracking-tighter text-foreground sm:text-6xl md:text-7xl">
            404
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            the track you&apos;re looking for doesn&apos;t exist—or it
            hasn&apos;t dropped yet.
          </p>
        </div>
        <div className="grid w-full gap-3 sm:grid-cols-2">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:shadow-lg hover:shadow-foreground/20"
          >
            <Home className="h-4 w-4 opacity-80 transition-transform group-hover:-translate-x-0.5" />
            Back to home
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/blog"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-border/70 bg-background/80 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-foreground/60 hover:text-foreground"
          >
            <Compass className="h-4 w-4 opacity-80 transition-transform group-hover:rotate-6" />
            Explore the blog
          </Link>
        </div>
        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/70">
          404 — This page was never deployed to production.
        </p>
      </div>
    </section>
  );
}

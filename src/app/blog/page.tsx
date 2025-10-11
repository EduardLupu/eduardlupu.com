import { BlogPosts } from "src/app/components/posts";
import { LandingBackground } from "@/app/background";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function Page() {
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
          the posts nobody reads
        </span>
        <BlogPosts />
      </div>
    </section>
  );
}

"use client";
import Badge from "./components/badge";
import SpotifyCard from "@/app/components/SpotifyCard";

export default function Page() {
  return (
    <section>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-8 tracking-tight">
        <div className="flex flex-col gap-3">
          <h1 className="text-[42px] font-bold text-foreground leading-none">
            eduard lupu
          </h1>
          <p className="text-sm text-muted-foreground">
            software engineer @{" "}
            <Badge href={"https://kingfisher.com/"}>Kingfisher</Badge>
          </p>
          <p className="text-sm text-muted-foreground">
            MSc in software engineering @{" "}
            <Badge href={"https://www.ubbcluj.ro/en/"}>BBU</Badge>
          </p>
        </div>

        <div className="md:w-[420px] lg:w-[460px] self-stretch md:self-auto">
          <SpotifyCard />
        </div>
      </div>

      <section className="space-y-12 mt-8">
        <div>
          <h1 className="mb-4 text-2xl font-bold text-foreground">
            @ Kingfisher
          </h1>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              currently working on the backend of various microservices,
              primarily using Kotlin, to power the Kingfisher Marketplace. 🛠️
            </p>
            <p className="text-muted-foreground">
              the Marketplace is a platform within Kingfisher's ecosystem that
              allows external vendors to list and sell their products directly
              on Kingfisher's online stores, integrating them into the shopping
              experience across multiple Kingfisher banners. 🛍️
            </p>
          </div>
        </div>

        <div>
          <h1 className="mb-4 text-2xl font-bold text-foreground">
            @ BitStone
          </h1>
          <p className="text-muted-foreground">
            worked on a closed-source music project as a full-stack developer.
            the stack included Node.js and Next.js, and the project involved
            gathering music data from platforms like TikTok, Shazam, Spotify,
            and Instagram for our clients. 🎶
          </p>
        </div>

        <div>
          <h1 className="mb-4 text-2xl font-bold text-foreground">
            questions?
          </h1>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              if you're into music, tech, and data, feel free to reach out!
            </p>
            <p className="text-muted-foreground">
              you can find all my contact links in the footer.
            </p>
            <p className="text-muted-foreground">
              prefer to stay anonymous? reach me on{" "}
              <a
                href="https://t.me/luckytoef"
                rel="noopener"
                target="_blank"
                className="underline underline-offset-4 text-foreground hover:text-muted-foreground"
              >
                t.me/luckytoef
              </a>
              .
            </p>
            <p className="text-muted-foreground">
              curious about my professional experience? check out my{" "}
              <a
                href="https://eduardlupu.com/resume.pdf"
                rel="noreferrer"
                target="_blank"
                className="underline underline-offset-4 text-foreground hover:text-muted-foreground"
              >
                résumé
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

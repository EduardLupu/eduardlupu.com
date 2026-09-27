"use client";

import SpotifyCard from "@/app/components/SpotifyCard";
import { LandingBackground } from "@/app/background";

import { ExternalLink } from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";

type Experience = {
  company: string;
  period: string;
  url: string;
  highlights: string[];
};

const experiences: Experience[] = [
  {
    company: "FanDuel",
    period: "feb 2025 — present",
    url: "https://fanduel.com/",
    highlights: [
      "fullstack dev on the generosity team - building promos, rewards, and loyalty that make players feel valued",
      "next.js • node bff • typescript",
    ],
  },
  {
    company: "Kingfisher",
    period: "dec 2024 — feb 2025",
    url: "https://kingfisher.com/",
    highlights: [
      "writing backend for marketplace microservices used by B&Q and Castorama",
      "kotlin • spring boot • kafka • postgresql • dynamodb • docker • aws",
    ],
  },
  {
    company: "BitStone",
    period: "jul 2023 — dec 2024",
    url: "https://bitstone.com/",
    highlights: [
      "worked on a scouting platform for Universal Music",
      "turned noisy music data from TikTok, Shazam, Apple, etc. into quick reads for a&r teams.",
      "node.js • next.js • mysql • aws • sequelize • docker",
    ],
  },
  {
    company: "Bitdefender",
    period: "feb 2022 — jun 2022",
    url: "https://bitdefender.com/",
    highlights: [
      "recreated exploits — buffer overflow, DLL hijacking, ROP — to validate protections",
      "c • c++ • win32 api",
    ],
  },
];

type Project = {
  name: string;
  period: string;
  url: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    name: "world's top artists",
    period: "sep 2024 — present",
    url: "https://music.eduardlupu.com/",
    highlights: [
      "daily tracker and visualizer for the top artists, with insights, charts, maps, and a 3d relationship graph",
      "python • github actions • next.js • tailwind • github pages • three.js • d3.js",
    ],
  },
  {
    name: "studio pill",
    period: "aug 2024 — present",
    url: "https://studiopill.com/",
    highlights: [
      "website for an architecture studio; responsive, accessible, seo-minded",
      "next.js • typescript • tailwindcss • github pages",
    ],
  },
  {
    name: "depmod",
    period: "may 2026 - jul 2026",
    url: "https://github.com/EduardLupu/depmod",
    highlights: [
      "static import-graph interactive explorer for TypeScript & JavaScript projects. see the shape of your codebase",
      "frontend • graphs • javascript • nextjs • typescript • vizualisation • cytoscape • three.js • d3.js",
    ],
  },
  {
    name: "cnas ocr",
    period: "oct 2025 - dec 2025",
    url: "https://github.com/EduardLupu/medical-certificate",
    highlights: [
      "ocr pipeline that turns scanned CNAS medical certificates into structured data via ROI-based OCR, with per-field confidence scoring and review flags",
      "image-processing • ocr • python3 • streamlit • opencv • pandas",
    ],
  },
  {
    name: "notes",
    period: "nov 2024",
    url: "https://github.com/EduardLupu/notes",
    highlights: [
      "ios notes — inspired app: native (kotlin) and cross-platform (flutter); offline, folders, search, edit",
      "java • spring boot (server) • kotlin • flutter • dart",
    ],
  },
  {
    name: "shop — front-end & back-end",
    period: "aug 2023",
    url: "https://github.com/EduardLupu/shop",
    highlights: [
      "full-stack shop with react + node; carts, auth, product flows",
      "react • redux • rtk query • node.js • typescript • mongoose • mongodb",
    ],
  },
];

const nowHighlights = [
  "taking a small break from uni after finishing MSc in SWE @ Babeș-Bolyai University",
  "enjoying building, web scraping, aggregating data across platforms, reverse-engineering, automating",
  "music — data-led tools, integrations, insights, recommendations; listening to ’80s, ’90s, and ’00s",
  "📍 cluj-napoca • romania",
];

const contactLinks = [
  {
    href: "https://github.com/EduardLupu",
    label: "github",
  },
  {
    href: "https://www.linkedin.com/in/eduard-lupu/",
    label: "linkedin",
  },
  {
    href: "mailto:lupu.eduard.adrian@gmail.com",
    label: "email",
  },
  {
    href: "https://www.facebook.com/eduard.adrian.lupu",
    label: "facebook",
  },
  {
    href: "https://www.instagram.com/edi.lupu/",
    label: "instagram",
  },
  {
    href: "https://www.tiktok.com/@edi.lupu",
    label: "tiktok",
  },
  {
    href: "https://open.spotify.com/user/4du8lsn1mzt54xlh66ajmvont",
    label: "spotify",
  },
  {
    href: "https://eduardlupu.com/resume.pdf",
    label: "résumé",
  },
];

export default function Page() {
  return (
    <div className="relative pb-16 pt-4 md:pt-6">
      <LandingBackground variant="layout" />
      <section className="relative z-10 space-y-16">
        <header className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div className="space-y-9">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                software engineer
              </p>
              <h1 className="whitespace-nowrap leading-none tracking-[-0.02em] text-4xl sm:text-5xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 drop-shadow-sm">
                eduard lupu
              </h1>
            </div>
          </div>
          <div className="space-y-3">
            <SpotifyCard />
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-background/80 p-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              now
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {nowHighlights.map((highlight) => (
                <li key={highlight} className="leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-border bg-background/80 p-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              elsewhere
            </h2>
            <GridPattern
              width={32}
              height={32}
              strokeDasharray="12 10 6 10"
              className="pointer-events-none absolute inset-0 -z-10 fill-transparent stroke-border/60 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
            />
            <ul className="mt-4 grid grid-cols-2 items-center gap-8 text-sm text-muted-foreground md:grid-cols-2">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-muted-foreground"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                    <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover/title:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              featured experience
            </p>
          </div>

         <div className="grid gap-5 md:grid-cols-2">
  {experiences.map((experience) => (
    <ExperienceCard
      key={experience.company}
      experience={experience}
    />
  ))}
  <PlaceholderExperienceCard wide={experiences.length % 2 === 0} />
</div>
        </section>

        <section className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              projects outside work
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-background/80 p-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <a
            href={experience.url}
            target="_blank"
            rel="noreferrer"
            className="group/title inline-flex items-center gap-1 max-w-full hover:underline underline-offset-4"
            title={experience.company}
            aria-label={`Open ${experience.company} website`}
          >
            <h3 className="font-semibold text-foreground text-sm sm:text-base truncate">
              {experience.company}
            </h3>
            {experience.url && (
              <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover/title:opacity-100 transition-opacity" />
            )}
          </a>
          <p className="text-xs text-muted-foreground">{experience.period}</p>
        </div>
      </div>

      <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
        {experience.highlights.map((highlight) => (
          <li key={highlight} className="leading-relaxed">
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}

function PlaceholderExperienceCard({ wide }: { wide: boolean }) {
  return (
    <div
      className={`flex min-h-[220px] flex-col justify-between rounded-2xl border border-dashed border-border/70 bg-[repeating-linear-gradient(135deg,rgba(148,163,184,0.26)_0px,rgba(148,163,184,0.26)_6px,transparent_6px,transparent_12px)] p-6 text-sm text-muted-foreground dark:border-border/60 dark:bg-[repeating-linear-gradient(135deg,rgba(30,41,59,0.45)_0px,rgba(30,41,59,0.45)_6px,transparent_6px,transparent_12px)] ${
        wide ? "md:col-span-2" : ""
      }`}
    >
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/70">
          open slot
        </p>
      </div>
      <p className="mt-6 max-w-[18ch] text-sm leading-relaxed text-muted-foreground">
        always experimenting, always growing. let’s make the next big thing.
      </p>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-background/80 p-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group/title inline-flex items-center gap-1 max-w-full hover:underline underline-offset-4"
            title={project.name}
            aria-label={`Open ${project.name} website`}
          >
            <h3 className="font-semibold text-foreground text-sm sm:text-base truncate">
              {project.name}
            </h3>
            {project.url && (
              <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover/title:opacity-100 transition-opacity" />
            )}
          </a>
          <p className="text-xs text-muted-foreground">{project.period}</p>
        </div>
      </div>

      <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="leading-relaxed">
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}
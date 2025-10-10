"use client";
import Badge from "./components/badge";
import { useSpotify } from "../contexts/currently-playing-context";

export default function Page() {
  const { isPlaying, title, artist, albumImageUrl, songUrl, explicit } =
    useSpotify();

  return (
    <section>
      <div className="flex flex-col-reverse gap-8 md:flex-row items-center justify-between mb-5 tracking-tight">
        <div className="flex flex-col gap-6 mb-4 md:mb-0">
          <h1 className="text-[42px] font-bold">eduard lupu</h1>
          <p className="text-sm dark:text-neutral-300">
            software engineer @{" "}
            <Badge href={"https://kingfisher.com/"}>Kingfisher</Badge>
          </p>
          <p className="text-sm dark:text-neutral-300">
            MSc in software engineering @{" "}
            <Badge href={"https://www.ubbcluj.ro/en/"}>BBU</Badge>
          </p>
        </div>
      </div>
      <div className="relative z-10">
        {isPlaying && (
          <>
            <div className="flex mb-4 gap-6">
              <img
                src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif"
                alt="Spotify playing"
                className="w-6 h-6"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-4">
                <img
                  id="song-cover"
                  src={albumImageUrl}
                  alt="Song cover"
                  className="rounded-lg object-cover w-16 sm:w-32"
                />
                <div className="flex flex-col gap-2 relative overflow-x-hidden">
                  <h3
                    id="song-title"
                    className="text-xs md:text-lg font-bold whitespace-nowrap truncate"
                  >
                    <a
                      href={songUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline underline-offset-4"
                    >
                      <span>{title}</span>
                    </a>
                  </h3>
                  <div className="flex items-center gap-2">
                    {explicit && (
                      <span className="text-xs text-white bg-gray-500 dark:text-black px-1 py-0.5 rounded">
                        E
                      </span>
                    )}
                    <div className="relative overflow-hidden">
                      <h4 className="text-xs opacity-90 whitespace-nowrap truncate">
                        <span>{artist}</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div>
        <section>
          <h1 className="mb-4 text-2xl font-bold">@ Kingfisher</h1>
          <p className="mb-4">
            currently working on the backend of various microservices, primarily
            using Kotlin, to power the Kingfisher Marketplace. 🛠️
          </p>
          <p className="mb-8">
            the Marketplace is a platform within Kingfisher’s ecosystem that
            allows external vendors to list and sell their products directly on
            Kingfisher’s online stores, integrating them into the shopping
            experience across multiple Kingfisher banners. 🛍️
          </p>
        </section>

        <section>
          <h1 className="mb-4 text-2xl font-bold">@ BitStone</h1>
          <p className="mb-4">
            worked on a closed-source music project as a full-stack developer.
            the stack included Node.js and Next.js, and the project involved
            gathering music data from platforms like TikTok, Shazam, Spotify,
            and Instagram for our clients. 🎶
          </p>
        </section>

        <section className="mt-8">
          <h1 className="mb-4 text-2xl font-bold">personal projects</h1>
          <p className="mb-4">
            in my free time, I love creating applications that involve music.
          </p>
          <p className="mb-4">
            right now, I’m working on an open-source app that helps you find the
            top 500 Spotify artists by tracking 150k artists daily. it’s
            available{" "}
            <a
              href="https://eduardlupu.github.io/spotify-artists/"
              rel="noreferrer"
              target="_blank"
              className="underline underline-offset-4"
            >
              here
            </a>
            . 🎧
          </p>
        </section>

        <section className="mt-8">
          <h1 className="mb-4 text-2xl font-bold">questions?</h1>
          <p className="mb-4">
            if you’re into music, tech, and data, feel free to reach out!
          </p>
          <p className="mb-4">
            you can find all my contact links in the footer.
          </p>
          <p className="mb-4">
            prefer to stay anonymous? reach me on{" "}
            <a
              href="https://t.me/luckytoef"
              rel="noopener"
              target="_blank"
              className="underline underline-offset-4"
            >
              t.me/luckytoef
            </a>
            .
          </p>
          <p>
            curious about my professional experience? check out my{" "}
            <a
              href="https://eduardlupu.com/resume.pdf"
              rel="noreferrer"
              target="_blank"
              className="underline underline-offset-4"
            >
              résumé
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  );
}

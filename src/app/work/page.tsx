export default function MusicAndWorkPage() {
  return (
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
          worked on a closed-source music project as a full-stack developer. the
          stack included Node.js and Next.js, and the project involved gathering
          music data from platforms like TikTok, Shazam, Spotify, and Instagram
          for our clients. 🎶
        </p>
      </section>

      <section className="mt-8">
        <h1 className="mb-4 text-2xl font-bold">personal projects</h1>
        <p className="mb-4">
          in my free time, I love creating applications that involve music.
        </p>
        <p className="mb-4">
          right now, I’m working on an open-source app that helps you find the
          top 500 Spotify artists by tracking 150k artists daily. it’s available{" "}
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
        <p className="mb-4">you can find all my contact links in the footer.</p>
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
  );
}

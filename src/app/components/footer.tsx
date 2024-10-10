import Badge from "./badge";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
  RiFacebookLine,
  RiInstagramLine,
  RiTiktokLine,
  RiSpotifyLine,
} from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="mt-auto pt-16 mb-8">
      <ul className="flex flex-wrap justify-center gap-6 sm:gap-12 text-neutral-600 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center transition-all text-neutral-800 hover:text-neutral-500  dark:text-neutral-400 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/EduardLupu"
            aria-label="GitHub"
          >
            <RiGithubLine size={24} />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all text-neutral-800 hover:text-neutral-500  dark:text-neutral-400 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/eduard-lupu/"
            aria-label="LinkedIn"
          >
            <RiLinkedinLine size={24} />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all text-neutral-800 hover:text-neutral-500  dark:text-neutral-400 dark:hover:text-neutral-100"
            href="mailto:lupu.eduard.adrian@gmail.com"
            aria-label="Email"
          >
            <RiMailLine size={24} />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all text-neutral-800 hover:text-neutral-500  dark:text-neutral-400 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/eduard.adrian.lupu"
            aria-label="Facebook"
          >
            <RiFacebookLine size={24} />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all text-neutral-800 hover:text-neutral-500  dark:text-neutral-400 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/edi.lupu/"
            aria-label="Instagram"
          >
            <RiInstagramLine size={24} />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all text-neutral-800 hover:text-neutral-500  dark:text-neutral-400 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.tiktok.com/@edi.lupu"
            aria-label="TikTok"
          >
            <RiTiktokLine size={24} />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all text-neutral-800 hover:text-neutral-500  dark:text-neutral-400 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://open.spotify.com/user/4du8lsn1mzt54xlh66ajmvont"
            aria-label="Spotify"
          >
            <RiSpotifyLine size={24} />
          </a>
        </li>
      </ul>
      <div className="flex justify-between mt-16">
        <p className="text-center text-sm text-black dark:text-neutral-300">
          built with <Badge href="https://nextjs.org">Next.js</Badge>
        </p>
        <p className="text-center text-sm text-black dark:text-neutral-300">
          inspired by <Badge href="https://leerob.io/">leerob</Badge>
        </p>
      </div>
    </footer>
  );
}

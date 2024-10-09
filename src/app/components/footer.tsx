import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRss } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { BsSpotify } from "react-icons/bs";
import Badge from "./badge";
import { TbFileCv } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="mt-16 mb-16">
      <ul className="font-sm mt-8 flex flex-wrap justify-center gap-6 text-neutral-600 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
            aria-label={`RSS Feed`}
          >
            <FaRss size={32} />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/EduardLupu"
            aria-label={`github`}
          >
            <TbBrandGithubFilled size={32} />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/eduard-lupu/"
            aria-label={`linkedin`}
          >
            <FaLinkedinIn size={32} />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:lupu.eduard.adrian@gmail.com"
            aria-label={`email`}
          >
            <MdEmail size={32} />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/eduard.adrian.lupu"
            aria-label={`facebook`}
          >
            <FaFacebookF size={32} />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/edi.lupu/"
            aria-label={`instagram`}
          >
            <FiInstagram size={32} />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.tiktok.com/@edi.lupu"
            aria-label={`tiktok`}
          >
            <FaTiktok size={32} />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://open.spotify.com/user/4du8lsn1mzt54xlh66ajmvont"
            aria-label={`spotify`}
          >
            <BsSpotify size={32} />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://eduardlupu.com/resume.pdf"
            aria-label={`cv`}
          >
            <TbFileCv size={32} />
          </a>
        </li>
      </ul>
      <div className="flex justify-between mt-16">
        <p className="text-center text-neutral-600 dark:text-neutral-300 text-sm">
          built with <Badge href="https://nextjs.org">Next.js</Badge>
        </p>
        <p className="text-center text-neutral-600 dark:text-neutral-300 text-sm">
          <Badge
            href={`https://en.wikipedia.org/wiki/${new Date().getFullYear()}`}
          >
            © {new Date().getFullYear()}
          </Badge>
        </p>
        <p className="text-center text-neutral-600 dark:text-neutral-300 text-sm">
          inspired by <Badge href="https://leerob.io/">leerob</Badge>
        </p>
      </div>
    </footer>
  );
}

import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRss } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { BsSpotify } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex justify-between text-neutral-600 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
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
          >
            <BsSpotify size={32} />
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()}
      </p>
    </footer>
  );
}

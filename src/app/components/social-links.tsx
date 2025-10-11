"use client";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";

import { RiSpotifyLine, RiTiktokLine } from "react-icons/ri";

// import from lucide the tiktok and spotify icons

const socialLinks = [
  {
    href: "https://github.com/EduardLupu",
    label: "GitHub",
    icon: FiGithub,
  },
  {
    href: "https://www.linkedin.com/in/eduard-lupu/",
    label: "LinkedIn",
    icon: FiLinkedin,
  },
  {
    href: "mailto:lupu.eduard.adrian@gmail.com",
    label: "Email",
    icon: FiMail,
  },
  {
    href: "https://www.facebook.com/eduard.adrian.lupu",
    label: "Facebook",
    icon: FiFacebook,
  },
  {
    href: "https://www.instagram.com/edi.lupu/",
    label: "Instagram",
    icon: FiInstagram,
  },
  {
    href: "https://www.tiktok.com/@edi.lupu",
    label: "TikTok",
    icon: RiTiktokLine,
  },
  {
    href: "https://open.spotify.com/user/4du8lsn1mzt54xlh66ajmvont",
    label: "Spotify",
    icon: RiSpotifyLine,
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
      {socialLinks.map(({ href, label, icon: Icon }) => (
        <li key={href}>
          <a
            className="flex items-center transition-colors text-muted-foreground hover:text-foreground"
            rel="noopener noreferrer"
            target="_blank"
            href={href}
            aria-label={label}
          >
            <Icon size={20} />
          </a>
        </li>
      ))}
    </ul>
  );
}

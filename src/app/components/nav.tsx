"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";
import ThemeToggle from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", name: "home" },
  { href: "/blog", name: "blog" },
];

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-6 z-40 mb-10">
      <div className="rounded-2xl p-[1px] bg-gradient-to-b from-foreground/10 to-transparent">
        <div className="flex w-full items-center justify-between gap-4 rounded-[calc(theme(borderRadius.2xl)-1px)] border border-border bg-background/80 px-3 py-2.5 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-5">
          <LayoutGroup id="nav">
            <nav id="nav" className="relative flex items-center gap-2 text-sm">
              {navItems.map(({ href, name }) => {
                const active = isActive(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30",
                      active
                        ? "text-background"
                        : "text-foreground/80 hover:text-foreground",
                    )}
                  >
                    {/* animated pill background */}
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-foreground"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10 lowercase">{name}</span>
                  </Link>
                );
              })}
            </nav>
          </LayoutGroup>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

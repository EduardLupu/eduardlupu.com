"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", name: "home" },
  { href: "/blog", name: "blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => {
    if (!pathname) {
      return false;
    }
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };
  return (
    <header className="sticky top-6 z-40 mb-10">
      <div className="rounded-2xl p-[1px] bg-gradient-to-b from-foreground/10 to-transparent">
        <div className="flex w-full items-center justify-between gap-4 rounded-[calc(theme(borderRadius.2xl)-1px)] border border-border bg-background/80 px-3 py-2.5 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-5">
          <nav id="nav" className="flex items-center gap-1 text-sm font-medium">
            {" "}
            {navItems.map(({ href, name }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "rounded-full px-4 py-2 transition-colors",
                  isActive(href)
                    ? "bg-foreground text-background shadow-sm"
                    : "text-neutral-900 hover:bg-muted/60 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-100",
                )}
              >
                {" "}
                {name}{" "}
              </Link>
            ))}{" "}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import ThemeToggle from "../../components/theme-toggle";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[16px] mb-16 tracking-tight text-sm">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative text-neutral-700 dark:text-neutral-300"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all text-neutral-700 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-200 flex align-middle relative py-1 px-4"
                >
                  {name}
                </Link>
              );
            })}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </aside>
  );
}

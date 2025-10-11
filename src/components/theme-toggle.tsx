"use client";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <div className="flex items-center gap-2">
      <RiSunLine className="text-neutral-500 dark:text-neutral-400" size={18} />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle dark mode"
        disabled={!mounted}
      />
      <RiMoonLine
        className="text-neutral-500 dark:text-neutral-400"
        size={18}
      />
    </div>
  );
}

"use client";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center gap-2">
      <RiSunLine className="text-neutral-500 dark:text-neutral-400" size={18} />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle dark mode"
      />
      <RiMoonLine
        className="text-neutral-500 dark:text-neutral-400"
        size={18}
      />
    </div>
  );
}

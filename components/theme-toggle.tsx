"use client";

import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      checked={theme === "light"}
      onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="data-[state=checked]:bg-neutral-200 data-[state=unchecked]:bg-neutral-700"
    />
  );
}

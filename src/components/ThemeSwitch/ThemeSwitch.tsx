"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useHasMounted } from "../../hooks/useHasMounted";
import { cn } from "@/utils/utils";

type ThemeSwitchProps = {
  className?: string;
};

export const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const mounted = useHasMounted();
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // render a skeleton is not mounted to prevent layout shifts:
  if (!mounted)
    return (
      <div className="w-10 aspect-square bg-slate-100 dark:bg-neutral-700" />
    );

  return (
    <button
      title="Theme Toggle"
      type="button"
      className={cn(
        "outline-none appearance-none",
        "w-10 aspect-square grid place-items-center",
        "text-zinc-900 hover:text-primary-100 focus-visible:text-primary-100 bg-transparent focus-visible:bg-primary-500 hover:bg-primary-500",
        "dark:text-zinc-100 dark:hover:text-primary-900 dark:focus-visible:text-primary-900 dark:bg-transparent dark:focus-visible:bg-primary-400/80 dark:hover:bg-primary-400/80",
        className
      )}
      onClick={toggleTheme}
    >
      {theme === "dark" ? <IconMoon size={20} /> : <IconSun size={20} />}
    </button>
  );
};

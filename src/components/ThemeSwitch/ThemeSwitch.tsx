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
      <div className="rounded-xl w-10 aspect-square bg-zinc-300 dark:bg-zinc-700" />
    );

  return (
    <button
      title="Theme Toggle"
      type="button"
      className={cn(
        "outline-none appearance-none",
        "rounded-xl w-10 aspect-square grid place-items-center",
        "text-zinc-900 hover:text-white focus-visible:text-white bg-transparent focus-visible:bg-zinc-800 hover:bg-zinc-800",
        "dark:text-zinc-100 dark:hover:text-zinc-900 dark:focus-visible:text-zinc-900 dark:bg-transparent dark:focus-visible:bg-white dark:hover:bg-white",
        className
      )}
      onClick={toggleTheme}
    >
      {theme === "dark" ? <IconMoon size={20} /> : <IconSun size={20} />}
    </button>
  );
};

"use client";

import { Popover } from "@headlessui/react";
import { IconMenu, IconX } from "@tabler/icons-react";
import { cn } from "@/utils/utils";

export const NavMenuButton = () => {
  return (
    <Popover.Button
      title="Navigation Menu"
      className={cn(
        "z-10 relative outline-none appearance-none",
        "rounded-xl w-10 aspect-square grid place-items-center sm:hidden ring-current",
        "text-zinc-900 hover:text-white focus-visible:text-white bg-transparent focus-visible:bg-zinc-800 hover:bg-zinc-800",
        "dark:text-zinc-100 dark:hover:text-zinc-900 dark:focus-visible:text-zinc-900 dark:bg-transparent dark:focus-visible:bg-white dark:hover:bg-white"
      )}
    >
      {({ open }) => (open ? <IconX /> : <IconMenu />)}
    </Popover.Button>
  );
};

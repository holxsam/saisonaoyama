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
        "w-10 aspect-square grid place-items-center sm:hidden ring-current",
        "text-zinc-900 hover:text-primary-100 focus-visible:text-primary-100 bg-transparent focus-visible:bg-primary-500 hover:bg-primary-500",
        "dark:text-zinc-100 dark:hover:text-primary-900 dark:focus-visible:text-primary-900 dark:bg-transparent dark:focus-visible:bg-primary-400/80 dark:hover:bg-primary-400/80"
      )}
    >
      {({ open }) => (open ? <IconX /> : <IconMenu />)}
    </Popover.Button>
  );
};

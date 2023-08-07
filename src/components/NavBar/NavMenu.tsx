"use client";

import { Popover } from "@headlessui/react";

import Link from "next/link";
import { Fragment, ReactNode } from "react";
import { NavMenuButton } from "./NavMenuButton";
import { cn } from "@/utils/utils";
import { useTranslation } from "../DictionaryProvider/DictionaryProvider";
import { Dictionary } from "@/app/[lang]/layout";
import LocaleSwitcher from "../LocaleSwitch/LocaleSwitch";

export type NavbarKey = keyof Dictionary["navbar"];

export type NavItem = {
  key: NavbarKey;
  href: string;
  icon: ReactNode;
};

export const NavMenu = ({ links }: { links: NavItem[] }) => {
  const t = useTranslation();

  return (
    <Popover as={Fragment}>
      {({ close, open }) => (
        <>
          <NavMenuButton />
          <Popover.Panel
            static
            as="ul"
            className={cn(
              // mobile/desktop/light/dark:
              "flex min-h-min transition-[transform_opacity] duration-300",
              // mobile:
              "flex-col gap-0 w-full absolute top-0 left-0 pt-16 pb-2 backdrop-blur-md shadow-lg bg-zinc-50/80 dark:bg-black/80",
              // desktop:
              "sm:flex-row sm:items-center sm:gap-4 sm:w-auto sm:relative sm:top-auto sm:left-auto sm:bg-transparent sm:py-0 sm:shadow-none sm:backdrop-blur-none sm:dark:bg-transparent sm:dark:shadow-none sm:dark:backdrop-blur-none",
              // mobile: show list depending on open state:
              open
                ? "visible opacity-100 translate-y-0"
                : "invisible opacity-0 -translate-y-2/3",
              // desktop: ALWAYS show the list:
              "sm:visible sm:opacity-100 sm:translate-y-0"
            )}
          >
            {links.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  onClick={close}
                  className={cn(
                    // mobile/desktop/light/dark:
                    "relative flex items-center capitalize text-sm outline-none appearance-none whitespace-nowrap",
                    // mobile:
                    "pl-4 pr-8 h-12 justify-end font-semibold",
                    // desktop:
                    "sm:pl-0 sm:pr-0 sm:h-10 sm:justify-normal sm:font-medium",
                    // !! SOME OF THE CLASSES BELOW ARE VERY VERBOSE !!
                    // This is to keep things very clear.
                    // For example, the text color for mobile light and desktop light are the same (text-zinc-900)
                    // but in mobile light its "text-zinc-900" and in desktop light is "sm:text-zinc-900"
                    // the "sm:text-zinc-900" is unneccesary but it helps with clarity in the case we DO want to customize the text color for on mobile light themes
                    // mobile light:
                    "text-zinc-500 hover:text-zinc-900 focus-visible:text-zinc-900 bg-transparent hover:bg-zinc-300/50 focus-visible:bg-zinc-300/50 hover:shadow-none focus-visible:shadow-none",
                    // mobile dark:
                    "dark:text-zinc-400 dark:hover:text-zinc-50 dark:focus-visible:text-zinc-50 dark:bg-transparent dark:hover:bg-zinc-800/80 dark:focus-visible:bg-zinc-800/80 dark:hover:shadow-none dark:focus-visible:shadow-none",
                    // desktop light:
                    "sm:text-zinc-900 sm:hover:text-zinc-900 sm:focus-visible:text-zinc-900 sm:bg-transparent sm:hover:bg-transparent sm:focus-visible:bg-transparent sm:hover:[box-shadow:inset_0_-2px_0_0_black] sm:focus-visible:[box-shadow:inset_0_-2px_0_0_black]",
                    // desktop dark:
                    "sm:dark:text-zinc-100 sm:dark:hover:text-zinc-100 sm:dark:focus-visible:text-zinc-100 sm:dark:bg-transparent sm:dark:hover:bg-transparent sm:dark:focus-visible:bg-transparent sm:dark:hover:[box-shadow:inset_0_-2px_0_0_white] sm:dark:focus-visible:[box-shadow:inset_0_-2px_0_0_white]"
                  )}
                >
                  {t ? t["navbar"][link.key] : link.key}
                </Link>
              </li>
            ))}
            <li className="flex justify-end pr-8 h-12 sm:pr-0 sm:h-min xs:hidden sm:hidden md:flex">
              <LocaleSwitcher />
            </li>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};

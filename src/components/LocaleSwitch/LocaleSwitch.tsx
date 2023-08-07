"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale, i18n } from "../../../i18n-config";
import { Listbox } from "@headlessui/react";
import { useTranslation } from "../DictionaryProvider/DictionaryProvider";
import useLocale from "@/hooks/useLocale";
import { IconWorld } from "@tabler/icons-react";
import { Fragment } from "react";
import { cn } from "@/utils/utils";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslation();

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const updateLocale = (locale: Locale) => {
    const href = redirectedPathName(locale);
    router.replace(href, { scroll: false });
  };

  const selectedLang = t?.locale[locale];

  return (
    <Listbox
      value={locale}
      onChange={updateLocale}
      as="div"
      className="flex flex-col justify-center w-min"
    >
      <Listbox.Button
        className={cn(
          "outline-none appearance-none",
          "flex items-center gap-1 rounded-xl pl-1 pr-3 py-[0.125rem] whitespace-nowrap capitalize text-sm font-bold ",
          "text-white bg-zinc-700 hover:bg-zinc-700/50 focus-visible:bg-zinc-700/50",
          "dark:text-zinc-700 dark:bg-white/70 dark:hover:bg-white dark:focus-visible:bg-white"
        )}
      >
        <IconWorld size={20} stroke={2} />
        {selectedLang}
      </Listbox.Button>
      <Listbox.Options as="div" className="relative w-full">
        <ul className="absolute flex flex-col min-w-full rounded-md overflow-hidden mt-2 py-1 gap-px bg-zinc-700 text-white dark:bg-white dark:text-zinc-800">
          {i18n.locales.map((locale) => (
            <Listbox.Option as={Fragment} key={locale} value={locale}>
              {({ active, selected }) => (
                <li
                  className={cn(
                    "cursor-pointer whitespace-nowrap text-sm font-semibold px-4 py-2",
                    active ? "bg-zinc-500 dark:bg-zinc-200/80" : ""
                  )}
                >
                  {t?.locale[locale]}
                </li>
              )}
            </Listbox.Option>
          ))}
        </ul>
      </Listbox.Options>
    </Listbox>
  );
}

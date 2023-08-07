"use client";

import Link from "next/link";
import { NavItem, NavMenu } from "./NavMenu";

import { Logo } from "../Logo/Logo";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { cn } from "@/utils/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links: NavItem[] = [
  { key: "gallery", href: "/#gallery", icon: null },
  { key: "testimonials", href: "/#testimonials", icon: null },
  { key: "about", href: "/#about", icon: null },
  { key: "contact", href: "/#footer", icon: null },
  { key: "services", href: "/services", icon: null },
];

const unScrolled =
  "backdrop-blur-none border-b border-transparent bg-transparent";
const scrolled =
  "backdrop-blur-lg border-b border-zinc-100/80 dark:border-white/[8%] bg-white/80 dark:bg-zinc-900/80  ";

export const NavBar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const boundary = pathname.includes("services") ? 0 : 140;
  const bgColor = isScrolled ? scrolled : unScrolled;

  useEffect(() => {
    const scrollContainer = document.body;
    const updateBgColor = () =>
      setIsScrolled(scrollContainer.scrollTop > boundary);
    updateBgColor(); // call it once to start because it is possible to be scrolled down on a page load cus of SSR
    scrollContainer.addEventListener("scroll", updateBgColor);
    return () => {
      scrollContainer.removeEventListener("scroll", updateBgColor);
    };
  }, [boundary]);

  return (
    <div className="isolate h-16">
      {/* 
      Using the div below as the background so that backdrop-filter works here AND in the mobile nav menu. 
      This bug is caused if you apply backdrop-filter to nested elements. 
      So if a parent has backdrop-filter and somewhere down its tree, 
      a child or distant child also has backdrop-filter, only the parent's backdrop-filter will get applied. 
      */}
      <div
        className={cn(
          "-z-10 absolute inset-0 transition-[background-color,backdrop-filter] duration-250",
          bgColor
        )}
      />

      <div className="flex justify-between items-center pack-content h-full">
        <div className="flex gap-2">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <nav className="flex gap-0 sm:gap-4">
          <ThemeSwitch className="z-10" />
          <NavMenu links={links} />
        </nav>
      </div>
    </div>
  );
};

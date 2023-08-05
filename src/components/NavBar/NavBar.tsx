"use client";

import Link from "next/link";
import { NavItem, NavMenu } from "./NavMenu";

import { Logo } from "../Logo/Logo";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { cn } from "@/utils/utils";
import { useEffect, useState } from "react";

const links: NavItem[] = [
  { label: "Services", href: "/services", icon: null },
  { label: "Gallery", href: "/#gallery", icon: null },
  { label: "Testimonials", href: "/#testimonials", icon: null },
  { label: "Contact", href: "/contact", icon: null },
  { label: "About", href: "/about", icon: null },
];

const unScrolled = "bg-transparent backdrop-blur-none";
const scrolled = "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const bgColor = isScrolled ? scrolled : unScrolled;

  useEffect(() => {
    const scrollContainer = document.body;
    const updateBgColor = () => setIsScrolled(scrollContainer.scrollTop > 140);
    scrollContainer.addEventListener("scroll", updateBgColor);
    return () => {
      scrollContainer.removeEventListener("scroll", updateBgColor);
    };
  }, []);

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
        <Link href="/">
          <Logo />
        </Link>

        <nav className="flex gap-0 sm:gap-4 h-minzz">
          <ThemeSwitch className="z-10" />
          <NavMenu links={links} />
        </nav>
      </div>
    </div>
  );
};

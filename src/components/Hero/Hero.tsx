"use client";
import Link from "next/link";
import { useHasMounted } from "@/hooks/useHasMounted";
import { IconCalendarEvent } from "@tabler/icons-react";
import { BackgroundPlayback } from "./BackgroundPlayback";
import { OwnerMessage } from "./OwnerMessage";

export const HeroSection = () => {
  return (
    <section className="-z-10 relative flex flex-col min-h-screen">
      <MountedPlayback />
      <div className="pack-content flex flex-col items-center gap-12 flex-1 pt-40">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold uppercase text-center text-primary-500 dark:text-primary-500 ">
            Welcome to
          </span>
          <div className="text-center font-extrabold text-[clamp(60px,8vw,120px)] [line-height:1]">
            Saison Aoyama
          </div>
        </div>

        <p className="max-w-md text-center font-bold text-zinc-700 dark:text-zinc-400 text-xl">
          Japanese style services with an emphasis on comfort all while blending
          traditional skill with new techniques.
        </p>
        <div className="flex gap-4">
          <Link
            href="/services"
            className="flex gap-2 px-4 py-2 whitespace-nowrap font-bold text-white bg-zinc-900 dark:text-zinc-900 dark:bg-white "
          >
            Services
          </Link>
          <Link
            href="/services"
            className="flex gap-2 px-4 py-2 whitespace-nowrap font-bold text-white bg-primary-500"
          >
            <span>Appointment</span>
            <IconCalendarEvent />
          </Link>
        </div>
      </div>
      <OwnerMessage />
    </section>
  );
};

const MountedPlayback = () => {
  const mounted = useHasMounted();

  return (
    <div id="hero-section-bg" className="-z-10 absolute inset-0 -top-16">
      {mounted && <BackgroundPlayback />}
    </div>
  );
};

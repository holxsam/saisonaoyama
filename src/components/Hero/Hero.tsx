import Link from "next/link";
import { IconCalendarEvent } from "@tabler/icons-react";
import MountedPlayback from "./BackgroundPlayback";
import { OwnerMessage } from "./OwnerMessage";
import { Dictionary } from "@/app/[lang]/layout";
import { cn } from "@/utils/utils";

export const HeroSection = ({ dictionary: t }: { dictionary: Dictionary }) => {
  const tagline1 = t["tagline-1"];
  const tagline2 = t["tagline-2"];
  const welcome = t["welcome"];
  const appointment = t["appointment"];
  const services = t["navbar"]["services"];

  return (
    <section className="-z-10 relative flex flex-col min-h-[calc(100vh-64px)]">
      <MountedPlayback />
      <div className="pack-content flex flex-col items-center gap-12 flex-1 pt-40">
        <div className="flex flex-col gap-4">
          <span
            className={cn(
              "text-sm font-bold uppercase text-center text-zinc-700 dark:text-zinc-500"
            )}
          >
            {welcome}
          </span>
          <div
            className={cn(
              "flex flex-wrap items-center justify-center text-center text-[clamp(60px,8vw,100px)] [line-height:1.2] uppercase "
            )}
          >
            <span className="font-thin text-black dark:text-zinc-300">
              Saison
            </span>
            <span className="font-extrabold text-zinc-800 dark:text-white">
              Aoyama
            </span>
          </div>
        </div>

        <div
          className={cn(
            "max-w-md text-center text-xl font-bold text-zinc-700 dark:text-zinc-400"
          )}
        >
          {tagline1}
          {!!tagline2 && <div className="">{tagline2}</div>}
        </div>

        <div className="flex gap-4">
          <Link
            href="/services"
            className={cn(
              "flex gap-2 px-4 py-2 rounded-xl whitespace-nowrap capitalize font-bold shadow-center-lg",
              "bg-white dark:text-zinc-900 dark:bg-white "
            )}
          >
            <span className="animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-blue-500 ">
              {services}
            </span>
          </Link>
          <Link
            href="/services"
            className={cn(
              "flex gap-2 pl-4 pr-3 py-2 rounded-xl whitespace-nowrap capitalize font-bold shadow-center-lg",
              "text-white animate-gradient-x bg-gradient-to-tr from-rose-500 to-blue-500"
            )}
          >
            <span>{appointment}</span>
            <IconCalendarEvent />
          </Link>
        </div>
      </div>
      <OwnerMessage dictionary={t} />
    </section>
  );
};

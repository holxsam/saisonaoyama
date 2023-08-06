import Link from "next/link";
import { IconCalendarEvent } from "@tabler/icons-react";
import MountedPlayback from "./BackgroundPlayback";
import { OwnerMessage } from "./OwnerMessage";
import { Dictionary } from "@/app/[lang]/layout";

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
          <span className="text-sm font-bold uppercase text-center text-primary-500 dark:text-primary-500 ">
            {welcome}
          </span>
          <div className="text-center font-extrabold text-[clamp(60px,8vw,100px)] [line-height:1] text-zinc-800 dark:text-white">
            Saison Aoyama
          </div>
        </div>

        <div className="max-w-md text-center text-xl font-bold text-zinc-400 dark:text-zinc-400">
          {tagline1}
          {!!tagline2 && <div className="">{tagline2}</div>}
        </div>

        <div className="flex gap-4">
          <Link
            href="/services"
            className="flex gap-2 px-4 py-2 whitespace-nowrap capitalize font-bold text-white bg-zinc-800 dark:text-zinc-900 dark:bg-white "
          >
            {services}
          </Link>
          <Link
            href="/services"
            className="flex gap-2 px-4 py-2 whitespace-nowrap capitalize font-bold text-white bg-primary-500"
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

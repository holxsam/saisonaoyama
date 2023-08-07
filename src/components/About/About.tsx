import { Dictionary } from "@/app/[lang]/layout";
import { IconBook, IconTelescope } from "@tabler/icons-react";

export default function About({ dictionary: t }: { dictionary: Dictionary }) {
  const story = t["our-story"];
  const storyDesc = t["our-story-desc"];

  const vision = t["our-vision"];
  const visionDesc = t["our-vision-desc"];

  return (
    <div className="flex gap-32 flex-col sm:flex-row">
      <div className="flex gap-8 flex-col flex-1">
        <h3 className="flex items-center gap-4 font-extrabold text-2xl uppercase text-zinc-900 dark:text-zinc-500">
          <IconBook size={40} />
          {story}
        </h3>
        <p className="text-xl font-bold text-zinc-400 dark:text-zinc-50">
          {storyDesc}
        </p>
      </div>
      <div className="flex gap-8 flex-col flex-1">
        <h3 className="flex items-center gap-4 font-extrabold text-2xl uppercase text-zinc-900 dark:text-zinc-500">
          <IconTelescope size={40} />

          {vision}
        </h3>
        <p className="text-xl font-bold text-zinc-400 dark:text-zinc-50">
          {visionDesc}
        </p>
      </div>
    </div>
  );
}

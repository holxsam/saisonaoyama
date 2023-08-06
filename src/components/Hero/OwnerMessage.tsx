import { Dictionary } from "@/app/[lang]/layout";

export const OwnerMessage = ({ dictionary: t }: { dictionary: Dictionary }) => {
  const msg1 = t["owner-message"][0];
  const msg2 = t["owner-message"][1];
  const msg3 = t["owner-message"][2];
  const owner = t["owner-message"][3];
  const ownerName = t["owner-message"][4];

  return (
    <div className="overflow-hidden relative flex justify-center py-14 px-4 mt-24 backdrop-blur-sm bg-gradient-to-r from-zinc-50/50 to-zinc-200/50 dark:from-zinc-800/50 dark:to-zinc-800/50">
      <div className="-z-10 absolute inset-0 [background:repeating-linear-gradient(-45deg,rgba(0,0,0,0.05),rgba(0,0,0,0.05)_25px,transparent_25px,transparent_50px)] dark:[background:repeating-linear-gradient(-45deg,rgba(0,0,0,0.05),rgba(0,0,0,0.05)_25px,transparent_25px,transparent_50px)] opacity-40 dark:opacity-100 animate-bg-pos-x" />
      <figure className="isolate relative flex flex-col gap-4 max-w-md text-sm text-zinc-600 dark:text-zinc-500 font-semibold">
        <blockquote className="relative flex flex-col gap-4">
          <span>{msg1}</span>
          <span>{msg2}</span>
          <span>{msg3}</span>
        </blockquote>
        <figcaption className="self-end mt-4 text-zinc-900 dark:text-white">
          &mdash; {ownerName} <cite>{owner}</cite>
        </figcaption>
      </figure>
    </div>
  );
};

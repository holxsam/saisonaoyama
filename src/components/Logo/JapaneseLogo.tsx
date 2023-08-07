import { cn } from "@/utils/utils";

export const JapaneseLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("text-lg uppercase", className)}>
      <span className="font-normal text-black dark:text-zinc-300">セゾン</span>
      <span className="font-extrabold text-black dark:text-white">
        アオヤマ
      </span>
    </div>
  );
};

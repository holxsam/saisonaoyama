import { cn } from "@/utils/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("text-lg uppercase", className)}>
      <span className="font-light text-black dark:text-zinc-300">Saison</span>
      <span className="font-extrabold text-black dark:text-white">Aoyama</span>
    </div>
  );
};

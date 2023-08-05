import { cn } from "@/utils/utils";
import { PhotoEnlarge } from "./PhotoEnlarge";

export type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
};

export const Photo = ({ src, alt, className }: PhotoProps) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={cn("absolute inset-0 w-full h-full object-cover", className)}
      />
      <PhotoEnlarge src={src} />
    </>
  );
};

import { cn } from "@/utils/utils";
import { PhotoEnlarge } from "./PhotoEnlarge";
import Image from "next/image";

export type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
};

export const Photo = ({ src, alt, className }: PhotoProps) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={700}
        height={700}
        quality={100}
        className={cn("absolute inset-0 w-full h-full object-cover", className)}
      />
      <PhotoEnlarge src={src} />
    </>
  );
};

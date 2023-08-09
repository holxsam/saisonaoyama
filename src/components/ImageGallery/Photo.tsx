import { PhotoEnlarge } from "./PhotoEnlarge";
import Image, { ImageProps } from "next/image";

export type PhotoProps = {
  src: ImageProps["src"];
  alt: string;
};

export const Photo = ({ src, alt }: PhotoProps) => {
  return (
    <PhotoEnlarge>
      <Image
        fill
        src={src}
        alt={alt}
        placeholder="blur"
        sizes="(max-width: 500px) 300px, 700px"
        quality={100}
        className="object-cover"
      />
    </PhotoEnlarge>
  );
};

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// this is extremely annoying to do but static asset linking does NOT work right now in nextjs:
// meaning <Image src="/assets/yelp/1.jpg" /> does NOT work
// so we have to import the images like this....
// honestly these should be fetched from a cms anyway
import IMAGE_1 from "@/../public/assets/photos/1.jpg";
import IMAGE_2 from "@/../public/assets/photos/2.jpg";
import IMAGE_3 from "@/../public/assets/photos/3.jpg";
import IMAGE_4 from "@/../public/assets/photos/4.jpg";
import IMAGE_5 from "@/../public/assets/photos/5.jpg";
import IMAGE_6 from "@/../public/assets/photos/6.jpg";
import IMAGE_7 from "@/../public/assets/photos/7.jpg";
import IMAGE_8 from "@/../public/assets/photos/8.jpg";
import IMAGE_9 from "@/../public/assets/photos/9.jpg";
import IMAGE_10 from "@/../public/assets/photos/10.jpg";
import IMAGE_11 from "@/../public/assets/photos/11.jpg";
import IMAGE_12 from "@/../public/assets/photos/12.jpg";
import IMAGE_13 from "@/../public/assets/photos/13.jpg";
import IMAGE_14 from "@/../public/assets/photos/14.jpg";
import IMAGE_15 from "@/../public/assets/photos/15.jpg";
import IMAGE_16 from "@/../public/assets/photos/16.jpg";
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const IMAGES = [
  { src: IMAGE_1, alt: "clean bob cut" },
  { src: IMAGE_2, alt: "long curly hair" },
  { src: IMAGE_3, alt: "straight blonde highlights" },
  { src: IMAGE_4, alt: "wedding hair style bun" },
  { src: IMAGE_5, alt: "traditional kimono hairstyle" },
  { src: IMAGE_6, alt: "newly married couple" },
  { src: IMAGE_7, alt: "clean short cut" },
  { src: IMAGE_8, alt: "hair flow" },
  { src: IMAGE_9, alt: "purple hair dye" },
  { src: IMAGE_10, alt: "yellow hair dye" },
  { src: IMAGE_11, alt: "red-pink hair dye" },
  { src: IMAGE_12, alt: "gold-platinum hair dye" },
  { src: IMAGE_13, alt: "pink-violet hair dye" },
  { src: IMAGE_14, alt: "long curly hair" },
  { src: IMAGE_15, alt: "male perm two block" },
  { src: IMAGE_16, alt: "frizzy japanese style hair" },
];

import { Photo } from "./Photo";

export const ImageGallery = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-row gap-2 w-full aspect-[2]">
        <div className="flex w-2/3 h-full">
          <div className="relative w-full bg-zinc-500">
            <Photo src={IMAGES[0].src} alt={IMAGES[0].alt} />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-1/3 h-full">
          <div className="relative w-full h-1/2 bg-zinc-500">
            <Photo src={IMAGES[1].src} alt={IMAGES[1].alt} />
          </div>
          <div className="relative w-full h-1/2 bg-zinc-500">
            <Photo src={IMAGES[2].src} alt={IMAGES[2].alt} />
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-2 w-full aspect-[2]">
        <div className="flex flex-col gap-2 w-1/3 h-full ">
          <div className="relative w-full h-1/2 bg-zinc-500">
            <Photo src={IMAGES[3].src} alt={IMAGES[3].alt} />
          </div>
          <div className="relative w-full h-1/2 bg-zinc-500">
            <Photo src={IMAGES[4].src} alt={IMAGES[4].alt} />
          </div>
        </div>
        <div className="flex w-2/3 h-full">
          <div className="relative w-full bg-zinc-500">
            <Photo src={IMAGES[5].src} alt={IMAGES[5].alt} />
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-2 w-full aspect-[2.75]">
        <div className="relative w-1/2 h-full bg-zinc-500">
          <Photo src={IMAGES[6].src} alt={IMAGES[6].alt} />
        </div>
        <div className="relative w-1/2 h-full bg-zinc-500">
          <Photo src={IMAGES[7].src} alt={IMAGES[7].alt} />
        </div>
      </div>

      <div className="flex flex-row gap-2 w-full aspect-[4]">
        <div className="relative w-1/3 h-full bg-zinc-500">
          <Photo src={IMAGES[8].src} alt={IMAGES[8].alt} />
        </div>
        <div className="relative w-1/3 h-full bg-zinc-500">
          <Photo src={IMAGES[9].src} alt={IMAGES[9].alt} />
        </div>
        <div className="relative w-1/3 h-full bg-zinc-500">
          <Photo src={IMAGES[10].src} alt={IMAGES[10].alt} />
        </div>
      </div>

      <div className="flex flex-row gap-2 w-full aspect-[2.75]">
        <div className="relative w-1/2 h-full bg-zinc-500">
          <Photo src={IMAGES[11].src} alt={IMAGES[11].alt} />
        </div>
        <div className="relative w-1/2 h-full bg-zinc-500">
          <Photo src={IMAGES[12].src} alt={IMAGES[12].alt} />
        </div>
      </div>

      <div className="flex flex-row gap-2 w-full aspect-[2]">
        <div className="flex w-2/3 h-full">
          <div className="relative w-full bg-zinc-500">
            <Photo src={IMAGES[13].src} alt={IMAGES[13].alt} />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-1/3 h-full">
          <div className="relative w-full h-1/2 bg-zinc-500">
            <Photo src={IMAGES[14].src} alt={IMAGES[14].alt} />
          </div>
          <div className="relative w-full h-1/2 bg-zinc-500">
            <Photo src={IMAGES[15].src} alt={IMAGES[15].alt} />
          </div>
        </div>
      </div>
    </div>
  );
};

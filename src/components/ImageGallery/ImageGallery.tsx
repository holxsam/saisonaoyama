import IMAGE_1 from "../../../public/assets/gallery/6.jpg";
import IMAGE_2 from "../../../public/assets/gallery/11.jpg";
import IMAGE_3 from "../../../public/assets/gallery/12.jpg";
import IMAGE_4 from "../../../public/assets/gallery/13.jpg";
import IMAGE_5 from "../../../public/assets/gallery/19.jpg";
import IMAGE_6 from "../../../public/assets/gallery/25.png";
import IMAGE_7 from "../../../public/assets/gallery/34.png";
import IMAGE_8 from "../../../public/assets/gallery/41.png";
import IMAGE_9 from "../../../public/assets/gallery/43.png";
import IMAGE_10 from "../../../public/assets/gallery/48.png";
import IMAGE_11 from "../../../public/assets/gallery/44.png";
import IMAGE_12 from "../../../public/assets/gallery/33.png";
import IMAGE_13 from "../../../public/assets/gallery/46.png";

import IMAGE_14 from "../../../public/assets/gallery/47.png";
import IMAGE_15 from "../../../public/assets/gallery/50.png";
import IMAGE_16 from "../../../public/assets/gallery/53.png";
import IMAGE_17 from "../../../public/assets/gallery/52.png";

import IMAGE_18 from "../../../public/assets/gallery/10.jpg";
import IMAGE_19 from "../../../public/assets/gallery/43.png";
import IMAGE_20 from "../../../public/assets/gallery/48.png";
import { cn } from "@/utils/utils";
import { Photo } from "./Photo";
import { Dictionary } from "@/app/[lang]/layout";

export const ImageGallery = ({ dictionary: t }: { dictionary: Dictionary }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-row gap-2 w-full aspect-[2]">
        <div className="flex w-2/3 h-full">
          <div className="relative w-full bg-zinc-500">
            <Photo src={IMAGE_10.src} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-1/3 h-full">
          <div className="relative w-full h-1/2 bg-zinc-500">
            <Photo src={IMAGE_14.src} alt="" />
          </div>
          <div className="relative w-full h-1/2 bg-zinc-500">
            <Photo src={IMAGE_9.src} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-2 w-full aspect-[2]">
        <div className="flex flex-col gap-2 w-1/3 h-full ">
          <div className="relative w-full h-1/2 bg-zinc-500">
            <Photo src={IMAGE_7.src} alt="" />
          </div>
          <div className="relative w-full h-1/2 bg-zinc-500">
            <Photo src={IMAGE_12.src} alt="" />
          </div>
        </div>
        <div className="flex w-2/3 h-full">
          <div className="relative w-full bg-zinc-500">
            <Photo src={IMAGE_11.src} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-2 w-full aspect-[2.75]">
        <div className="relative w-1/2 h-full bg-zinc-500">
          <Photo src={IMAGE_1.src} alt="" />
        </div>
        <div className="relative w-1/2 h-full bg-zinc-500">
          <Photo src={IMAGE_17.src} alt="" />
        </div>
      </div>

      <div className="flex flex-row gap-2 w-full aspect-[4]">
        <div className="relative w-1/3 h-full bg-zinc-500">
          <Photo src={IMAGE_8.src} alt="" />
        </div>
        <div className="relative w-1/3 h-full bg-zinc-500">
          <Photo src={IMAGE_4.src} alt="" />
        </div>
        <div className="relative w-1/3 h-full bg-zinc-500">
          <Photo src={IMAGE_16.src} alt="" />
        </div>
      </div>

      <div className="flex flex-row gap-2 w-full aspect-[2.75]">
        <div className="relative w-1/2 h-full bg-zinc-500">
          <Photo src={IMAGE_15.src} alt="" />
        </div>
        <div className="relative w-1/2 h-full bg-zinc-500">
          <Photo src={IMAGE_13.src} alt="" />
        </div>
      </div>

      <div className="flex flex-row gap-2 w-full aspect-[2]">
        <div className="flex w-2/3 h-full">
          <div className="relative w-full bg-zinc-500">
            <Photo src={IMAGE_6.src} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-1/3 h-full">
          <div className="relative w-full h-1/2 bg-zinc-500">
            <Photo src={IMAGE_3.src} alt="" />
          </div>
          <div className="relative w-full h-1/2 bg-zinc-500">
            <Photo src={IMAGE_18.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

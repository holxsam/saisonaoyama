import IMAGE_1 from "../../../public/assets/photos/1.jpg";
import IMAGE_2 from "../../../public/assets/photos/2.jpg";
import IMAGE_3 from "../../../public/assets/photos/3.jpg";
import IMAGE_4 from "../../../public/assets/photos/4.jpg";
import IMAGE_5 from "../../../public/assets/photos/5.jpg";
import IMAGE_6 from "../../../public/assets/photos/6.jpg";
import IMAGE_7 from "../../../public/assets/photos/7.jpg";
import IMAGE_8 from "../../../public/assets/photos/8.jpg";
import IMAGE_9 from "../../../public/assets/photos/9.jpg";
import IMAGE_10 from "../../../public/assets/photos/10.jpg";
import IMAGE_11 from "../../../public/assets/photos/11.jpg";
import IMAGE_12 from "../../../public/assets/photos/12.jpg";
import IMAGE_13 from "../../../public/assets/photos/13.jpg";
import IMAGE_14 from "../../../public/assets/photos/14.jpg";
import IMAGE_15 from "../../../public/assets/photos/15.jpg";
import IMAGE_16 from "../../../public/assets/photos/16.jpg";

import { Photo } from "./Photo";
import { Dictionary } from "@/app/[lang]/layout";

export const ImageGallery = ({ dictionary: t }: { dictionary: Dictionary }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-row gap-2 w-full aspect-[2]">
        <div className="flex w-2/3 h-full">
          <div className="relative w-full bg-zinc-500">
            <Photo src={IMAGE_1.src} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-1/3 h-full">
          <div className="relative w-full h-1/2 bg-zinc-500">
            <Photo src={IMAGE_2.src} alt="" />
          </div>
          <div className="relative w-full h-1/2 bg-zinc-500">
            <Photo src={IMAGE_3.src} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-2 w-full aspect-[2]">
        <div className="flex flex-col gap-2 w-1/3 h-full ">
          <div className="relative w-full h-1/2 bg-zinc-500">
            <Photo src={IMAGE_4.src} alt="" />
          </div>
          <div className="relative w-full h-1/2 bg-zinc-500">
            <Photo src={IMAGE_5.src} alt="" />
          </div>
        </div>
        <div className="flex w-2/3 h-full">
          <div className="relative w-full bg-zinc-500">
            <Photo src={IMAGE_6.src} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-2 w-full aspect-[2.75]">
        <div className="relative w-1/2 h-full bg-zinc-500">
          <Photo src={IMAGE_7.src} alt="" />
        </div>
        <div className="relative w-1/2 h-full bg-zinc-500">
          <Photo src={IMAGE_8.src} alt="" />
        </div>
      </div>

      <div className="flex flex-row gap-2 w-full aspect-[4]">
        <div className="relative w-1/3 h-full bg-zinc-500">
          <Photo src={IMAGE_9.src} alt="" />
        </div>
        <div className="relative w-1/3 h-full bg-zinc-500">
          <Photo src={IMAGE_10.src} alt="" />
        </div>
        <div className="relative w-1/3 h-full bg-zinc-500">
          <Photo src={IMAGE_11.src} alt="" />
        </div>
      </div>

      <div className="flex flex-row gap-2 w-full aspect-[2.75]">
        <div className="relative w-1/2 h-full bg-zinc-500">
          <Photo src={IMAGE_12.src} alt="" />
        </div>
        <div className="relative w-1/2 h-full bg-zinc-500">
          <Photo src={IMAGE_13.src} alt="" />
        </div>
      </div>

      <div className="flex flex-row gap-2 w-full aspect-[2]">
        <div className="flex w-2/3 h-full">
          <div className="relative w-full bg-zinc-500">
            <Photo src={IMAGE_14.src} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-1/3 h-full">
          <div className="relative w-full h-1/2 bg-zinc-500">
            <Photo src={IMAGE_15.src} alt="" />
          </div>
          <div className="relative w-full h-1/2 bg-zinc-500">
            <Photo src={IMAGE_16.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

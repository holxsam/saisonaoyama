import Image, { ImageProps } from "next/image";
import { Rating } from "./Rating";

export type TestimonialProps = {
  name: string;
  location: string;
  date: string;
  rating: number;
  review: string;
  imgSrc: ImageProps["src"];
};

export const Testimonial = ({
  name,
  location,
  date,
  rating,
  review,
  imgSrc,
}: TestimonialProps) => (
  <div className="relative flex flex-col justify-end items-center h-[400px] min-w-[320px]">
    <div className="absolute top-0 rounded-full w-20 aspect-square shadow-center-lg">
      <div className="relative overflow-hidden w-full h-full rounded-[inherit]">
        <Image
          fill
          src={imgSrc}
          alt={name}
          placeholder="blur"
          sizes="80px"
          quality={100}
          className="object-cover bg-white"
        />
      </div>
    </div>

    <div className="rounded-lg flex flex-col items-center gap-6 w-full h-[90%] p-10 pt-20 bg-white shadow-center">
      <h3 className="text-center text-lg font-bold text-zinc-900">{name}</h3>
      <h3 className="text-center text-xs text-zinc-400">
        {date} - {location}
      </h3>
      <div className="overflow-y-auto no-scrollbar h-full pb-2">
        <p className="text-sm text-zinc-900">{review}</p>
      </div>
      <Rating rating={rating} />
    </div>
  </div>
);

"use client";

import { useHasMounted } from "@/hooks/useHasMounted";
import { cn } from "@/utils/utils";
import Avatar from "../../../public/assets/aoyama-1.jpg";
import { IconStarFilled } from "@tabler/icons-react";
import testimonials from "../../utils/testimonials.json";

export const TestimonialList = () => {
  return (
    <div className="flex gap-8 w-full p-4 overflow-x-auto sm:custom-scrollbar-tiny no-scrollbar">
      {testimonials.map((t) => (
        <Testimonial key={t.name + t.date} {...t} />
      ))}
    </div>
  );
};

export type TestimonialProps = {
  name: string;
  location: string;
  date: string;
  rating: number;
  review: string;
  imgSrc: string;
};

export const Testimonial = ({
  name,
  location,
  date,
  rating,
  review,
  imgSrc,
}: TestimonialProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-end items-center h-[400px] min-w-[320px]"
      )}
    >
      <div className="absolute top-0 rounded-full w-20 aspect-square shadow-avatar ">
        <div className="overflow-hidden w-full h-full rounded-[inherit]">
          <img src={Avatar.src} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div
        className={cn(
          "rounded-2xl flex flex-col items-center gap-6 w-full h-[90%] bg-red-500 p-10 pt-20",
          "bg-white shadow-center",
          "dark:bg-zinc-800/40"
        )}
      >
        <h3 className="text-center text-lg font-bold">{name}</h3>
        <h3 className="text-center text-sm italic text-zinc-400 dark:text-zinc-600 dark:font-medium">
          {date} - {location}
        </h3>
        <div className="overflow-y-auto no-scrollbar h-full pb-2">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
            {review}
          </p>
        </div>
        <Rating rating={rating} />
      </div>
    </div>
  );
};

export const Rating = ({
  rating,
  maxRating = 5,
}: {
  rating: number;
  maxRating?: number;
}) => {
  const stars = [...Array(rating).keys()];
  return (
    <div className="flex gap-1 w-min text-rose-500 dark:text-rose-600">
      {stars.map((i) => (
        <IconStarFilled key={i} size={14} />
      ))}
    </div>
  );
};

// const testimonials = [
//   {
//     name: "Risako M.",
//     location: "Torrance, CA",
//     date: "10/30/2020",
//     rating: 5,
//     review:
//       "I have been coming here to get my hair done by Mari for over 5 years. She is so warm and always willing to make her customers feel welcomed. If you aren't satisfied, she would redo it!!! So generous. Alway so thankful for her service.",
//     imgSrc,
//   },
// ];

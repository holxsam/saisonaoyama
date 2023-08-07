"use client";

import { cn } from "@/utils/utils";
import Avatar from "../../../public/assets/aoyama-1.jpg";
import { IconStarFilled } from "@tabler/icons-react";
import testimonials from "../../utils/testimonials.json";
import { Dictionary } from "@/app/[lang]/layout";

export const TestimonialList = ({
  dictionary: t,
}: {
  dictionary: Dictionary;
}) => {
  return (
    <div className="relative flex gap-8 w-full p-4 pb-12 overflow-x-auto sm:scrollbar-tiny-white no-scrollbar">
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
      <div className="absolute top-0 rounded-full w-20 aspect-square">
        <div className="overflow-hidden w-full h-full rounded-[inherit]">
          <img src={Avatar.src} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div
        className={cn(
          "rounded-lg flex flex-col items-center gap-6 w-full h-[90%] bg-red-500 p-10 pt-20",
          "bg-white shadow-center"
        )}
      >
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
    <div className="flex gap-1 w-min text-red-500">
      {stars.map((i) => (
        <IconStarFilled key={i} size={16} />
      ))}
    </div>
  );
};

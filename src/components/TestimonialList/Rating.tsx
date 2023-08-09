import { IconStar, IconStarFilled } from "@tabler/icons-react";

export type RatingProps = {
  rating: number;
  maxRating?: number;
};

export const Rating = ({ rating, maxRating = 5 }: RatingProps) => {
  const stars = [...Array(rating).keys()];
  const unfilled = [...Array(maxRating - rating).keys()];
  return (
    <div className="flex gap-1 w-min text-red-500">
      {stars.map((i) => (
        <IconStarFilled key={i} size={16} />
      ))}
      {unfilled.map((i) => (
        <IconStar key={i} size={16} />
      ))}
    </div>
  );
};

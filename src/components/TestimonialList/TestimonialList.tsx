import testimonials from "../../utils/testimonials.json";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// this is extremely annoying to do but static asset linking does NOT work right now in nextjs:
// meaning <Image src="/assets/yelp/a.jpg" /> does NOT work
// so we have to import the images like this....
import a from "@/../public/assets/yelp/a.jpg";
import b from "@/../public/assets/yelp/b.jpg";
import c from "@/../public/assets/yelp/c.jpg";
import d from "@/../public/assets/yelp/d.jpg";
import e from "@/../public/assets/yelp/e.jpg";
import f from "@/../public/assets/yelp/f.jpg";
import g from "@/../public/assets/yelp/g.jpg";
import h from "@/../public/assets/yelp/h.jpg";
import i from "@/../public/assets/yelp/i.jpg";
import j from "@/../public/assets/yelp/j.jpg";
import { Testimonial } from "./Testimonial";
const images = [a, b, c, d, e, f, g, h, i, j];
const reviews = testimonials.map((p, i) => ({ ...p, imgSrc: images[i] }));
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export const TestimonialList = () => {
  return (
    <div className="relative flex gap-8 w-full p-4 pb-12 overflow-x-auto sm:scrollbar-tiny-white no-scrollbar">
      {reviews.map((review) => (
        <Testimonial key={review.name + review.date} {...review} />
      ))}
    </div>
  );
};

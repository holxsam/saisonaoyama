import { HeroSection } from "@/components/Hero/Hero";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";
import { TestimonialList } from "@/components/TestimonialList/TestimonialList";
import { getDictionary } from "../../../get-dictionary";
import { LParam } from "./layout";

export default async function Home({ params }: { params: LParam }) {
  const t = await getDictionary(params.lang);

  const gallery = t["navbar"]["gallery"];
  const testimonials = t["navbar"]["testimonials"];
  const galleryDesc = t["gallery-description"];
  const testimonialDesc = t["testimonial-description"];

  return (
    <div className="isolate flex flex-col gap-28 pb-16">
      <HeroSection dictionary={t} />

      <div className="pack-content flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4">
          <h2
            id="gallery"
            className="scroll-mt-20 text-5xl font-extrabold capitalize w-min whitespace-nowrap text-zinc-800 dark:text-zinc-50"
          >
            {gallery}
          </h2>
          <p className="text-center font-medium text-zinc-500 max-w-md">
            {galleryDesc}
          </p>
        </div>
        <ImageGallery dictionary={t} />
      </div>

      <div className="flex flex-col gap-12">
        <div className="pack-content flex flex-col items-center gap-4">
          <h2
            id="testimonials"
            className="scroll-mt-20 text-5xl font-extrabold capitalize w-min whitespace-nowrap text-zinc-800 dark:text-zinc-50"
          >
            {testimonials}
          </h2>
          <p className="text-center font-medium text-zinc-500 max-w-md">
            {testimonialDesc}
          </p>
        </div>
        <TestimonialList dictionary={t} />
      </div>
    </div>
  );
}

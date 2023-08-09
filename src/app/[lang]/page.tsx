import { HeroSection } from "@/components/Hero/HeroSection";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";
import { TestimonialList } from "@/components/TestimonialList/TestimonialList";
import { getDictionary } from "../../../get-dictionary";
import { LParam } from "./layout";
import About from "@/components/About/About";

export default async function Home({ params }: { params: LParam }) {
  const t = await getDictionary(params.lang);

  const gallery = t["navbar"]["gallery"];
  const galleryDesc = t["gallery-description"];

  const testimonials = t["navbar"]["testimonials"];
  const testimonialDesc = t["testimonial-description"];

  const about = t["about-us-title"];
  const aboutDesc = t["about-header-desc"];

  return (
    <div className="isolate flex flex-col gap-28 pb-32">
      <HeroSection dictionary={t} />

      <div className="pack-content flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4">
          <h2
            id="gallery"
            className="scroll-mt-24 text-5xl font-extrabold capitalize w-min whitespace-nowrap text-zinc-800 dark:text-zinc-50"
          >
            {gallery}
          </h2>
          <p className="text-center font-semibold text-zinc-400 dark:text-zinc-600 max-w-md">
            {galleryDesc}
          </p>
        </div>
        <ImageGallery />
      </div>

      <div className="relative isolate flex flex-col gap-12 bg-gradient-to-br from-red-500 to-blue-500 pt-20">
        <div className="-z-10 absolute inset-0 [background:repeating-linear-gradient(-45deg,rgba(0,0,0,0.05),rgba(0,0,0,0.05)_25px,transparent_25px,transparent_50px)] opacity-80 animate-bg-pos-x" />
        <div className="pack-content flex flex-col items-center gap-4">
          <h2
            id="testimonials"
            className="scroll-mt-24 text-5xl font-extrabold capitalize w-min whitespace-nowrap text-white"
          >
            {testimonials}
          </h2>
          <p className="text-center font-semibold  max-w-md text-zinc-200">
            {testimonialDesc}
          </p>
        </div>
        <TestimonialList />
      </div>

      <div className="pack-content flex flex-col gap-28">
        <div className="flex flex-col items-center gap-4">
          <h2
            id="about"
            className="scroll-mt-24 text-5xl font-extrabold capitalize w-min whitespace-nowrap text-zinc-800 dark:text-zinc-50"
          >
            {about}
          </h2>
          <p className="text-center font-semibold text-zinc-400 dark:text-zinc-600 max-w-md">
            {aboutDesc}
          </p>
        </div>
        <About dictionary={t} />
      </div>
    </div>
  );
}

import Button from "@/components/Button";
import { HeroSection } from "@/components/Hero/Hero";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";
import { TestimonialList } from "@/components/TestimonialList/TestimonialList";
import { cn } from "@/utils/utils";

export default function Home() {
  return (
    <div className="isolate flex flex-col gap-28 pb-16">
      <HeroSection />
      <div className="pack-content flex flex-col gap-5 p-4">
        <div className="mb-8">
          <h2
            id="gallery"
            className="scroll-mt-16 mb-4 text-center text-5xl font-extrabold"
          >
            Gallery
          </h2>
          <p className="text-center font-medium text-zinc-500">
            We offer haircuts for all ages, genders, and special events!
          </p>
        </div>
        <ImageGallery />
      </div>

      <div className="">
        <div className="mb-8">
          <h2
            id="testimonials"
            className="scroll-mt-16 mb-4 text-center text-5xl font-extrabold"
          >
            Testimonials
          </h2>
          <p className="text-center font-medium text-zinc-500 ">
            See what our clients say about us!
          </p>
        </div>
        <TestimonialList />
      </div>
    </div>
  );
}

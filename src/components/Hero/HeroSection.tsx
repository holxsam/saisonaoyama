import { MountedBGVideo } from "./BackgroundVideo";
import { OwnerMessage } from "./OwnerMessage";
import { Dictionary } from "@/app/[lang]/layout";
import { HeroContent } from "./HeroContent";

export const HeroSection = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <section className="-z-10 relative flex flex-col min-h-[calc(100vh-64px)]">
      <MountedBGVideo />
      <HeroContent dictionary={dictionary} />
      <OwnerMessage dictionary={dictionary} />
    </section>
  );
};

"use client";
import clsx from "clsx";
import { useHasMounted } from "@/hooks/useHasMounted";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  AnimationProps,
  motion,
  useAnimationControls,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { IconCalendarEvent } from "@tabler/icons-react";

const DURATION = 5000;

type SectionType = {
  id: string;
  label: string;
};

const sections: SectionType[] = [
  { id: "scientist", label: "Scientist" },
  { id: "teacher", label: "Teacher" },
  { id: "podcaster", label: "Podcaster" },
  { id: "human", label: "Human" },
];

const animProps: AnimationProps = {
  initial: { x: "100%", opacity: 0, filter: "blur(10px)" },
  animate: { x: 0, opacity: 1, filter: "blur(0px)" },
  exit: { x: "-25%", opacity: 0, filter: "blur(10px)" },
};

export const HeroSection = () => {
  const [section, setSection] = useState(0);
  const [pauseSlider, setPauseSlider] = useState(false);
  const mounted = useHasMounted();

  // derived state:
  const nextIndex = (section + 1) % sections.length;
  const nextSlide = sections[nextIndex]?.label || "";
  const sectionSelected = section >= 0 && section <= 3;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!pauseSlider) {
      timeout = setTimeout(() => {
        setSection((v) => (v + 1) % sections.length);
      }, DURATION);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [section, pauseSlider]);

  return (
    <section className="-z-10 relative flex flex-col min-h-[calc(100vh-4rem)]zz mb-96zz sm:mb-64zz md:mb-40zz lg:mb-0zz">
      <MountedPlayback />
      <div className="pack-content flex flex-col items-center gap-12 flex-1 pt-40">
        {/* 
          Using grid here instead of flex to solve two issues:
            1. On mobile, the two main containers are stacked on top of each other. 
               For some reason this causes h-full to not work on dot, there on mobile the dot disappears.
               This only happens if we use flex-col. So we switch to grid and manage the rows/cols with grid.
            2. When the dot pushes "podcaster" to the right, the flex container would grow to accomodate for the new width.
               This causes a small but very noticeable jank when animating between panels. Using grid also solves this issue.
        */}
        {/* <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32"> */}
        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold uppercase text-center text-zinc-700 dark:text-zinc-500 ">
            Welcome to{" "}
          </span>
          <div className="text-center font-extrabold text-[clamp(60px,8vw,120px)] [line-height:1]">
            Saison Aoyama
          </div>
        </div>

        <p className="max-w-md text-center font-bold text-zinc-700 dark:text-zinc-400 text-xl">
          Japanese style services with an emphasis on comfort all while blending
          traditional skill with new techniques.
        </p>
        <div className="flex gap-4">
          <Link
            href="/services"
            className="flex gap-2 px-4 py-2 whitespace-nowrap font-bold text-white bg-zinc-900 dark:text-zinc-900 dark:bg-white "
          >
            Services
          </Link>
          <Link
            href="/services"
            className="flex gap-2 px-4 py-2 whitespace-nowrap font-bold text-white bg-primary-500"
          >
            <span>Appointment</span>
            <IconCalendarEvent />
          </Link>
        </div>
      </div>
      <div className="flex justify-center py-10 px-4 mt-12 bg-zinc-100/80 dark:bg-zinc-800/50 ">
        <figure className="flex flex-col gap-4 max-w-md backdrop-blur-sm text-sm text-zinc-900 dark:text-zinc-300 font-medium">
          <blockquote className="flex flex-col gap-4">
            <span>
              Thank you for your continued patronage of Saison Aoyama. Aoyama
              celebrated its 20th anniversary on January 4, 2023. We would like
              to take this opportunity to express our deepest gratitude for the
              support of everyone who has visited our salon.
            </span>
            <span>
              All of our stylists will serve you with the utmost care and
              hospitality, and we look forward to your continued patronage in
              the future.
            </span>
          </blockquote>
          <figcaption className="self-end dark:text-white mt-4">
            &mdash; Mari Takahashi, <cite>Owner</cite>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

const MountedPlayback = () => {
  const mounted = useHasMounted();

  return (
    <div id="hero-section-bg" className="-z-10 absolute inset-0 -top-16">
      {mounted && <BackgroundPlayback />}
    </div>
  );
};

const BackgroundPlayback = () => {
  const scrollRef = useRef<HTMLElement>(null!);
  const { scrollY } = useScroll({
    container: scrollRef,
    layoutEffect: false,
  });
  const y = useTransform(scrollY, [0, 600], ["0%", "50%"]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  useLayoutEffect(() => {
    scrollRef.current = document.body;
  }, []);

  return (
    <>
      <motion.div
        className="absolute inset-x-0 top-0 max-w-[1280px] overflow-hidden lg:bottom-auto lg:right-0 lg:left-auto lg:w-[80%]"
        style={{ y, opacity }}
      >
        <div className="scale-[calc(16/9)] md:scale-100">
          <div className="flex aspect-square items-center md:aspect-video transition-[opacity] opacity-80 dark:opacity-40">
            <video
              tabIndex={-1}
              autoPlay={true}
              controls={false}
              loop={true}
              muted={true}
              className="w-full h-full pointer-events-none"
            >
              <source
                src="https://wnehbgvssdmlwbdtptjk.supabase.co/storage/v1/object/sign/videos/Aoyama.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ2aWRlb3MvQW95YW1hLm1wNCIsImlhdCI6MTY5MTE5NzAwMSwiZXhwIjoyMDA2NTU3MDAxfQ.ElqSoh_xA3XcbrST-avxfDrNdwmsoqanJ_bKWDpyRNU&t=2023-08-05T00%3A56%3A40.799Z"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="absolute -inset-[3px] bg-gradient-to-b from-transparent via-white/50 to-white dark:from-transparent dark:via-zinc-900/50 dark:to-zinc-900" />
        <div className="absolute -inset-[3px] hidden bg-gradient-to-l from-transparent via-white/50 to-white dark:from-transparent dark:via-zinc-900/50 dark:to-zinc-900 lg:block" />
      </motion.div>
    </>
  );
};
